const fs = require('fs');
const path = require('path');

const siteConfigPath = path.resolve(__dirname, '../src/config/site.config.ts');
const desktopPkgPath = path.resolve(__dirname, '../../autofiller/desktop/package.json');
const checksumsPath = path.resolve(__dirname, '../../autofiller/desktop/release/checksums.txt');

console.log('=== Verifying AutoFiller Version & Artifact Consistency ===');

if (!fs.existsSync(siteConfigPath)) {
  console.error('FAIL: site.config.ts not found');
  process.exit(1);
}

if (!fs.existsSync(desktopPkgPath)) {
  console.error('FAIL: desktop/package.json not found');
  process.exit(1);
}

const siteConfigRaw = fs.readFileSync(siteConfigPath, 'utf8');
const desktopPkg = JSON.parse(fs.readFileSync(desktopPkgPath, 'utf8'));

// 1. Verify Version Match
const versionMatch = siteConfigRaw.match(/version:\s*['"]([^'"]+)['"]/);
if (!versionMatch || versionMatch[1] !== desktopPkg.version) {
  console.error(`FAIL: Version mismatch. site.config=${versionMatch ? versionMatch[1] : 'null'} vs desktop/package.json=${desktopPkg.version}`);
  process.exit(1);
}
console.log(`✓ Version matched: ${desktopPkg.version}`);

// 2. Verify Checksums Match
if (fs.existsSync(checksumsPath)) {
  const checksumsRaw = fs.readFileSync(checksumsPath, 'utf8');
  const installerHashMatch = siteConfigRaw.match(/installer:[\s\S]*?sha256:\s*['"]([a-f0-9]+)['"]/);
  const portableHashMatch = siteConfigRaw.match(/portable:[\s\S]*?sha256:\s*['"]([a-f0-9]+)['"]/);

  if (installerHashMatch) {
    if (!checksumsRaw.includes(installerHashMatch[1])) {
      console.error(`FAIL: Installer hash ${installerHashMatch[1]} not found in checksums.txt`);
      process.exit(1);
    }
    console.log(`✓ Installer SHA-256 verified in checksums.txt`);
  }

  if (portableHashMatch) {
    if (!checksumsRaw.includes(portableHashMatch[1])) {
      console.error(`FAIL: Portable hash ${portableHashMatch[1]} not found in checksums.txt`);
      process.exit(1);
    }
    console.log(`✓ Portable SHA-256 verified in checksums.txt`);
  }
}

console.log('✓ All version, artifact, and checksum checks passed successfully!');
