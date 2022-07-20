// const LowDb = require('../../../node_modules/lowdb/lib/index')
import * as LowDb from 'lowdb'
export class DiveCondition {
  constructor(
    current,
    surfaceCondition,
    temperature,
  ) {
    this.current = current
    this.surfaceCondition = surfaceCondition
    this.temperature = temperature
  }
}

export class DiveConditionHandlers {
  // Use JSON file for storage
  static adapter = new LowDb.JSONFile('./diveConditions.json')
  static database = new LowDb.Low(this.adapter)
  
  // Read data from JSON file, this will set db.data content
  static async build () {
    await this.database.read()
  }

  static readDiveConditions = async () => {
    return this.database.data
  }

  static postDiveConditions = async (diveCondition) => {
    const diveConditions = this.database.data

    diveConditions.push(diveCondition)

    await this.database.write()
  }
}

