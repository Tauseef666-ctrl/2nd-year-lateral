import { cx } from './ui';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div
      className={cx(
        'grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 text-white shadow-glow',
        className,
      )}
    >
      <svg viewBox="0 0 40 40" aria-hidden="true" className="h-[26px] w-[26px]">
        <circle cx="20" cy="13" r="5" fill="#f3d9a4" />
        <circle cx="18.4" cy="11.4" r="1.6" fill="#dfb164" />
        <g stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none">
          <path d="M9 22 Q 12.5 19.5 16 22 T 24 22 T 32 22" />
          <path d="M7.5 28 Q 11 25.5 14.5 28 T 22.5 28 T 30.5 28" />
          <path d="M11 33.5 Q 14.5 31 18 33.5 T 26 33.5 T 31 33.5" />
        </g>
        <circle cx="24" cy="22" r="1.5" fill="#dfb164" />
        <circle cx="10" cy="28" r="1.5" fill="#dfb164" />
      </svg>
    </div>
  );
}

export function LogoMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14b8a6" />
          <stop offset="1" stopColor="#0f766e" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#logo-g)" />
      <circle cx="20" cy="13" r="5" fill="#f3d9a4" />
      <circle cx="18.4" cy="11.4" r="1.6" fill="#dfb164" />
      <g stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none">
        <path d="M9 22 Q 12.5 19.5 16 22 T 24 22 T 32 22" />
        <path d="M7.5 28 Q 11 25.5 14.5 28 T 22.5 28 T 30.5 28" />
        <path d="M11 33.5 Q 14.5 31 18 33.5 T 26 33.5 T 31 33.5" />
      </g>
      <circle cx="24" cy="22" r="1.5" fill="#dfb164" />
      <circle cx="10" cy="28" r="1.5" fill="#dfb164" />
    </svg>
  );
}