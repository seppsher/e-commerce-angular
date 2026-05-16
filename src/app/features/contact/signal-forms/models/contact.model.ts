export interface ContactFormModel {
  name: string;
  lastName: string;
  message: string;
  isCompany: boolean;
  companyName: string;
  contact: Contact[];
  topic: string;
  rodoConsent: boolean;
}

export interface Contact {
  email: string;
  phone: string;
}
