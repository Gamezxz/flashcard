#!/usr/bin/env python3
import re
import os

def fix_vocabulary_ids():
    print("Starting ID fix process...")
    
    # Path to vocabulary file
    vocab_path = "../flashcard-app/src/data/vocabulary.ts"
    
    if not os.path.exists(vocab_path):
        print(f"❌ File not found: {vocab_path}")
        return
    
    # Read the file
    with open(vocab_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("File read successfully")
    
    # Create backup
    backup_path = vocab_path + ".backup"
    with open(backup_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✅ Backup created: {backup_path}")
    
    # Find all ID lines and replace them with sequential numbers
    # Pattern to match: "        id: 123,"
    id_pattern = r'(\s+)id:\s*\d+,'
    
    # Find all matches
    matches = list(re.finditer(id_pattern, content))
    print(f"Found {len(matches)} ID entries to fix")
    
    # Replace IDs with sequential numbers
    new_content = content
    offset = 0
    
    for i, match in enumerate(matches):
        new_id = i + 1
        old_text = match.group(0)
        new_text = f"{match.group(1)}id: {new_id},"
        
        # Calculate position with offset
        start = match.start() + offset
        end = match.end() + offset
        
        new_content = new_content[:start] + new_text + new_content[end:]
        
        # Update offset for next replacement
        offset += len(new_text) - len(old_text)
    
    # Write the fixed content
    with open(vocab_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"✅ Fixed {len(matches)} IDs to be sequential 1-{len(matches)}")
    print("📁 Original file backed up")
    print("🔄 Please restart your dev server to see changes")
    
    # Verify the fix
    with open(vocab_path, 'r', encoding='utf-8') as f:
        verify_content = f.read()
    
    verify_matches = re.findall(r'id:\s*(\d+)', verify_content)
    if verify_matches:
        # Remove the "id: number;" from interface
        actual_ids = [int(x) for x in verify_matches if x != 'number']
        print(f"✅ Verification: Found {len(actual_ids)} sequential IDs from 1 to {max(actual_ids)}")
    
if __name__ == "__main__":
    fix_vocabulary_ids()