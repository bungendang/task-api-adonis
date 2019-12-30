'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    // faker user
    // const userArray = await Factory
    //   .model('App/Models/User')
    //   .createMany(3)

    const user1 = new User()
      user1.full_name = 'Mamat M'
      user1.password = 'passwordmamat'
      user1.username = 'mamatm'
      user1.email = 'mamatm@mailbox.com'
      await user1.save()
    const user2 = new User()
      user2.full_name = 'Bambang B'
      user2.password = 'passwordbambang'
      user2.username = 'bambangb'
      user2.email = 'bambangb@mailbox.com'
      await user2.save()
  }
}

module.exports = UserSeeder
