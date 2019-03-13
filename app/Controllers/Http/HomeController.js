'use strict'

class HomeController {
  index({view, params}) {
    console.log("HomeController.index");
    return view.render("home", {id:params.dfd})
  }
}

module.exports = HomeController
