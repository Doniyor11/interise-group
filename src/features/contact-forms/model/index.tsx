import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { IContactFormsStore, IInitialState } from "./types.ts"

const initialState: IInitialState = {
  requestPresentation: false,
  researchForm: null,
}

export const useContactFormsStore = create<IContactFormsStore>()(
  devtools((set) => ({
    ...initialState,
    setRequestPresentation: (e) => {
      set({ requestPresentation: e })
    },
    setResearchForm: (e) => {
      set({ researchForm: e })
    },
  })),
)
