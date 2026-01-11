#!/bin/bash

echo "🖼️  Starting Image Optimization..."
echo "================================"

# Create optimized directory if it doesn't exist
mkdir -p public/images/projects/webp

# Optimize images to WebP format
echo "📦 Converting PNGs to WebP format..."
npx imagemin public/images/projects/*.png \
  --out-dir=public/images/projects/webp \
  --plugin=imagemin-webp \
  --plugin=imagemin-pngquant

# Optimize existing PNGs
echo "📦 Optimizing original PNGs..."
npx imagemin public/images/projects/*.png \
  --out-dir=public/images/projects/optimized \
  --plugin=imagemin-pngquant

echo "================================"
echo "✅ Images optimized successfully!"
echo ""
echo "📊 Size Comparison:"
echo "Original size: $(du -sh public/images/projects/ | cut -f1)"
echo "Optimized size: $(du -sh public/images/projects/optimized | cut -f1)"
echo "WebP size: $(du -sh public/images/projects/webp | cut -f1)"
echo ""
echo "📁 Optimized files saved to:"
echo "  - public/images/projects/optimized/"
echo "  - public/images/projects/webp/"
echo ""
echo "💡 Next steps:"
echo "  1. Review optimized images in public/images/projects/optimized/"
echo "  2. Test WebP images in public/images/projects/webp/"
echo "  3. Run: mv public/images/projects/optimized/*.png public/images/projects/ (to replace originals)"
echo "  4. Commit changes"
