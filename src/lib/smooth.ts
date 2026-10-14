import type Lenis from 'lenis';

// Instance Lenis partagée, initialisée par le Layout.
let instance: Lenis | null = null;

export const setLenis = (lenis: Lenis | null) => {
  instance = lenis;
};

export const scrollToTop = (immediate = false) => {
  if (instance) instance.scrollTo(0, { immediate });
  else window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' });
};

/** Bloque le défilement de la page (modales, menu plein écran). */
export const lockScroll = (locked: boolean) => {
  if (instance) {
    if (locked) instance.stop();
    else instance.start();
  }
  document.documentElement.style.overflow = locked ? 'hidden' : '';
};
