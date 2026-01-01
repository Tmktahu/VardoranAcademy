// scripts/copy-books.js
// Copies markdown books to .svelte-kit/output/books for backend-only access

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src/lib/books');
const destDir = path.join(__dirname, '../.svelte-kit/output/books');

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyRecursive(srcDir, destDir);
console.log('Books copied to', destDir);
