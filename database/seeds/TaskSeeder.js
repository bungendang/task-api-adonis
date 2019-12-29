'use strict'

/*
|--------------------------------------------------------------------------
| TaskSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class TaskSeeder {
  async run () {
    const usersArray = await Factory
      .model('App/Models/Task')
      .createMany(20)
  }
}

module.exports = TaskSeeder
