// Master script to add all vocabulary levels B1-C2
const { b1Words, addB1Words } = require('./b1-words.js');
const { b2Words, addB2Words } = require('./b2-words.js');
const { c1Words, addC1Words } = require('./c1-words.js');
const { c2Words, addC2Words } = require('./c2-words.js');

async function addAllLevels() {
    console.log('Starting comprehensive vocabulary expansion for B1-C2 levels...');
    console.log('='.repeat(60));
    
    try {
        // Add B1 level (150 words)
        console.log('\n📚 Adding B1 Level Words...');
        await addB1Words();
        console.log(`✅ B1 Complete: ${b1Words.length} words added`);
        
        // Add B2 level (150 words)
        console.log('\n📚 Adding B2 Level Words...');
        await addB2Words();
        console.log(`✅ B2 Complete: ${b2Words.length} words added`);
        
        // Add C1 level (150 words)
        console.log('\n📚 Adding C1 Level Words...');
        await addC1Words();
        console.log(`✅ C1 Complete: ${c1Words.length} words added`);
        
        // Add C2 level (150 words)
        console.log('\n📚 Adding C2 Level Words...');
        await addC2Words();
        console.log(`✅ C2 Complete: ${c2Words.length} words added`);
        
        // Summary
        const totalWords = b1Words.length + b2Words.length + c1Words.length + c2Words.length;
        console.log('\n' + '='.repeat(60));
        console.log('🎉 VOCABULARY EXPANSION COMPLETE!');
        console.log('='.repeat(60));
        console.log(`📊 Summary:`);
        console.log(`   B1 Level: ${b1Words.length} words`);
        console.log(`   B2 Level: ${b2Words.length} words`);
        console.log(`   C1 Level: ${c1Words.length} words`);
        console.log(`   C2 Level: ${c2Words.length} words`);
        console.log(`   Total Added: ${totalWords} words`);
        console.log('\n🚀 Your flashcard app now has comprehensive vocabulary coverage!');
        console.log('📱 Users can now study from beginner (A1) to mastery (C2) levels.');
        
    } catch (error) {
        console.error('❌ Error during vocabulary expansion:', error);
        process.exit(1);
    }
}

// Run the expansion
if (require.main === module) {
    addAllLevels().catch(console.error);
}

module.exports = { addAllLevels };