import { PassiveScript, PassiveFunc } from "../PassiveScript"
import { CommitGuide, get_commitresponse } from "../CommitGuide"

let interval: number = 60*1000
let script: PassiveFunc = function(bot: CommitGuide) {
    console.log(`60k ms have passed, and I am ${bot.user.username}!`)
}

module.exports = new PassiveScript(script, interval)
