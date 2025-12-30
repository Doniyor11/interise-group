// amoCRM API Types

export interface OAuthTokenResponse {
  token_type: string
  expires_in: number
  access_token: string
  refresh_token: string
}

export interface CustomFieldValue {
  field_id: number
  values: Array<{ value: string; enum_id?: number }>
}

export interface AmoCRMContact {
  name: string
  custom_fields_values?: CustomFieldValue[]
}

export interface AmoCRMLead {
  name: string
  price?: number
  pipeline_id?: number
  status_id?: number
  custom_fields_values?: CustomFieldValue[]
  _embedded?: {
    contacts?: Array<{ id: number }>
  }
}

export interface AmoCRMContactResponse {
  _embedded: {
    contacts: Array<{
      id: number
      name: string
    }>
  }
}

export interface AmoCRMLeadResponse {
  _embedded: {
    leads: Array<{
      id: number
      name: string
    }>
  }
}

export interface FormSubmissionData {
  name: string
  surname?: string
  phone: string
  contactMethod?: string
  company?: string
  telegram?: string
  event?: string
  source: string
  newsletterConsent?: boolean
}

export interface SubmitParams {
  message: string
  formData: FormSubmissionData
}

export interface TokenCache {
  accessToken: string
  expiresAt: number
}
