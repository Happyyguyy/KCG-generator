'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')



Route.post("/profile/:id", "ProfileController.update").as("profile.update")
// Route.get("/new", "NewController.index").as("new.show")
Route.get('/', "HomeController.index").as("home")
Route.get("/list", "ListController.index").as("list")
Route.get("/profile/:id", "ProfileController.index").as("profile.show")
Route.get("/generate/:id", "GeneratorController.index").as("generator")
