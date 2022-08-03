type Role = 'parent' | 'teacher' | 'admin'
export type Type = 'button' | 'submit' | 'reset' | undefined
export type RequesTeacherButtonText = 'Request' | 'Requested'

export interface User {
  created_at: string
  email: string
  email_verified_at: string
  id: number
  name: string
  phone: string
  subjects: string
  profile: string
  profile_picture: null | any
  role: Role
  updated_at: string
}

export interface Parent extends User {}

export interface Teacher extends User {}

export interface Credentials {
  created_at: string
  dbs_certificate: string
  dbs_certificate_isverified: number
  educational_qualification: string
  educational_qualification_isverified: number
  email: string
  id: number
  name: string
  national_insurance_number: string
  national_insurance_number_isverified: number
  passport_id_or_driver_license: string
  passport_id_or_driver_license_isverified: number
  passport_photo: string
  passport_photo_isverified: number
  permit_or_id: null
  permit_or_id_isverified: number
  phone: string
  proof_of_address: string
  proof_of_address_isverified: number
  qts: string
  qts_isverified: number
  ref_email: string
  ref_name: string
  ref_organisation: string
  ref_phone: string
  ref_position: string
  ref_relationship: string
  right_to_work: string
  right_to_work_isverified: number
  signature: null
  updated_at: string
  verified: number
}

export interface Requests {
  created_at: string
  id: number
  parent_email: string
  parent_id: number
  parent_name: string
  parent_phone: string
  teacher_email: string
  teacher_id: number
  teacher_name: string
  teacher_phone: string
  updated_at: string
}
