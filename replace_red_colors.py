#!/usr/bin/env python3
"""
Batch replace red colors in TSX files with appropriate alternatives.
- Keep error/warning states as red (form validation, error messages)
- Replace decorative red with cyan/purple brand colors
- Replace negative indicators (losses, risks) with orange
"""

import re
import os
from pathlib import Path

# Files to process
files_to_update = [
    "client/src/components/ContactForm.tsx",
    "client/src/pages/Services.tsx",
]

# Define replacement rules
replacements = {
    # ContactForm - keep required field asterisks as red (accessibility)
    "client/src/components/ContactForm.tsx": [],  # Keep as is - form validation
    
    # Services page - replace "not for you" section red with orange
    "client/src/pages/Services.tsx": [
        ("border-red-500/50 bg-card/30", "border-orange-500/50 bg-card/30"),
        ("text-red-500", "text-orange-500"),
        ("XCircle className=\"w-8 h-8 text-red-500\"", "XCircle className=\"w-8 h-8 text-orange-500\""),
        ("XCircle className=\"w-5 h-5 text-red-500", "XCircle className=\"w-5 h-5 text-orange-500"),
    ],
}

def apply_replacements(file_path, replacements_list):
    """Apply list of replacements to a file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    for old, new in replacements_list:
        content = content.replace(old, new)
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Updated {file_path}")
        return True
    else:
        print(f"- No changes needed in {file_path}")
        return False

def main():
    base_dir = Path("/home/ubuntu/apex-omnis-studios")
    updated_count = 0
    
    for file_rel_path, replacements_list in replacements.items():
        if not replacements_list:
            print(f"- Skipping {file_rel_path} (keeping as is)")
            continue
            
        file_path = base_dir / file_rel_path
        if file_path.exists():
            if apply_replacements(file_path, replacements_list):
                updated_count += 1
        else:
            print(f"✗ File not found: {file_path}")
    
    print(f"\n✓ Updated {updated_count} files")
    print("\nNote: Keeping red colors in:")
    print("  - Form validation (ContactForm required asterisks)")
    print("  - Error messages and warnings (NotFound, VideoTranscriptExtractor)")
    print("  - Financial/risk indicators (TCGPortfolioTracker, EventTrackerPro)")
    print("  - Application status (ApplicationStatus, ApplicationAnalytics)")
    print("These are semantic colors that convey meaning.")

if __name__ == "__main__":
    main()
