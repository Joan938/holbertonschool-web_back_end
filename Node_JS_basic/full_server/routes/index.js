import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const databasePath = process.argv[2];
      const students = await readDatabase(databasePath);
      
      let output = 'This is the list of our students\n';
      
      // Sort fields alphabetically (case insensitive)
      const sortedFields = Object.keys(students).sort((a, b) => 
        a.toLowerCase().localeCompare(b.toLowerCase())
      );
      
      sortedFields.forEach(field => {
        const studentList = students[field].join(', ');
        output += `Number of students in ${field}: ${students[field].length}. List: ${studentList}\n`;
      });
      
      response.status(200).send(output.trim());
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const { major } = request.params;
      
      if (major !== 'CS' && major !== 'SWE') {
        response.status(500).send('Major parameter must be CS or SWE');
        return;
      }
      
      const databasePath = process.argv[2];
      const students = await readDatabase(databasePath);
      
      if (students[major]) {
        const studentList = students[major].join(', ');
        response.status(200).send(`List: ${studentList}`);
      } else {
        response.status(200).send('List: ');
      }
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;