import axios, { AxiosError } from "axios"

const AMOCRM_SUBDOMAIN = process.env.AMOCRM_SUBDOMAIN || "interise"

export const amoCRMClient = axios.create({
  baseURL: `https://${AMOCRM_SUBDOMAIN}.amocrm.ru/api/v4`,
  headers: {
    "Content-Type": "application/json",
  },
})

amoCRMClient.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

amoCRMClient.interceptors.response.use(
  (response) => {
    return response
  },
  async (error: AxiosError) => {
    console.error("[amoCRM Client Error]", {
      status: error.response?.status,
      message: error.message,
      url: error.config?.url,
    })
    return Promise.reject(error)
  },
)

export default amoCRMClient
