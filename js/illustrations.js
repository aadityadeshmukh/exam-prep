// ========================================================
// TEXTBOOK VECTOR ILLUSTRATIONS (बाल पतवार २)
// Comprehensive Vector Artwork for Hindi Syllabus & Textbook
// ========================================================

const SVG_ICONS = {
  // 1. Bucket (बाल्टी - ब)
  bucket: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <defs>
        <linearGradient id="bucketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ff4b4b"/>
          <stop offset="100%" stop-color="#c91818"/>
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="28" rx="34" ry="10" fill="#e53935" stroke="#8e0000" stroke-width="3"/>
      <path d="M19 28 L30 84 Q50 92 70 84 L81 28 Z" fill="url(#bucketGrad)" stroke="#8e0000" stroke-width="3"/>
      <ellipse cx="50" cy="28" rx="28" ry="7" fill="#64b5f6" opacity="0.8"/>
      <path d="M16 28 C16 2, 84 2, 84 28" fill="none" stroke="#78909c" stroke-width="5" stroke-linecap="round"/>
      <circle cx="50" cy="12" r="5" fill="#37474f"/>
    </svg>
  `,

  // 2. Drum (ढोल - ढ)
  drum: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <defs>
        <linearGradient id="drumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ff9800"/>
          <stop offset="50%" stop-color="#e65100"/>
          <stop offset="100%" stop-color="#b23c00"/>
        </linearGradient>
      </defs>
      <path d="M22 30 C12 50, 12 50, 22 70 L78 70 C88 50, 88 50, 78 30 Z" fill="url(#drumGrad)" stroke="#5d2600" stroke-width="3"/>
      <ellipse cx="22" cy="50" rx="9" ry="20" fill="#fff9c4" stroke="#5d2600" stroke-width="2.5"/>
      <ellipse cx="78" cy="50" rx="9" ry="20" fill="#fff9c4" stroke="#5d2600" stroke-width="2.5"/>
      <polyline points="22,35 78,50 22,65" fill="none" stroke="#ffffff" stroke-width="2"/>
      <polyline points="22,42 78,35 22,50 78,65" fill="none" stroke="#ffffff" stroke-width="1.8"/>
      <line x1="10" y1="18" x2="26" y2="44" stroke="#37474f" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="10" cy="18" r="4" fill="#e91e63"/>
      <line x1="90" y1="20" x2="74" y2="42" stroke="#37474f" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="90" cy="20" r="4" fill="#e91e63"/>
    </svg>
  `,

  // 3. Shield (ढाल - ढ)
  shield: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <defs>
        <radialGradient id="shieldGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffd54f"/>
          <stop offset="60%" stop-color="#ffb300"/>
          <stop offset="100%" stop-color="#ff6f00"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="38" fill="url(#shieldGrad)" stroke="#4e342e" stroke-width="4"/>
      <circle cx="50" cy="50" r="28" fill="#424242" stroke="#ffca28" stroke-width="3"/>
      <circle cx="50" cy="50" r="14" fill="#ffca28" stroke="#3e2723" stroke-width="2"/>
      <circle cx="50" cy="24" r="3" fill="#ffffff"/>
      <circle cx="50" cy="76" r="3" fill="#ffffff"/>
      <circle cx="24" cy="50" r="3" fill="#ffffff"/>
      <circle cx="76" cy="50" r="3" fill="#ffffff"/>
    </svg>
  `,

  // 4. Thermos Flask (थरमस - थ)
  thermos: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <defs>
        <linearGradient id="thermosGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#4fc3f7"/>
          <stop offset="50%" stop-color="#0288d1"/>
          <stop offset="100%" stop-color="#01579b"/>
        </linearGradient>
      </defs>
      <rect x="36" y="10" width="28" height="14" rx="4" fill="#e91e63" stroke="#880e4f" stroke-width="2"/>
      <rect x="42" y="6" width="16" height="5" rx="2" fill="#c2185b"/>
      <rect x="30" y="26" width="40" height="60" rx="8" fill="url(#thermosGrad)" stroke="#01579b" stroke-width="3"/>
      <rect x="30" y="44" width="40" height="18" fill="#fff176" stroke="#fbc02d" stroke-width="1.5"/>
      <path d="M30 36 C18 36, 18 72, 30 72" fill="none" stroke="#e91e63" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="34" y1="53" x2="66" y2="53" stroke="#e65100" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // 5. Plate / Dining Thali (थाली - थ)
  plate: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <defs>
        <radialGradient id="metalGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f5f5f5"/>
          <stop offset="80%" stop-color="#cfd8dc"/>
          <stop offset="100%" stop-color="#90a4ae"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#metalGrad)" stroke="#455a64" stroke-width="3.5"/>
      <circle cx="50" cy="50" r="34" fill="#eceff1" stroke="#b0bec5" stroke-width="2"/>
      <circle cx="36" cy="38" r="10" fill="#fff9c4" stroke="#fbc02d" stroke-width="2"/>
      <circle cx="62" cy="36" r="9" fill="#ffccbc" stroke="#e64a19" stroke-width="2"/>
      <ellipse cx="48" cy="64" rx="14" ry="10" fill="#ffe082" stroke="#ffa000" stroke-width="2"/>
      <circle cx="68" cy="56" r="6" fill="#c8e6c9" stroke="#388e3c" stroke-width="1.5"/>
    </svg>
  `,

  // 6. Umbrella (छाता - छ)
  umbrella: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <path d="M12 50 C14 20, 86 20, 88 50 C80 44, 70 44, 62 50 C54 44, 46 44, 38 50 C30 44, 20 44, 12 50 Z" 
            fill="#ab47bc" stroke="#4a148c" stroke-width="3"/>
      <path d="M50 18 Q50 36 38 50" fill="none" stroke="#4a148c" stroke-width="2"/>
      <path d="M50 18 Q50 36 62 50" fill="none" stroke="#4a148c" stroke-width="2"/>
      <line x1="50" y1="12" x2="50" y2="18" stroke="#37474f" stroke-width="3" stroke-linecap="round"/>
      <path d="M50 50 L50 80 C50 88, 38 88, 38 80" fill="none" stroke="#e65100" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `,

  // 7. Walking Stick (छड़ी - छ)
  stick: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <path d="M68 18 C68 6, 42 6, 42 22 L42 86" fill="none" stroke="#795548" stroke-width="7" stroke-linecap="round"/>
      <line x1="42" y1="84" x2="42" y2="90" stroke="#212121" stroke-width="8" stroke-linecap="square"/>
      <circle cx="68" cy="18" r="4.5" fill="#5d4037"/>
    </svg>
  `,

  // 8. Rabbit (खरगोश - ख)
  rabbit: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <ellipse cx="40" cy="24" rx="7" ry="20" fill="#ffffff" stroke="#424242" stroke-width="2.5" transform="rotate(-10 40 24)"/>
      <ellipse cx="40" cy="24" rx="3.5" ry="14" fill="#ff80ab" transform="rotate(-10 40 24)"/>
      <ellipse cx="58" cy="24" rx="7" ry="20" fill="#ffffff" stroke="#424242" stroke-width="2.5" transform="rotate(10 58 24)"/>
      <ellipse cx="58" cy="24" rx="3.5" ry="14" fill="#ff80ab" transform="rotate(10 58 24)"/>
      <circle cx="50" cy="52" r="24" fill="#ffffff" stroke="#424242" stroke-width="2.5"/>
      <circle cx="41" cy="46" r="3.5" fill="#212121"/>
      <circle cx="59" cy="46" r="3.5" fill="#212121"/>
      <polygon points="50,54 46,50 54,50" fill="#ff4081"/>
      <path d="M46 56 Q50 60 54 56" fill="none" stroke="#424242" stroke-width="2" stroke-linecap="round"/>
      <line x1="28" y1="52" x2="16" y2="50" stroke="#757575" stroke-width="1.8"/>
      <line x1="28" y1="56" x2="16" y2="58" stroke="#757575" stroke-width="1.8"/>
      <line x1="72" y1="52" x2="84" y2="50" stroke="#757575" stroke-width="1.8"/>
      <line x1="72" y1="56" x2="84" y2="58" stroke="#757575" stroke-width="1.8"/>
    </svg>
  `,

  // 9. Window (खिड़की - ख)
  window: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <rect x="18" y="16" width="64" height="68" rx="6" fill="#8d6e63" stroke="#4e342e" stroke-width="4"/>
      <rect x="24" y="22" width="24" height="26" fill="#81d4fa"/>
      <rect x="52" y="22" width="24" height="26" fill="#81d4fa"/>
      <rect x="24" y="52" width="24" height="26" fill="#4fc3f7"/>
      <rect x="52" y="52" width="24" height="26" fill="#4fc3f7"/>
      <circle cx="34" cy="32" r="5" fill="#fff59d"/>
      <path d="M56 42 Q64 36 72 42 Z" fill="#ffffff" opacity="0.8"/>
      <rect x="12" y="82" width="76" height="8" rx="3" fill="#5d4037"/>
    </svg>
  `,

  // 10. Inkpot & Quill (दवात - द)
  inkpot: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <defs>
        <linearGradient id="inkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1565c0"/>
          <stop offset="100%" stop-color="#0d47a1"/>
        </linearGradient>
      </defs>
      <rect x="36" y="44" width="28" height="8" rx="2" fill="#ffd54f" stroke="#ff8f00" stroke-width="2"/>
      <path d="M32 52 L22 84 Q50 92 78 84 L68 52 Z" fill="url(#inkGrad)" stroke="#0d47a1" stroke-width="3"/>
      <rect x="32" y="62" width="36" height="14" rx="3" fill="#ffffff" stroke="#90caf9" stroke-width="1.5"/>
      <path d="M46 54 L76 14 Q84 12 78 26 L52 58 Z" fill="#e91e63" stroke="#880e4f" stroke-width="2"/>
      <line x1="76" y1="14" x2="48" y2="56" stroke="#ffffff" stroke-width="1.5"/>
    </svg>
  `,

  // 11. Cloud (बादल - ब)
  cloud: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <defs>
        <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#90caf9"/>
          <stop offset="100%" stop-color="#42a5f5"/>
        </linearGradient>
      </defs>
      <path d="M25 64 A16 16 0 0 1 30 34 A24 24 0 0 1 70 32 A18 18 0 0 1 85 54 A14 14 0 0 1 76 68 L25 68 Z" 
            fill="url(#cloudGrad)" stroke="#1976d2" stroke-width="3"/>
      <line x1="30" y1="74" x2="26" y2="84" stroke="#1e88e5" stroke-width="3" stroke-linecap="round"/>
      <line x1="48" y1="74" x2="44" y2="86" stroke="#1e88e5" stroke-width="3" stroke-linecap="round"/>
      <line x1="66" y1="74" x2="62" y2="84" stroke="#1e88e5" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,

  // 12. Flute (बाँसुरी - ब)
  flute: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <line x1="14" y1="86" x2="86" y2="14" stroke="#ffb300" stroke-width="8" stroke-linecap="round"/>
      <circle cx="34" cy="66" r="2.5" fill="#3e2723"/>
      <circle cx="44" cy="56" r="2.5" fill="#3e2723"/>
      <circle cx="54" cy="46" r="2.5" fill="#3e2723"/>
      <circle cx="64" cy="36" r="2.5" fill="#3e2723"/>
      <circle cx="74" cy="26" r="2.5" fill="#3e2723"/>
      <circle cx="82" cy="18" r="5" fill="#00e676" stroke="#00b0ff" stroke-width="2"/>
      <circle cx="82" cy="18" r="2" fill="#3d5afe"/>
    </svg>
  `,

  // 13. Sun (सूरज - स)
  sun: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <defs>
        <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff59d"/>
          <stop offset="60%" stop-color="#fbc02d"/>
          <stop offset="100%" stop-color="#f57f17"/>
        </radialGradient>
      </defs>
      <g stroke="#f57f17" stroke-width="4" stroke-linecap="round">
        <line x1="50" y1="10" x2="50" y2="20"/>
        <line x1="50" y1="80" x2="50" y2="90"/>
        <line x1="10" y1="50" x2="20" y2="50"/>
        <line x1="80" y1="50" x2="90" y2="50"/>
        <line x1="22" y1="22" x2="30" y2="30"/>
        <line x1="70" y1="70" x2="78" y2="78"/>
        <line x1="78" y1="22" x2="70" y2="30"/>
        <line x1="22" y1="78" x2="30" y2="70"/>
      </g>
      <circle cx="50" cy="50" r="24" fill="url(#sunGrad)" stroke="#e65100" stroke-width="2.5"/>
      <circle cx="43" cy="46" r="2.5" fill="#424242"/>
      <circle cx="57" cy="46" r="2.5" fill="#424242"/>
      <path d="M44 54 Q50 60 56 54" fill="none" stroke="#d84315" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // 14. Orange (संतरा - स)
  orange: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <defs>
        <radialGradient id="orangeGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#ffb74d"/>
          <stop offset="70%" stop-color="#ff9800"/>
          <stop offset="100%" stop-color="#e65100"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="54" r="34" fill="url(#orangeGrad)" stroke="#bf360c" stroke-width="3"/>
      <path d="M50 20 L50 26" stroke="#4e342e" stroke-width="4" stroke-linecap="round"/>
      <path d="M50 22 Q66 12 68 28 Q56 30 50 22 Z" fill="#66bb6a" stroke="#2e7d32" stroke-width="2"/>
    </svg>
  `,

  // 15. Trident (त्रिशूल - त्र)
  trishul: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <line x1="50" y1="8" x2="50" y2="92" stroke="#ff8f00" stroke-width="5" stroke-linecap="round"/>
      <polygon points="50,6 44,20 56,20" fill="#ffa000" stroke="#ff6f00" stroke-width="1.5"/>
      <path d="M30 18 Q30 38 50 42" fill="none" stroke="#ff8f00" stroke-width="5" stroke-linecap="round"/>
      <polygon points="30,16 26,26 36,26" fill="#ffa000" stroke="#ff6f00" stroke-width="1.5"/>
      <path d="M70 18 Q70 38 50 42" fill="none" stroke="#ff8f00" stroke-width="5" stroke-linecap="round"/>
      <polygon points="70,16 64,26 74,26" fill="#ffa000" stroke="#ff6f00" stroke-width="1.5"/>
      <polygon points="43,50 57,50 43,62 57,62" fill="#d84315" stroke="#bf360c" stroke-width="1.5"/>
    </svg>
  `,

  // 16. Triangle (त्रिकोण - त्र)
  triangle: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <polygon points="50,14 16,82 84,82" fill="#ffeb3b" stroke="#f57f17" stroke-width="5" stroke-linejoin="round"/>
      <polygon points="50,30 28,74 72,74" fill="#fff9c4" stroke="#fbc02d" stroke-width="2" stroke-linejoin="round"/>
    </svg>
  `,

  // 17. Sacred Fire (यज्ञ - य)
  yajna: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <polygon points="20,70 80,70 72,90 28,90" fill="#d84315" stroke="#bf360c" stroke-width="3"/>
      <polygon points="12,68 88,68 80,74 20,74" fill="#ff7043" stroke="#d84315" stroke-width="2"/>
      <path d="M50 16 Q65 34 56 48 Q74 44 68 64 Q50 66 50 64 Q42 66 32 64 Q26 44 44 48 Q35 34 50 16 Z" 
            fill="#ff9800" stroke="#e65100" stroke-width="2"/>
      <path d="M50 28 Q58 40 52 50 Q62 50 58 62 Q50 64 42 62 Q38 50 48 50 Q42 40 50 28 Z" 
            fill="#ffeb3b"/>
    </svg>
  `,

  // 18. Arrow & Bow (बाण - ण)
  arrow: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <path d="M22 18 C52 18, 52 82, 22 82" fill="none" stroke="#8d6e63" stroke-width="5" stroke-linecap="round"/>
      <line x1="22" y1="18" x2="22" y2="82" stroke="#cfd8dc" stroke-width="2"/>
      <line x1="16" y1="50" x2="84" y2="50" stroke="#37474f" stroke-width="3.5" stroke-linecap="round"/>
      <polygon points="88,50 74,43 74,57" fill="#f44336" stroke="#b71c1c" stroke-width="1.5"/>
    </svg>
  `,

  // 19. Warrior (क्षत्रिय - क्ष)
  warrior: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <line x1="22" y1="22" x2="78" y2="78" stroke="#78909c" stroke-width="5" stroke-linecap="round"/>
      <line x1="78" y1="22" x2="22" y2="78" stroke="#78909c" stroke-width="5" stroke-linecap="round"/>
      <circle cx="50" cy="50" r="22" fill="#ffd54f" stroke="#e65100" stroke-width="3"/>
      <circle cx="50" cy="50" r="14" fill="#c62828" stroke="#ffd54f" stroke-width="2"/>
    </svg>
  `,

  // 20. Wise Sage (ज्ञानी - ज्ञ / ऋषि - ऋ)
  sage: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <circle cx="50" cy="38" r="26" fill="#fff9c4" opacity="0.8"/>
      <path d="M26 84 C30 64, 70 64, 74 84 Z" fill="#ff9800" stroke="#e65100" stroke-width="2.5"/>
      <circle cx="50" cy="38" r="16" fill="#ffe0b2" stroke="#8d6e63" stroke-width="2"/>
      <path d="M38 42 C38 60, 62 60, 62 42 Z" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5"/>
      <circle cx="50" cy="20" r="7" fill="#5d4037"/>
      <line x1="50" y1="28" x2="50" y2="34" stroke="#d50000" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // 21. Lotus (कमल - क)
  lotus: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <ellipse cx="50" cy="80" rx="36" ry="7" fill="#81d4fa"/>
      <ellipse cx="30" cy="74" rx="16" ry="6" fill="#4caf50" stroke="#2e7d32" stroke-width="1.5"/>
      <ellipse cx="70" cy="74" rx="16" ry="6" fill="#4caf50" stroke="#2e7d32" stroke-width="1.5"/>
      <path d="M50 72 C22 62, 16 38, 32 46 C38 52, 44 64, 50 72 Z" fill="#f06292" stroke="#ad1457" stroke-width="2"/>
      <path d="M50 72 C78 62, 84 38, 68 46 C62 52, 56 64, 50 72 Z" fill="#f06292" stroke="#ad1457" stroke-width="2"/>
      <path d="M50 20 C42 40, 42 62, 50 72 C58 62, 58 40, 50 20 Z" fill="#f48fb1" stroke="#ad1457" stroke-width="2"/>
    </svg>
  `,

  // 22. Mango (आम - आ)
  mango: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <defs>
        <radialGradient id="mangoGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#fff176"/>
          <stop offset="50%" stop-color="#ffb300"/>
          <stop offset="90%" stop-color="#f4511e"/>
        </radialGradient>
      </defs>
      <path d="M50 24 C74 24, 82 52, 70 74 C58 92, 34 88, 28 66 C22 46, 32 24, 50 24 Z" 
            fill="url(#mangoGrad)" stroke="#bf360c" stroke-width="3"/>
      <path d="M50 24 L50 14" stroke="#4e342e" stroke-width="4" stroke-linecap="round"/>
      <path d="M50 18 Q66 8 72 20 Q58 24 50 18 Z" fill="#4caf50" stroke="#1b5e20" stroke-width="1.8"/>
    </svg>
  `,

  // 23. Pomegranate (अनार - अ)
  pomegranate: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <defs>
        <radialGradient id="pomGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#ff5252"/>
          <stop offset="70%" stop-color="#d50000"/>
          <stop offset="100%" stop-color="#880e4f"/>
        </radialGradient>
      </defs>
      <polygon points="44,22 47,12 50,18 53,12 56,22" fill="#b71c1c" stroke="#880e4f" stroke-width="1.5"/>
      <circle cx="50" cy="56" r="32" fill="url(#pomGrad)" stroke="#880e4f" stroke-width="3"/>
    </svg>
  `,

  // 24. Grapes (अंगूर - अं)
  grapes: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <path d="M50 14 L50 24" stroke="#5d4037" stroke-width="4" stroke-linecap="round"/>
      <path d="M50 18 Q66 10 70 24 Q56 26 50 18 Z" fill="#66bb6a" stroke="#2e7d32" stroke-width="1.8"/>
      <g fill="#7e57c2" stroke="#4527a0" stroke-width="2">
        <circle cx="42" cy="32" r="9"/>
        <circle cx="58" cy="32" r="9"/>
        <circle cx="34" cy="46" r="9"/>
        <circle cx="50" cy="46" r="9"/>
        <circle cx="66" cy="46" r="9"/>
        <circle cx="42" cy="60" r="9"/>
        <circle cx="58" cy="60" r="9"/>
        <circle cx="50" cy="74" r="9"/>
      </g>
    </svg>
  `,

  // 25. Flower (फूल - फ)
  flower: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <g fill="#ff4081" stroke="#c2185b" stroke-width="2.5">
        <circle cx="50" cy="30" r="14"/>
        <circle cx="70" cy="50" r="14"/>
        <circle cx="50" cy="70" r="14"/>
        <circle cx="30" cy="50" r="14"/>
      </g>
      <circle cx="50" cy="50" r="12" fill="#ffd600" stroke="#ffab00" stroke-width="2.5"/>
    </svg>
  `,

  // 26. Owl (उल्लू - उ)
  owl: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <ellipse cx="50" cy="56" rx="28" ry="32" fill="#8d6e63" stroke="#4e342e" stroke-width="3"/>
      <circle cx="38" cy="42" r="12" fill="#ffffff" stroke="#4e342e" stroke-width="2.5"/>
      <circle cx="62" cy="42" r="12" fill="#ffffff" stroke="#4e342e" stroke-width="2.5"/>
      <circle cx="38" cy="42" r="6" fill="#212121"/>
      <circle cx="62" cy="42" r="6" fill="#212121"/>
      <polygon points="50,48 44,56 56,56" fill="#ffb300" stroke="#ff8f00" stroke-width="1.5"/>
    </svg>
  `,

  // 27. Tamarind (इमली - इ)
  tamarind: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <path d="M50 12 L50 22" stroke="#5d4037" stroke-width="4" stroke-linecap="round"/>
      <!-- Curved Brown Tamarind Pod -->
      <path d="M48 22 C64 24, 76 44, 68 62 C62 76, 42 84, 30 78 C20 72, 34 56, 42 50 C50 44, 42 30, 48 22 Z" 
            fill="#8d6e63" stroke="#4e342e" stroke-width="3"/>
      <circle cx="60" cy="46" r="6" fill="#5d4037"/>
      <circle cx="48" cy="68" r="6" fill="#5d4037"/>
    </svg>
  `,

  // 28. Sugarcane (ईख - ई)
  sugarcane: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Stalks -->
      <line x1="42" y1="18" x2="42" y2="90" stroke="#66bb6a" stroke-width="10" stroke-linecap="round"/>
      <line x1="58" y1="26" x2="58" y2="90" stroke="#4caf50" stroke-width="10" stroke-linecap="round"/>
      <!-- Joints -->
      <line x1="37" y1="38" x2="47" y2="38" stroke="#1b5e20" stroke-width="2.5"/>
      <line x1="37" y1="58" x2="47" y2="58" stroke="#1b5e20" stroke-width="2.5"/>
      <line x1="37" y1="76" x2="47" y2="76" stroke="#1b5e20" stroke-width="2.5"/>
      <line x1="53" y1="48" x2="63" y2="48" stroke="#1b5e20" stroke-width="2.5"/>
      <line x1="53" y1="68" x2="63" y2="68" stroke="#1b5e20" stroke-width="2.5"/>
      <!-- Green Leaves at top -->
      <path d="M42 22 Q24 10 18 20" fill="none" stroke="#2e7d32" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M58 26 Q76 12 84 22" fill="none" stroke="#2e7d32" stroke-width="3.5" stroke-linecap="round"/>
    </svg>
  `,

  // 29. Wool Ball (ऊन - ऊ)
  wool: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <circle cx="50" cy="50" r="32" fill="#e91e63" stroke="#880e4f" stroke-width="3"/>
      <!-- Wool windings -->
      <path d="M26 40 Q50 30 74 44" fill="none" stroke="#f48fb1" stroke-width="3.5"/>
      <path d="M24 56 Q50 68 76 52" fill="none" stroke="#f48fb1" stroke-width="3.5"/>
      <path d="M36 24 Q52 50 44 76" fill="none" stroke="#f48fb1" stroke-width="3.5"/>
      <!-- Free thread strand -->
      <path d="M72 64 Q86 78 78 88" fill="none" stroke="#e91e63" stroke-width="4" stroke-linecap="round"/>
    </svg>
  `,

  // 30. Spectacles (ऐनक - ऐ)
  glasses: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Round Frames -->
      <circle cx="34" cy="50" r="18" fill="#e0f7fa" stroke="#37474f" stroke-width="4"/>
      <circle cx="66" cy="50" r="18" fill="#e0f7fa" stroke="#37474f" stroke-width="4"/>
      <!-- Bridge -->
      <path d="M48 46 Q50 42 52 46" fill="none" stroke="#37474f" stroke-width="4"/>
      <!-- Temples / Arms -->
      <path d="M18 48 L10 44" stroke="#37474f" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M82 48 L90 44" stroke="#37474f" stroke-width="3.5" stroke-linecap="round"/>
    </svg>
  `,

  // 31. Mortar (ओखली - ओ)
  mortar: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <defs>
        <linearGradient id="mortarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#b0bec5"/>
          <stop offset="100%" stop-color="#546e7a"/>
        </linearGradient>
      </defs>
      <!-- Pestle wooden rod sticking out -->
      <line x1="38" y1="16" x2="56" y2="52" stroke="#8d6e63" stroke-width="8" stroke-linecap="round"/>
      <!-- Bowl Mortar -->
      <path d="M22 42 L30 84 Q50 88 70 84 L78 42 Z" fill="url(#mortarGrad)" stroke="#37474f" stroke-width="3.5"/>
      <ellipse cx="50" cy="42" rx="28" ry="8" fill="#cfd8dc" stroke="#37474f" stroke-width="3"/>
    </svg>
  `,

  // 32. Woman (औरत - औ)
  woman: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Hair bun -->
      <circle cx="50" cy="28" r="22" fill="#212121"/>
      <!-- Face -->
      <circle cx="50" cy="42" r="16" fill="#ffcc80" stroke="#8d6e63" stroke-width="2"/>
      <!-- Bindi -->
      <circle cx="50" cy="38" r="2" fill="#d50000"/>
      <!-- Traditional Saree / Dupatta -->
      <path d="M24 86 C28 64, 72 64, 76 86 Z" fill="#e91e63" stroke="#880e4f" stroke-width="3"/>
      <!-- Gold necklace -->
      <path d="M42 58 Q50 64 58 58" fill="none" stroke="#ffd600" stroke-width="2.5"/>
    </svg>
  `,

  // 33. Tomato (टमाटर - ट)
  tomato: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <circle cx="50" cy="54" r="32" fill="#f44336" stroke="#b71c1c" stroke-width="3"/>
      <!-- Green stem & calyx -->
      <path d="M50 16 L50 24" stroke="#2e7d32" stroke-width="4" stroke-linecap="round"/>
      <polygon points="50,24 40,28 44,22 50,24 56,22 60,28" fill="#4caf50"/>
    </svg>
  `,

  // 34. Fish (मछली - म)
  fish: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Fish Body -->
      <ellipse cx="46" cy="50" rx="28" ry="18" fill="#42a5f5" stroke="#1565c0" stroke-width="3"/>
      <!-- Tail fin -->
      <polygon points="70,50 88,32 88,68" fill="#1e88e5" stroke="#1565c0" stroke-width="2.5"/>
      <!-- Eye -->
      <circle cx="30" cy="46" r="3.5" fill="#212121"/>
      <circle cx="31" cy="45" r="1.2" fill="#ffffff"/>
      <!-- Fin -->
      <path d="M46 52 Q54 62 48 64" fill="none" stroke="#1565c0" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,

  // 35. Kite (पतंग - प)
  kite: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Diamond body -->
      <polygon points="50,14 82,46 50,78 18,46" fill="#ff9800" stroke="#e65100" stroke-width="3"/>
      <line x1="50" y1="14" x2="50" y2="78" stroke="#37474f" stroke-width="2"/>
      <path d="M18 46 Q50 64 82 46" fill="none" stroke="#37474f" stroke-width="2"/>
      <!-- Tail -->
      <polygon points="50,78 44,88 56,88" fill="#e91e63"/>
    </svg>
  `,

  // ========================================================
  // COMPUTING THEORY VECTOR ILLUSTRATIONS
  // Hardware, Software, Input Devices, Algorithms & Data
  // ========================================================

  // Computer / Monitor
  computer: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Screen frame -->
      <rect x="14" y="16" width="72" height="50" rx="6" fill="#2d3748" stroke="#1a202c" stroke-width="3"/>
      <!-- Inner display -->
      <rect x="19" y="21" width="62" height="40" rx="3" fill="#1cb0f6"/>
      <!-- Screen content lines -->
      <line x1="25" y1="29" x2="52" y2="29" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      <line x1="25" y1="37" x2="72" y2="37" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="25" y1="44" x2="64" y2="44" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="68" cy="28" r="4" fill="#ffd900"/>
      <!-- Stand -->
      <rect x="44" y="66" width="12" height="12" fill="#718096" stroke="#4a5568" stroke-width="2"/>
      <path d="M30 78 L70 78 L65 84 L35 84 Z" fill="#4a5568"/>
    </svg>
  `,

  // Keyboard
  keyboard: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Keyboard base -->
      <rect x="10" y="30" width="80" height="46" rx="6" fill="#4a5568" stroke="#2d3748" stroke-width="3"/>
      <!-- Key rows -->
      <rect x="16" y="36" width="12" height="7" rx="2" fill="#e2e8f0"/>
      <rect x="31" y="36" width="12" height="7" rx="2" fill="#e2e8f0"/>
      <rect x="46" y="36" width="12" height="7" rx="2" fill="#e2e8f0"/>
      <rect x="61" y="36" width="12" height="7" rx="2" fill="#e2e8f0"/>
      <rect x="75" y="36" width="9" height="7" rx="2" fill="#ffd900"/>

      <rect x="16" y="46" width="14" height="7" rx="2" fill="#e2e8f0"/>
      <rect x="33" y="46" width="11" height="7" rx="2" fill="#e2e8f0"/>
      <rect x="47" y="46" width="11" height="7" rx="2" fill="#e2e8f0"/>
      <rect x="61" y="46" width="11" height="7" rx="2" fill="#e2e8f0"/>
      <rect x="75" y="46" width="9" height="7" rx="2" fill="#58cc02"/>

      <rect x="16" y="56" width="18" height="7" rx="2" fill="#cbd5e0"/>
      <!-- Spacebar -->
      <rect x="37" y="56" width="34" height="7" rx="2" fill="#ffffff"/>
      <rect x="74" y="56" width="10" height="7" rx="2" fill="#cbd5e0"/>
      <!-- Cord -->
      <path d="M50 30 Q50 18 68 18" fill="none" stroke="#718096" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,

  // Mouse
  mouse: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Mouse body -->
      <ellipse cx="50" cy="56" rx="24" ry="32" fill="#1cb0f6" stroke="#1899d6" stroke-width="3"/>
      <!-- Split line between buttons -->
      <line x1="50" y1="24" x2="50" y2="52" stroke="#1899d6" stroke-width="2"/>
      <!-- Scroll wheel -->
      <rect x="46" y="32" width="8" height="15" rx="4" fill="#2d3748"/>
      <!-- Cord -->
      <path d="M50 24 C50 12, 38 10, 36 6" fill="none" stroke="#4a5568" stroke-width="3" stroke-linecap="round"/>
      <!-- Highlight -->
      <ellipse cx="38" cy="62" rx="4" ry="12" fill="#ffffff" opacity="0.4"/>
    </svg>
  `,

  // Printer
  printer: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Printer top paper slot -->
      <rect x="28" y="16" width="44" height="26" rx="3" fill="#ffffff" stroke="#718096" stroke-width="2"/>
      <line x1="34" y1="24" x2="66" y2="24" stroke="#a0aec0" stroke-width="2"/>
      <line x1="34" y1="30" x2="58" y2="30" stroke="#a0aec0" stroke-width="2"/>
      <!-- Main body -->
      <rect x="14" y="36" width="72" height="34" rx="6" fill="#edf2f7" stroke="#4a5568" stroke-width="3"/>
      <!-- Paper output slot -->
      <rect x="24" y="58" width="52" height="6" rx="2" fill="#2d3748"/>
      <!-- Output sheet -->
      <rect x="28" y="62" width="44" height="24" rx="2" fill="#ffffff" stroke="#cbd5e0" stroke-width="2"/>
      <line x1="34" y1="68" x2="66" y2="68" stroke="#58cc02" stroke-width="2.5"/>
      <line x1="34" y1="74" x2="56" y2="74" stroke="#718096" stroke-width="2"/>
      <!-- Status LED -->
      <circle cx="76" cy="46" r="3.5" fill="#58cc02"/>
      <circle cx="68" cy="46" r="3" fill="#3182ce"/>
    </svg>
  `,

  // Speakers
  speakers: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Left Speaker -->
      <rect x="14" y="24" width="30" height="56" rx="5" fill="#2d3748" stroke="#1a202c" stroke-width="3"/>
      <circle cx="29" cy="42" r="7" fill="#4a5568" stroke="#1a202c" stroke-width="2"/>
      <circle cx="29" cy="62" r="11" fill="#718096" stroke="#1a202c" stroke-width="2"/>
      <circle cx="29" cy="62" r="4" fill="#ffd900"/>
      <!-- Right Speaker -->
      <rect x="56" y="24" width="30" height="56" rx="5" fill="#2d3748" stroke="#1a202c" stroke-width="3"/>
      <circle cx="71" cy="42" r="7" fill="#4a5568" stroke="#1a202c" stroke-width="2"/>
      <circle cx="71" cy="62" r="11" fill="#718096" stroke="#1a202c" stroke-width="2"/>
      <circle cx="71" cy="62" r="4" fill="#ffd900"/>
      <!-- Sound waves -->
      <path d="M48 38 Q52 44 48 50" fill="none" stroke="#1cb0f6" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M49 32 Q56 44 49 56" fill="none" stroke="#1cb0f6" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,

  // USB Drive (Storage)
  usb_drive: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- USB Metal head -->
      <rect x="36" y="16" width="28" height="24" rx="2" fill="#cbd5e0" stroke="#718096" stroke-width="2.5"/>
      <rect x="42" y="22" width="6" height="6" fill="#4a5568"/>
      <rect x="52" y="22" width="6" height="6" fill="#4a5568"/>
      <!-- Plastic casing -->
      <rect x="30" y="38" width="40" height="48" rx="8" fill="#ff4b4b" stroke="#ea2b2b" stroke-width="3"/>
      <rect x="38" y="46" width="24" height="20" rx="3" fill="#ffffff" opacity="0.3"/>
      <!-- Lanyard hole -->
      <circle cx="50" cy="74" r="5" fill="#2d3748"/>
    </svg>
  `,

  // Hard Drive (Storage)
  hard_drive: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <rect x="18" y="28" width="64" height="48" rx="6" fill="#ce82ff" stroke="#a559df" stroke-width="3"/>
      <circle cx="34" cy="52" r="5" fill="#58cc02"/>
      <line x1="48" y1="46" x2="72" y2="46" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      <line x1="48" y1="56" x2="66" y2="56" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      <!-- Cable -->
      <path d="M50 76 Q50 86 64 86 Q78 86 78 72" fill="none" stroke="#4a5568" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,

  // Microphone
  microphone: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Mic capsule -->
      <rect x="38" y="16" width="24" height="38" rx="12" fill="#4a5568" stroke="#2d3748" stroke-width="3"/>
      <!-- Grille lines -->
      <line x1="42" y1="28" x2="58" y2="28" stroke="#a0aec0" stroke-width="2"/>
      <line x1="42" y1="36" x2="58" y2="36" stroke="#a0aec0" stroke-width="2"/>
      <!-- U-bracket -->
      <path d="M30 36 C30 62, 70 62, 70 36" fill="none" stroke="#e2e8f0" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Stand stem and base -->
      <line x1="50" y1="60" x2="50" y2="78" stroke="#e2e8f0" stroke-width="4"/>
      <ellipse cx="50" cy="80" rx="20" ry="7" fill="#4a5568" stroke="#2d3748" stroke-width="2.5"/>
    </svg>
  `,

  // Barcode & Scanner
  barcode: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <rect x="14" y="24" width="72" height="52" rx="6" fill="#ffffff" stroke="#cbd5e0" stroke-width="2.5"/>
      <!-- Vertical black lines -->
      <line x1="22" y1="32" x2="22" y2="64" stroke="#1a202c" stroke-width="4"/>
      <line x1="28" y1="32" x2="28" y2="64" stroke="#1a202c" stroke-width="2"/>
      <line x1="33" y1="32" x2="33" y2="64" stroke="#1a202c" stroke-width="5"/>
      <line x1="41" y1="32" x2="41" y2="64" stroke="#1a202c" stroke-width="2"/>
      <line x1="47" y1="32" x2="47" y2="64" stroke="#1a202c" stroke-width="6"/>
      <line x1="56" y1="32" x2="56" y2="64" stroke="#1a202c" stroke-width="3"/>
      <line x1="62" y1="32" x2="62" y2="64" stroke="#1a202c" stroke-width="2"/>
      <line x1="67" y1="32" x2="67" y2="64" stroke="#1a202c" stroke-width="4"/>
      <line x1="75" y1="32" x2="75" y2="64" stroke="#1a202c" stroke-width="3"/>
      <!-- Red laser scan line -->
      <line x1="10" y1="48" x2="90" y2="48" stroke="#ff4b4b" stroke-width="3" stroke-linecap="round"/>
      <circle cx="10" cy="48" r="3" fill="#ff4b4b"/>
      <circle cx="90" cy="48" r="3" fill="#ff4b4b"/>
    </svg>
  `,

  // RFID Contactless Card
  rfid: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Credit Card shape -->
      <rect x="12" y="24" width="76" height="52" rx="8" fill="#ff9600" stroke="#e08500" stroke-width="3"/>
      <!-- Gold chip -->
      <rect x="22" y="38" width="16" height="13" rx="2" fill="#ffd900" stroke="#b7791f" stroke-width="1.5"/>
      <!-- RFID waves -->
      <path d="M52 38 Q58 45 52 52" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      <path d="M58 33 Q67 45 58 57" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      <path d="M64 28 Q76 45 64 62" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      <!-- Card text bars -->
      <rect x="22" y="60" width="30" height="5" rx="2" fill="#ffffff" opacity="0.8"/>
      <circle cx="74" cy="62" r="6" fill="#ff4b4b" opacity="0.9"/>
      <circle cx="66" cy="62" r="6" fill="#ffd900" opacity="0.9"/>
    </svg>
  `,

  // Biometric Fingerprint
  fingerprint: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Scanner bezel -->
      <rect x="18" y="16" width="64" height="68" rx="16" fill="#1a202c" stroke="#1cb0f6" stroke-width="3"/>
      <!-- Glow center -->
      <circle cx="50" cy="50" r="28" fill="#1cb0f6" opacity="0.15"/>
      <!-- Fingerprint ridges -->
      <path d="M50 36 C42 36, 38 42, 38 52 C38 62, 42 66, 50 66" fill="none" stroke="#1cb0f6" stroke-width="3" stroke-linecap="round"/>
      <path d="M50 42 C45 42, 44 46, 44 52 C44 58, 47 61, 50 61" fill="none" stroke="#1cb0f6" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M50 30 C38 30, 32 38, 32 52 C32 66, 40 72, 50 72" fill="none" stroke="#1cb0f6" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M50 30 C62 30, 68 38, 68 52 C68 64, 62 70, 56 72" fill="none" stroke="#1cb0f6" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M50 36 C58 36, 62 42, 62 52 C62 60, 58 64, 56 66" fill="none" stroke="#1cb0f6" stroke-width="2.5" stroke-linecap="round"/>
    </svg>
  `,

  // Sensor (Smoke detector / Temp sensor)
  sensor: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Outer dome -->
      <ellipse cx="50" cy="50" rx="38" ry="32" fill="#edf2f7" stroke="#718096" stroke-width="3"/>
      <ellipse cx="50" cy="50" rx="26" ry="20" fill="#cbd5e0" stroke="#a0aec0" stroke-width="2"/>
      <!-- Center sensor dot -->
      <circle cx="50" cy="50" r="10" fill="#e53e3e"/>
      <circle cx="50" cy="50" r="5" fill="#ffd900"/>
      <!-- Sensing waves emitting -->
      <path d="M50 12 Q50 6 56 6" fill="none" stroke="#e53e3e" stroke-width="3" stroke-linecap="round"/>
      <path d="M64 16 Q72 12 76 18" fill="none" stroke="#e53e3e" stroke-width="3" stroke-linecap="round"/>
      <path d="M36 16 Q28 12 24 18" fill="none" stroke="#e53e3e" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,

  // Scratch Cat Sprite
  scratch_cat: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Cat Head -->
      <ellipse cx="50" cy="54" rx="28" ry="24" fill="#ff9600" stroke="#d97706" stroke-width="3"/>
      <!-- Ears -->
      <polygon points="28,42 22,18 42,32" fill="#ff9600" stroke="#d97706" stroke-width="3"/>
      <polygon points="72,42 78,18 58,32" fill="#ff9600" stroke="#d97706" stroke-width="3"/>
      <polygon points="29,38 26,24 38,34" fill="#ffffff"/>
      <polygon points="71,38 74,24 62,34" fill="#ffffff"/>
      <!-- Big Muzzle -->
      <ellipse cx="44" cy="60" rx="9" ry="8" fill="#ffffff"/>
      <ellipse cx="56" cy="60" rx="9" ry="8" fill="#ffffff"/>
      <!-- Nose -->
      <polygon points="50,56 46,52 54,52" fill="#2d3748"/>
      <!-- Smile -->
      <path d="M44 63 Q50 68 56 63" fill="none" stroke="#2d3748" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Eyes -->
      <ellipse cx="38" cy="46" rx="6" ry="8" fill="#ffffff" stroke="#2d3748" stroke-width="2"/>
      <ellipse cx="62" cy="46" rx="6" ry="8" fill="#ffffff" stroke="#2d3748" stroke-width="2"/>
      <circle cx="40" cy="46" r="3.5" fill="#2d3748"/>
      <circle cx="60" cy="46" r="3.5" fill="#2d3748"/>
      <circle cx="41" cy="44" r="1.2" fill="#ffffff"/>
      <circle cx="61" cy="44" r="1.2" fill="#ffffff"/>
      <!-- Whiskers -->
      <line x1="20" y1="56" x2="34" y2="58" stroke="#2d3748" stroke-width="2"/>
      <line x1="20" y1="64" x2="34" y2="62" stroke="#2d3748" stroke-width="2"/>
      <line x1="80" y1="56" x2="66" y2="58" stroke="#2d3748" stroke-width="2"/>
      <line x1="80" y1="64" x2="66" y2="62" stroke="#2d3748" stroke-width="2"/>
    </svg>
  `,

  // Scratch Code Blocks
  scratch_blocks: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Hat Block (Events: When Flag Clicked) -->
      <path d="M10 26 C20 16 35 16 45 26 L88 26 Q92 26 92 30 L92 42 Q92 46 88 46 L38 46 L32 50 L24 50 L18 46 L14 46 Q10 46 10 42 Z" fill="#ffd900" stroke="#d69e2e" stroke-width="2.5"/>
      <circle cx="24" cy="36" r="5" fill="#58cc02"/>
      <line x1="36" y1="36" x2="76" y2="36" stroke="#744210" stroke-width="3" stroke-linecap="round"/>
      <!-- Motion Block (Blue: move 10 steps) -->
      <path d="M10 46 L18 46 L24 50 L32 50 L38 46 L88 46 Q92 46 92 50 L92 68 Q92 72 88 72 L38 72 L32 76 L24 76 L18 72 L14 72 Q10 72 10 68 Z" fill="#4c97ff" stroke="#2873df" stroke-width="2.5"/>
      <rect x="22" y="54" width="28" height="10" rx="3" fill="#ffffff"/>
      <line x1="56" y1="59" x2="82" y2="59" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
      <!-- Looks Block (Purple: change size by) -->
      <path d="M10 72 L18 72 L24 76 L32 76 L38 72 L88 72 Q92 72 92 76 L92 90 Q92 94 88 94 L14 94 Q10 94 10 90 Z" fill="#9966ff" stroke="#7744dd" stroke-width="2.5"/>
      <rect x="22" y="78" width="22" height="10" rx="3" fill="#ffffff"/>
      <line x1="50" y1="83" x2="80" y2="83" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,

  // Bar Chart (Categorical & Discrete Data)
  bar_chart: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Axis lines -->
      <line x1="16" y1="16" x2="16" y2="84" stroke="#4a5568" stroke-width="3" stroke-linecap="round"/>
      <line x1="16" y1="84" x2="90" y2="84" stroke="#4a5568" stroke-width="3" stroke-linecap="round"/>
      <!-- Bar 1 (Red) -->
      <rect x="24" y="52" width="16" height="32" rx="3" fill="#ff4b4b" stroke="#ea2b2b" stroke-width="2"/>
      <!-- Bar 2 (Blue - Tallest) -->
      <rect x="46" y="24" width="16" height="60" rx="3" fill="#1cb0f6" stroke="#1899d6" stroke-width="2"/>
      <!-- Bar 3 (Green) -->
      <rect x="68" y="40" width="16" height="44" rx="3" fill="#58cc02" stroke="#46a302" stroke-width="2"/>
      <!-- Grid dashes -->
      <line x1="16" y1="36" x2="90" y2="36" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="3,3"/>
      <line x1="16" y1="60" x2="90" y2="60" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="3,3"/>
    </svg>
  `,

  // Stacking Rings (Textbook exercise)
  stacking_rings: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Center cone stick -->
      <rect x="47" y="16" width="6" height="70" rx="3" fill="#cbd5e0"/>
      <!-- Base stand -->
      <ellipse cx="50" cy="86" rx="38" ry="8" fill="#718096" stroke="#4a5568" stroke-width="2"/>
      <!-- Ring 1 (Bottom): Blue -->
      <ellipse cx="50" cy="78" rx="34" ry="8" fill="#1cb0f6" stroke="#1899d6" stroke-width="2.5"/>
      <!-- Ring 2: Green -->
      <ellipse cx="50" cy="66" rx="28" ry="7" fill="#58cc02" stroke="#46a302" stroke-width="2.5"/>
      <!-- Ring 3: Yellow -->
      <ellipse cx="50" cy="54" rx="23" ry="6.5" fill="#ffd900" stroke="#d69e2e" stroke-width="2.5"/>
      <!-- Ring 4: Red -->
      <ellipse cx="50" cy="42" rx="18" ry="6" fill="#ff4b4b" stroke="#ea2b2b" stroke-width="2.5"/>
      <!-- Ring 5 (Top): Orange topper ball -->
      <circle cx="50" cy="24" r="10" fill="#ff9600" stroke="#e08500" stroke-width="2.5"/>
    </svg>
  `,

  // Planting Seeds (Textbook algorithm)
  plant_seeds: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Flower Pot -->
      <polygon points="30,54 70,54 62,88 38,88" fill="#c05621" stroke="#7b341e" stroke-width="3"/>
      <rect x="26" y="48" width="48" height="8" rx="3" fill="#dd6b20" stroke="#7b341e" stroke-width="2.5"/>
      <!-- Soil -->
      <ellipse cx="50" cy="52" rx="18" ry="4" fill="#4a2810"/>
      <!-- Green Sprout Stem -->
      <path d="M50 50 Q48 34 50 24" fill="none" stroke="#48bb78" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Leaves -->
      <path d="M50 36 Q38 32 40 24 Q48 30 50 36" fill="#58cc02" stroke="#38a169" stroke-width="2"/>
      <path d="M50 30 Q62 26 60 18 Q52 24 50 30" fill="#58cc02" stroke="#38a169" stroke-width="2"/>
      <!-- Water Droplet -->
      <path d="M74 34 C74 39, 68 44, 68 44 C68 44, 62 39, 62 34 C62 30, 68 22, 68 22 C68 22, 74 30, 74 34 Z" fill="#63b3ed"/>
    </svg>
  `,

  // Robot Mascot
  robot: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Antenna -->
      <line x1="50" y1="12" x2="50" y2="24" stroke="#718096" stroke-width="3"/>
      <circle cx="50" cy="12" r="5" fill="#ff4b4b"/>
      <!-- Head -->
      <rect x="22" y="24" width="56" height="42" rx="10" fill="#edf2f7" stroke="#4a5568" stroke-width="3"/>
      <!-- Ears -->
      <rect x="14" y="38" width="8" height="14" rx="3" fill="#cbd5e0" stroke="#4a5568" stroke-width="2"/>
      <rect x="78" y="38" width="8" height="14" rx="3" fill="#cbd5e0" stroke="#4a5568" stroke-width="2"/>
      <!-- Screen Visor -->
      <rect x="30" y="32" width="40" height="18" rx="6" fill="#1a202c"/>
      <!-- Glowing Eyes -->
      <circle cx="42" cy="41" r="4" fill="#1cb0f6"/>
      <circle cx="58" cy="41" r="4" fill="#1cb0f6"/>
      <!-- Mouth grid -->
      <rect x="36" y="54" width="28" height="6" rx="2" fill="#cbd5e0"/>
      <line x1="43" y1="54" x2="43" y2="60" stroke="#4a5568" stroke-width="1.5"/>
      <line x1="50" y1="54" x2="50" y2="60" stroke="#4a5568" stroke-width="1.5"/>
      <line x1="57" y1="54" x2="57" y2="60" stroke="#4a5568" stroke-width="1.5"/>
      <!-- Neck & Chest hint -->
      <rect x="42" y="66" width="16" height="6" fill="#718096"/>
      <rect x="28" y="72" width="44" height="18" rx="5" fill="#4a5568" stroke="#2d3748" stroke-width="2.5"/>
      <circle cx="38" cy="80" r="3.5" fill="#58cc02"/>
      <circle cx="50" cy="80" r="3.5" fill="#ffd900"/>
      <circle cx="62" cy="80" r="3.5" fill="#1cb0f6"/>
    </svg>
  `,

  // QR Code
  qr_code: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <rect x="16" y="16" width="68" height="68" rx="6" fill="#ffffff" stroke="#cbd5e0" stroke-width="2.5"/>
      <!-- Top-left corner finder -->
      <rect x="22" y="22" width="20" height="20" fill="#1a202c"/>
      <rect x="26" y="26" width="12" height="12" fill="#ffffff"/>
      <rect x="29" y="29" width="6" height="6" fill="#1a202c"/>
      <!-- Top-right corner finder -->
      <rect x="58" y="22" width="20" height="20" fill="#1a202c"/>
      <rect x="62" y="26" width="12" height="12" fill="#ffffff"/>
      <rect x="65" y="29" width="6" height="6" fill="#1a202c"/>
      <!-- Bottom-left corner finder -->
      <rect x="22" y="58" width="20" height="20" fill="#1a202c"/>
      <rect x="26" y="62" width="12" height="12" fill="#ffffff"/>
      <rect x="29" y="65" width="6" height="6" fill="#1a202c"/>
      <!-- Data modules -->
      <rect x="46" y="24" width="6" height="6" fill="#1a202c"/>
      <rect x="46" y="34" width="6" height="10" fill="#1a202c"/>
      <rect x="36" y="46" width="10" height="6" fill="#1a202c"/>
      <rect x="54" y="46" width="6" height="6" fill="#1a202c"/>
      <rect x="66" y="46" width="10" height="6" fill="#1a202c"/>
      <rect x="48" y="58" width="8" height="8" fill="#1a202c"/>
      <rect x="62" y="62" width="14" height="14" fill="#1a202c"/>
      <rect x="66" y="66" width="6" height="6" fill="#ffffff"/>
    </svg>
  `,

  // Weather Sun & Cloud (Mr Dawson)
  weather_sun: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Sun rays -->
      <circle cx="50" cy="46" r="22" fill="#ffd900" stroke="#f6ad55" stroke-width="3"/>
      <line x1="50" y1="12" x2="50" y2="20" stroke="#f6ad55" stroke-width="4" stroke-linecap="round"/>
      <line x1="50" y1="72" x2="50" y2="80" stroke="#f6ad55" stroke-width="4" stroke-linecap="round"/>
      <line x1="16" y1="46" x2="24" y2="46" stroke="#f6ad55" stroke-width="4" stroke-linecap="round"/>
      <line x1="76" y1="46" x2="84" y2="46" stroke="#f6ad55" stroke-width="4" stroke-linecap="round"/>
      <line x1="26" y1="22" x2="32" y2="28" stroke="#f6ad55" stroke-width="4" stroke-linecap="round"/>
      <line x1="68" y1="64" x2="74" y2="70" stroke="#f6ad55" stroke-width="4" stroke-linecap="round"/>
      <line x1="74" y1="22" x2="68" y2="28" stroke="#f6ad55" stroke-width="4" stroke-linecap="round"/>
      <!-- Cheerful face -->
      <circle cx="43" cy="43" r="2.5" fill="#744210"/>
      <circle cx="57" cy="43" r="2.5" fill="#744210"/>
      <path d="M44 50 Q50 56 56 50" fill="none" stroke="#744210" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Soft Cloud in front -->
      <path d="M46 76 L76 76 A10 10 0 0 0 76 56 A12 12 0 0 0 54 52 A9 9 0 0 0 46 60 A8 8 0 0 0 46 76 Z" fill="#edf2f7" stroke="#cbd5e0" stroke-width="2"/>
    </svg>
  `
};

// Function to get rendered artwork HTML with fallback
function getIllustrationHTML(key, fallbackEmoji = '✨') {
  if (key && SVG_ICONS[key]) {
    return `<div class="svg-illustration-container">${SVG_ICONS[key]}</div>`;
  }
  return `<div class="emoji-illustration">${fallbackEmoji}</div>`;
}
