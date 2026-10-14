import type { ReactNode } from 'react';

interface MarqueeProps {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
  slow?: boolean;
  separator?: ReactNode;
}

/** Bandeau défilant infini. */
const Marquee = ({ items, className = '', itemClassName = '', slow, separator }: MarqueeProps) => {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((item, i) => (
        <span key={i} className={`flex items-center ${itemClassName}`}>
          {item}
          {separator ?? <span className="mx-8 inline-block h-1.5 w-1.5 rotate-45 bg-gold-500 sm:mx-12" />}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div className={`flex w-max ${slow ? 'animate-marquee-slow' : 'animate-marquee'} hover:[animation-play-state:paused]`}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
};

export default Marquee;
