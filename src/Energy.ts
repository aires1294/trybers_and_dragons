export default interface Energy {
  type_: EnergyType;
  amout: number;
}
type EnergyType = 'mana' | 'stamina';

export {
  EnergyType,
};