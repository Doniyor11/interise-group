import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { sendToAmoCRM } from "@/features/contact-forms/api/amocrm"
import { sendMessageBot } from "@/features/contact-forms/api/index.ts"

import { SubmitParams } from "@/shared/lib/amocrm/types"

export const useSendMessageQuery = (onSuccess: () => void) => {
  return useMutation({
    mutationFn: (text: string) => sendMessageBot(text),
    onSuccess: () => {
      toast.success("Сообщение отправлено!")
      onSuccess && onSuccess()
    },
    onError: (data: any) => {
      toast.error(data?.message)
    },
  })
}

export const useSubmitFormQuery = (onSuccess: () => void) => {
  return useMutation({
    mutationFn: async ({ message, formData }: SubmitParams) => {
      const results = await Promise.allSettled([
        sendMessageBot(message),
        sendToAmoCRM(formData),
      ])

      return {
        telegram: results[0],
        amocrm: results[1],
      }
    },
    onSuccess: (results) => {
      const hasSuccess =
        results.telegram.status === "fulfilled" ||
        results.amocrm.status === "fulfilled"

      if (hasSuccess) {
        toast.success("Сообщение отправлено!")
        onSuccess && onSuccess()
      } else {
        toast.error("Ошибка отправки. Попробуйте позже.")
      }

      if (results.telegram.status === "rejected") {
        console.warn("[Telegram]", results.telegram.reason)
      }
      if (results.amocrm.status === "rejected") {
        console.warn("[amoCRM]", results.amocrm.reason)
      }
    },
    onError: () => {
      toast.error("Ошибка отправки")
    },
  })
}
