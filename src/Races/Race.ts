export default abstract class Race {
  private _name: string;
  private _dexterity: string;

  constructor(
    name: string,
    dexterity: string,
  ) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number; 

  static createdRacesInstances(): void {
    throw new Error('Not implemented');
  }
}