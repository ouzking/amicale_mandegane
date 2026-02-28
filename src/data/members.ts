import faty from '../assets/22.jpeg';
import ouz from '../assets/5.jpeg';




export interface Member {
  id: string
  fullName: string
  photo: string
  section: "dakar" | "ziguinchor"
  position: string
  role: string
  expertise: string
  bio: string
  email?: string
  phone?: string
  linkedin?: string
}

export const members: Member[] = [
 {
    id: "1",
    fullName: "Mariama Faty",
    photo: faty,
    section: "dakar",
    position: "Présidente",
    role: "Bureau Exécutif",
    expertise: "Ingénierie",
    bio: "Génie en maintenance informatique passionnée par l’innovation technologique.",
    email: "mariamafaty@gmail.com",
    phone: "771790961",
    linkedin: "https://linkedin.com",
  },
  {
    id: "2",
    fullName: "Moussa Sagna",
    photo:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
    section: "dakar",
    position: "Vice-Président",
    role: "Bureau Exécutif",
    expertise: "QHSE",
    bio: "Spécialiste Qualité Hygiène Sécurité Environnement.",
    email: "moussasagna@gmail.com",
    phone: "782624487",
  },

  {
    id: "3",
    fullName: "Ousmane Bodian",
    photo:
      ouz,
    section: "dakar",
    position: "Secrétaire Général",
    role: "Bureau Exécutif",
    expertise: "Développeur Full Stack",
    bio: "Ingénieur génie logiciel passionné par l’innovation.",
    email: "bodian@gmail.com",
    phone: "774378558",
  },

  {
    id: "4",
    fullName: "Fabacary Sané",
    photo:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
    section: "ziguinchor",
    position: "Coordonnateur",
    role: "Bureau Exécutif",
    expertise: "Médecine",
    bio: "Professionnel engagé pour l’accès aux soins.",
    email: "sane@gmail.com",
    phone: "782212455",
  },
  {
    id: "5",
    fullName: "Astou Sané",
    photo:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
    section: "ziguinchor",
    position: "Président d'organisation",
    role: "Commissions Thématiques",
    expertise: "Infirmière",
    bio: "Professionnel engagé pour l’accès aux soins.",
  },
  {
    id: "6",
    fullName: "Vieux Malang Bodian",
    photo:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
    section: "dakar",
    position: "Trésorier",
    role: "Bureau Exécutif",
    expertise: "Géographe",
    bio: "Professionnel engagé pour l’accès au climat, à la territoire et tout ce qui bouge de la geographie.",
  },
  {
    id: "7",
    fullName: "Ismaïla Diedhiou",
    photo:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
    section: "ziguinchor",
    position: "Vice-Coordonnateur",
    role: "Bureau Exécutif",
    expertise: "Infirmier",
    bio: "Professionnel engagé pour l’accès aux soins.",
  },
  {
    id: "8",
    fullName: "Maïmouna Bodian",
    photo:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
    section: "dakar",
    position: "Responsable Evénementiel",
    role: "Commissions Thématiques",
    expertise: "CEO Kids Shop",
    bio: "Professionnel engagé pour l’innovation.",
  },
  {
    id: "9",
    fullName: "Adama Badji",
    photo:
      "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
    section: "dakar",
    position: "President d'organisation",
    role: "Commissions Thématiques",
    expertise: "Electricien",
    bio: "Professionnel engagé pour l’accès au develeppement et à l'innovation de la commune.",
  },
]
