import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { useFormModalStore } from "@/widgets/form-modal/model"

import { sendMessageBot } from "@/features/contact-forms/api/index.ts"

export const useSendMessageQuery = (onSuccess: () => void) => {
  const { openModal, setOpenModal } = useFormModalStore()
  return useMutation({
    mutationFn: (text: string) => sendMessageBot(text),
    onSuccess: () => {
      toast.success("Xabar yuborildi!")
      onSuccess && onSuccess()
      if (openModal) {
        setOpenModal(false)
      }
    },
    onError: (data: any) => {
      toast.error(data?.message)
    },
  })
}
