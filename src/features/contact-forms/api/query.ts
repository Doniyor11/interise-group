import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { sendMessageBot } from "@/features/contact-forms/api/index.ts"

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
