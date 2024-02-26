// Display the initial message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');
// Listen for input from the standard input stream (STDIN)
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    // Display the user's name
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Display closing message and ends he program
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
