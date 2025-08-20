const fs = require('fs');
const path = require('path');

// Read the vocabulary file
const vocabFilePath = path.join(__dirname, '../flashcard-app/src/data/vocabulary.ts');

try {
    const fileContent = fs.readFileSync(vocabFilePath, 'utf8');
    
    // Extract word data using regex
    const wordMatches = fileContent.match(/word:\s*"([^"]+)"/g);
    const idMatches = fileContent.match(/id:\s*(\d+)/g);
    
    if (!wordMatches || !idMatches) {
        console.log('❌ Could not parse vocabulary file');
        process.exit(1);
    }

    // Extract words and IDs
    const words = wordMatches.map(match => match.match(/word:\s*"([^"]+)"/)[1]);
    const ids = idMatches.map(match => parseInt(match.match(/id:\s*(\d+)/)[1]));

    console.log(`📊 Total words found: ${words.length}`);
    console.log(`📊 Total IDs found: ${ids.length}`);
    
    // Check for duplicate words
    console.log('\n🔍 Checking for duplicate words...');
    const wordCounts = {};
    const duplicateWords = [];
    
    words.forEach((word, index) => {
        const lowerWord = word.toLowerCase();
        if (wordCounts[lowerWord]) {
            wordCounts[lowerWord].push({ word, index, id: ids[index] });
            if (wordCounts[lowerWord].length === 2) {
                duplicateWords.push(lowerWord);
            }
        } else {
            wordCounts[lowerWord] = [{ word, index, id: ids[index] }];
        }
    });

    // Check for duplicate IDs
    console.log('\n🔍 Checking for duplicate IDs...');
    const idCounts = {};
    const duplicateIds = [];
    
    ids.forEach((id, index) => {
        if (idCounts[id]) {
            idCounts[id].push({ id, index, word: words[index] });
            if (idCounts[id].length === 2) {
                duplicateIds.push(id);
            }
        } else {
            idCounts[id] = [{ id, index, word: words[index] }];
        }
    });

    // Report results
    if (duplicateWords.length === 0) {
        console.log('✅ No duplicate words found!');
    } else {
        console.log(`❌ Found ${duplicateWords.length} duplicate word(s):`);
        duplicateWords.forEach(word => {
            console.log(`\n   Word: "${word}"`);
            wordCounts[word].forEach(entry => {
                console.log(`   - ID ${entry.id}: "${entry.word}" (position ${entry.index + 1})`);
            });
        });
    }

    if (duplicateIds.length === 0) {
        console.log('\n✅ No duplicate IDs found!');
    } else {
        console.log(`\n❌ Found ${duplicateIds.length} duplicate ID(s):`);
        duplicateIds.forEach(id => {
            console.log(`\n   ID: ${id}`);
            idCounts[id].forEach(entry => {
                console.log(`   - Word: "${entry.word}" (position ${entry.index + 1})`);
            });
        });
    }

    // Check for ID gaps or issues
    const sortedIds = [...ids].sort((a, b) => a - b);
    const minId = sortedIds[0];
    const maxId = sortedIds[sortedIds.length - 1];
    
    console.log(`\n📈 ID range: ${minId} to ${maxId}`);
    
    // Check for missing IDs in sequence
    const missingIds = [];
    for (let i = minId; i <= maxId; i++) {
        if (!ids.includes(i)) {
            missingIds.push(i);
        }
    }
    
    if (missingIds.length === 0) {
        console.log('✅ All IDs in sequence are present');
    } else if (missingIds.length <= 10) {
        console.log(`⚠️  Missing IDs: ${missingIds.join(', ')}`);
    } else {
        console.log(`⚠️  ${missingIds.length} missing IDs in the sequence`);
    }

    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('📋 SUMMARY:');
    console.log(`   Total words: ${words.length}`);
    console.log(`   Duplicate words: ${duplicateWords.length}`);
    console.log(`   Duplicate IDs: ${duplicateIds.length}`);
    console.log(`   Missing IDs: ${missingIds.length}`);
    console.log('='.repeat(50));

} catch (error) {
    console.error('❌ Error reading vocabulary file:', error.message);
    process.exit(1);
}
