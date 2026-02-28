import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, Send } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import type { ContactMessage } from '../types/index';

const MotionDiv = motion.div;


const Contact = () => {
  const [formData, setFormData] = useState<ContactMessage>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+221 77 179 09 61', '+221 77 437 85 58'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['aeeomsectiondakar@gmail.com'],
    },
    {
      icon: MapPin,
      title: 'Localisation',
      details: ['Dakar, Ziguinchor Sénégal'],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitSuccess(true);
    setIsSubmitting(false);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white py-32">

  {/* Ambient Glows */}
  <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/20 blur-[160px] rounded-full animate-slow-rotate" />
  <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-teal-400/20 blur-[160px] rounded-full animate-slow-rotate-reverse" />

  {/* Subtle Grid Texture */}
  <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]" />

  {/* Filigrane Internet Animé */}
  <motion.div
    className="absolute inset-0 flex items-center justify-center pointer-events-none"
    initial={{ y: -50, opacity: 0.05 }}
    animate={{ y: 50, opacity: 0.05 }}
    transition={{ yoyo: Infinity, duration: 8, ease: "easeInOut" }}
  >
    <span className="text-[8rem] md:text-[12rem] lg:text-[14rem] font-extrabold text-white/5 select-none leading-none">
      🌐
    </span>
  </motion.div>

  <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">

    {/* Badge Premium */}
    <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full 
                    bg-white/10 backdrop-blur-md border border-white/20 
                    text-sm font-medium tracking-wide text-emerald-200 shadow-lg mx-auto animate-bounce-slow">
      ✨ Département Communication & Relations
    </div>

    {/* Title avec micro-animation respiration */}
    <motion.h1
      initial={{ scale: 0.97 }}
      animate={{ scale: [0.97, 1, 0.97] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight"
    >
      Contactez-Nous
    </motion.h1>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="text-xl md:text-2xl text-emerald-100 leading-relaxed max-w-2xl mx-auto"
    >
      Une question stratégique ? Un projet ou une collaboration ?  
      Notre équipe est à votre écoute pour vous accompagner avec professionnalisme et engagement.
    </motion.p>

  </div>
</section>


    <section className="relative py-24 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white overflow-hidden">

  {/* Background Glows */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-500/20 blur-[140px] rounded-full animate-slow-rotate" />
  <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-400/20 blur-[140px] rounded-full animate-slow-rotate-reverse" />

  <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <div className="grid lg:grid-cols-3 gap-12">

      {/* ===== Left Column: Contact Info ===== */}
      <div className="lg:col-span-1 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <SectionHeader
            title="Restons Connectés"
            subtitle="Plusieurs moyens de nous joindre"
            titleClassName="text-white"
          />
        </motion.div>

        <div className="space-y-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white/10 hover:bg-white/20 rounded-2xl p-6 border border-white/20 backdrop-blur-md shadow-md transition-all duration-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2 text-lg">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-black text-sm leading-relaxed">{detail}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-3xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold mb-3">Horaires</h3>
          <div className="space-y-2 text-emerald-100">
            <p className="text-sm">Lundi - Vendredi</p>
            <p className="font-semibold text-white">9h00 - 18h00</p>
            <p className="text-sm mt-4">Samedi</p>
            <p className="font-semibold text-white">10h00 - 16h00</p>
          </div>
        </motion.div>
      </div>

      {/* ===== Right Column: Formulaire ===== */}
      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-900 mb-6">
            Envoyez-nous un Message
          </h2>

          <form onSubmit={(e) => {
            e.preventDefault();
            const whatsappNumber = "774378558";
            const message = `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\nAdresse: ${formData.address}\nSujet: ${formData.subject}\nMessage: ${formData.message}`;
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
          }} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              {["name", "email", "phone", "address"].map((field,i) => (
                <div key={i}>
                  <label htmlFor={field} className="block text-sm font-medium text-black mb-2">
                    {field === "name" ? "Nom Complet *" : field === "email" ? "Email *" : field === "phone" ? "Téléphone *" : "Adresse *"}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    placeholder={
                      field === "name" ? "Votre nom" :
                      field === "email" ? "votre@email.com" :
                      field === "phone" ? "77XXXXXXXX" :
                      "Votre adresse"
                    }
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-black transition-all duration-300 shadow-sm hover:shadow-md"
                  />
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                Sujet *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-black transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <option value="">Sélectionnez le sujet</option>
                <option value="Demande d'information">Demande d'information</option>
                <option value="Proposition de projet">Proposition de projet</option>
                <option value="Partenariat">Partenariat</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Écrivez votre message ici..."
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-black resize-none transition-all duration-300 shadow-sm hover:shadow-md"
              ></textarea>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-emerald-900 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-300"
            >
              Envoyer le Message
            </Button>
          </form>
        </motion.div>
      </div>

    </div>
  </div>
</section>


      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="aspect-video bg-gray-100">
             <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31347.579250466247!2d-16.408355734331132!3d12.74825899549247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ0JzU0LjAiTiAxNsKwMjInNTUuMCJX!5e0!3m2!1sfr!2ssn!4v1709334470610"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Localisation Mandégane, Balinghore, Sénégal"
/>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
