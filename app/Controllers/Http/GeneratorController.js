'use strict'
const Generator = use("App/report_card_generator/report_card_creator")
const Firebase = use("Perafan/FirebaseAdmin")

class GeneratorController {
  async index({params, response}) {
    let data = await Firebase.getDataById(params.id);
    let imgBuffer = await Generator.makeReportCard(data)
    response.type("image/jpeg")

    let filename = `${data.name}_${data.title.slice(0,3)}_${data.district}_${data.last_updated}`
    response.header("Content-Disposition", `attachment; filename=${filename}.jpg`)
    return response.send(await Generator.makeReportCard(data))
  }
}

module.exports = GeneratorController
