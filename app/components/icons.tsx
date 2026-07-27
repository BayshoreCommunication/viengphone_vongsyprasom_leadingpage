const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
    </svg>
  );
}

export function ScaleIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <path d="M12 3v18M5 7h14M5 7l-3 6a4 4 0 008 0L5 7zM19 7l-3 6a4 4 0 008 0L19 7z" />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
    </svg>
  );
}

export function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 5 6.5 5c2 0 3.5 1.2 4.5 2.8C12 6.2 13.5 5 15.5 5 19 5 21.5 8.5 19.5 12.5 19 16.65 12 21 12 21z" />
    </svg>
  );
}

export function DuiIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <path d="M8 3l-6 6 12 12 6-6L8 3z" />
      <path d="M14.5 5.5l4 4" />
      <path d="M2 22l3-3" />
    </svg>
  );
}

export function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps}>
      <path d="M3 13l2-5a3 3 0 013-2h8a3 3 0 013 2l2 5" />
      <path d="M3 13h18v4a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H6v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-4z" />
      <circle cx="7.5" cy="17" r="1.2" />
      <circle cx="16.5" cy="17" r="1.2" />
    </svg>
  );
}

export function GraduationCapIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} strokeWidth={2}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
    </svg>
  );
}

export function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} strokeWidth={2}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} strokeWidth={2}>
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8.1 9.7a16 16 0 006.2 6.2l1.2-1.2a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} strokeWidth={2}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 6l10 7 10-7" />
    </svg>
  );
}

export function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} strokeWidth={2}>
      <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function AwardIcon() {
  return (
    <svg viewBox="0 0 24 24" {...strokeProps} strokeWidth={2}>
      <circle cx="12" cy="8" r="6" />
      <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
    </svg>
  );
}

export function EmblemWatermark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#ffffff"
      strokeWidth={1.5}
    >
      <line x1="100" y1="20" x2="100" y2="170" />
      <line x1="40" y1="50" x2="160" y2="50" />
      <path d="M40 50 L20 90 a20 20 0 0040 0 L40 50" />
      <path d="M160 50 L140 90 a20 20 0 0040 0 L160 50" />
      <line x1="65" y1="170" x2="135" y2="170" />
      <circle cx="100" cy="20" r="6" />
    </svg>
  );
}
