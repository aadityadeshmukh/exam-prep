// ========================================================
// DUOLINGO-STYLE WEB AUDIO & HINDI SPEECH ENGINE
// Pure Web Audio API (Zero external audio file dependencies)
// ========================================================

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.hindiVoice = null;
    this.initAudioContext();
    this.initVoices();
  }

  initAudioContext() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      this.ctx = new AudioCtx();
    }
  }

  ensureContext() {
    if (!this.ctx) this.initAudioContext();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  initVoices() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.selectHindiVoice();
      };
      this.selectHindiVoice();
    }
  }

  selectHindiVoice() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    // Prioritize hi-IN or Indian English / Devanagari voice
    this.hindiVoice = voices.find(v => v.lang === 'hi-IN' || v.lang.startsWith('hi')) ||
                      voices.find(v => v.name.includes('Hindi') || v.name.includes('India')) ||
                      null;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    return this.isMuted;
  }

  // Play a pleasant synthesizer tone
  playTone(freq, type = 'sine', duration = 0.15, startTime = 0, gainLevel = 0.2) {
    if (this.isMuted || !this.ctx) return;
    this.ensureContext();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);

    gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime + startTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + startTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(this.ctx.currentTime + startTime);
    osc.stop(this.ctx.currentTime + startTime + duration);
  }

  // 1. Success Chime (Duolingo classic: C5 - E5 - G5 - C6)
  playCorrect() {
    if (this.isMuted) return;
    this.ensureContext();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.2, idx * 0.08, 0.25);
    });
  }

  // 2. Error Boop (Soft downward thud)
  playIncorrect() {
    if (this.isMuted) return;
    this.ensureContext();
    this.playTone(280, 'sine', 0.18, 0, 0.2);
    this.playTone(200, 'sine', 0.25, 0.1, 0.2);
  }

  // 3. Tile / Button Tap (Bubbly pop)
  playTap() {
    if (this.isMuted) return;
    this.ensureContext();
    this.playTone(600, 'sine', 0.05, 0, 0.1);
  }

  // 4. Match Pair Pop
  playMatchPop() {
    if (this.isMuted) return;
    this.ensureContext();
    this.playTone(700, 'triangle', 0.12, 0, 0.2);
    this.playTone(950, 'triangle', 0.18, 0.06, 0.25);
  }

  // 5. Level Victory Fanfare
  playVictory() {
    if (this.isMuted) return;
    this.ensureContext();
    const melody = [
      { f: 523.25, d: 0.12, t: 0 },
      { f: 659.25, d: 0.12, t: 0.12 },
      { f: 783.99, d: 0.12, t: 0.24 },
      { f: 1046.50, d: 0.45, t: 0.36 }
    ];
    melody.forEach(n => this.playTone(n.f, 'triangle', n.d, n.t, 0.3));
  }

  // 6. Natural Hindi Speech Synthesis (TTS)
  speakHindi(text, onEnd) {
    if (this.isMuted || !('speechSynthesis' in window)) {
      if (onEnd) setTimeout(onEnd, 600);
      return;
    }

    window.speechSynthesis.cancel(); // Stop any pending speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    utterance.rate = 0.82; // Kid-friendly clear pacing
    utterance.pitch = 1.1; // Friendly warm pitch

    if (this.hindiVoice) {
      utterance.voice = this.hindiVoice;
    }

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    window.speechSynthesis.speak(utterance);
  }

  // 7. Hindi Speech Recognition (STT) for Speaking practice
  listenHindi(onResult, onError) {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      if (onError) onError('Speech Recognition is not supported on this browser.');
      return null;
    }

    try {
      const recognition = new SpeechRec();
      recognition.lang = 'hi-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 3;

      recognition.onresult = (event) => {
        const spoken = event.results[0][0].transcript.trim();
        if (onResult) onResult(spoken);
      };

      recognition.onerror = (err) => {
        if (onError) onError(err);
      };

      recognition.start();
      return recognition;
    } catch (e) {
      if (onError) onError(e);
      return null;
    }
  }
}

// Global Singleton
const soundEngine = new SoundEngine();
