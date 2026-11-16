export default function Peak() {
  return (
    <svg viewBox="0 0 600 440" className="w-full" role="img" aria-label="Light rising from a mountain peak">
      <defs>
        <linearGradient id="b" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stopColor="#00CFFF" stopOpacity=".55" /><stop offset="1" stopColor="#00CFFF" stopOpacity="0" /></linearGradient>
        <linearGradient id="m1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1677FF" /><stop offset="1" stopColor="#0D1B2A" /></linearGradient>
        <linearGradient id="m2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#12335f" /><stop offset="1" stopColor="#071426" /></linearGradient>
      </defs>
      <polygon className="beam" points="300,120 70,0 530,0" fill="url(#b)" />
      <polygon points="0,440 150,230 260,340 330,250 440,330 520,260 600,440" fill="url(#m2)" />
      <polygon points="120,440 300,100 480,440" fill="url(#m1)" />
      <polygon points="300,100 262,190 300,172 338,190" fill="#fff" opacity=".9" />
      <circle cx="300" cy="96" r="7" fill="#00CFFF" className="beam" />
    </svg>
  );
}
