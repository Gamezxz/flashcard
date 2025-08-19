// Filter duplicates and add new vocabulary levels B1-C2
const VocabularyManager = require('./vocabulary-utils.js');
const { b1Words } = require('./b1-words.js');
const { b2Words } = require('./b2-words.js');
const { c1Words } = require('./c1-words.js');
const { c2Words } = require('./c2-words.js');

const vm = new VocabularyManager();

// Filter out duplicates from word arrays
function filterDuplicates(words, levelName) {
    const filtered = words.filter(wordObj => !vm.isDuplicate(wordObj.word));
    const duplicates = words.filter(wordObj => vm.isDuplicate(wordObj.word));
    
    console.log(`${levelName}: ${words.length} total, ${filtered.length} new, ${duplicates.length} duplicates`);
    if (duplicates.length > 0) {
        console.log(`  Duplicates: ${duplicates.map(w => w.word).join(', ')}`);
    }
    
    return filtered;
}

async function addFilteredWords(words, levelName) {
    console.log(`\n📚 Adding ${levelName} Level Words...`);
    let added = 0;
    let errors = 0;
    
    for (const wordObj of words) {
        try {
            await vm.addWord(
                wordObj.word,
                wordObj.pos,
                wordObj.thai,
                wordObj.definition,
                wordObj.hint,
                wordObj.cats,
                wordObj.examples,
                levelName
            );
            added++;
            if (added % 10 === 0) {
                console.log(`  Progress: ${added}/${words.length} words added`);
            }
        } catch (error) {
            console.error(`  Error adding "${wordObj.word}": ${error.message}`);
            errors++;
        }
    }
    
    console.log(`✅ ${levelName} Complete: ${added} words added, ${errors} errors`);
    return { added, errors };
}

async function addAllFilteredLevels() {
    console.log('Starting filtered vocabulary expansion for B1-C2 levels...');
    console.log('='.repeat(60));
    
    // Filter duplicates first
    console.log('\n🔍 Filtering duplicates...');
    const filteredB1 = filterDuplicates(b1Words, 'B1');
    const filteredB2 = filterDuplicates(b2Words, 'B2');
    const filteredC1 = filterDuplicates(c1Words, 'C1');
    const filteredC2 = filterDuplicates(c2Words, 'C2');
    
    const totalFiltered = filteredB1.length + filteredB2.length + filteredC1.length + filteredC2.length;
    console.log(`\nTotal new words to add: ${totalFiltered}`);
    
    if (totalFiltered === 0) {
        console.log('🎉 No new words to add - vocabulary is already complete!');
        return;
    }
    
    try {
        let totalAdded = 0;
        let totalErrors = 0;
        
        // Add filtered words
        if (filteredB1.length > 0) {
            const result = await addFilteredWords(filteredB1, 'B1');
            totalAdded += result.added;
            totalErrors += result.errors;
        }
        
        if (filteredB2.length > 0) {
            const result = await addFilteredWords(filteredB2, 'B2');
            totalAdded += result.added;
            totalErrors += result.errors;
        }
        
        if (filteredC1.length > 0) {
            const result = await addFilteredWords(filteredC1, 'C1');
            totalAdded += result.added;
            totalErrors += result.errors;
        }
        
        if (filteredC2.length > 0) {
            const result = await addFilteredWords(filteredC2, 'C2');
            totalAdded += result.added;
            totalErrors += result.errors;
        }
        
        // Summary
        console.log('\n' + '='.repeat(60));
        console.log('🎉 VOCABULARY EXPANSION COMPLETE!');
        console.log('='.repeat(60));
        console.log(`📊 Summary:`);
        console.log(`   B1 Level: ${filteredB1.length} new words`);
        console.log(`   B2 Level: ${filteredB2.length} new words`);
        console.log(`   C1 Level: ${filteredC1.length} new words`);
        console.log(`   C2 Level: ${filteredC2.length} new words`);
        console.log(`   Total Added: ${totalAdded} words`);
        console.log(`   Total Errors: ${totalErrors} errors`);
        
        if (totalAdded > 0) {
            console.log('\n🚀 Your flashcard app vocabulary has been expanded!');
            console.log('📱 Users can now study more advanced vocabulary levels.');
        }
        
    } catch (error) {
        console.error('❌ Error during vocabulary expansion:', error);
        process.exit(1);
    }
}

// Run the expansion
if (require.main === module) {
    addAllFilteredLevels().catch(console.error);
}

module.exports = { addAllFilteredLevels };