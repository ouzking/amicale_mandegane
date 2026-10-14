import type { ReactNode, MouseEventHandler } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

type Variant = 'gold' | 'dark' | 'light' | 'outline-light' | 'outline-dark';

interface LuxButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLElement>;
  variant?: Variant;
  arrow?: boolean;
  disabled?: boolean;
  className?: string;
}

const styles: Record<Variant, { base: string; fill: string; hoverText: string; dot: string }> = {
  gold: {
    base: 'bg-gold-500 text-ink-950 border-gold-500',
    fill: 'bg-ivory-50',
    hoverText: 'group-hover:text-ink-950',
    dot: 'bg-ink-950 text-gold-400',
  },
  dark: {
    base: 'bg-ink-900 text-ivory-50 border-ink-900',
    fill: 'bg-gold-500',
    hoverText: 'group-hover:text-ink-950',
    dot: 'bg-gold-500 text-ink-950 group-hover:bg-ink-950 group-hover:text-gold-400',
  },
  light: {
    base: 'bg-ivory-50 text-ink-950 border-ivory-50',
    fill: 'bg-gold-500',
    hoverText: 'group-hover:text-ink-950',
    dot: 'bg-ink-950 text-gold-400',
  },
  'outline-light': {
    base: 'bg-transparent text-ivory-50 border-ivory-50/30',
    fill: 'bg-ivory-50',
    hoverText: 'group-hover:text-ink-950',
    dot: 'bg-ivory-50/10 text-ivory-50 group-hover:bg-ink-950 group-hover:text-gold-400',
  },
  'outline-dark': {
    base: 'bg-transparent text-ink-900 border-ink-900/25',
    fill: 'bg-ink-900',
    hoverText: 'group-hover:text-ivory-50',
    dot: 'bg-ink-900/5 text-ink-900 group-hover:bg-gold-500 group-hover:text-ink-950',
  },
};

/** Bouton signature : remplissage en balayage + effet magnétique au survol. */
const LuxButton = ({
  children,
  to,
  href,
  type = 'button',
  onClick,
  variant = 'gold',
  arrow = true,
  disabled,
  className = '',
}: LuxButtonProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const s = styles[variant];

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia('(pointer: coarse)').matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.18;
    const y = (e.clientY - r.top - r.height / 2) * 0.28;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  const inner = (
    <span
      ref={ref}
      className={`group relative inline-flex items-center gap-4 overflow-hidden rounded-full border py-2 pl-7 pr-2 text-[13px] font-semibold uppercase tracking-[0.16em] transition-[transform,color] duration-500 ease-lux ${s.base} ${disabled ? 'pointer-events-none opacity-50' : ''}`}
    >
      <span
        className={`absolute inset-0 origin-bottom scale-y-0 rounded-full transition-transform duration-700 ease-lux group-hover:scale-y-100 ${s.fill}`}
      />
      <span className={`relative py-2.5 transition-colors duration-500 ${s.hoverText} ${arrow ? '' : 'pr-5'}`}>
        {children}
      </span>
      {arrow && (
        <span
          className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-500 ${s.dot}`}
        >
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-lux group-hover:rotate-45" />
        </span>
      )}
    </span>
  );

  const wrapperProps = {
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    className: `inline-block ${className}`,
  };

  if (to)
    return (
      <Link to={to} onClick={onClick} {...wrapperProps}>
        {inner}
      </Link>
    );
  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...wrapperProps}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} {...wrapperProps}>
      {inner}
    </button>
  );
};

export default LuxButton;
