'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TasksSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.timestamps()
      table.datetime("due_date")
      table.json("user")
      table.string("title", 140)
      table.text("description")
      table.boolean("done").default(0)
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TasksSchema
