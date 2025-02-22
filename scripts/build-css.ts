import * as fs from 'fs';
import * as path from 'path';

const colorsModule = require('../dist/index.js') as { colors: Record<string, any> };
const { colors } = colorsModule;

const outputDir = path.resolve(__dirname, '..');

function generateCSS(colorName: string, color: any): string {
  const cssVariables: string[] = [];
  const shades: string[] = ['100', '200', '300', '400', '500'];

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

  return `:root {\n${cssVariables.join('\n')}\n}\n`;
}

function ensureDirectory(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeCSSFile(filePath: string, content: string): void {
  fs.writeFileSync(filePath, content, 'utf8');
}

function buildCSSFiles() {
  ensureDirectory(outputDir);

  Object.entries(colors).forEach(([colorName, color]) => {
    const cssContent = generateCSS(colorName, color);
    const filePath = path.join(outputDir, `${colorName}.css`);
    writeCSSFile(filePath, cssContent);
  });

  console.log('CSS files generated at root level.');
}

buildCSSFiles();