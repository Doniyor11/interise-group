export interface IInitialState {
  requestPresentation: boolean
}

export interface IContactFormsStore extends IInitialState {
  setRequestPresentation: (requestPresentation: boolean) => void
}
