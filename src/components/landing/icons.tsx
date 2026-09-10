type IconProps = { className?: string };

export function IconUsers({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM8 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM8.2 13.5c-2.5.2-4.7 1.6-4.7 3.7V19h9.4v-1.8c0-2.1-2.2-3.5-4.7-3.7ZM15.8 13.6c.3 0 .6 0 .9.05 2.3.3 4.1 1.7 4.1 3.55V19H17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconKey({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15.5 8.5a3.5 3.5 0 1 0-3.2 3.48L8 16.28V19h2.7l1.1-1.1 1.1 1.1H15l-1.4-1.4 2.1-2.1A3.5 3.5 0 0 0 15.5 8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconClock({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v4.2L14.5 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconCalendar({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 3.5V7M16 3.5V7M3.5 10h17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconPay({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 10h18M7 14h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconChart({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 16V11M12 16V8M16 16v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconShield({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3.5 5 6.5v5.2c0 4.2 2.9 7.2 7 8.8 4.1-1.6 7-4.6 7-8.8V6.5L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="m9.2 12 1.9 1.9 3.7-3.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconDevice({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 19h8M12 17v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconBoard({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="4" width="17" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 9h17M9 9v11" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
