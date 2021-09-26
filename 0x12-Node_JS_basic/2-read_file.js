const fs = require('fs');

function countStudents(path) {
  let myDB;
  let data = '';
  const table = {};

  try {
    myDB = fs.readFileSync(path);
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  data = myDB
    .toString()
    .split('\n')
    .filter((item) => item)
    .map((data) => data.split(','));

  data = data.slice(1, data.length);

  if (data.length) {
    console.log(`Number of students: ${data.length}`);
  } else {
    console.log('Number of students: 0');
  }

  data.forEach((student) => {
    if (!table[student[3]]) {
      table[student[3]] = [student[0]];
    } else {
      table[student[3]].push(student[0]);
    }
  });
  for (const key of Object.keys(table)) {
    if (key) {
      console.log(
        `Number of students in ${key}: ${table[key].length}. List: ${table[
          key
        ].join(', ')}`,
      );
    }
  }
}

module.exports = countStudents;
