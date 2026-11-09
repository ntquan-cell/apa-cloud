export default function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
      <path d="M32 3 56 12v18c0 15-10 26-24 31C18 56 8 45 8 30V12z" fill="#fff" stroke="#c9d3e3" strokeWidth="2" />
      <path d="M32 14 20 48M32 14l12 34" stroke="#0b2a5b" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M22 38l7 7 20-24" stroke="#0a8f5b" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
