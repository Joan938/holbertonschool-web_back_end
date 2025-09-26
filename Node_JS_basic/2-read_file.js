const fs = require('fs');

function countStudents(path) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(path, 'utf8');
    
    // Split into lines and filter out empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');
    
    // Remove header line
    const students = lines.slice(1);
    
    // Filter out any empty student records
    const validStudents = students.filter(student => student.trim() !== '');
    
    console.log(`Number of students: ${validStudents.length}`);
    
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
    
    // Display results for each field
    Object.keys(fieldGroups).forEach(field => {
      const students = fieldGroups[field];
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
    
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;