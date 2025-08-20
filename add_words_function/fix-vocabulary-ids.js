// Fix vocabulary IDs to be sequential 1-1108
const fs = require('fs');

function fixVocabularyIds() {
    console.log("Starting ID fix process...");
    
    // Read the vocabulary file
    const vocabularyPath = '../flashcard-app/src/data/vocabulary.ts';
    let content = fs.readFileSync(vocabularyPath, 'utf8');
    
    console.log("File read successfully");
    
    // Split content to get the part before WORDS array and after
    const beforeWords = content.substring(0, content.indexOf('export const WORDS: Word[] = ['));
    const afterWordsStart = content.indexOf('export const WORDS: Word[] = [');
    const wordsArrayStart = content.indexOf('[', afterWordsStart) + 1;
    const wordsArrayEnd = content.lastIndexOf('];');
    
    // Extract just the words array content
    let wordsContent = content.substring(wordsArrayStart, wordsArrayEnd);
    
    console.log("Extracting word objects...");
    
    // Split into individual word objects
    const wordObjects = [];
    let currentObject = '';
    let braceCount = 0;
    let inString = false;
    let stringChar = '';
    
    for (let i = 0; i < wordsContent.length; i++) {
        const char = wordsContent[i];
        const prevChar = i > 0 ? wordsContent[i-1] : '';
        
        // Handle string detection
        if ((char === '"' || char === "'") && prevChar !== '\\') {
            if (!inString) {
                inString = true;
                stringChar = char;
            } else if (char === stringChar) {
                inString = false;
                stringChar = '';
            }
        }
        
        if (!inString) {
            if (char === '{') {
                braceCount++;
            } else if (char === '}') {
                braceCount--;
            }
        }
        
        currentObject += char;
        
        // When we complete an object (braces balanced and we hit a comma or end)
        if (braceCount === 0 && currentObject.trim().length > 0) {
            const nextChars = wordsContent.substring(i + 1, i + 5);
            if (nextChars.trim().startsWith(',') || i === wordsContent.length - 1) {
                // Clean up the object and add to array
                let cleanObject = currentObject.replace(/,\s*$/, '').trim();
                if (cleanObject.startsWith('{') && cleanObject.endsWith('}')) {
                    wordObjects.push(cleanObject);
                }
                currentObject = '';
                // Skip the comma
                if (nextChars.trim().startsWith(',')) {
                    i++;
                }
            }
        }
    }
    
    console.log(`Found ${wordObjects.length} word objects`);
    
    // Update IDs to be sequential
    const updatedObjects = wordObjects.map((obj, index) => {
        const newId = index + 1;
        // Replace the ID using regex
        return obj.replace(/^\s*{\s*id:\s*\d+,/, `    {\n        id: ${newId},`);
    });
    
    console.log(`Updated IDs to be sequential 1-${updatedObjects.length}`);
    
    // Reconstruct the file
    const newWordsArray = updatedObjects.join(',\n');
    const newContent = beforeWords + 'export const WORDS: Word[] = [\n' + newWordsArray + '\n];';
    
    // Create backup
    fs.writeFileSync(vocabularyPath + '.backup', content);
    console.log("Backup created: vocabulary.ts.backup");
    
    // Write the fixed file
    fs.writeFileSync(vocabularyPath, newContent);
    console.log("Fixed vocabulary file written successfully");
    
    // Verify the fix
    const verifyContent = fs.readFileSync(vocabularyPath, 'utf8');
    const idMatches = verifyContent.match(/id: \d+,/g);
    console.log(`Verification: Found ${idMatches ? idMatches.length : 0} ID entries`);
    
    if (idMatches) {
        const firstId = verifyContent.match(/id: (\d+),/)[1];
        const lastIdMatch = verifyContent.match(/id: (\d+),(?![\s\S]*id: \d+,)/);
        const lastId = lastIdMatch ? lastIdMatch[1] : 'not found';
        console.log(`ID range: ${firstId} to ${lastId}`);
    }
    
    console.log("✅ ID fix completed successfully!");
    console.log("📁 Original file backed up as vocabulary.ts.backup");
    console.log("🔄 Please restart your dev server to see changes");
}

// Run the fix
try {
    fixVocabularyIds();
} catch (error) {
    console.error("❌ Error during ID fix:", error.message);
    console.error("📁 Check if backup file exists and restore if needed");
}