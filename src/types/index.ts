export type Section = 'dakar' | 'ziguinchor';

export interface Member {
  id: string;
  fullName: string;
  photo: string;
  section: Section;
  position: string;
  role: string;
  expertise: string;
  bio: string;
  email?: string;
   phone?: string 
  linkedin?: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  section: Section;
  description: string;
  objectives: string[];
  impact: string;
  heroImage: string;
  gallery: string[];
  date?: string;
  location?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  category: 'strategic' | 'sponsor' | 'institutional';
  description: string;
  website?: string;
  collaboration: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PartnershipRequest {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  partnershipType: string;
  message: string;
}
