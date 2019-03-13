'use strict'
const Firebase = use("Perafan/FirebaseAdmin")
const legSession 

class LegSessionController {
  async index({view}) {
    let availableSessions = [71,72,73]
    return view.render("session", {availableSessions})
  }

  update({view, session, response, request, params}) {
    session.put("legSession", params.num)

    let redirectUrl = session.get("redirect")
    session.forget("redirect")
    response.redirect(redirectUrl)
  }

  async getSessions() {
    let sessionArr = []

    return sessionArr
  }
}

module.exports = LegSessionController
