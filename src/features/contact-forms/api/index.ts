import axios from "axios"

export const sendMessageBot = async (text: string) => {
  const botToken = "8300231243:AAGP3xIDZV2ShuPhp5CYV95dHwpY4PjmYy4"
  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
  const fromData = {
    chat_id: -1003285300843,
    text,
    parse_mode: "HTML",
  }
  const response = await axios.post(telegramUrl, fromData)
  return response.data
}
