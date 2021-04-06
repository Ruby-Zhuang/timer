const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

///////////////////////////////////
// Event Handling for User Input //
///////////////////////////////////

const beep = '\x07';
const newLine = '\n';

// On input from stdin (standard input)
stdin.on('data', (key) => {
  // User can use ctrl + c to exit the program
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!' + newLine);
    process.exit();
  }

  // User can input any number from 1 to 9 and sets a time to beep after that number of seconds
  if (key.match(/[1-9]/)) {
    if (key.match(/1/)) {
      process.stdout.write(`setting timer for ${key} second...` + newLine);
    } else {
      process.stdout.write(`setting timer for ${key} seconds...` + newLine);
    }
    setTimeout(() => process.stdout.write(beep), key * 1000);
  }

  // User can press b and it should beep right away
  if (key === '\x62') {
    process.stdout.write(beep);
  }

  // This way works too
  // if (key.match(/b/)) {
  //   process.stdout.write(beep);
  // }

});