import { AmoCRMContact, AmoCRMLead, FormSubmissionData } from "./types"

export function normalizePhoneNumber(phone: string): string {
  return phone.replace(/[\s\(\)\-]/g, "")
}

export function mapToAmoCRMContact(
  formData: FormSubmissionData,
): AmoCRMContact {
  const fullName = formData.surname
    ? `${formData.name} ${formData.surname}`
    : formData.name

  const custom_fields_values = [
    {
      field_id: 579579,
      values: [
        {
          value: normalizePhoneNumber(formData.phone),
        },
      ],
    },
  ]

  if (formData.telegram) {
    custom_fields_values.push({
      field_id: 882527,
      values: [{ value: formData.telegram }],
    })
  }

  if (formData.company) {
    custom_fields_values.push({
      field_id: 909544,
      values: [{ value: formData.company }],
    })
  }

  if (formData.contactMethod) {
    custom_fields_values.push({
      field_id: 909536,
      values: [{ value: formData.contactMethod }],
    })
  }

  if (formData.source) {
    custom_fields_values.push({
      field_id: 909538,
      values: [{ value: formData.source }],
    })
  }

  if (formData.event) {
    custom_fields_values.push({
      field_id: 909542,
      values: [{ value: formData.event }],
    })
  }

  return {
    name: fullName,
    custom_fields_values,
  }
}

export function mapToAmoCRMLead(
  formData: FormSubmissionData,
  contactId?: number,
): AmoCRMLead {
  let leadName = ""

  if (formData.event) {
    leadName = `Event: ${formData.event} - ${formData.name}`
  } else if (
    formData.source.includes("Research") ||
    formData.source === "Исследования"
  ) {
    leadName = `Research - ${formData.name}`
  } else if (
    formData.source.includes("Presentation") ||
    formData.contactMethod === "Презентация"
  ) {
    leadName = `Presentation - ${formData.name}`
  } else {
    const fullName = formData.surname
      ? `${formData.name} ${formData.surname}`
      : formData.name
    leadName = `Website - ${fullName} (${formData.source})`
  }

  const lead: AmoCRMLead = {
    name: leadName,
    price: 0,
    pipeline_id: 8205458,
    status_id: 82417030,
  }

  if (contactId) {
    lead._embedded = {
      contacts: [{ id: contactId }],
    }
  }

  return lead
}
