const {Bot} = require("grammy")
const {exec} = require("child_process")

const bot = new Bot("5732984552:AAFp2fORglM3xfcb3x16quQLhOlmw-bXsok")

bot.on("message", ctx => {
  if(ctx.message.text === "shutdown") {
    exec("shutdown now")
  }
})

bot.start()