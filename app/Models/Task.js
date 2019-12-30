'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
    static get dates() {
        return super.dates.concat(['due_date'])
    }
    
    static castDates(field, value) {
        if (field === 'due_date') {
            return value.format('DD-MM-YYYY HH:mm:ss')
        }
    }
}

module.exports = Task
