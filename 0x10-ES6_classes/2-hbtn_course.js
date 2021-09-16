class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /* Name setter and getter */
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  /* length setter and getter */
  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  /* students setter and getter */
  set students(students) {
    if (
      Array.isArray(students)
      && students.every((i) => typeof i === 'string')
    ) {
      this._students = students;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get students() {
    return this._students;
  }
}

export default HolbertonCourse;
