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

Route.group(() => {

Route.get('/', "HomeController.index")
Route.get("/list", "ListController.index").as("list")
Route.get("/profile/:id", "ProfileController.index").as("profile.show")
Route.post("/profile/:id", "ProfileController.update").as("profile.update")
Route.get("/generate/:id", "GeneratorController.index").as("generator")

})
// .middleware(["legSetter"])

Route.get("/session", "LegSessionController.index").as("legSession.show")
Route.get("/session/:num", "LegSessionController.update").as("legSession.update")
