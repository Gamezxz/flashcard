# Design Document

## Overview

The vocabulary expansion project will systematically add new vocabulary words to reach exactly 200 words per CEFR level. The design focuses on maintaining data consistency, preventing duplicates, and ensuring appropriate level distribution while preserving the existing data structure.

## Architecture

### Current State Analysis
- Total words: 392
- Distribution: A1 (~50), A2 (~50), B1 (~50), B2 (~100), C1 (~100), C2 (~42)
- Target: 1,200 words total (200 per level)
- Words to add: ~808 new vocabulary entries

### Data Structure Preservation
The existing Word interface and data structure will be maintained:
```typescript
interface Word {
    id: number;
    word: string;
    pos: string;
    thai: string;
    definition: string;
    examples: Example[];
    hint: string;
    level: string;
    cats: string[];
}
```

## Components and Interfaces

### 1. Vocabulary Analysis Component
**Purpose:** Analyze current vocabulary distribution and identify gaps
- Count existing words per level
- Identify duplicate words across levels
- Generate statistics for current categories
- Validate data integrity

### 2. Word Generation Strategy
**Purpose:** Systematic approach to adding appropriate vocabulary

#### Level-Specific Word Selection Criteria:

**A1 Level (Basic):**
- High-frequency everyday words
- Basic nouns, verbs, adjectives
- Numbers, colors, family, body parts
- Common greetings and expressions
- Essential survival vocabulary

**A2 Level (Elementary):**
- Routine activities and familiar topics
- Work, education, shopping vocabulary
- Past and future time expressions
- Basic descriptive language
- Simple connecting words

**B1 Level (Intermediate):**
- Work and study vocabulary
- Abstract concepts (basic level)
- Expressing opinions and preferences
- Travel and leisure vocabulary
- Problem-solving language

**B2 Level (Upper-Intermediate):**
- Complex topics and ideas
- Academic and professional vocabulary
- Nuanced expressions
- Advanced grammar structures
- Cultural and social concepts

**C1 Level (Advanced):**
- Sophisticated vocabulary
- Academic and technical terms
- Subtle distinctions in meaning
- Idiomatic expressions
- Professional and specialized language

**C2 Level (Proficiency):**
- Highly sophisticated vocabulary
- Academic and literary terms
- Precise and nuanced expressions
- Specialized professional vocabulary
- Complex abstract concepts

### 3. Duplicate Prevention System
**Purpose:** Ensure no word appears multiple times in the dataset
- Case-insensitive word comparison
- Lemma-based duplicate detection
- Cross-level validation
- Alternative form checking (e.g., "analyze" vs "analyse")

### 4. Category Management
**Purpose:** Maintain consistent categorization system

#### Existing Categories:
- daily, work, school, food, health, social, travel, shopping, home, technology
- weather, nature, time, money, clothes, city, grammar, geography

#### Potential New Categories:
- academic, business, science, arts, sports, emotions, relationships
- politics, environment, media, entertainment, transportation

## Data Models

### Word Entry Validation Rules
1. **ID Assignment:** Sequential numbering starting from 393
2. **Word Uniqueness:** No duplicate words across entire dataset
3. **Level Appropriateness:** Words must match CEFR level criteria
4. **Thai Translation:** Accurate and commonly used translations
5. **Examples:** At least one practical usage example
6. **Categories:** Minimum one category, maximum five categories
7. **Hints:** Helpful memory aids or synonyms

### Quality Assurance Criteria
- Definition clarity and accuracy
- Example sentence naturalness
- Thai translation appropriateness
- Hint usefulness
- Category relevance

## Error Handling

### Duplicate Detection
- Pre-insertion validation against existing words
- Case-insensitive comparison
- Logging of attempted duplicates
- Alternative word suggestions

### Data Validation
- Required field validation
- Format consistency checks
- Level appropriateness verification
- Category existence validation

### Quality Control
- Definition length and clarity
- Example sentence structure
- Thai translation accuracy
- Hint relevance and helpfulness

## Testing Strategy

### Unit Testing
- Word uniqueness validation
- Level distribution accuracy
- Data structure integrity
- Category assignment correctness

### Integration Testing
- Complete dataset validation
- Cross-level consistency
- Category system coherence
- Example quality assessment

### Manual Review
- Native speaker validation for Thai translations
- CEFR level appropriateness review
- Cultural context verification
- Usage example naturalness

## Implementation Phases

### Phase 1: Analysis and Planning
- Analyze current vocabulary distribution
- Identify exact word counts needed per level
- Create comprehensive word lists for each level
- Establish quality criteria

### Phase 2: A1 and A2 Expansion
- Add remaining words for A1 level (150 words needed)
- Add remaining words for A2 level (150 words needed)
- Focus on basic, high-frequency vocabulary
- Ensure proper categorization

### Phase 3: B1 and B2 Expansion
- Add remaining words for B1 level (150 words needed)
- Add remaining words for B2 level (100 words needed)
- Include intermediate and upper-intermediate vocabulary
- Introduce more abstract concepts

### Phase 4: C1 and C2 Expansion
- Add remaining words for C1 level (100 words needed)
- Add remaining words for C2 level (158 words needed)
- Focus on advanced and proficiency-level vocabulary
- Include sophisticated and specialized terms

### Phase 5: Quality Assurance
- Comprehensive duplicate checking
- Level appropriateness review
- Translation accuracy verification
- Final dataset validation

## Performance Considerations

### Memory Usage
- Large vocabulary array (~1,200 entries)
- Efficient data structure for searching
- Optimized duplicate detection algorithms

### Search and Filtering
- Level-based filtering performance
- Category-based searching efficiency
- Text search optimization

### Data Loading
- Efficient initial data loading
- Lazy loading considerations for large datasets
- Caching strategies for frequently accessed data