// Get all arguments from the command line (except first 2)
const args = process.argv.slice(2);
const beep = '\x07';
const newLine = '\n';

for (const arg of args) {
  const converted = Number(arg);

  // Only do something if arg is actually and number and is positive
  if (!Number.isNaN(converted) && converted >= 0) {
    setTimeout(() => {
      process.stdout.write(converted + ' second(s)' + beep + newLine);
    }, converted * 1000);
  }
}