import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Search, Filter, Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { members,  } from "../data/members"

const MotionDiv = motion.div

const Members = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSection, setSelectedSection] = useState(
    searchParams.get("section") || "all"
  )
  const [selectedPosition, setSelectedPosition] = useState("all")
  const [selectedExpertise, setSelectedExpertise] = useState("all")

  const [filteredMembers, setFilteredMembers] =
    useState<Member[]>(members)

  useEffect(() => {
    let filtered = members

    if (searchQuery) {
      filtered = filtered.filter(
        (m) =>
          m.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.expertise.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.position.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (selectedSection !== "all") {
      filtered = filtered.filter(
        (m) => m.section === selectedSection
      )
    }

    if (selectedPosition !== "all") {
      filtered = filtered.filter(
        (m) => m.position === selectedPosition
      )
    }

    if (selectedExpertise !== "all") {
      filtered = filtered.filter(
        (m) => m.expertise === selectedExpertise
      )
    }

    setFilteredMembers(filtered)
  }, [searchQuery, selectedSection, selectedPosition, selectedExpertise])

  const positions = [
    "Poste",
    ...Array.from(new Set(members.map((m) => m.position))),
  ]

  const expertises = [
    "Fonction",
    ...Array.from(new Set(members.map((m) => m.expertise))),
  ]

  return (
    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-28 sm:py-32 lg:py-36 overflow-hidden">
  {/* HALOS LUMINEUX */}
  <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[150px] animate-pulse pointer-events-none" />
  <div className="absolute -bottom-28 -right-28 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-[180px] animate-pulse pointer-events-none" />

  <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
    {/* Badge Premium */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-6 mx-auto shadow-lg"
    >
      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
      <span className="text-sm tracking-widest uppercase font-semibold text-emerald-200">
        Communauté d’Excellence
      </span>
    </motion.div>

    {/* TITRE */}
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
    >
      Répertoire des{" "}
      <span className="bg-gradient-to-r from-emerald-300 to-emerald-100 bg-clip-text text-transparent">
        Membres
      </span>
    </motion.h1>

    {/* DESCRIPTION */}
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="mt-6 text-lg sm:text-xl md:text-2xl text-emerald-200 max-w-3xl mx-auto leading-relaxed"
    >
      Découvrez les talents, les parcours et les expertises qui composent
      notre réseau d’exception. Une communauté engagée, ambitieuse et tournée vers l’impact.
    </motion.p>

    {/* DIVIDER PREMIUM */}
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "140px" }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="h-[3px] bg-gradient-to-r from-emerald-400 to-transparent mt-10 rounded-full mx-auto"
    />
  </div>
</section>


      {/* FILTERS */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-4">

         <div className="flex-1 relative">
  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
  <input
    type="text"
    placeholder="Rechercher par nom..."
    value={searchQuery}
    onChange={(e) => {
      const value = e.target.value;
      setSearchQuery(value);

      // Filtrage des membres uniquement par nom
      const filtered = mockMembers.filter(member =>
        member.fullName.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredMembers(filtered);
    }}
    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
  />
</div>


          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="px-4 py-3 border rounded-lg bg-white"
          >
            <option value="all">Toutes les sections</option>
            <option value="dakar">Dakar</option>
            <option value="ziguinchor">Ziguinchor</option>
          </select>

          <select
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
            className="px-4 py-3 border rounded-lg bg-white"
          >
            {positions.map((pos) => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>

          <select
            value={selectedExpertise}
            onChange={(e) => setSelectedExpertise(e.target.value)}
            className="px-4 py-3 border rounded-lg bg-white"
          >
            {expertises.map((exp) => (
              <option key={exp} value={exp}>
                {exp}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* GRID */}
    <section className="py-20 bg-emerald-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {filteredMembers.map((member, i) => (
        <MotionDiv
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* HALO PREMIUM DERRIERE CARTE */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/30 to-emerald-600/20 blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 -z-10"></div>

          {/* CARTE */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-500">
            
            {/* IMAGE + BADGE */}
            <div className="relative aspect-[4/4.5] overflow-hidden">
              <img
                src={member.photo}
                alt={member.fullName}
                className="w-full h-full object-cover object-[center_25%]  transition-transform duration-1000 group-hover:scale-105"
              />

              {/* BADGE DYNAMIQUE */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full font-semibold text-white shadow-md 
                              bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-500
                              animate-gradient-x text-xs">
                {member.section === 'dakar' ? 'Dakar' : 'Ziguinchor'}
              </div>
            </div>

            {/* CONTENU */}
            <div className="p-6 flex flex-col justify-between h-[200px]">
              <div>
                <h3 className="text-xl font-bold text-emerald-950 mb-1">{member.fullName}</h3>
                <p className="text-emerald-700 font-medium text-sm mb-3">{member.position}</p>
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  <Briefcase className="w-4 h-4" />
                  <span className="line-clamp-2">{member.expertise}</span>
                </div>
              </div>

              {/* BOUTONS HORIZONTAUX PREMIUM */}
              <div className="flex gap-3 mt-4">
                {member.phone && (
                  <a
                    href={`https://wa.me/221${member.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Bonjour ${member.fullName}, je vous contacte via le site officiel.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-emerald-900 to-emerald-700 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.05] transition-all duration-300"
                  >
                    WhatsApp
                  </a>
                )}

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white border border-emerald-200 text-emerald-900 text-sm font-semibold rounded-xl shadow-md hover:shadow-xl hover:bg-emerald-50 hover:scale-[1.05] transition-all duration-300"
                  >
                    Email
                  </a>
                )}
              </div>
            </div>

          </div>
        </MotionDiv>
      ))}

    </div>
  </div>

  {/* ANIMATION DE GRADIENT DES BADGES */}
  <style>
    {`
      @keyframes gradient-x {
        0%, 100% { background-position: 0% }
        50% { background-position: 100% }
      }
      .animate-gradient-x {
        background-size: 200% 200%;
        animation: gradient-x 3s ease infinite;
      }
    `}
  </style>
</section>


    </div>
  )
}

export default Members
