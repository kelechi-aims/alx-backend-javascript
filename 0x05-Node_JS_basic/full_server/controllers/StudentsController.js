const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        const res = ['This is the list of our students'];
        Object.keys(data).sort().forEach((key) => {
          res.push(`Number of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}`);
        });
        response.status(200);
        response.send(res.join('\n'));
      })
      .catch(() => {
        response.status(500);
        response.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (['CS', 'SWE'].includes(major)) {
      readDatabase(process.argv[2])
        .then((data) => {
          const res = [];
          data[major].forEach((names) => {
            res.push(names);
          });
          response.status(200);
          response.send(`List: ${res.join(', ')}`);
        })
        .catch(() => {
          response.status(500);
          response.send('Cannot load the database');
        });
    } else {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
