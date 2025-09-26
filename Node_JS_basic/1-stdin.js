// Display welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set stdin to readable mode
process.stdin.setEncoding('utf8');

// Listen for data input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  
  // End the process
  process.exit();
});

// Listen for when stdin ends (Ctrl+D or pipe ends)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});