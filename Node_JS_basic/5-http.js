const http = require('http');
const fs = require('fs');
const url = require('url');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      
      try {
        // Split into lines and filter out empty lines
        const lines = data.split('\n').filter(line => line.trim() !== '');
        
        // Remove header line
        const students = lines.slice(1);
        
        // Filter out any empty student records
        const validStudents = students.filter(student => student.trim() !== '');
        
        let output = `Number of students: ${validStudents.length}\n`;
        
        // Group students by field
        const fieldGroups = {};
        
        validStudents.forEach(student => {
          const [firstname, lastname, age, field] = student.split(',');
          
          if (field && firstname) {
            if (!fieldGroups[field]) {
              fieldGroups[field] = [];
            }
            fieldGroups[field].push(firstname);
          }
        });
        
        // Build output for each field
        Object.keys(fieldGroups).forEach(field => {
          const students = fieldGroups[field];
          output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });
        
        resolve(output.trim());
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  if (pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    const databasePath = process.argv[2];
    let response = 'This is the list of our students\n';
    
    try {
      const studentData = await countStudents(databasePath);
      response += studentData;
      res.end(response);
    } catch (error) {
      response += 'Cannot load the database';
      res.end(response);
    }
  } else {
    res.end('Hello Holberton School!');
  }
});

// Listen on port 1245
app.listen(1245);

module.exports = app;