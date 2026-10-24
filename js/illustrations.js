// ========================================================
// TEXTBOOK VECTOR ILLUSTRATIONS (बाल पतवार २)
// Crisp, child-friendly SVG illustrations for every object
// Zero external image dependencies - Guaranteed 100% offline & GitHub Pages
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
      <!-- Bucket Handle -->
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
      <!-- Barrel body -->
      <path d="M22 30 C12 50, 12 50, 22 70 L78 70 C88 50, 88 50, 78 30 Z" fill="url(#drumGrad)" stroke="#5d2600" stroke-width="3"/>
      <!-- Drum heads -->
      <ellipse cx="22" cy="50" rx="9" ry="20" fill="#fff9c4" stroke="#5d2600" stroke-width="2.5"/>
      <ellipse cx="78" cy="50" rx="9" ry="20" fill="#fff9c4" stroke="#5d2600" stroke-width="2.5"/>
      <!-- Cord zig zags -->
      <polyline points="22,35 78,50 22,65" fill="none" stroke="#ffffff" stroke-width="2"/>
      <polyline points="22,42 78,35 22,50 78,65" fill="none" stroke="#ffffff" stroke-width="1.8"/>
      <!-- Beaters / sticks -->
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
      <!-- Four Studs -->
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
      <!-- Cap / Cup -->
      <rect x="36" y="10" width="28" height="14" rx="4" fill="#e91e63" stroke="#880e4f" stroke-width="2"/>
      <rect x="42" y="6" width="16" height="5" rx="2" fill="#c2185b"/>
      <!-- Body -->
      <rect x="30" y="26" width="40" height="60" rx="8" fill="url(#thermosGrad)" stroke="#01579b" stroke-width="3"/>
      <!-- Insulated Grip Stripe -->
      <rect x="30" y="44" width="40" height="18" fill="#fff176" stroke="#fbc02d" stroke-width="1.5"/>
      <!-- Carry strap -->
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
      <!-- Food Bowls / Rotis inside Thali -->
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
      <!-- Rib segments -->
      <path d="M50 18 Q50 36 38 50" fill="none" stroke="#4a148c" stroke-width="2"/>
      <path d="M50 18 Q50 36 62 50" fill="none" stroke="#4a148c" stroke-width="2"/>
      <!-- Tip -->
      <line x1="50" y1="12" x2="50" y2="18" stroke="#37474f" stroke-width="3" stroke-linecap="round"/>
      <!-- Shaft & J-handle -->
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
      <!-- Ears -->
      <ellipse cx="40" cy="24" rx="7" ry="20" fill="#ffffff" stroke="#424242" stroke-width="2.5" transform="rotate(-10 40 24)"/>
      <ellipse cx="40" cy="24" rx="3.5" ry="14" fill="#ff80ab" transform="rotate(-10 40 24)"/>
      <ellipse cx="58" cy="24" rx="7" ry="20" fill="#ffffff" stroke="#424242" stroke-width="2.5" transform="rotate(10 58 24)"/>
      <ellipse cx="58" cy="24" rx="3.5" ry="14" fill="#ff80ab" transform="rotate(10 58 24)"/>
      <!-- Head -->
      <circle cx="50" cy="52" r="24" fill="#ffffff" stroke="#424242" stroke-width="2.5"/>
      <!-- Eyes -->
      <circle cx="41" cy="46" r="3.5" fill="#212121"/>
      <circle cx="59" cy="46" r="3.5" fill="#212121"/>
      <circle cx="42" cy="45" r="1.2" fill="#ffffff"/>
      <circle cx="60" cy="45" r="1.2" fill="#ffffff"/>
      <!-- Pink Nose & mouth -->
      <polygon points="50,54 46,50 54,50" fill="#ff4081"/>
      <path d="M46 56 Q50 60 54 56" fill="none" stroke="#424242" stroke-width="2" stroke-linecap="round"/>
      <!-- Whiskers -->
      <line x1="28" y1="52" x2="16" y2="50" stroke="#757575" stroke-width="1.8"/>
      <line x1="28" y1="56" x2="16" y2="58" stroke="#757575" stroke-width="1.8"/>
      <line x1="72" y1="52" x2="84" y2="50" stroke="#757575" stroke-width="1.8"/>
      <line x1="72" y1="56" x2="84" y2="58" stroke="#757575" stroke-width="1.8"/>
    </svg>
  `,

  // 9. Window (खिड़की - ख)
  window: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Frame -->
      <rect x="18" y="16" width="64" height="68" rx="6" fill="#8d6e63" stroke="#4e342e" stroke-width="4"/>
      <!-- Glass panes (Sky blue) -->
      <rect x="24" y="22" width="24" height="26" fill="#81d4fa"/>
      <rect x="52" y="22" width="24" height="26" fill="#81d4fa"/>
      <rect x="24" y="52" width="24" height="26" fill="#4fc3f7"/>
      <rect x="52" y="52" width="24" height="26" fill="#4fc3f7"/>
      <!-- Sun reflection / clouds in window -->
      <circle cx="34" cy="32" r="5" fill="#fff59d"/>
      <path d="M56 42 Q64 36 72 42 Z" fill="#ffffff" opacity="0.8"/>
      <!-- Sill -->
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
      <!-- Inkpot Neck & Rim -->
      <rect x="36" y="44" width="28" height="8" rx="2" fill="#ffd54f" stroke="#ff8f00" stroke-width="2"/>
      <!-- Inkpot Body -->
      <path d="M32 52 L22 84 Q50 92 78 84 L68 52 Z" fill="url(#inkGrad)" stroke="#0d47a1" stroke-width="3"/>
      <!-- Label -->
      <rect x="32" y="62" width="36" height="14" rx="3" fill="#ffffff" stroke="#90caf9" stroke-width="1.5"/>
      <line x1="38" y1="69" x2="62" y2="69" stroke="#1565c0" stroke-width="2" stroke-linecap="round"/>
      <!-- Feather Quill Pen -->
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
      <!-- Raindrops -->
      <line x1="30" y1="74" x2="26" y2="84" stroke="#1e88e5" stroke-width="3" stroke-linecap="round"/>
      <line x1="48" y1="74" x2="44" y2="86" stroke="#1e88e5" stroke-width="3" stroke-linecap="round"/>
      <line x1="66" y1="74" x2="62" y2="84" stroke="#1e88e5" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `,

  // 12. Flute (बाँसुरी - ब)
  flute: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Slanted Bamboo Flute -->
      <line x1="14" y1="86" x2="86" y2="14" stroke="#ffb300" stroke-width="8" stroke-linecap="round"/>
      <line x1="14" y1="86" x2="86" y2="14" stroke="#ffe082" stroke-width="4" stroke-linecap="round"/>
      <!-- Finger holes -->
      <circle cx="34" cy="66" r="2.5" fill="#3e2723"/>
      <circle cx="44" cy="56" r="2.5" fill="#3e2723"/>
      <circle cx="54" cy="46" r="2.5" fill="#3e2723"/>
      <circle cx="64" cy="36" r="2.5" fill="#3e2723"/>
      <circle cx="74" cy="26" r="2.5" fill="#3e2723"/>
      <!-- Peacock feather / Tassel decoration -->
      <circle cx="82" cy="18" r="5" fill="#00e676" stroke="#00b0ff" stroke-width="2"/>
      <circle cx="82" cy="18" r="2" fill="#3d5afe"/>
      <path d="M18 82 Q12 92 14 96" fill="none" stroke="#e91e63" stroke-width="2"/>
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
      <!-- Rays -->
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
      <!-- Smiling Face -->
      <circle cx="43" cy="46" r="2.5" fill="#424242"/>
      <circle cx="57" cy="46" r="2.5" fill="#424242"/>
      <path d="M44 54 Q50 60 56 54" fill="none" stroke="#d84315" stroke-width="2" stroke-linecap="round"/>
      <circle cx="38" cy="52" r="2" fill="#ff8a80"/>
      <circle cx="62" cy="52" r="2" fill="#ff8a80"/>
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
      <!-- Stem and green leaf -->
      <path d="M50 20 L50 26" stroke="#4e342e" stroke-width="4" stroke-linecap="round"/>
      <path d="M50 22 Q66 12 68 28 Q56 30 50 22 Z" fill="#66bb6a" stroke="#2e7d32" stroke-width="2"/>
      <!-- Texture dots -->
      <circle cx="42" cy="45" r="1" fill="#e65100"/>
      <circle cx="58" cy="48" r="1" fill="#e65100"/>
      <circle cx="48" cy="62" r="1" fill="#e65100"/>
      <circle cx="64" cy="60" r="1" fill="#e65100"/>
    </svg>
  `,

  // 15. Trident (त्रिशूल - त्र)
  trishul: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Center Spear & Handle -->
      <line x1="50" y1="8" x2="50" y2="92" stroke="#ff8f00" stroke-width="5" stroke-linecap="round"/>
      <polygon points="50,6 44,20 56,20" fill="#ffa000" stroke="#ff6f00" stroke-width="1.5"/>
      <!-- Left & Right Curved Prongs -->
      <path d="M30 18 Q30 38 50 42" fill="none" stroke="#ff8f00" stroke-width="5" stroke-linecap="round"/>
      <polygon points="30,16 26,26 36,26" fill="#ffa000" stroke="#ff6f00" stroke-width="1.5"/>
      <path d="M70 18 Q70 38 50 42" fill="none" stroke="#ff8f00" stroke-width="5" stroke-linecap="round"/>
      <polygon points="70,16 64,26 74,26" fill="#ffa000" stroke="#ff6f00" stroke-width="1.5"/>
      <!-- Damru attached -->
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
      <!-- Kunda / Brick base -->
      <polygon points="20,70 80,70 72,90 28,90" fill="#d84315" stroke="#bf360c" stroke-width="3"/>
      <polygon points="12,68 88,68 80,74 20,74" fill="#ff7043" stroke="#d84315" stroke-width="2"/>
      <!-- Sacred Fire Flames -->
      <path d="M50 16 Q65 34 56 48 Q74 44 68 64 Q50 66 50 64 Q42 66 32 64 Q26 44 44 48 Q35 34 50 16 Z" 
            fill="#ff9800" stroke="#e65100" stroke-width="2"/>
      <path d="M50 28 Q58 40 52 50 Q62 50 58 62 Q50 64 42 62 Q38 50 48 50 Q42 40 50 28 Z" 
            fill="#ffeb3b"/>
    </svg>
  `,

  // 18. Arrow & Bow (बाण - ण)
  arrow: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Curved Bow -->
      <path d="M22 18 C52 18, 52 82, 22 82" fill="none" stroke="#8d6e63" stroke-width="5" stroke-linecap="round"/>
      <line x1="22" y1="18" x2="22" y2="82" stroke="#cfd8dc" stroke-width="2"/>
      <!-- Arrow -->
      <line x1="16" y1="50" x2="84" y2="50" stroke="#37474f" stroke-width="3.5" stroke-linecap="round"/>
      <polygon points="88,50 74,43 74,57" fill="#f44336" stroke="#b71c1c" stroke-width="1.5"/>
      <!-- Feathers -->
      <line x1="16" y1="50" x2="10" y2="44" stroke="#f44336" stroke-width="2.5"/>
      <line x1="16" y1="50" x2="10" y2="56" stroke="#f44336" stroke-width="2.5"/>
      <line x1="22" y1="50" x2="16" y2="44" stroke="#f44336" stroke-width="2.5"/>
      <line x1="22" y1="50" x2="16" y2="56" stroke="#f44336" stroke-width="2.5"/>
    </svg>
  `,

  // 19. Warrior (क्षत्रिय - क्ष)
  warrior: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Crossed Swords -->
      <line x1="22" y1="22" x2="78" y2="78" stroke="#78909c" stroke-width="5" stroke-linecap="round"/>
      <line x1="78" y1="22" x2="22" y2="78" stroke="#78909c" stroke-width="5" stroke-linecap="round"/>
      <polygon points="84,16 74,22 80,28" fill="#455a64"/>
      <polygon points="16,16 26,22 20,28" fill="#455a64"/>
      <!-- Shield in center -->
      <circle cx="50" cy="50" r="22" fill="#ffd54f" stroke="#e65100" stroke-width="3"/>
      <circle cx="50" cy="50" r="14" fill="#c62828" stroke="#ffd54f" stroke-width="2"/>
      <polygon points="50,42 53,48 59,49 55,53 56,59 50,56 44,59 45,53 41,49 47,48" fill="#ffffff"/>
    </svg>
  `,

  // 20. Wise Sage / Scholar (ज्ञानी - ज्ञ)
  sage: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Halo of knowledge -->
      <circle cx="50" cy="38" r="26" fill="#fff9c4" opacity="0.8"/>
      <!-- Saffron Robe -->
      <path d="M26 84 C30 64, 70 64, 74 84 Z" fill="#ff9800" stroke="#e65100" stroke-width="2.5"/>
      <!-- Face -->
      <circle cx="50" cy="38" r="16" fill="#ffe0b2" stroke="#8d6e63" stroke-width="2"/>
      <!-- Sage Beard -->
      <path d="M38 42 C38 60, 62 60, 62 42 Z" fill="#ffffff" stroke="#e0e0e0" stroke-width="1.5"/>
      <!-- Sage bun (Jata) -->
      <circle cx="50" cy="20" r="7" fill="#5d4037"/>
      <!-- Tilak on forehead -->
      <line x1="50" y1="28" x2="50" y2="34" stroke="#d50000" stroke-width="2" stroke-linecap="round"/>
      <!-- Open Book / Manuscript held -->
      <polygon points="34,74 50,78 66,74 66,88 50,92 34,88" fill="#ffffff" stroke="#3e2723" stroke-width="2"/>
      <line x1="50" y1="78" x2="50" y2="92" stroke="#3e2723" stroke-width="2"/>
    </svg>
  `,

  // 21. Lotus (कमल - क)
  lotus: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Water ripple -->
      <ellipse cx="50" cy="80" rx="36" ry="7" fill="#81d4fa"/>
      <!-- Leaves -->
      <ellipse cx="30" cy="74" rx="16" ry="6" fill="#4caf50" stroke="#2e7d32" stroke-width="1.5"/>
      <ellipse cx="70" cy="74" rx="16" ry="6" fill="#4caf50" stroke="#2e7d32" stroke-width="1.5"/>
      <!-- Outer Petals -->
      <path d="M50 72 C22 62, 16 38, 32 46 C38 52, 44 64, 50 72 Z" fill="#f06292" stroke="#ad1457" stroke-width="2"/>
      <path d="M50 72 C78 62, 84 38, 68 46 C62 52, 56 64, 50 72 Z" fill="#f06292" stroke="#ad1457" stroke-width="2"/>
      <!-- Center Main Petal -->
      <path d="M50 20 C42 40, 42 62, 50 72 C58 62, 58 40, 50 20 Z" fill="#f48fb1" stroke="#ad1457" stroke-width="2"/>
      <!-- Inner bud highlight -->
      <circle cx="50" cy="46" r="4" fill="#ffd54f"/>
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
      <!-- Stem and Green Leaf -->
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
      <!-- Crown top -->
      <polygon points="44,22 47,12 50,18 53,12 56,22" fill="#b71c1c" stroke="#880e4f" stroke-width="1.5"/>
      <circle cx="50" cy="56" r="32" fill="url(#pomGrad)" stroke="#880e4f" stroke-width="3"/>
      <!-- Calyx details -->
      <circle cx="42" cy="46" r="2" fill="#ffffff" opacity="0.4"/>
    </svg>
  `,

  // 24. Grapes (अंगूर - अं)
  grapes: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Vine & Leaf -->
      <path d="M50 14 L50 24" stroke="#5d4037" stroke-width="4" stroke-linecap="round"/>
      <path d="M50 18 Q66 10 70 24 Q56 26 50 18 Z" fill="#66bb6a" stroke="#2e7d32" stroke-width="1.8"/>
      <!-- Grape Cluster (Purple) -->
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
      <!-- Center -->
      <circle cx="50" cy="50" r="12" fill="#ffd600" stroke="#ffab00" stroke-width="2.5"/>
    </svg>
  `,

  // 26. Owl (उल्लू - उ)
  owl: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" class="svg-art">
      <!-- Body -->
      <ellipse cx="50" cy="56" rx="28" ry="32" fill="#8d6e63" stroke="#4e342e" stroke-width="3"/>
      <!-- Big Eyes -->
      <circle cx="38" cy="42" r="12" fill="#ffffff" stroke="#4e342e" stroke-width="2.5"/>
      <circle cx="62" cy="42" r="12" fill="#ffffff" stroke="#4e342e" stroke-width="2.5"/>
      <circle cx="38" cy="42" r="6" fill="#212121"/>
      <circle cx="62" cy="42" r="6" fill="#212121"/>
      <!-- Yellow Beak -->
      <polygon points="50,48 44,56 56,56" fill="#ffb300" stroke="#ff8f00" stroke-width="1.5"/>
      <!-- Ear tufts -->
      <polygon points="26,30 34,16 42,30" fill="#6d4c41"/>
      <polygon points="58,30 66,16 74,30" fill="#6d4c41"/>
    </svg>
  `
};

// Function to get rendered artwork HTML with fallback
function getIllustrationHTML(key, fallbackEmoji = '✨') {
  if (SVG_ICONS[key]) {
    return `<div class="svg-illustration-container">${SVG_ICONS[key]}</div>`;
  }
  return `<div class="emoji-illustration">${fallbackEmoji}</div>`;
}
