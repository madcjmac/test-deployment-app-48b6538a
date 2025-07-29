#!/bin/bash
# Render build verification script
echo "🔍 Verifying React app structure..."
echo "📦 Package.json exists: $(test -f package.json && echo "✅" || echo "❌")"
echo "📁 src/ directory exists: $(test -d src && echo "✅" || echo "❌")"
echo "📄 src/index.js exists: $(test -f src/index.js && echo "✅" || echo "❌")"
echo "🎯 src/App.js exists: $(test -f src/App.js && echo "✅" || echo "❌")"
echo "🌐 public/index.html exists: $(test -f public/index.html && echo "✅" || echo "❌")"

echo "🚀 Starting React build..."
npm ci
npm run build

echo "📂 Build directory contents:"
ls -la build/ 2>/dev/null || echo "❌ Build directory not found"

echo "🎉 Build verification complete!"
