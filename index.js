const readline = require('readline-sync')
const fs = require('fs');

const fileToWatch = readline.question('File to watch changes: ')
const copyTo = readline.question('Folder to past file to: ')

console.log(`Watching for file changes on ${fileToWatch}`);

fs.watch(fileToWatch, (event, filename) => {
  if (filename) {
    console.log(`${filename} file Changed, copying file to ${copyTo}.\n`);
    
    try {
      fs.copyFileSync(fileToWatch,`${copyTo}/${filename}`)
    } catch (error) {
      console.log(`\nError ${error.code} copying..`)
    }
  }
});