export interface ICaseParams {
  lang?: string
  search?: string
  category?: number
  for_main?: boolean
}

export interface IGetCases {
  id: number
  companyRank: string
  country: string
  industry: string
  title: string
  task: string
  solution: string
  results: Result[]
  category: ICategory
  forMain: boolean
  created_at: string
  updated_at: string
}

export interface Result {
  text: string
}

export interface ICategory {
  id: number
  name: string
}
