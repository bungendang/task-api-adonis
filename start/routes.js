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
Route.get('/tasks', 'TaskController.lists').middleware('auth')
Route.post('/task', 'TaskController.post')
Route.get('/task/:id', 'TaskController.viewById')
Route.put('/task/:id', 'TaskController.editById')
Route.delete('/task/:id', 'TaskController.deleteById')
Route.put('/task/assign/:id', 'TaskController.assignToUserId')

// user router
Route.get('/users', 'UserController.lists')
Route.get('/user/:id', 'UserController.viewById')
Route.put('/user/:id', 'UserController.editById')


// security router
Route.post('/login', 'SecurityController.login')
Route.post('/register', 'SecurityController.register')