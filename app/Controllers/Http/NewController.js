'use strict'

class NewController {
  async index({view, request}) {
    console.log("NewController.index");
    console.log(request.url());
    // blank data
    let data = {}
    let params = {}
    params.id = ""
    data.last_updated = "New Entry"
    data.Name = "New Entry"
    return view.render("new", {params})
  }
}

module.exports = NewController
