const Jimp = require("jimp")


class Generator {
  constructor(Config) {
    this.config = require("./template.json")
    this.init = false
  }
  async getConfig(config) {


    this.template = config.template

    this.locPortrait = config.location.portrait
    this.locDistrict = config.location.district
    this.locName = config.location.name
    this.locVoting = config.location.voting
    this.locRhetoric = config.location.rhetoric
    this.locDonation = config.location.donation
    this.locUpdated = config.location.updated
    this.portraitScale = config.portrait_scale

    this.nameFont = await Jimp.loadFont(config.fonts.name_font.file)
    this.districtFont = await Jimp.loadFont(config.fonts.district_font.file)
    this.updatedFont = await Jimp.loadFont(config.fonts.updated_font.file)
    this.gradeFont = await Jimp.loadFont(config.fonts.grade_font.file)
    this.init = true
  }

  async makeReportCard(data) {
    if (!this.init) {
      await this.getConfig(this.config)
    }
    var portraitPromise = Jimp.read(data.img_link)  // TODO: get img from online
    var templatePromise = Jimp.read("App/report_card_generator/kcggrading_blank.png")


    return Promise.all([portraitPromise, templatePromise])
    .then(async(result) => {
      let scaledPortrait = result[0].cover(this.portraitScale.x, this.portraitScale.y)
      let reportCard = this.combineIMG(scaledPortrait, result[1])
      let card = this.printText(reportCard, data)
      let mime_card = await card.getBufferAsync(Jimp.MIME_JPEG)
      return mime_card
    })
    .catch(err => console.error(err))
  }

  combineIMG(portrait, base) {
    // portrait.mask(base, -58, -62)
    return base.composite(portrait, this.locPortrait.x, this.locPortrait.y, {mode:Jimp.BLEND_DESTINATION_OVER})
  }

  printText(templateObj, data) {
    let date = "February 2, 2019"
    let updatedStr = `Updated: ${date}`
    let d = Jimp.measureText(this.updatedFont, `Updated: ${date}`)

    switch (data.title) {
      case "Representative":
        var districtStr = "House District "
        break
      case "Senator":
        var districtStr = "Senate District "
        break
    }

    return templateObj
    .print(this.districtFont, this.locName.x, this.locName.y, data.name)
    .print(this.updatedFont, this.locUpdated["-x"]-d, this.locUpdated.y,  updatedStr)
    .print(this.nameFont, this.locDistrict.x, this.locDistrict.y, districtStr+data.district)
    .print(this.gradeFont, this.locVoting.x, this.locVoting.y, data.grades.Voting)
    .print(this.gradeFont, this.locRhetoric.x, this.locRhetoric.y, data.grades.Rhetoric)
    .print(this.gradeFont, this.locDonation.x, this.locDonation.y, data.grades.Donation)

  }

}

module.exports = new Generator()
