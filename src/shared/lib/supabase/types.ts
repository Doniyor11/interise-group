// Database types for Supabase tables

export interface OAuthToken {
  id: number
  provider: string
  access_token: string
  refresh_token: string
  expires_at: number // Unix timestamp in milliseconds
  created_at: string
  updated_at: string
}

export type OAuthTokenInsert = Omit<
  OAuthToken,
  "id" | "created_at" | "updated_at"
>
export type OAuthTokenUpdate = Partial<OAuthTokenInsert>
