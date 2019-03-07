'use strict'
const Firebase = use("Perafan/FirebaseAdmin")

class ProfileController {
  async index({view, params}) {
    let data = await Firebase.getDataById(params.id)

    let selected = this.setDefaults(data)
    return view.render('profile', {data, selected})

    return
  }
  
  async update({request, view, params, response}) {

  let data = request.all()

  delete data._csrf

  data.name = `${data.first} ${data.last}`

  data.tags = Firebase.makeTags(data);

  try {
    await Firebase.updateData(params.id, data)
  } catch (err) {
    console.log(err);
  }

  return response.route("profile", {id:params.id})
  // return view.render('templates.profile', {data})
}


  setDefaults(data) {
  let selected = {}
  switch(data.title) {
    case "Representative":
      selected.representative = "selected"
      selected.senator = ""
      break
    case "Senator":
      selected.representative = ""
      selected.senator = "selected"
      break
  }
  switch (data.party) {
    case "Democrat":
      selected.democrat = "selected"
      selected.republican = ""
      selected.independent = ""
      break
    case "Republican":
      selected.democrat = ""
      selected.republican = "selected"
      selected.independent = ""
      break
    case "Independent":
      selected.democrat = ""
      selected.republican = ""
      selected.independent = "selected"
      break

  }
  return selected
}

}

module.exports = ProfileController
