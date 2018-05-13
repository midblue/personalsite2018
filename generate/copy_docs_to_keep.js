const fs = require('fs')
const source = './docs_to_keep/'
const dest = '.../docs/'
fs.readdirSync(source)
	.forEach(fileName => {
		fs.copyFileSync(source + fileName, dest + fileName)
	})
console.log('Copied additional files into /docs')