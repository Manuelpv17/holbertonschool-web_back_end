function getStudentsByLocation(students, city) {
  return students.filter((x) => x.location === city);
}

export default getStudentsByLocation;
