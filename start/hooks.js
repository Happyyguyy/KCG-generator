const {hooks} = require("@adonisjs/ignitor")

hooks.after.providersBooted(() => {
  const Config = use('Adonis/Src/Config')

  const legConfig = Config.get("legSession")
  const View = use("View")

  View.global("availableSessions", legConfig.sessions)
  View.global("currentSession", legConfig.currentSession)
})
