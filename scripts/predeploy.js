const { existsSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const distDirPath = join(__dirname, '..', 'dist');
if (!existsSync(distDirPath)) {
	console.error(`'${ distDirPath }' directory not exists.`);
	return process.exit(1);
}

console.info(`\nCopying some files in 'dist' directory...\n`);

['readme.md', 'license', '.gitignore'].forEach((fileName, index) => {
	const filePath = join(__dirname, '..', fileName);
	if (!existsSync(filePath)) return console.warn(`'${ filePath }' file not exists.`);
	console.info(`${ index + 1 }.- Reading '${ filePath }' file...`);
	const content = readFileSync(filePath, 'UTF-8');
	console.info(`${ index + 1 }.-  File '${ filePath }' read successfully.`);
	const finalPath = join(distDirPath, fileName);
	console.info(`${ index + 1 }.-   Writing '${ finalPath }' file...`);
	writeFileSync(finalPath, content, 'UTF-8');
	console.info(`${ index + 1 }.-    File '${ finalPath }' wrote successfully.\n`);
});

console.info(`All files copied successfully.\n`);

process.exit();