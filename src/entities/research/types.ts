export interface IGetResearches {
  id: number
  title: string
  description: string
  image: string
  link: string
  disable_date: any
  disabled: boolean
  created_at: string
  updated_at: string
}

export interface IResearchParams {
  lang?: string
  month?: string
  year?: string
}
