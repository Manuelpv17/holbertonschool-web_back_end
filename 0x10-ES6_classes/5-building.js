class Building {
  constructor(sqft) {
    this.sqft = sqft;

    if (
      this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  /* amount setter and getter */
  set sqft(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

export default Building;
