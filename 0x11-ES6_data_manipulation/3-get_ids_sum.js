function getStudentIdsSum(students) {
  return students.reduce((ac, cu) => cu.id + ac, 0);
}

export default getStudentIdsSum;
