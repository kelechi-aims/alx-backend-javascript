const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    response.status(200).send('This is the list of our students\n');
    readDatabase(process.argv[2])
      .then((student) => {
        Object.keys(student).sort().forEach((key) => {
          response.write(`Number of students in ${key}: ${student[key].length}. List: ${student[key].join(', ')}`);
        });
        response.end();
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params;
    if (['CS', 'SWE'].includes(major)) {
      readDatabase(process.argv[2])
        .then((student) => {
          const rep = student[major] ? student[major].join(', ') : '';
          response.status(200).send(`List: ${rep}\n`);
        })
        .catch(() => {
          response.status(500).send('Cannot load the database');
        });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
