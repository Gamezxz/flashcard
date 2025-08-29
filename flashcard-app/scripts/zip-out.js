#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const outDir = path.join(root, 'out');
const zipFile = path.join(root, 'out.zip');

if (!fs.existsSync(outDir)) {
  console.error('out/ directory not found. Ensure next.config.ts has output: "export" and that build completed.');
  process.exit(1);
}

if (fs.existsSync(zipFile)) {
  try { fs.unlinkSync(zipFile); } catch {}
}

function tryZip() {
  try {
    execSync('zip -qr ../out.zip .', { stdio: 'inherit', cwd: outDir });
    return true;
  } catch (e) {
    return false;
  }
}

if (tryZip()) {
  console.log('Created out.zip');
} else {
  const tgz = path.join(root, 'out.tgz');
  try {
    execSync(`tar -czf ${JSON.stringify(tgz)} -C ${JSON.stringify(outDir)} .`, { stdio: 'inherit' });
    console.log('zip command not found; created out.tgz instead');
  } catch (e) {
    console.error('Failed to create archive:', e.message);
    process.exit(1);
  }
}

