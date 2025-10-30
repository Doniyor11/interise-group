import axios from "axios"

export const sendMessageBot = async (text: string) => {
  const botToken = "8345625974:AAEiHYRvsxsIV6gCSP5K1y8aMltcIvQnx-E"
  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
  const fromData = {
    chat_id: -4930149078,
    text,
    parse_mode: "HTML",
  }
  const response = await axios.post(telegramUrl, fromData)
  return response.data
}
