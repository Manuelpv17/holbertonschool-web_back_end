function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((st) => st.location === city)
    .map((student) => {
      let grade = newGrades.filter((grade) => grade.studentId === student.id);
      if (grade[0]) {
        grade = grade[0].grade;
      } else {
        grade = 'N/A';
      }

      return {
        ...student,
        grade,
      };
    });
}

export default updateStudentGradeByCity;
