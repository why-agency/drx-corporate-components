export interface RawJob {
  id: number
  pid: number
  type: string
  context: object
  content: Job
}

export interface Job {
  uid: number
  title: string
  city: string
  state: string | null
  postalcode: string
  country: string
  jobtype: string | null
  location: string | null
  businessunit: string | null
  department: string | null
  dept: string | null
  facility: string | null
  ID: string | null
  shifttype: string | null
  adcode: string | null
  compensation: string | null
  recruiterid: string | null
  joblocale: string | null
  clientcustomer: string | null
  customfield1: string | null
  customfield2: string | null
  customfield3: string | null
  customfield4: string | null
  customfield5: string | null
  certification: string | null
  degree: string | null
  education: string | null
  travel: string | null
  productservice: string | null
  experience: string | null
  description: string | null
  brand: string | null
  campaigncode: string | null
  posteddate: string | null
  shift: string | null
  segments: string | null
  url: string | null
}
