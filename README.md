# 🦉💻 Universal Wisdom School - Grade 2 SA-1 Exam Prep App

> **Duolingo-style Mobile Web App** for **Grade 2 Summative Assessment 1 (SA-1)**.
> Features a dynamic **Subject Switcher** toggling between:
> 1. 🇮🇳 **Hindi (हिंदी)** — 30 Marks (20M Theory + 5M Listening + 5M Speaking) matching textbook **"बाल पतवार २"**.
> 2. 💻 **Computing Theory (कम्प्यूटिंग)** — 20 Marks Theory matching **Cambridge Primary Computing** (Units 1, 2, and 3).

---

## 🌟 Key Features

### 1. 🔄 Seamless Subject Switcher
- Instantly switch between **Hindi (30 Marks)** and **Computing Theory (20 Marks)** using the top pill bar.
- Shared streak (🔥), gems (💎), and hearts (❤️) across both subjects, with independent lesson stars (⭐) and exam report cards.
- Animated mascot adapts to the subject: Cheerful Owl (🦉) for Hindi, Smart Robot (🤖) for Computing.

---

### 2. 💻 Computing Theory Courseware (SA-1 Exam Ready)
Mapped directly to the official school syllabus and textbook chapters:

#### 🗺️ 5 Adventure Path Units:
1. **Unit 1: Making Programs Clear** 🤖
   - Follow, understand, edit & correct algorithms.
   - Spot the wrong step (Peanut butter sandwich, Pizza delivery, Ring stacking order, Seed planting).
2. **Unit 2: Concise Programs & Scratch** ✂️
   - Combine repeated Scratch blocks (`move 60` x 3 → `move 180`; `change size by 10` x 3 → `change size by 30`; `change y by 30` x 2 → `change y by 60`).
   - Pattern recognition (Judy's flower bouquet).
   - Why concise code saves electricity and reduces computer heat.
3. **Unit 3: Resetting Objects & Sprites** 🔄
   - Resetting starting position with `go to x: y:` coordinates (minus signs).
   - Resetting size to `100%` so sprites don't grow too large.
   - Shrinking sprites with negative sizes (`change size by -20`).
   - Why wait blocks are needed before moving.
4. **Unit 4: Hardware and Software Work Together** 💻
   - Hardware (physical objects you can touch) vs Software (programs/instructions/apps).
   - Football match analogy (Hardware = players, ball, pitch; Software = rules of the game).
   - Physical damage (drop on floor) vs Bugs (errors in program code).
   - 3 Hardware categories: Input devices, Output devices, Storage devices (USB drives, hard disks).
5. **Unit 5: Smart Input & Data Expert** 📊
   - Manual input (keyboard, mouse, touchscreen, mic) vs Automatic input (barcode readers, QR codes, RFID contactless cards, biometric fingerprint/face scanners, environmental sensors).
   - Categorical data (named groups like hair colour, weather) vs Discrete data (countable whole numbers like scores, toy sales).
   - Data problem-solving: Vanessa's savings ($30 goal, $25 saved), Jim's attendance, Toys Inc. production decisions.

#### 🎮 6 Computing Practice Modes:
1. 🤖 **Algorithm Detective** — Follow & fix errors in instructions.
2. ✂️ **Concise Code** — Combine repeated Scratch blocks into shorter code.
3. 🔄 **Sprite Reset Master** — Coordinate positions & 100% default size.
4. 💻 **Hardware vs Software** — Interactive basket sorter & role comparisons.
5. 🖲️ **Smart Input Lab** — Sort manual vs automatic input devices.
6. 📊 **Data Expert** — Categorical vs discrete data & problem-solving scenarios.

#### 📝 SA-1 Computing Mock Exam (20 Marks Theory):
- Exactly 20 questions (1 mark each) matching the official exam breakdown:
  - Unit 1: Making Programs Clear (7 Marks)
  - Unit 2: Hardware & Software Work Together (7 Marks)
  - Unit 3: Be a Data Expert (6 Marks)
- Real-time scoring, percentage, and performance grade (A*, A, B).

---

### 3. 🇮🇳 Hindi Courseware (Bal Patwar 2)
- Complete coverage of all 12 Swar (अ to औ) and Consonants (क to श).
- 6 Practice modes: Picture Match, Missing Letter Train, Vowel vs Consonant Basket Sorter, Match Pairs, Listening Lab (Textbook Pg 66 audio dictation), Speaking Studio (mic recitation).
- Full 30 Marks Mock Exam (20M Theory, 5M Listening, 5M Speaking).
- Zero-duplicate randomization with 50+ unique handcrafted SVGs.

---

### 4. 🎨 Scalable Vector Illustrations (Zero External Assets)
- Built-in SVGs for all textbook objects:
  - Computing: Desktop computer, Keyboard, Mouse, Printer, Speakers, USB Drive, Hard Drive, Microphone, Barcode scanner, RFID contactless card, Biometric fingerprint scanner, Temperature sensor, Scratch Cat sprite, Scratch code blocks, and Data bar charts.
  - Hindi: Bucket (बाल्टी), Dhol (ढोल), Shield (ढाल), Thermos (थरमस), Thali (थाली), Umbrella (छाता), Rabbit (खरगोश), Window (खिड़की), Inkpot (दवात), Lotus (कमल), Mango (आम), and 40+ more.

---

### 5. ⚙️ Settings & Progress Reset
- Tap the gear icon (`⚙️`) in the top bar to:
  - Toggle audio & pronunciation sound effects.
  - Refill all 5 hearts instantly for free.
  - Reset all progress across both subjects with a safety confirmation prompt.

---

## 🚀 How to Run Locally

Double-click `index.html` in your file explorer, or run a local static web server:
```bash
python -m http.server 8080
# Open in browser: http://localhost:8080
```

---

## 🌐 1-Click Deployment to GitHub Pages

1. Push to your GitHub repository:
   ```bash
   git add .
   git commit -m "Add Subject Switcher and Computing Theory Courseware"
   git push origin main
   ```
2. On GitHub, go to **Settings** ➔ **Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Play on any phone or tablet via the generated GitHub Pages URL!
