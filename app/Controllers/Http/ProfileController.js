'use strict'
const Firebase = use("Perafan/FirebaseAdmin")

class ProfileController {
  async index({view, params, request}) {
    console.log(request.url());
    console.log("ProfileController.index");
    console.log("index ", params.id);
    let data = await Firebase.getDataById(params.id)
    try {
      data.last_updated = data.last_updated.toDate()
    } catch (err){

    }

    let selected = this.setDefaults(data)
    return view.render('profile', {data, selected})

    return
  }

  async update({request, view, params, response}) {
  console.log("ProfileController.update");
  console.log("update ", params.id);
  let data = request.all()

  delete data._csrf

  data.name = `${data.first} ${data.last}`

  data.tags = Firebase.makeTags(data);
  console.log(data);

  try {
    await Firebase.updateData(params.id, data)
  } catch (err) {
    console.log(err);
    return
  }
  data = await Firebase.getDataById(params.id)
  try {
    data.last_updated = data.last_updated.toDate()
  } catch (err){

  }
  let selected = this.setDefaults(data)
  // return response.route("profile.show", {id:params.id})
  return view.render('profile', {data, selected})
}


  setDefaults(data) {
  let selected = {}
  selected.donation = {}
  selected.rhetoric = {}
  selected.voting = {}
  switch(data.title) {
    case "Representative":
      selected.representative = "selected"
      break
    case "Senator":
      selected.senator = "selected"
      break
  }
  switch (data.party) {
    case "Democrat":
      selected.democrat = "selected"
      break
    case "Republican":
      selected.republican = "selected"
      break
    case "Independent":
      selected.independent = "selected"
      break

  }
  switch (data.grades.Donation) {
    case "A":
      selected.donation.A = "checked"
      break
    case "B":
      selected.donation.B = "checked"
      break
    case "C":
      selected.donation.C = "checked"
      break
    case "D":
      selected.donation.D = "checked"
      break
    case "F":
      selected.donation.F = "checked"
      break
    case " " || null || undefined:
      selected.donation.None = "checked"
      break
  }
  switch (data.grades.Rhetoric) {
    case "A":
      selected.rhetoric.A = "checked"
      break
    case "B":
      selected.rhetoric.B = "checked"
      break
    case "C":
      selected.rhetoric.C = "checked"
      break
    case "D":
      selected.rhetoric.D = "checked"
      break
    case "F":
      selected.rhetoric.F = "checked"
      break
    case " " || null || undefined:
      selected.rhetoric.None = "checked"
      break
  }
  switch (data.grades.Voting) {
    case "A":
      selected.voting.A = "checked"
      break
    case "B":
      selected.voting.B = "checked"
      break
    case "C":
      selected.voting.C = "checked"
      break
    case "D":
      selected.voting.D = "checked"
      break
    case "F":
      selected.voting.F = "checked"
      break
    case " " || null || undefined:
      selected.voting.None = "checked"
      break
  }
   return selected
}

}

module.exports = ProfileController
