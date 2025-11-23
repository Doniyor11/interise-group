export interface IInitialState {
  requestPresentation: boolean
  researchForm: string | null
}

export interface IContactFormsStore extends IInitialState {
  setRequestPresentation: (requestPresentation: boolean) => void
  setResearchForm: (researchForm: string | null) => void
}
