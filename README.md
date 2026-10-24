# 🦉 Universal Wisdom School - Grade 2 Hindi SA-1 Prep App

> **Duolingo-style Mobile Web App** for **Grade 2 Summative Assessment 1 (SA-1)**.
> Features an **English-readable parent/child interface** with **Hindi-first interactive exercises** matching the school textbook **"बाल पतवार २" (Bal Patwar 2)**.

---

## 🌟 Key Updates & Improvements

1. **🇬🇧 English-Readable Shell + 🇮🇳 Hindi Core Exercises:**
   - App interface, instructions, unit goals, button actions (`CHECK`, `CONTINUE`, `START EXAM`), and report cards are in clean English with Hindi subtitles.
   - Core questions, letter options, rhymes, and audio pronunciations remain in native Devanagari Hindi.
   - Every word card shows the Hindi word alongside its English meaning & phonetics (e.g., **बाल्टी** *(Baalti • Bucket)*, **खरगोश** *(Khargosh • Rabbit)*).

2. **🎨 Dedicated Vector Illustrations (No Missing or Broken Icons):**
   - Replaced generic or missing system emojis with crisp, handcrafted SVGs matching the textbook illustrations:
     - 🪣 **बाल्टी** (Bucket with handle)
     - 🥁 **ढोल** (Indian Dhol drum with sticks)
     - 🛡️ **ढाल** (Warrior Shield)
     - 🍶 **थरमस** (Thermos Flask)
     - 🍽️ **थाली** (Dining Thali with bowls)
     - ☂️ **छाता** (Rain Umbrella)
     - 🦯 **छड़ी** (Walking Cane)
     - 🐇 **खरगोश** (Cute Rabbit)
     - 🪟 **खिड़की** (Open Window)
     - ✒️ **दवात** (Inkpot & Quill)
     - ☁️ **बादल** (Rain Cloud)
     - 🪈 **बाँसुरी** (Peacock-feathered Flute)
     - ☀️ **सूरज** (Smiling Sun)
     - 🍊 **संतरा** (Juicy Orange)
     - 🔱 **त्रिशूल** (Sacred Trident)
     - 📐 **त्रिकोण** (Triangle shape)
     - ⚔️ **क्षत्रिय** (Warrior swords & shield)
     - 🧙‍♂️ **ज्ञानी** (Wise Sage reading book)
     - 🪷 **कमल** (Lotus)
     - 🥭 **आम** (Mango)
     - 🍎 **अनार** (Pomegranate)
     - 🍇 **अंगूर** (Grapes)
     - 🌸 **फूल** (Flower)
     - 🦉 **उल्लू** (Owl)

3. **🗺️ Distinct Path Node Icons:**
   - Every milestone node on the Duolingo map now has its own unique, meaningful icon (🍎 Vowel, 🚂 Train, 🧩 Match, 🎧 Listening, 🎙️ Mic, 🧺 Basket, 🎓 Exam) instead of repetitive unit icons.

4. **📱 Mobile-First Duolingo Gameplay:**
   - Top Bar: Daily Streak (🔥), Gems (💎), Hearts (❤️ with free refill), and Sound toggle (🔊).
   - Real-time Hindi Speech Synthesis (TTS) and voice recognition (STT).
   - Confetti celebration and digital Report Card (30 Marks total: 20M Theory + 5M Listening + 5M Speaking).

---

## 🚀 How to Run Locally

Double-click `index.html` in your file explorer, or run a local static server:
```bash
python -m http.server 8080
# Open in browser: http://localhost:8080
```

---

## 🌐 1-Click Deployment to GitHub Pages

1. Push to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Hindi SA-1 Prep App with custom SVGs & English UI"
   git remote add origin https://github.com/<YOUR-USERNAME>/<REPO-NAME>.git
   git branch -M main
   git push -u origin main
   ```
2. On GitHub, go to **Settings** ➔ **Pages**.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Play on any phone or tablet via the generated link!
