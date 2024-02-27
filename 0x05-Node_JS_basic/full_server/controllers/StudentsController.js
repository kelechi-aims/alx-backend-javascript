const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((student) => {
        const rep = ['This is the list of our students'];
        Object.keys(student).sort().forEach((key) => {
          rep.push(`Number of students in ${key}: ${student[key].length}. List: ${student[key].join(', ')}`);
        });
        response.status(200).send(rep.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (['CS', 'SWE'].includes(major)) {
      readDatabase(process.argv[2])
        .then((student) => {
          const rep = [];
          student[major].forEach((firstname) => {
            rep.push(firstname);
          });
          response.status(200).send(`List: ${rep.join(', ')}`);
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
