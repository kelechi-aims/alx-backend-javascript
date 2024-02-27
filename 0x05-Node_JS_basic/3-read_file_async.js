const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n').filter((line) => line.trim() !== '');
        const fieldCounts = {};
        const studentData = lines.slice(1);
        studentData.forEach((line) => {
          const fields = line.split(',');
          if (fields.length === 4) {
            const field = fields[3];
            fieldCounts[field] = (fieldCounts[field] || 0) + 1;
          }
        });
        console.log(`Number of students: ${studentData.length}`);

        Object.entries(fieldCounts).forEach(([field, count]) => {
          const firstNames = studentData.filter((line) => line.split(',')[3] === field).map((line) => line.split(',')[0]);
          console.log(`Number of students in ${field}: ${count}. List: ${firstNames.join(', ')}`);
        });
        resolve();
      }
    });
  });
}

module.exports = countStudents;
