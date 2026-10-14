import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle, Send, X } from 'lucide-react';
import logo from '../../assets/LOGO.jpeg';
import { EASE } from '../ui/Reveal';
import { reply, suggestions, welcome } from './faq';
import { useLang } from '../../i18n/context';
import { resolve } from '../../i18n/core';
import type { Reply } from './faq';

interface Message extends Reply {
  id: number;
  from: 'bot' | 'user';
}

let nextId = 1;

/** Assistant de discussion flottant (réponses instantanées, version gratuite). */
const ChatWidget = () => {
  const { lang } = useLang();
  const t = (text: Parameters<typeof resolve>[0]) => resolve(text, lang);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ id: 0, from: 'bot', text: '' }]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    // Sur ordinateur, on place directement le curseur dans le champ
    if (window.matchMedia('(hover: hover)').matches) setTimeout(() => inputRef.current?.focus(), 400);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const ask = (question: string) => {
    const q = question.trim();
    if (!q || typing) return;
    setMessages((m) => [...m, { id: nextId++, from: 'user', text: q }]);
    setInput('');
    setTyping(true);
    // Courte pause pour un rythme de conversation naturel
    setTimeout(() => {
      setMessages((m) => [...m, { id: nextId++, from: 'bot', ...reply(q, lang) }]);
      setTyping(false);
    }, 650);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  const asked = messages.some((m) => m.from === 'user');

  return (
    <>
      {/* Bouton d'ouverture */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}
            onClick={() => setOpen(true)}
            aria-label={t({ fr: 'Ouvrir l’assistant AEEOM', en: 'Open the AEEOM assistant', wo: 'Ubbi ndimbalu AEEOM' })}
            className="group fixed bottom-5 right-5 z-[35] flex items-center gap-3 rounded-full bg-ink-950 py-2 pl-2 pr-2 text-ivory-50 shadow-[0_15px_40px_-10px_rgba(6,20,14,0.6)] ring-1 ring-gold-500/40 transition-all duration-500 hover:pr-5 sm:bottom-8 sm:right-8"
          >
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-ink-950">
              <span className="absolute inset-0 animate-ping rounded-full bg-gold-500/40 [animation-duration:2.4s]" />
              <MessageCircle className="relative h-5 w-5" />
            </span>
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.2em] transition-all duration-500 group-hover:max-w-[160px]">
              {t({ fr: 'Une question ?', en: 'A question?', wo: 'Am nga laaj ?' })}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Fenêtre de discussion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.5, ease: EASE }}
            role="dialog"
            aria-label={t({ fr: 'Assistant AEEOM', en: 'AEEOM assistant', wo: 'Ndimbalu AEEOM' })}
            data-lenis-prevent
            className="fixed inset-x-3 bottom-3 top-20 z-[85] flex flex-col overflow-hidden rounded-sm bg-ivory-50 shadow-[0_30px_80px_-20px_rgba(6,20,14,0.6)] ring-1 ring-ink-900/10 sm:inset-x-auto sm:bottom-8 sm:right-8 sm:top-auto sm:h-[min(640px,calc(100svh-7rem))] sm:w-[400px]"
          >
            {/* En-tête */}
            <div className="grain relative flex items-center justify-between gap-4 overflow-hidden bg-ink-950 px-5 py-4 text-ivory-50">
              <div className="relative z-10 flex items-center gap-3">
                <span className="relative">
                  <img src={logo} alt="" className="h-11 w-11 rounded-full object-cover ring-1 ring-gold-500/50" />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-ink-950 bg-emerald-400" />
                </span>
                <span>
                  <span className="block font-display text-xl leading-tight">
                    {t({ fr: 'Assistant AEEOM', en: 'AEEOM Assistant', wo: 'Ndimbalu AEEOM' })}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-400">
                    {t({ fr: 'Répond instantanément', en: 'Replies instantly', wo: 'Day tontu léegi' })}
                  </span>
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label={t({ fr: 'Fermer l’assistant', en: 'Close the assistant', wo: 'Tëj ndimbal li' })}
                className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ivory-50/20 transition-colors hover:bg-ivory-50 hover:text-ink-950"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 py-5">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[88%] px-4 py-3 text-sm leading-relaxed ${
                      m.from === 'user'
                        ? 'rounded-2xl rounded-br-sm bg-ink-900 text-ivory-50'
                        : 'rounded-2xl rounded-bl-sm border border-ink-900/10 bg-ivory-100 text-ink-950'
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.id === 0 ? welcome(lang).text : m.text}</p>
                    {m.links && m.links.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {m.links.map((l) => {
                          const cls =
                            'inline-flex items-center gap-1.5 rounded-full border border-gold-600/40 bg-ivory-50 px-3 py-1.5 text-[11px] font-semibold text-ink-950 transition-colors hover:border-ink-950 hover:bg-ink-950 hover:text-ivory-50';
                          return l.to ? (
                            <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className={cls}>
                              {l.label} <ArrowUpRight className="h-3 w-3" />
                            </Link>
                          ) : (
                            <a
                              key={l.label}
                              href={l.href}
                              target={l.href?.startsWith('http') ? '_blank' : undefined}
                              rel="noopener noreferrer"
                              className={cls}
                            >
                              {l.label} <ArrowUpRight className="h-3 w-3" />
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <div className="flex justify-start" aria-live="polite" aria-label={t({ fr: 'L’assistant écrit', en: 'The assistant is typing', wo: 'Ndimbal li ngi bind' })}>
                  <div className="flex gap-1.5 rounded-2xl rounded-bl-sm border border-ink-900/10 bg-ivory-100 px-4 py-4">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-gold-600"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Suggestions */}
              {!typing && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {suggestions(lang).filter((s) => !messages.some((m) => m.from === 'user' && m.text === s))
                    .slice(0, asked ? 3 : undefined)
                    .map((s) => (
                    <button
                      key={s}
                      onClick={() => ask(s)}
                      className="rounded-full border border-ink-900/15 px-3.5 py-2 text-left text-xs text-ink-900/75 transition-colors hover:border-gold-600 hover:text-ink-950"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Saisie */}
            <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-ink-900/10 bg-ivory-50 p-3">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t({ fr: 'Écrivez votre question…', en: 'Type your question…', wo: 'Bindal sa laaj…' })}
                aria-label={t({ fr: 'Votre question', en: 'Your question', wo: 'Sa laaj' })}
                maxLength={300}
                className="min-w-0 flex-1 rounded-full border border-ink-900/15 bg-ivory-100 px-4 py-3 text-sm text-ink-950 placeholder:text-ink-900/40 focus:border-gold-600 focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label={t({ fr: 'Envoyer', en: 'Send', wo: 'Yónne' })}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-950 text-gold-400 transition-colors hover:bg-gold-500 hover:text-ink-950 disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
