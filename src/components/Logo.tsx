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
        <path
          fill="currentColor"
          d="M20 8.4 31.4 13.2 20 18 8.6 13.2 20 8.4Z"
        />
        <path
          fill="currentColor"
          d="M10.6 13.8v4.7c0 2 4.2 3.1 9.4 3.1 5.2 0 9.4-1.1 9.4-3.1v-4.7L20 17Z"
          opacity="0.92"
        />
        <g stroke="#dfb164" strokeWidth="1.5" strokeLinecap="round" opacity="0.9">
          <path d="M29.8 14.2 32 16.6" />
          <circle cx="32.7" cy="17.4" r="1.3" fill="#dfb164" stroke="none" />
        </g>
        <path
          fill="currentColor"
          opacity="0.85"
          d="M20 30.2c-1.9-1.5-4.4-2.1-6.6-1.8v-8.7c2.2-.3 4.7.3 6.6 1.8 1.9-1.5 4.4-2.1 6.6-1.8v8.7c-2.2-.3-4.7.3-6.6 1.8Z"
        />
        <path
          fill="#dfb164"
          d="M32.6 9.2a.9.9 0 0 1 .9.9 2.9 2.9 0 0 1 2.9 2.9.9.9 0 0 1 0 1.1c-.5.8-1 1.9-1.3 3a.9.9 0 0 1-1.6 0c-.3-1.1-.8-2.2-1.3-3a.9.9 0 0 1 0-1.1 2.9 2.9 0 0 1 2.9-2.9.9.9 0 0 1 .9-.9 1 1 0 0 1 .5 1c-.8-.3-1.4-.7-2.1-1.4a1 1 0 0 1 1.2-.5Z"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

export function LogoMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <rect width="40" height="40" rx="12" fill="#0d9488" />
      <path
        fill="#fff"
        d="M20 12.4 31.4 17.2 20 22 8.6 17.2 20 12.4Z"
      />
      <path
        fill="#fff"
        d="M10.6 17.8v4.7c0 2 4.2 3.1 9.4 3.1 5.2 0 9.4-1.1 9.4-3.1v-4.7L20 21Z"
        opacity="0.92"
      />
      <path
        fill="#dfb164"
        stroke="#fff"
        strokeWidth="0.8"
        d="M29.8 18.2 32 20.6l.7-.8a1.3 1.3 0 0 1 1.3 2.1l-1.4 1.5-2.8-2.6a1 1 0 0 1 0-2.6Z"
      />
      <path
        fill="#fff"
        opacity="0.85"
        d="M20 34.2c-1.9-1.5-4.4-2.1-6.6-1.8v-8.7c2.2-.3 4.7.3 6.6 1.8 1.9-1.5 4.4-2.1 6.6-1.8v8.7c-2.2-.3-4.7.3-6.6 1.8Z"
      />
      <path
        fill="#dfb164"
        d="M32.6 5.2a.9.9 0 0 1 .9.9 2.9 2.9 0 0 1 2.9 2.9.9.9 0 0 1 0 1.1c-.5.8-1 1.9-1.3 3a.9.9 0 0 1-1.6 0c-.3-1.1-.8-2.2-1.3-3a.9.9 0 0 1 0-1.1 2.9 2.9 0 0 1 2.9-2.9.9.9 0 0 1 .9-.9 1 1 0 0 1 .5 1c-.8-.3-1.4-.7-2.1-1.4a1 1 0 0 1 1.2-.5Z"
        opacity="0.9"
      />
    </svg>
  );
}