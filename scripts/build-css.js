const fs = require('fs');
const path = require('path');
const { colors } = require('../dist/index.js');

const outputDir = path.resolve(__dirname, '..');

function generateCSS(colorName, color) {
  const cssVariables = [];
  const shades = ['100', '200', '300', '400', '500'];

  for (const shade of shades) {
    cssVariables.push(`--${colorName}-${shade}: ${color[shade]};`);
  }
  for (const shade of shades) {
    cssVariables.push(`--${colorName}A-${shade}: ${color.a[shade]};`);
  }
  for (const shade of shades) {
    cssVariables.push(`--${colorName}P3-${shade}: ${color.p3[shade]};`);
  }
  for (const shade of shades) {
    cssVariables.push(`--${colorName}P3A-${shade}: ${color.p3a[shade]};`);
  }

  return `:root {\n${cssVariables.join('\n')}\n}`;
}

function writeCSSFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
}

Object.entries(colors).forEach(([colorName, color]) => {
  const cssContent = generateCSS(colorName, color);
  const filePath = path.join(outputDir, `${colorName}.css`);
  writeCSSFile(filePath, cssContent);
});

console.log('CSS files generated at root level.');