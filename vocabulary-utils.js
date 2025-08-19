// Vocabulary Utilities for Expansion
// This module provides functions for duplicate detection, validation, and ID generation

const fs = require('fs');

class VocabularyManager {
    constructor() {
        this.existingWords = new Set();
        this.existingIds = new Set();
        this.nextId = 393;
        this.loadExistingVocabulary();
    }

    loadExistingVocabulary() {
        try {
            const vocabularyContent = fs.readFileSync('flashcard-app/src/data/vocabulary.ts', 'utf8');
            const wordsArrayMatch = vocabularyContent.match(/export const WORDS: Word\[\] = \[([\s\S]*)\];/);
            
            if (wordsArrayMatch) {
                const wordsString = wordsArrayMatch[1];
                const wordMatches = wordsString.match(/\{[^}]*id:\s*(\d+)[^}]*word:\s*"([^"]*)"[^}]*\}/g);
                
                if (wordMatches) {
                    wordMatches.forEach(match => {
                        const idMatch = match.match(/id:\s*(\d+)/);
                        const wordMatch = match.match(/word:\s*"([^"]*)"/);
                        
                        if (idMatch && wordMatch) {
                            const id = parseInt(idMatch[1]);
                            const word = wordMatch[1].toLowerCase();
                            
                            this.existingWords.add(word);
                            this.existingIds.add(id);
                            
                            if (id >= this.nextId) {
                                this.nextId = id + 1;
                            }
                        }
                    });
                }
            }
            
            console.log(`Loaded ${this.existingWords.size} existing words`);
            console.log(`Next available ID: ${this.nextId}`);
        } catch (error) {
            console.error('Error loading existing vocabulary:', error.message);
        }
    }

    // Check if a word already exists (case-insensitive)
    isDuplicate(word) {
        return this.existingWords.has(word.toLowerCase());
    }

    // Get next available ID
    getNextId() {
        const id = this.nextId;
        this.nextId++;
        this.existingIds.add(id);
        return id;
    }

    // Add word to tracking (for preventing duplicates during batch operations)
    addWordToTracking(word) {
        this.existingWords.add(word.toLowerCase());
    }

    // Validate word object structure
    validateWordObject(wordObj) {
        const errors = [];
        
        // Required fields
        const requiredFields = ['id', 'word', 'pos', 'thai', 'definition', 'examples', 'hint', 'level', 'cats'];
        
        for (const field of requiredFields) {
            if (!(field in wordObj)) {
                errors.push(`Missing required field: ${field}`);
            }
        }

        // Type validations
        if (wordObj.id && typeof wordObj.id !== 'number') {
            errors.push('ID must be a number');
        }

        if (wordObj.word && typeof wordObj.word !== 'string') {
            errors.push('Word must be a string');
        }

        if (wordObj.level && !['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(wordObj.level)) {
            errors.push('Level must be one of: A1, A2, B1, B2, C1, C2');
        }

        if (wordObj.examples && !Array.isArray(wordObj.examples)) {
            errors.push('Examples must be an array');
        } else if (wordObj.examples && wordObj.examples.length === 0) {
            errors.push('At least one example is required');
        }

        if (wordObj.cats && !Array.isArray(wordObj.cats)) {
            errors.push('Categories must be an array');
        } else if (wordObj.cats && wordObj.cats.length === 0) {
            errors.push('At least one category is required');
        }

        // Example structure validation
        if (wordObj.examples && Array.isArray(wordObj.examples)) {
            wordObj.examples.forEach((example, index) => {
                if (!example.en || typeof example.en !== 'string') {
                    errors.push(`Example ${index + 1}: English text is required`);
                }
                if (!example.th || typeof example.th !== 'string') {
                    errors.push(`Example ${index + 1}: Thai text is required`);
                }
            });
        }

        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }

    // Create a properly formatted word object
    createWordObject(wordData) {
        const wordObj = {
            id: wordData.id || this.getNextId(),
            word: wordData.word,
            pos: wordData.pos,
            thai: wordData.thai,
            definition: wordData.definition,
            examples: wordData.examples || [],
            hint: wordData.hint,
            level: wordData.level,
            cats: wordData.cats || []
        };

        const validation = this.validateWordObject(wordObj);
        if (!validation.isValid) {
            throw new Error(`Invalid word object: ${validation.errors.join(', ')}`);
        }

        // Check for duplicates
        if (this.isDuplicate(wordObj.word)) {
            throw new Error(`Duplicate word: ${wordObj.word}`);
        }

        // Add to tracking
        this.addWordToTracking(wordObj.word);

        return wordObj;
    }

    // Validate level appropriateness (basic check)
    validateLevelAppropriateness(word, level) {
        const levelCriteria = {
            'A1': {
                description: 'Basic everyday words, high frequency',
                maxSyllables: 3,
                commonWords: ['be', 'have', 'do', 'go', 'get', 'make', 'know', 'think', 'take', 'see']
            },
            'A2': {
                description: 'Familiar topics, routine activities',
                maxSyllables: 4,
                commonWords: ['understand', 'important', 'different', 'possible', 'available']
            },
            'B1': {
                description: 'Work, study, leisure contexts',
                maxSyllables: 5,
                commonWords: ['experience', 'opportunity', 'development', 'relationship', 'environment']
            },
            'B2': {
                description: 'Complex topics, abstract concepts',
                maxSyllables: 6,
                commonWords: ['significant', 'comprehensive', 'sophisticated', 'fundamental', 'substantial']
            },
            'C1': {
                description: 'Advanced, sophisticated vocabulary',
                maxSyllables: 7,
                commonWords: ['articulate', 'comprehensive', 'sophisticated', 'unprecedented', 'substantial']
            },
            'C2': {
                description: 'Mastery level, highly sophisticated',
                maxSyllables: 8,
                commonWords: ['perspicacious', 'magnanimous', 'circumspect', 'assiduous', 'indomitable']
            }
        };

        const criteria = levelCriteria[level];
        if (!criteria) {
            return { appropriate: false, reason: 'Invalid level' };
        }

        // Basic syllable count check (rough approximation)
        const syllableCount = word.split(/[aeiou]/i).length - 1;
        if (syllableCount > criteria.maxSyllables) {
            return { 
                appropriate: false, 
                reason: `Word may be too complex for ${level} (${syllableCount} syllables, max ${criteria.maxSyllables})` 
            };
        }

        return { appropriate: true, reason: 'Passes basic checks' };
    }

    // Add word to vocabulary file
    async addWord(word, pos, thai, definition, hint, cats, examples, level) {
        try {
            const wordObj = this.createWordObject({
                word,
                pos,
                thai,
                definition,
                hint,
                cats,
                examples,
                level
            });

            // Read current vocabulary file
            const vocabularyPath = 'flashcard-app/src/data/vocabulary.ts';
            let content = fs.readFileSync(vocabularyPath, 'utf8');

            // Format the new word object
            const formattedWord = this.formatWordForFile(wordObj);

            // Find the position to insert (before the closing bracket)
            const insertPosition = content.lastIndexOf('];');
            if (insertPosition === -1) {
                throw new Error('Could not find insertion point in vocabulary file');
            }

            // Insert the new word
            const beforeInsert = content.substring(0, insertPosition);
            const afterInsert = content.substring(insertPosition);
            
            // Add comma if there are existing words
            const needsComma = beforeInsert.trim().endsWith('}');
            const newContent = beforeInsert + (needsComma ? ',' : '') + '\n  ' + formattedWord + '\n' + afterInsert;

            // Write back to file
            fs.writeFileSync(vocabularyPath, newContent, 'utf8');

            return wordObj;
        } catch (error) {
            console.error(`Error adding word "${word}":`, error.message);
            throw error;
        }
    }

    // Format word object for TypeScript file
    formatWordForFile(wordObj) {
        const examplesStr = wordObj.examples.map(ex => 
            `{ en: "${ex.en}", th: "${ex.th}" }`
        ).join(', ');

        const catsStr = wordObj.cats.map(cat => `"${cat}"`).join(', ');

        return `{
    id: ${wordObj.id},
    word: "${wordObj.word}",
    pos: "${wordObj.pos}",
    thai: "${wordObj.thai}",
    definition: "${wordObj.definition}",
    examples: [${examplesStr}],
    hint: "${wordObj.hint}",
    level: "${wordObj.level}",
    cats: [${catsStr}]
  }`;
    }

    // Get statistics
    getStatistics() {
        return {
            totalWords: this.existingWords.size,
            nextId: this.nextId,
            wordsToAdd: 1200 - this.existingWords.size
        };
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VocabularyManager;
}

// Test the system if run directly
if (require.main === module) {
    console.log('Testing Vocabulary Management System...\n');
    
    const vm = new VocabularyManager();
    
    // Test duplicate detection
    console.log('Testing duplicate detection:');
    console.log('Is "buy" duplicate?', vm.isDuplicate('buy')); // Should be true
    console.log('Is "BUY" duplicate?', vm.isDuplicate('BUY')); // Should be true (case insensitive)
    console.log('Is "newword" duplicate?', vm.isDuplicate('newword')); // Should be false
    
    // Test word validation
    console.log('\nTesting word validation:');
    const testWord = {
        word: 'test',
        pos: 'n.',
        thai: 'ทดสอบ',
        definition: 'a procedure to check something',
        examples: [
            { en: 'This is a test.', th: 'นี่คือการทดสอบ' }
        ],
        hint: 'check',
        level: 'A2',
        cats: ['school']
    };
    
    try {
        const newWord = vm.createWordObject(testWord);
        console.log('Word created successfully:', newWord.word, 'ID:', newWord.id);
    } catch (error) {
        console.log('Error creating word:', error.message);
    }
    
    // Test level appropriateness
    console.log('\nTesting level appropriateness:');
    console.log('A1 - "cat":', vm.validateLevelAppropriateness('cat', 'A1'));
    console.log('C2 - "perspicacious":', vm.validateLevelAppropriateness('perspicacious', 'C2'));
    console.log('A1 - "sophisticated":', vm.validateLevelAppropriateness('sophisticated', 'A1'));
    
    console.log('\nStatistics:', vm.getStatistics());
}