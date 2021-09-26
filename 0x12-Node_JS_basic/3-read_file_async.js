const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    let data = '';
    const table = {};
    const result = [];
    let field;
    let amount;

    fs.readFile(path, 'utf8', (err, myDB) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      data = myDB
        .toString()
        .split('\n')
        .filter((item) => item)
        .map((data) => data.split(','));

      data = data.slice(1, data.length);

      if (data.length) {
        amount = `Number of students: ${data.length}`;
      } else {
        amount = 'Number of students: 0';
      }
      console.log(amount);
      result.push(amount);

      data.forEach((student) => {
        if (!table[student[3]]) {
          table[student[3]] = [student[0]];
        } else {
          table[student[3]].push(student[0]);
        }
      });
      for (const key of Object.keys(table)) {
        if (key) {
          field = `Number of students in ${key}: ${
            table[key].length
          }. List: ${table[key].join(', ')}`;
          console.log(field);
          result.push(field);
        }
      }
      resolve(result);
    });
  });
}

module.exports = countStudents;
