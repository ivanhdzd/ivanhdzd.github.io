const { existsSync, readFileSync, unlinkSync, writeFileSync } = require('fs');
const { join } = require('path');

/** Index file path in 'public' directory */
const oldPath = join(__dirname, '..', 'public', 'index.html');
/** Index file path in root directory */
const newPath = join(__dirname, '..', 'index.html');

/** Check if old index file already exists */
if (!existsSync(oldPath)) {
	console.error(`'${ oldPath }' file not found.`);
	return process.exit();
}
console.info(`'${ oldPath }' file already exists, reading it content...`);

/** Get index content and update all necessary file routes */
const content = readFileSync(oldPath, 'utf8')
	.split(/(<link.+href="|src=")/g)
	.map(item => `${ item }${ item.endsWith(`href="`) || item.endsWith(`src="`) ? 'public/' : '' }`)
	.join('');

console.info(`'${ oldPath }' content file read successfully, creating '${ newPath }' file...`);
/** Make new index file into root directory */
writeFileSync(newPath, content, 'utf8');

console.info(`'${ newPath }' file created successfully, removing '${ oldPath }' file...`);
/** Removes old index in 'public directory */
unlinkSync(oldPath);

console.info(`'${ oldPath }' file removed successfully.`);
/** Finish process */
process.exit();