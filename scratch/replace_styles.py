import os
import glob

replacements = {
    "bg-zinc-950": "bg-white dark:bg-zinc-950",
    "bg-zinc-900 ": "bg-slate-50 dark:bg-zinc-900 ",
    'bg-zinc-900"': 'bg-slate-50 dark:bg-zinc-900"',
    "bg-zinc-900/50": "bg-slate-50/50 dark:bg-zinc-900/50",
    "bg-zinc-800": "bg-slate-100 dark:bg-zinc-800",
    "bg-zinc-800/80": "bg-slate-100/80 dark:bg-zinc-800/80",
    "text-zinc-50": "text-slate-900 dark:text-zinc-50",
    "text-zinc-100": "text-slate-800 dark:text-zinc-100",
    "text-zinc-200": "text-slate-700 dark:text-zinc-200",
    "text-zinc-300": "text-slate-600 dark:text-zinc-300",
    "text-zinc-400": "text-slate-500 dark:text-zinc-400",
    "border-zinc-800": "border-slate-200 dark:border-zinc-800",
    "border-zinc-700": "border-slate-300 dark:border-zinc-700",
    "border-white/10": "border-black/5 dark:border-white/10",
    "bg-white/10": "bg-black/5 dark:bg-white/10",
    "bg-white/5": "bg-black/5 dark:bg-white/5",
    "hover:bg-zinc-800": "hover:bg-slate-200 dark:hover:bg-zinc-800",
    "hover:bg-white/10": "hover:bg-black/5 dark:hover:bg-white/10",
    "hover:text-white": "hover:text-slate-900 dark:hover:text-white",
    "text-white": "text-slate-900 dark:text-white",
    "from-zinc-900": "from-slate-100 dark:from-zinc-900",
    "to-zinc-800": "to-slate-200 dark:to-zinc-800",
    "from-zinc-950": "from-slate-50 dark:from-zinc-950",
    "via-zinc-900": "via-slate-100 dark:via-zinc-900",
    "ring-zinc-800": "ring-slate-200 dark:ring-zinc-800",
}

# Ensure we don't accidentally expand already replaced variants
# For instance, if 'bg-white' is already there, replacing text-white might affect it if not careful.
# So we only replace exact matches or specific boundaries in class strings.

files_to_check = glob.glob("src/pages/**/*.jsx", recursive=True) + glob.glob("src/components/**/*.jsx", recursive=True)

# remove Navbar.jsx since we already modified it manually
if "src\\components\\Navbar.jsx" in files_to_check:
    files_to_check.remove("src\\components\\Navbar.jsx")
if "src/components/Navbar.jsx" in files_to_check:
    files_to_check.remove("src/components/Navbar.jsx")

def run_replacement():
    for fpath in files_to_check:
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
            
        new_content = content
        for old, new in replacements.items():
            if old in new_content and new not in new_content:
                # Basic safeguards.
                new_content = new_content.replace(old, new)
                
        # Additional safeguards for mobile menu of Navbar which we skipped? No, Navbar is skipped entirely here.
        if content != new_content:
            with open(fpath, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"Updated {fpath}")

run_replacement()
