'use strict'
const Firebase = use("Perafan/FirebaseAdmin")

class ListController {
  async index({request, response, view, params}) {
    var data = await Firebase.getAll()
    return view.render("list",{data})
  }
}

module.exports = ListController
