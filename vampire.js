class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
    return this.offspring;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    let numOfOffspring = 0;
    for (let child of this.offspring) {
      numOfOffspring++;
    }
    return numOfOffspring;

  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numAway = 0

    while (this.creator) {
      numAway++;
      this.creator = this.creator.creator;
    }

    return numAway;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal > vampire.numberOfVampiresFromOriginal) {
      return false;
    }
    return true;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    
  }
}

module.exports = Vampire;

