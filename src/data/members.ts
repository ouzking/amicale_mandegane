import faty from '../assets/fatty.jpeg';
import sire from '../assets/Siré.jpeg';
import seydou from '../assets/seydouu.jpeg';
import sarata from '../assets/Sarataaa.jpeg';
import preira from '../assets/preiraa.jpeg';
//import oumy from '../assets/oumy.jpeg';
//import moussa from '../assets/moussa.jpeg';
import mounzi from '../assets/mounzzi.jpeg';
import gnima from '../assets/gnima.jpeg';
import fai from '../assets/Faï.jpeg';
import bintaY from '../assets/bintayoff.jpeg';
import ouz from '../assets/ouz bodian.png';
import adamaa from '../assets/adamaa.jpeg';
import diatou from '../assets/diatou.jpeg';
import bintaD from '../assets/binta AEEOM.jpeg';
import pisko from '../assets/pisko.jpeg';
import samateh from '../assets/sagoudi.jpeg';
import yaya from '../assets/yaya.jpeg';
import lang from '../assets/lang.jpeg';
import mamita from '../assets/PRESI.jpeg';
import adja from '../assets/adjja.jpeg';
import moustaph from '../assets/moustaph.jpeg';
import chef from '../assets/chef.jpeg';
import diarrasané from '../assets/diarrasané.jpeg';
import asssané from '../assets/asssané.jpeg';
import sadio from '../assets/sadio.jpeg';
import mariamad from '../assets/mariamad.jpeg';












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
  expertise: "Ingénierie et Maintenance Informatique",
  bio: "Ingénieure spécialisée en maintenance informatique, Mariama Faty assure la présidence de l’AEEOM avec une vision axée sur l’innovation, la structuration organisationnelle et le développement d’initiatives à fort impact communautaire.",
  email: "fatymariama2508@gmail.com",
  phone: "771790961",
},

//{
  //id: "2",
  //fullName: "Fabacary Sané",
  //photo: "https://cdn.pixabay.com/photo/2022/08/06/11/02/black-man-7368408_960_720.jpg",
  //section: "ziguinchor",
  //position: "Coordonnateur Général",
  //role: "Bureau Exécutif",
  //expertise: "Médecine",
  //bio: "Professionnel de santé engagé, Fabacary Sané coordonne les initiatives sanitaires et les projets communautaires visant à améliorer l’accès aux soins et le bien-être des populations.",
  //email: "sane@gmail.com",
  //phone: "782212455",
//},

//{
  //id: "3",
  //fullName: "Moussa Sagna",
  //photo: moussa,
  //section: "dakar",
  //position: "Vice-Président",
  //role: "Bureau Exécutif",
  //expertise: "Qualité Hygiène Sécurité Environnement (QHSE)",
  //bio: "Spécialiste en QHSE, Moussa Sagna contribue au renforcement des bonnes pratiques organisationnelles et au développement stratégique des activités de l’association.",
  //email: "moussasagna@gmail.com",
  //phone: "782624487",
//},

//{
  //id: "4",
  //fullName: "Ismaïla Diedhiou",
  //photo: "https://miro.medium.com/v2/resize:fit:2400/1*28tJCQq_i8tDLe8k8qUJwQ.jpeg",
  //section: "ziguinchor",
  //position: "Vice-Coordonnateur",
  //role: "Bureau Exécutif",
  //expertise: "Soins Infirmiers",
  //bio: "Professionnel de santé engagé dans les actions communautaires, Ismaïla Diedhiou participe à la coordination et à la mise en œuvre des initiatives sanitaires de l’association.",
  //email: "bodian@gmail.com",
  //phone: "774378558",
//},

{
  id: "5",
  fullName: "Maïmouna Sané",
  photo: mamita,
  section: "dakar",
  position: "Conseillère de la Présidente",
  role: "Bureau Exécutif",
  expertise: "Relation Client | Téléconseilière & Expertise Client",
  bio: "Spécialiste de la relation client, Maïmouna Sané accompagne la présidence dans la coordination des actions stratégiques et le renforcement des relations avec les partenaires et la communauté.",
  email: "mounasane2307@gmail.com ",
  phone: "774936743",
},

{
  id: "6",
  fullName: "Ousmane Bodian",
  photo: ouz,
  section: "dakar",
  position: "Secrétaire Général",
  role: "Bureau Exécutif",
  expertise: "CTO Phenix-consulting & Full-Stack Developer",
  bio: "Ingénieur en génie logiciel et développeur full-stack, Ousmane Bodian assure la coordination administrative et stratégique tout en accompagnant la transformation digitale des initiatives de l’association.",
  email: "ousmanearfangkemobodian@gmail.com",
  phone: "774378558",
},

{
  id: "8",
  fullName: "Vieux Malang Bodian",
  photo: lang,
  section: "dakar",
  position: "Trésorier Général",
  role: "Bureau Exécutif",
  expertise: "Doctorant • Géographie urbaine & territoriale",
  bio: "Géographe spécialisé dans les dynamiques territoriales et environnementales, Vieux Malang Bodian veille à la gestion financière rigoureuse et transparente des activités de l’association.",
  email: "malangbodian93@gmail.com",
  phone: "777050069",
},

//{
  //id: "9",
  //fullName: "Adama Badji",
  //photo: "https://www.nigeriahealthwatch.com/themes/nhw/assets/img/staff/full/33.png",
  //section: "dakar",
  //position: "Responsable Organisation",
  //role: "Commissions Thématiques",
  //expertise: "Électricité et Maintenance Technique",
  //bio: "Technicien spécialisé en électricité, Adama Badji contribue à l’organisation logistique et à la coordination opérationnelle des activités et événements de l’association.",
  //email: "bodian@gmail.com",
  //phone: "778531530",
//},

{
  id: "10",
  fullName: "Maïmouna Bodian",
  photo: mounzi,
  section: "dakar",
  position: "Responsable Événementiel",
  role: "Commissions Thématiques",
  expertise: "CEO Kid's Shop & Agent de Transit",
  bio: "Entrepreneure et fondatrice de Kids Shop, Maïmouna Bodian participe à la conception et à la coordination d’événements destinés à renforcer la dynamique communautaire.",
  email: "mounzibodian@gmail.com",
  phone: "781619012",
},

{
  id: "11",
  fullName: "Fatou Goudiaby",
  photo: samateh,
  section: "dakar",
  position: "Responsable Communication",
  role: "Commissions Thématiques",
  expertise: "Déléguée Médicale | Relations Santé & Com",
  bio: "Professionnelle de la communication et du secteur médical, Fatou Goudiaby contribue à la valorisation des actions de l’association et au renforcement de sa visibilité institutionnelle.",
  email: "toufaze1407@gmail.com",
  phone: "776840801",
},

{
  id: "12",
  fullName: "Seydou Papis Sagna",
  photo: pisko,
  section: "dakar",
  position: "Responsable Relations Extérieures",
  role: "Commissions Thématiques",
  expertise: "CEO Graphic Teranga & Audiovisual Producer",
  bio: "Entrepreneur et professionnel de l’audiovisuel, Seydou Papis Sagna est CEO de Graphic Teranga. Il accompagne l’association dans la production médiatique, la stratégie de communication et le développement de partenariats institutionnels.",
  email: "seydousagna62@gmail.com",
  phone: "781268326",
},
{
  id: "13",
  fullName: "Fatoumata Goudiaby",
  photo: fai,
  section: "dakar",
  position: "Responsable Pédagogique",
  role: "Commissions Thématiques",
  expertise: "Étudiante | Département d’Anglais",
  email: "fatoumatagoudia821@gmail.com",
  phone: "783352814",
  bio: "Engagée dans le développement des compétences et l’inclusion numérique, Faï Goudiaby contribue à la mise en place d’initiatives éducatives et pédagogiques au sein de l’association.",
},

//{
  //id: "14",
  //fullName: "Kaoussou Coly",
  //photo: "https://m.media-amazon.com/images/M/MV5BZTY1MjU5ZjktMTVhZi00YmI4LWFjZmUtNDE3OTQ5MDkyNzYxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  //section: "dakar",
  //position: "Responsable Technologie & Innovation",
  //role: "Commissions Thématiques",
  //expertise: "Photographie & Création Visuelle",
  //email: "bodian@gmail.com",
  //phone: "783352814",
  //bio: "Passionné par les technologies créatives et l’image, Kaoussou Coly accompagne l’association dans l’innovation visuelle et la valorisation de ses activités à travers les supports numériques.",
//},

//{
  //id: "15",
  //fullName: "Awa Sané",
  //photo: "https://img.freepik.com/premium-photo/portrait-young-beautiful-confident-african-american-muslim-business-woman-hijab_641503-161229.jpg",
  //section: "dakar",
  //position: "Responsable de la Section Féminine",
  //role: "Commissions Thématiques",
  //expertise: "Entrepreneuriat",
  //email: "bodian@gmail.com",
  //phone: "783352814",
  //bio: "Engagée dans la promotion du leadership féminin et de l’entrepreneuriat, Awa Sané œuvre au renforcement de l’implication des femmes dans les initiatives communautaires de l’association.",
//},

{
  id: "16",
  fullName: "Seydou Bodian",
  photo: seydou,
  section: "dakar",
  position: "Responsable des Activités Sportives",
  role: "Commissions Thématiques",
  expertise: "Histoire & Culture | Électricité",
  email: "bodianseydou42@gmail.com",
  phone: "777006243",
  bio: "Passionné d’histoire et engagé dans la dynamique associative, Seydou Bodian contribue à la promotion des activités sportives et culturelles favorisant la cohésion communautaire.",
},

//{
  //id: "17",
  //fullName: "Khady Faty",
  //photo: "https://static.vecteezy.com/system/resources/previews/012/489/865/non_2x/african-muslim-business-woman-portrait-free-photo.jpg",
  //section: "dakar",
  //position: "Responsable Santé",
  //role: "Commissions Thématiques",
  //expertise: "Médecine",
  //email: "bodian@gmail.com",
  //phone: "783352814",
  //bio: "Professionnelle de santé engagée, Khady Faty participe à la coordination des initiatives médicales et des actions de sensibilisation visant à améliorer la santé communautaire.",
//},

  {
    id: "18",
    fullName: "Binta Goudiaby",
    photo: bintaY,
    section: "dakar",
    position: "Adjointe au Secrétaire Général",
    role: "Commissions Thématiques",
    expertise: "Licence • Commerce international",
    email: "binetagoudiaby708@gmail.com",
    phone: "784785795",
    bio: "Experte en transformation numérique, Binta Goudiaby optimise la coordination administrative et modernise les outils digitaux pour renforcer l’efficacité de l’association."
  },
  //{
    //id: "19",
    //fullName: "Aziz Sané",
    //photo: "https://image.tensorartassets.com/cdn-cgi/image/anim=false,plain=false,w=2048,f=jpeg,q=85/model_showcase/669603268780932295/d9533e81-a99f-f1e3-032f-bfa7e9da9a62.jpeg",
    //section: "dakar",
    //position: "Adjoint au Secrétaire",
    //role: "Commissions Thématiques",
    //expertise: "Développement Immobilier",
    //email: "saneaziz@gmail.com",
    //phone: "773475730",
    //bio: "Professionnel passionné par l’innovation urbaine et le développement durable, Aziz Sané soutient des initiatives qui favorisent la croissance et l’accessibilité dans la commune."
  //},
  {
    id: "20",
    fullName: "Bineta Diedhiou",
    photo: bintaD,
    section: "dakar",
    position: "Adjointe Trésorière",
    role: "Commissions Thématiques",
    expertise: "Responsable RH | Téléconseillère",
    email: "bintadiedhiou253@gmail.com",
    phone: "782536448",
    bio: "Spécialiste en ressources humaines, Bineta Diedhiou assure une gestion efficace des talents et contribue à la structuration et au développement stratégique de la commune."
  },
  //{
    //id: "21",
    //fullName: "Vieux Malang Niassy",
    //photo: "https://www.thelir.ie/images/people/clinton-resized.jpg",
    //section: "dakar",
    //position: "Adjoint Trésorier",
    //role: "Commissions Thématiques",
    //expertise: "Analyse Mathématique",
    //email: "bodian@gmail.com",
    //phone: "783352814",
    //bio: "Fort d’une expertise en mathématiques appliquées, Vieux Malang Niassy optimise les processus financiers et participe activement au développement structuré de la commune."
  //},
  {
    id: "22",
    fullName: "Yaya Bodian",
    photo: yaya,
    section: "dakar",
    position: "Adjoint Responsable Événementiel",
    role: "Commissions Thématiques",
    expertise: "Électricité et Maintenance Technique",
    bio: "Technicien spécialisé en électricité, Yaya Boodian contribue à l’organisation logistique et à la coordination opérationnelle des activités et événements de l’association.",
    email: "Bodianyaya75@gmail.com",
    phone: "770137248",
  },
  {
    id: "23",
    fullName: "Adja Catho Ba Diédhiou",
    photo: adja,
    section: "dakar",
    position: "Adjointe Responsable Organisation",
    role: "Commissions Thématiques",
    expertise: "Assistante Commerciale et Caissière",
    email: "adjadiedhiou076@gmail.com",
    phone: " 773871896",
    bio: "Spécialiste en organisation et entrepreneuriat, Adja Diédhiou optimise la planification stratégique et soutient les initiatives innovantes pour dynamiser la commune."
  },
  {
    id: "24",
    fullName: "Mamadou Goudiaby",
    photo: chef,
    section: "dakar",
    position: "Adjoint Chargé de la Communication",
    role: "Commissions Thématiques",
    expertise: "Communication & Comptabilité",
    email: "mamadougoudiaby278@gmail.com",
    phone: "782695629",
    bio: "Alliant expertise comptable et communication stratégique, Mamadou Chef Goudiaby assure la transparence financière et renforce la visibilité des projets de la commune."
  },
  {
    id: "25",
    fullName: "Mariama Preira",
    photo: preira,
    section: "dakar",
    position: "Adjointe Relations Extérieures",
    role: "Commissions Thématiques",
    expertise: "Secrétaire | Laboratoire de Prothèse Dentaire",
    email: "mariamarassoul021@gmail.com",
    phone: "778266236",
    bio: "Entrepreneuse passionnée, Mariama Preira développe des partenariats stratégiques et facilite la mise en œuvre de projets innovants au service de la commune."
  },
  {
    id: "26",
    fullName: "Gnima Sané",
    photo: gnima,
    section: "dakar",
    position: "Adjointe Responsable Tech & Innovation",
    role: "Commissions Thématiques",
    expertise: "Com Lead – Kaylire | Entrepreneure numérique",
    email: "saneg58@gmail.com",
    phone: "782499600",
    bio: "Experte en innovation et technologies digitales, Gnima Sané conduit la modernisation numérique et soutient le développement de solutions innovantes pour la commune."
  },
  //{
    //id: "27",
    //fullName: "Keba Sané",
    //photo: "https://kapkenya.org/conference-2024/wp-content/uploads/2024/02/Dr.-Maritim-Peter.jpg",
    //section: "dakar",
    //position: "Adjoint Responsable Tech & Innovation",
    //role: "Commissions Thématiques",
    //expertise: "Design & Innovation",
    //email: "bodian@gmail.com",
    //phone: "783352814",
    //bio: "Designer créatif et passionné par l’innovation, Keba Sané développe des solutions visuelles et technologiques pour moderniser les projets de la commune."
  //},
  {
    id: "28",
    fullName: "Mame Diarra Sané",
    photo: diarrasané,
    section: "dakar",
    position: "Adjointe Responsable Pédagogique",
    role: "Commissions Thématiques",
    expertise: "Licence 3 • Cybersécurité & E-commerce",
    email: "bodian@gmail.com",
    phone: " 772613654",
    bio: "Engagée dans l’accompagnement pédagogique, Mame Diarra Sané favorise le développement des compétences et l’épanouissement des apprenants de la commune."
  },
  {
    id: "29",
    fullName: "Mariama Diedhiou",
    photo: mariamad,
    section: "dakar",
    position: "Adjointe à la Coordination Pédagogique",
    role: "Commissions Thématiques",
    expertise: "L3 Sciences Politiques | IA & Marketing Digital",
    email: "diedhioumamy2302@gmail.com ",
    phone: "766475157",
    bio: "Passionnée par l’éducation et l’innovation pédagogique, Mariama Diedhiou développe des programmes d’apprentissage adaptés aux besoins de la commune."
  },
  {
    id: "30",
    fullName: "Moustapha Sané",
    photo: moustaph,
    section: "dakar",
    position: "Adjoint Chargé du Sport",
    role: "Commissions Thématiques",
    expertise: "Marketing & Com | Professeur d’anglais",
    email: "moustaphasane73@gmail.com",
    phone: "783601036",
    bio: "Expert en gestion sportive, Moustapha Sané organise et développe des activités sportives pour promouvoir la santé, la cohésion et le dynamisme au sein de la commune."
  },

  {
    id: "31",
    fullName: "Sarata Diedhiou",
    photo: sarata,
    section: "dakar",
    position: "Adjointe Chargée Médicale",
    role: "Commissions Thématiques",
    expertise: "Sage-Femme | Santé & Accompagnement",
    email: "saratachacha2@gmail.com ",
    phone: "761753729",
    bio: "Experte en santé maternelle et infantile, Sarata Diedhiou assure un accompagnement médical de qualité et soutient les initiatives de santé communautaire de la commune."
  },
  //{
    //id: "32",
    //fullName: "Khadija Sané",
    //photo: "https://myjoon.app/blog/content/images/2023/11/sd335_a_muslim_woman_smiling_candidly_in_the_camera_in_front_of_90250c1a-b069-4674-acc7-2d5840eadd23-1.jpg",
    //section: "dakar",
    //position: "Adjointe Responsable Section Féminine",
    //role: "Commissions Thématiques",
    //expertise: "Photographe",
    //email: "bodian@gmail.com",
    //phone: "783352814",
    //bio: "Passionnée par la valorisation culturelle et l’expression visuelle, Khadija Sané développe des projets photographiques qui mettent en lumière le rôle des femmes dans la commune."
  //},
  {
    id: "33",
    fullName: "Adama Diedhiou",
    photo: adamaa,
    section: "dakar",
    position: "Membre Simple",
    role: "Commissions Simple",
    expertise: "Restauration | Gastronomie & Services",
    email: "diedhiouadama493@gmail.com",
    phone: "783176070",
    bio: "Entrepreneure dynamique dans le secteur de la restauration, Adama Diedhiou soutient les initiatives locales et contribue au développement économique et social de la commune."
  },
  {
    id: "34",
    fullName: "Siré Diedhiou",
    photo: sire,
    section: "dakar",
    position: "Membre Simple",
    role: "Commissions Simple",
    expertise: "Commerce | Entrepreneuse & Experte Business",
    email: "Sirrdiedhiou@gmail.com",
    phone: "783735782",
    bio: "Engagée dans le développement local et l’innovation, Siré Diedhiou accompagne des projets entrepreneuriaux pour renforcer l’impact économique et social dans la commune."
  },
  
  {
    id: "35",
    fullName: "Astou Sané",
    photo: asssané,
    section: "dakar",
    position: "Membre Simple",
    role: "Commissions Simples",
    expertise: "Restauration | Gastronomie & Services",
    email: "astousane313@gmail.com ",
    phone: "785190757",
    bio: "Engagée dans le développement local et l’innovation, Siré Diedhiou accompagne des projets entrepreneuriaux pour renforcer l’impact économique et social dans la commune."
  },
  //{
    //id: "36",
    //fullName: "Oumy Faty",
    //photo: oumy,
    //section: "dakar",
    //position: "Membre Simple",
    //role: "Commissions Simples",
    //expertise: "Coiffeuse",
    //email: "bodian@gmail.com",
    //phone: "787352808",
    //bio: "Professionnelle de la coiffure, Oumy Faty contribue au développement local en valorisant le savoir-faire artisanal et en soutenant les initiatives communautaires."
  //},
  //{
    //id: "37",
    //fullName: "Astou Sané",
    //photo: "https://img.freepik.com/photos-premium/portrait-beaute-afro-jolie-femme_737761-90.jpg",
    //section: "ziguinchor",
    //position: "Membre Simple",
    //role: "Commissions Simples",
    //expertise: "Infirmière",
    //email: "bodian@gmail.com",
    //phone: "774378558",
    //bio: "Experte en soins de santé, Astou Sané dirige l’organisation avec passion et œuvre pour améliorer l’accès aux services médicaux dans sa communauté."
  //},
  {
    id: "38",
    fullName: "Khady Sané",
    photo: sadio,
    section: "dakar",
    position: "Membre Simple",
    role: "Commissions Simple",
    expertise: "Licence 3 • Linguistique",
    email: "khadysanesane10@gmail.com",
    phone: "785673995",
    bio: "Étudiante engagée, Diatou Diedhiou soutient des initiatives éducatives et contribue à la promotion de l’innovation et du développement dans sa commune."
  },
  {
    id: "39",
    fullName: "Diatou Diedhiou",
    photo: diatou,
    section: "dakar",
    position: "Membre Simple",
    role: "Commissions Simple",
    expertise: "Élève | Terminale",
    email: "khadijasarata150@gmail.com",
    phone: "784517390",
    bio: "Élève engagée, Diatou Diedhiou soutient des initiatives éducatives et contribue à la promotion de l’innovation et du développement dans sa commune."
  }

  
]
