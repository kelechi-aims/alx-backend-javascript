const http = require('http');
const fs = require('fs');

const port = 1245;

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
        let message = `Number of students: ${studentData.length}`;

        Object.entries(fieldCounts).forEach(([field, count]) => {
          const firstNames = studentData.filter((line) => line.split(',')[3] === field).map((line) => line.split(',')[0]);
          message = message.concat(`\nNumber of students in ${field}: ${count}. List: ${firstNames.join(', ')}`);
        });
        resolve(message);
      }
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    await countStudents(process.argv[2])
      .then((message) => {
        res.end(`${message}`);
      })
      .catch((error) => {
        res.end(error.message);
      });
  }
  res.statusCode = 404;
  res.end();
});

app.listen(port);

module.exports = app;
