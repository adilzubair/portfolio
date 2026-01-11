const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  console.log('🖼️  Starting Image Optimization with Sharp...');
  console.log('================================\n');

  const inputDir = 'public/images/projects';
  const webpDir = path.join(inputDir, 'webp');
  const optimizedDir = path.join(inputDir, 'optimized');

  // Create output directories
  if (!fs.existsSync(webpDir)) {
    fs.mkdirSync(webpDir, { recursive: true });
  }
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  // Get all PNG and JPEG files
  const allFiles = fs.readdirSync(inputDir);
  const imageFiles = allFiles.filter(file => {
    return file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg');
  });

  if (imageFiles.length === 0) {
    console.log('❌ No image files found in', inputDir);
    return;
  }

  console.log(`📦 Found ${imageFiles.length} image files to optimize...\n`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let totalWebpSize = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const fileName = path.parse(file).name;

    try {
      const stats = fs.statSync(inputPath);
      totalOriginalSize += stats.size;

      console.log(`📦 Processing: ${file}`);

      // Step 1: Optimize PNG/JPEG
      const outputPath = path.join(optimizedDir, file);
      await sharp(inputPath)
        .png({ quality: 75, compressionLevel: 9 })
        .jpeg({ quality: 75 })
        .toFile(outputPath);

      // Step 2: Convert to WebP
      const webpPath = path.join(webpDir, `${fileName}.webp`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(webpPath);

      // Calculate sizes
      const optimizedStats = fs.statSync(outputPath);
      const webpStats = fs.statSync(webpPath);

      totalOptimizedSize += optimizedStats.size;
      totalWebpSize += webpStats.size;

      const formatSize = (bytes) => {
        const kb = bytes / 1024;
        return kb >= 1024 ? `${(kb / 1024).toFixed(2)}MB` : `${kb.toFixed(2)}KB`;
      };

      console.log(`  Original:  ${formatSize(stats.size)}`);
      console.log(`  Optimized: ${formatSize(optimizedStats.size)} (${((1 - optimizedStats.size / stats.size) * 100).toFixed(1)}%)`);
      console.log(`  WebP:      ${formatSize(webpStats.size)} (${((1 - webpStats.size / stats.size) * 100).toFixed(1)}%)`);
      console.log('');
    } catch (error) {
      console.error(`❌ Failed to process ${file}:`, error.message);
    }
  }

  console.log('================================');
  console.log('✅ Images optimized successfully!\n');
  console.log('📊 Overall Results:');
  console.log(`Total original size:   ${formatBytes(totalOriginalSize)}`);
  console.log(`Total optimized size:  ${formatBytes(totalOptimizedSize)} (${((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1)}% reduction)`);
  console.log(`Total WebP size:      ${formatBytes(totalWebpSize)} (${((1 - totalWebpSize / totalOriginalSize) * 100).toFixed(1)}% reduction)`);
  console.log('');
  console.log('📁 Optimized files saved to:');
  console.log('  - public/images/projects/optimized/');
  console.log('  - public/images/projects/webp/');
  console.log('');
  console.log('💡 Next steps:');
  console.log('  1. Review optimized images in public/images/projects/optimized/');
  console.log('  2. Test WebP images in public/images/projects/webp/');
  console.log('  3. Run: node scripts/replace-optimized-images.js (to replace originals)');
  console.log('  4. Commit changes');
}

function formatBytes(bytes) {
  const kb = bytes / 1024;
  const mb = kb / 1024;
  return mb >= 1 ? `${mb.toFixed(2)}MB` : `${kb.toFixed(2)}KB`;
}

optimizeImages().catch(error => {
  console.error('❌ Optimization failed:', error);
  process.exit(1);
});
