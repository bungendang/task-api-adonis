'use strict'
/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
    return {
        username: faker.username(),
        full_name: faker.name(),
        email: faker.email(),
        password: await Hash.make(faker.password())
    }
})

Factory.blueprint('App/Models/Task', async (faker) => {
    return {
      due_date: faker.date(),
      title: faker.sentence({ words: 8 }),
      description: faker.paragraph({ sentences: 1 }),
      done: faker.bool()
    }
  })