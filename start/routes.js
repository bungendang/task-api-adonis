'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// task router
Route.get('/tasks', 'TaskController.lists')
Route.post('/task', 'TaskController.post')
Route.get('/task/:id', 'TaskController.viewById')
Route.put('/task/:id', 'TaskController.editById')
Route.delete('/task/:id', 'TaskController.deleteById')
Route.post('/task/assign/:id', 'TaskController.assignToUserId')

// user router
