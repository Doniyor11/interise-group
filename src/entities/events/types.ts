export interface IGetEvents {
  id: number
  title: string
  description: string
  url: string
  image: string
  created_at: string
  updated_at: string
}

export interface IGetUpcomingEvents {
  id: number
  title: string
  description: string
  label: string
  date: string
  image: string
  created_at: string
  updated_at: string
  location: string
}
