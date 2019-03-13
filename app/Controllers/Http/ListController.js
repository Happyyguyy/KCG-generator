'use strict'
const Firebase = use("Perafan/FirebaseAdmin")
const DB = Firebase.db

class ListController {
  async index({request, response, view, params}) {
    var data = false

    let district = "State"
    let {session, house, party, sort} = request.get("session")

    if (Object.keys(request.get()).length != 0) {
      data = await this.getList(district, session, house, party)
    }
    // var data = require("../../../data.json")
    return view.render("list",{data})
  }

  async getList(district="State", legNum=71, house="both", party="all") {
    //check if legNum is string else make string
    if (typeof(legNum) != "string") {
      legNum = String(legNum);
    }

    var data = [];
    // get district
    if (district == "all") {
      var districtRef = await DB.listCollections()
    } else {
      var districtRef = await [DB.collection(district)]
    }
    console.log("districtRef ", districtRef);

    let legNumRef = []
    for (let each of districtRef) {
      if (legNum == "all") {
        legNumRef = legNumRef.concat(await each.listDocuments())
      } else {
        legNumRef = legNumRef.concat(await each.doc(legNum))
      }
    }
    console.log("legNumRef ", legNumRef);

    let houseRef = []
    for (let each of legNumRef) {
      if (house == "both") {
        houseRef = houseRef.concat(await each.getCollections())
      } else {
        houseRef = houseRef.concat(await each.collection(house))
      }
    }
    console.log("houseRef ", houseRef);

    let legRef = []
    for (let each of houseRef) {
      if (party != "all") {
        let query = await each.where("party", "==", party)
        var querySnapshot = await query.get()
      } else {
        var querySnapshot = await each.get()
      }
      legRef = legRef.concat(await querySnapshot.docs)
    }
    console.log("legRef ", legRef);

    for (let each of legRef) {
      let docData = await each.data()
      data.push(docData)
    }

    return data;
  }
}

module.exports = ListController
