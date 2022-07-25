const { Low, JSONFile } = require('lowdb')

class DiveEquipment {
  constructor(
   regulator,
   wetsuit,
   tank,
   fin,
   weights,
   mask,
   snorkel,
  ) {
    this.regulator = regulator
    this.wetsuit = wetsuit
    this.tank = tank
    this.fin = fin
    this.weights = weights
    this.mask = mask
    this.snorkel = snorkel
  }
}

export class DiveEquipmentHandlers {
  // Use JSON file for storage
  static adapter = new JSONFile('./diveEquipment.json')
  static database = new Low(this.adapter)
  
  // Read data from JSON file, this will set db.data content
  static async build () {
    await this.database.read()
  }

  static readDiveEquipment = async () => {
    return this.database.data
  }

  static postDiveEquipment = async (de) => {
    const DiveEquipment = this.database.data

    DiveEquipment.push(de)

    await this.database.write()
  }
}
