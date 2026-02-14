---
name: ios-build
description: Convert a web app to a native iOS app using Capacitor and build/run on iOS Simulator entirely from the CLI — no Xcode GUI needed.
user-invocable: true
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
argument-hint: [project-path]
---

# iOS Build Skill — Web App → Native iOS (No Xcode GUI)

Convert a web app (Next.js, React, Vue, static HTML, etc.) into a native iOS app using **Capacitor** and build/run it entirely from the command line.

## Prerequisites Check

Before starting, verify these are available:
```bash
xcodebuild -version        # Xcode CLI tools
xcrun simctl list devices available  # Available simulators
node -v && npm -v           # Node.js
```

## Step-by-Step Process

### 1. Identify the Web App

- Determine the framework (Next.js, React, Vue, plain HTML, etc.)
- Find the **static output directory** (e.g., `out/`, `dist/`, `build/`)
- If the app uses `next export` or `output: "export"`, the output is `out/`
- If using Vite/React, the output is typically `dist/`

### 2. Install Capacitor

```bash
cd <project-path>
npm install @capacitor/core @capacitor/cli @capacitor/ios
```

### 3. Create `capacitor.config.ts`

```ts
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.myapp',     // Reverse-domain app ID
  appName: 'MyApp',               // Display name
  webDir: 'out',                  // Static output directory (out/, dist/, build/)
  server: {
    iosScheme: 'capacitor'
  },
  ios: {
    contentInset: 'automatic'
  }
};

export default config;
```

Adjust `appId`, `appName`, and `webDir` to match the project.

### 4. Build the Web App and Add iOS Platform

```bash
npm run build              # Build the static output
npx cap add ios            # Generate native Xcode project in ios/
npx cap sync ios           # Copy web assets into native project
```

### 5. Adapt the Web App for Native

**Viewport (for safe areas on notch/Dynamic Island devices):**
- Add `viewport-fit=cover` to the viewport meta tag
- Add CSS safe area padding:
```css
body {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
```

**Disable Service Worker in native** (if present):
- Wrap SW registration with `!window.Capacitor` check so it only runs in browsers

**Add iOS permissions** (if using microphone, camera, etc.):
```bash
/usr/libexec/PlistBuddy -c "Add :NSMicrophoneUsageDescription string 'Microphone access'" ios/App/App/Info.plist
/usr/libexec/PlistBuddy -c "Add :NSSpeechRecognitionUsageDescription string 'Speech recognition'" ios/App/App/Info.plist
```

### 6. Build with xcodebuild (No Xcode GUI)

**Find the Xcode project type:**
```bash
find ios -name "*.xcworkspace" -not -path "*/project.xcworkspace" -o -name "*.xcodeproj" 2>/dev/null
```

- If `.xcworkspace` exists (CocoaPods): use `-workspace ... -scheme App`
- If only `.xcodeproj` exists (SPM, Capacitor v8+): use `-project ... -scheme App`

**Build command:**
```bash
# For .xcodeproj (Capacitor v8+)
xcodebuild -project ios/App/App.xcodeproj -scheme App \
  -destination 'platform=iOS Simulator,name=iPhone 16 Pro' \
  -derivedDataPath ios/build \
  build

# For .xcworkspace (older Capacitor / CocoaPods)
xcodebuild -workspace ios/App/App.xcworkspace -scheme App \
  -destination 'platform=iOS Simulator,name=iPhone 16 Pro' \
  -derivedDataPath ios/build \
  build
```

### 7. Install and Launch on Simulator

```bash
# List available simulators
xcrun simctl list devices available

# Boot the simulator
xcrun simctl boot <SIMULATOR-UDID>

# Install the app
xcrun simctl install <SIMULATOR-UDID> ios/build/Build/Products/Debug-iphonesimulator/App.app

# Launch the app
xcrun simctl launch <SIMULATOR-UDID> <APP-BUNDLE-ID>

# Open Simulator GUI
open -a Simulator
```

### 8. Add Convenience npm Scripts

```json
{
  "scripts": {
    "cap:sync": "npx cap sync ios",
    "cap:run": "npx cap run ios",
    "ios": "npm run build && npx cap sync ios && npx cap run ios"
  }
}
```

## Web API Compatibility in WKWebView

| API | Works in WKWebView? | Alternative |
|-----|---------------------|-------------|
| `speechSynthesis` (TTS) | Yes | — |
| `SpeechRecognition` (STT) | No | `@capacitor-community/speech-recognition` |
| `localStorage` | Yes | — |
| `fetch` / `XMLHttpRequest` | Yes | — |
| `navigator.geolocation` | Yes (with permission) | `@capacitor/geolocation` |
| `navigator.camera` | No | `@capacitor/camera` |
| Service Worker | Partial / unreliable | Disable in native, use Capacitor offline |

## Rebuilding After Code Changes

```bash
npm run build          # Rebuild web assets
npx cap sync ios       # Sync to native project
# Then either:
npx cap run ios        # Quick run via Capacitor CLI
# Or:
xcodebuild ... build   # Full xcodebuild + simctl install/launch
```

## Troubleshooting

- **`xcworkspace does not exist`**: Capacitor v8+ uses SPM, not CocoaPods. Use `-project *.xcodeproj` instead.
- **Routing issues**: If `/page` returns 404, check if the static export creates `page.html` (flat) or `page/index.html` (directory). Capacitor handles both.
- **White screen**: Check Safari Web Inspector (Develop > Simulator > App) for JS errors.
- **Code signing for real device**: Requires Apple Developer account. Simulator builds use "Sign to Run Locally" automatically.
