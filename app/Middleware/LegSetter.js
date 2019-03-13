'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const legs = Config.get("legSession.list")

class LegSetter {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, session, response }, next) {
    console.log(session.get("legSession"));
    if (!session.get("legSession")) {
      session.put("redirect", request.originalUrl())
      return response.route("legSession.show")
    }

    await next()
  }
}

module.exports = LegSetter
