'use strict'

class HomeController {
  index({view, params}) {
    return view.render("home", {id:params.dfd})
  }
}

module.exports = HomeController
