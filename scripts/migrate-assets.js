const fs = require('fs').promises;
const path = require('path');

const root = process.cwd();
const publicDir = path.join(root, 'public');

const items = ['index.html', 'css', 'js', 'images', 'fonts'];

async function copyRecursive(src, dest) {
  const stat = await fs.stat(src);
  if (stat.isDirectory()) {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src);
    for (const entry of entries) {
      await copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.copyFile(src, dest);
  }
}

(async () => {
  try {
    await fs.mkdir(publicDir, { recursive: true });
    for (const item of items) {
      const src = path.join(root, item);
      try {
        const s = await fs.stat(src);
        const dest = path.join(publicDir, item);
        await copyRecursive(src, dest);
        console.log(`Copied ${item} -> public/${item}`);
      } catch (e) {
        console.log(`Skipping missing: ${item}`);
      }
    }
    console.log('Asset migration complete.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
