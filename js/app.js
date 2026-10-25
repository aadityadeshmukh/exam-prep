// ========================================================
// DUOLINGO GRADE 2 PREP APP CONTROLLER (MULTI-SUBJECT)
// Universal Wisdom School - Summative Assessment 1 (SA-1)
// Subjects:
// 🇬🇧 English Language (Roald Dahl & Party - 30 Marks)
// 💻 Computing Theory (Cambridge Primary - 20 Marks)
// 🇮🇳 Hindi (बाल पतवार २ - 30 Marks)
// ========================================================

class AppState {
  constructor() {
    this.currentSubject = 'english'; // 'english' | 'computing' | 'hindi'
    this.hearts = 5;
    this.maxHearts = 5;
    this.streak = 1;
    this.xp = 0;
    this.englishCompletedLessons = {};
    this.computingCompletedLessons = {};
    this.hindiCompletedLessons = {};
    this.englishLastExamScore = null;
    this.computingLastExamScore = null;
    this.hindiLastExamScore = null;
    this.loadState();
  }

  get completedLessons() {
    if (this.currentSubject === 'english') return this.englishCompletedLessons;
    if (this.currentSubject === 'computing') return this.computingCompletedLessons;
    return this.hindiCompletedLessons;
  }

  get lastExamScore() {
    if (this.currentSubject === 'english') return this.englishLastExamScore;
    if (this.currentSubject === 'computing') return this.computingLastExamScore;
    return this.hindiLastExamScore;
  }

  loadState() {
    try {
      const saved = localStorage.getItem('theia_prep_state_v3');
      if (saved) {
        const data = JSON.parse(saved);
        this.currentSubject = data.currentSubject || 'english';
        this.hearts = data.hearts ?? 5;
        this.streak = data.streak ?? 1;
        this.xp = data.xp ?? 0;
        this.englishCompletedLessons = data.englishCompletedLessons || {};
        this.computingCompletedLessons = data.computingCompletedLessons || {};
        this.hindiCompletedLessons = data.hindiCompletedLessons || {};
        this.englishLastExamScore = data.englishLastExamScore || null;
        this.computingLastExamScore = data.computingLastExamScore || null;
        this.hindiLastExamScore = data.hindiLastExamScore || null;
      } else {
        // Fallback migration from older keys
        const v2 = localStorage.getItem('theia_prep_state_v2');
        if (v2) {
          const d2 = JSON.parse(v2);
          this.currentSubject = d2.currentSubject || 'english';
          this.hearts = d2.hearts ?? 5;
          this.streak = d2.streak ?? 1;
          this.xp = d2.xp ?? 0;
          this.computingCompletedLessons = d2.computingCompletedLessons || {};
          this.hindiCompletedLessons = d2.hindiCompletedLessons || {};
          this.computingLastExamScore = d2.computingLastExamScore || null;
          this.hindiLastExamScore = d2.hindiLastExamScore || null;
        } else {
          const oldSaved = localStorage.getItem('hindi_duo_state');
          if (oldSaved) {
            const oldData = JSON.parse(oldSaved);
            this.hearts = oldData.hearts ?? 5;
            this.streak = oldData.streak ?? 1;
            this.xp = oldData.xp ?? 0;
            this.hindiCompletedLessons = oldData.completedLessons || {};
            this.hindiLastExamScore = oldData.lastExamScore || null;
          }
        }
      }
    } catch (e) {
      console.warn('Storage not accessible', e);
    }
  }

  saveState() {
    try {
      localStorage.setItem('theia_prep_state_v3', JSON.stringify({
        currentSubject: this.currentSubject,
        hearts: this.hearts,
        streak: this.streak,
        xp: this.xp,
        englishCompletedLessons: this.englishCompletedLessons,
        computingCompletedLessons: this.computingCompletedLessons,
        hindiCompletedLessons: this.hindiCompletedLessons,
        englishLastExamScore: this.englishLastExamScore,
        computingLastExamScore: this.computingLastExamScore,
        hindiLastExamScore: this.hindiLastExamScore
      }));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }

  addXP(amount) {
    this.xp += amount;
    this.saveState();
  }

  loseHeart() {
    if (this.hearts > 0) {
      this.hearts--;
      this.saveState();
    }
    return this.hearts;
  }

  refillHearts() {
    this.hearts = this.maxHearts;
    this.saveState();
  }

  resetProgress() {
    this.hearts = 5;
    this.streak = 1;
    this.xp = 0;
    this.englishCompletedLessons = {};
    this.computingCompletedLessons = {};
    this.hindiCompletedLessons = {};
    this.englishLastExamScore = null;
    this.computingLastExamScore = null;
    this.hindiLastExamScore = null;
    try {
      localStorage.removeItem('theia_prep_state_v3');
      localStorage.removeItem('theia_prep_state_v2');
      localStorage.removeItem('hindi_duo_state');
    } catch (e) {
      console.warn('Storage clear failed', e);
    }
  }
}

const state = new AppState();

// Track recently shown item IDs across rounds to maximize variety
let recentShownItemIds = [];

// ================= Game Session Manager =================
class GameSession {
  constructor(mode, filter = 'all', isExam = false) {
    this.mode = mode;
    this.filter = filter;
    this.isExam = isExam;
    this.questions = [];
    this.userAnswers = [];
    this.currentIndex = 0;
    this.score = 0;
    this.theoryScore = 0;
    this.listeningScore = 0;
    this.speakingScore = 0;
    this.selectedOption = null;
    this.isAnswerChecked = false;
    this.isFinished = false;
    this.buildQuestions();
  }

  buildQuestions() {
    this.questions = [];

    const isEnglish = state.currentSubject === 'english' || this.mode.startsWith('e_');
    const isComputing = state.currentSubject === 'computing' || this.mode.startsWith('c_');

    if (isEnglish) {
      this.buildEnglishQuestions();
    } else if (isComputing) {
      this.buildComputingQuestions();
    } else {
      this.buildHindiQuestions();
    }
  }

  // ================= ENGLISH QUESTION BUILDER =================
  buildEnglishQuestions() {
    if (this.isExam) {
      // 15 Questions covering all sections (Scaled to 30 Marks total = 2 marks per question)
      // Unit 1: Story Writing with Roald Dahl (5 Qs)
      // Unit 2: Let's Have a Party & Instructions (5 Qs)
      // Language Topics: Nouns, Verbs, Suffixes, Speech Marks, Compounds (5 Qs)
      const u1Pool = shuffleArray(ENGLISH_DATA.questionPool.filter(q => q.unit === 1 && q.mode === 'e_story'));
      const u2Pool = shuffleArray(ENGLISH_DATA.questionPool.filter(q => q.unit === 2 && q.mode === 'e_command'));
      const langPool = shuffleArray(ENGLISH_DATA.questionPool.filter(q => ['e_grammar', 'e_suffix', 'e_dialogue', 'e_compound'].includes(q.mode)));

      const u1Selected = u1Pool.slice(0, 5);
      const u2Selected = u2Pool.slice(0, 5);
      const langSelected = langPool.slice(0, 5);

      const all15 = shuffleArray([...u1Selected, ...u2Selected, ...langSelected]);
      all15.forEach(q => {
        this.questions.push({
          type: 'e_mcq',
          ...q
        });
      });
    } else {
      // Individual Mode Practice (5 Questions)
      let pool = ENGLISH_DATA.questionPool;

      if (this.mode === 'e_story') {
        pool = pool.filter(q => q.mode === 'e_story');
        if (this.filter && this.filter !== 'all') {
          const filtered = pool.filter(q => q.category === this.filter);
          if (filtered.length >= 3) pool = filtered;
        }
      } else if (this.mode === 'e_grammar') {
        pool = pool.filter(q => q.mode === 'e_grammar');
        if (this.filter && this.filter !== 'all') {
          const filtered = pool.filter(q => q.category === this.filter);
          if (filtered.length >= 3) pool = filtered;
        }
      } else if (this.mode === 'e_suffix') {
        pool = pool.filter(q => q.mode === 'e_suffix');
        if (this.filter && this.filter !== 'all') {
          const filtered = pool.filter(q => q.category === this.filter);
          if (filtered.length >= 3) pool = filtered;
        }
      } else if (this.mode === 'e_dialogue') {
        pool = pool.filter(q => q.mode === 'e_dialogue');
        if (this.filter && this.filter !== 'all') {
          const filtered = pool.filter(q => q.category === this.filter);
          if (filtered.length >= 3) pool = filtered;
        }
      } else if (this.mode === 'e_command') {
        pool = pool.filter(q => q.mode === 'e_command');
        if (this.filter && this.filter !== 'all') {
          const filtered = pool.filter(q => q.category === this.filter);
          if (filtered.length >= 3) pool = filtered;
        }
      } else if (this.mode === 'e_compound') {
        pool = pool.filter(q => q.mode === 'e_compound');
      }

      const shuffled = shuffleArray(pool).slice(0, 5);
      shuffled.forEach(q => {
        this.questions.push({
          type: 'e_mcq',
          ...q
        });
      });

      // Add 1 interactive basket sort for grammar, story or command modes
      if (this.mode === 'e_grammar' && ENGLISH_DATA.sortBaskets[0]) {
        const basketDef = ENGLISH_DATA.sortBaskets[0];
        const randomItem = shuffleArray(basketDef.items)[0];
        this.questions[this.questions.length - 1] = {
          type: 'e_sort',
          title: 'Is this word a Noun or an Action Verb?',
          item: randomItem,
          basket1: basketDef.basket1,
          basket2: basketDef.basket2,
          answer: randomItem.category,
          unitTitle: 'Language Topics: Nouns & Verbs'
        };
      } else if (this.mode === 'e_story' && ENGLISH_DATA.sortBaskets[1]) {
        const basketDef = ENGLISH_DATA.sortBaskets[1];
        const randomItem = shuffleArray(basketDef.items)[0];
        this.questions[this.questions.length - 1] = {
          type: 'e_sort',
          title: 'Sort this setting adjective:',
          item: randomItem,
          basket1: basketDef.basket1,
          basket2: basketDef.basket2,
          answer: randomItem.category,
          unitTitle: 'Unit 1: Writing a Setting'
        };
      } else if (this.mode === 'e_command' && ENGLISH_DATA.sortBaskets[2]) {
        const basketDef = ENGLISH_DATA.sortBaskets[2];
        const randomItem = shuffleArray(basketDef.items)[0];
        this.questions[this.questions.length - 1] = {
          type: 'e_sort',
          title: 'Is this a Command (Bossy) Verb?',
          item: randomItem,
          basket1: basketDef.basket1,
          basket2: basketDef.basket2,
          answer: randomItem.category,
          unitTitle: 'Unit 2: Command Verbs'
        };
      }
    }
  }

  // ================= COMPUTING QUESTION BUILDER =================
  buildComputingQuestions() {
    if (this.isExam) {
      // 20 Questions for SA-1 Computing Theory (20 Marks Total)
      const u1Pool = shuffleArray(COMPUTING_DATA.questionPool.filter(q => q.unit === 1));
      const u2Pool = shuffleArray(COMPUTING_DATA.questionPool.filter(q => q.unit === 2));
      const u3Pool = shuffleArray(COMPUTING_DATA.questionPool.filter(q => q.unit === 3));

      const u1Selected = u1Pool.slice(0, 7);
      const u2Selected = u2Pool.slice(0, 7);
      const u3Selected = u3Pool.slice(0, 6);

      const all20 = shuffleArray([...u1Selected, ...u2Selected, ...u3Selected]);
      all20.forEach(q => {
        this.questions.push({
          type: 'c_mcq',
          ...q
        });
      });
    } else {
      let pool = COMPUTING_DATA.questionPool;

      if (this.mode === 'c_algo') {
        pool = pool.filter(q => q.mode === 'c_algo');
        if (this.filter && this.filter !== 'all') {
          const filtered = pool.filter(q => q.category === this.filter);
          if (filtered.length >= 3) pool = filtered;
        }
      } else if (this.mode === 'c_concise') {
        pool = pool.filter(q => q.mode === 'c_concise');
        if (this.filter && this.filter !== 'all') {
          const filtered = pool.filter(q => q.category === this.filter);
          if (filtered.length >= 3) pool = filtered;
        }
      } else if (this.mode === 'c_reset') {
        pool = pool.filter(q => q.mode === 'c_reset');
        if (this.filter && this.filter !== 'all') {
          const filtered = pool.filter(q => q.category === this.filter);
          if (filtered.length >= 3) pool = filtered;
        }
      } else if (this.mode === 'c_hardware') {
        pool = pool.filter(q => q.mode === 'c_hardware');
      } else if (this.mode === 'c_input') {
        pool = pool.filter(q => q.mode === 'c_input');
      } else if (this.mode === 'c_data') {
        pool = pool.filter(q => q.mode === 'c_data');
      }

      const shuffled = shuffleArray(pool).slice(0, 5);
      shuffled.forEach(q => {
        this.questions.push({
          type: 'c_mcq',
          ...q
        });
      });

      if (this.mode === 'c_hardware' && COMPUTING_DATA.sortBaskets[0]) {
        const basketDef = COMPUTING_DATA.sortBaskets[0];
        const randomItem = shuffleArray(basketDef.items)[0];
        this.questions[this.questions.length - 1] = {
          type: 'c_sort',
          title: 'Sort into the right category:',
          item: randomItem,
          basket1: basketDef.basket1,
          basket2: basketDef.basket2,
          answer: randomItem.category,
          unitTitle: 'Unit 2: Hardware & Software'
        };
      } else if (this.mode === 'c_input' && COMPUTING_DATA.sortBaskets[1]) {
        const basketDef = COMPUTING_DATA.sortBaskets[1];
        const randomItem = shuffleArray(basketDef.items)[0];
        this.questions[this.questions.length - 1] = {
          type: 'c_sort',
          title: 'Is this Manual or Automatic Input?',
          item: randomItem,
          basket1: basketDef.basket1,
          basket2: basketDef.basket2,
          answer: randomItem.category,
          unitTitle: 'Unit 2: Input Devices'
        };
      } else if (this.mode === 'c_data' && COMPUTING_DATA.sortBaskets[2]) {
        const basketDef = COMPUTING_DATA.sortBaskets[2];
        const randomItem = shuffleArray(basketDef.items)[0];
        this.questions[this.questions.length - 1] = {
          type: 'c_sort',
          title: 'Is this Categorical or Discrete Data?',
          item: randomItem,
          basket1: basketDef.basket1,
          basket2: basketDef.basket2,
          answer: randomItem.category,
          unitTitle: 'Unit 3: Data Expert'
        };
      }
    }
  }

  // ================= HINDI QUESTION BUILDER =================
  buildHindiQuestions() {
    if (this.isExam) {
      const shuffledItems = shuffleArray(HINDI_DATA.textbookItems);
      shuffledItems.slice(0, 3).forEach(item => {
        this.questions.push({
          type: 'picture',
          section: 'theory',
          sectionLabel: 'Theory: First Letter',
          item: item,
          answer: item.letter,
          options: this.generateOptions(item.letter)
        });
      });

      const shuffledSeq = shuffleArray(HINDI_DATA.trainSequences);
      shuffledSeq.slice(0, 3).forEach(seq => {
        this.questions.push({
          type: 'train',
          section: 'theory',
          sectionLabel: 'Theory: Missing Letter',
          seq: seq.seq,
          answer: seq.answer,
          options: seq.options
        });
      });

      const swarSample = shuffleArray(HINDI_DATA.swarList)[0];
      const vyanjanSample = shuffleArray(HINDI_DATA.vyanjanList)[0];
      this.questions.push({
        type: 'sort',
        section: 'theory',
        sectionLabel: 'Theory: Vowel vs Consonant',
        letter: swarSample,
        answer: 'swar'
      });
      this.questions.push({
        type: 'sort',
        section: 'theory',
        sectionLabel: 'Theory: Vowel vs Consonant',
        letter: vyanjanSample,
        answer: 'vyanjan'
      });

      const shuffledListen = shuffleArray(HINDI_DATA.listeningQuestions);
      shuffledListen.slice(0, 2).forEach(l => {
        this.questions.push({
          type: 'listening',
          section: 'listening',
          sectionLabel: 'Listening Assessment (5 Marks)',
          ...l,
          answer: l.targetLetter
        });
      });

      const shuffledSpeak = shuffleArray(HINDI_DATA.speakingCards);
      shuffledSpeak.slice(0, 2).forEach(s => {
        this.questions.push({
          type: 'speaking',
          section: 'speaking',
          sectionLabel: 'Speaking Assessment (5 Marks)',
          ...s,
          answer: s.word
        });
      });

      this.questions = shuffleArray(this.questions);
    } else {
      if (this.mode === 'picture') {
        let pool = HINDI_DATA.textbookItems;
        if (this.filter === 'swar') pool = pool.filter(p => p.category === 'swar');
        if (this.filter === 'k_ch') pool = pool.filter(p => ['क','ख','ग','घ','ङ','च','छ','ज','झ','ञ'].includes(p.letter));
        if (this.filter === 't_ta') pool = pool.filter(p => ['ट','ठ','ड','ढ','ण','त','थ','द','ध','न'].includes(p.letter));
        if (this.filter === 'p_sh') pool = pool.filter(p => ['प','फ','ब','भ','म','य','र','ल','व','श'].includes(p.letter));
        if (!pool.length) pool = HINDI_DATA.textbookItems;

        const unshown = pool.filter(p => !recentShownItemIds.includes(p.id));
        const candidatePool = unshown.length >= 5 ? unshown : pool;
        const shuffledPool = shuffleArray(candidatePool);
        const selected = shuffledPool.slice(0, Math.min(5, shuffledPool.length));

        selected.forEach(item => {
          recentShownItemIds.push(item.id);
          if (recentShownItemIds.length > 12) recentShownItemIds.shift();
        });

        selected.forEach(item => {
          this.questions.push({
            type: 'picture',
            section: 'theory',
            sectionLabel: 'Picture Identification',
            item: item,
            answer: item.letter,
            options: this.generateOptions(item.letter)
          });
        });
      } else if (this.mode === 'train') {
        const shuffledSeq = shuffleArray(HINDI_DATA.trainSequences);
        const selected = shuffledSeq.slice(0, 5);
        selected.forEach(seq => {
          this.questions.push({
            type: 'train',
            section: 'theory',
            sectionLabel: 'Letter Sequence',
            seq: seq.seq,
            answer: seq.answer,
            options: seq.options
          });
        });
      } else if (this.mode === 'sort') {
        const shuffledSwar = shuffleArray(HINDI_DATA.swarList);
        const shuffledVyanjan = shuffleArray(HINDI_DATA.vyanjanList);
        const items = [
          { letter: shuffledSwar[0], answer: 'swar' },
          { letter: shuffledVyanjan[0], answer: 'vyanjan' },
          { letter: shuffledSwar[1], answer: 'swar' },
          { letter: shuffledVyanjan[1], answer: 'vyanjan' },
          { letter: shuffledSwar[2], answer: 'swar' }
        ];
        shuffleArray(items).forEach(it => {
          this.questions.push({
            type: 'sort',
            section: 'theory',
            sectionLabel: 'Vowel vs Consonant',
            letter: it.letter,
            answer: it.answer
          });
        });
      } else if (this.mode === 'match') {
        const shuffled = shuffleArray(HINDI_DATA.textbookItems).slice(0, 4);
        this.questions.push({
          type: 'match',
          section: 'theory',
          sectionLabel: 'Match Pairs',
          pairs: shuffled
        });
      } else if (this.mode === 'listening') {
        const shuffledListen = shuffleArray(HINDI_DATA.listeningQuestions);
        const selected = shuffledListen.slice(0, 5);
        selected.forEach(l => {
          this.questions.push({
            type: 'listening',
            section: 'listening',
            sectionLabel: 'Listening Lab',
            ...l,
            answer: l.targetLetter
          });
        });
      } else if (this.mode === 'speaking') {
        const shuffledSpeak = shuffleArray(HINDI_DATA.speakingCards);
        const selected = shuffledSpeak.slice(0, 5);
        selected.forEach(s => {
          this.questions.push({
            type: 'speaking',
            section: 'speaking',
            sectionLabel: 'Speaking Studio',
            ...s,
            answer: s.word
          });
        });
      }
    }
  }

  generateOptions(correctLetter) {
    const isSwar = HINDI_DATA.swarList.includes(correctLetter);
    const pool = isSwar ? HINDI_DATA.swarList : HINDI_DATA.vyanjanList;
    const distractorPool = pool.filter(l => l !== correctLetter);
    const shuffledDistractors = shuffleArray(distractorPool).slice(0, 3);
    return shuffleArray([correctLetter, ...shuffledDistractors]);
  }
}

// Global active game session
let currentSession = null;

// ================= UI Initialization =================
document.addEventListener('DOMContentLoaded', () => {
  initUI();
  updateSubjectTabs();
  renderMascot();
  renderTopBar();
  renderPath();
  renderModesHub();
  renderExamHub();
  setupNavigation();
});

// ================= Subject Switching =================
function switchSubject(newSubject) {
  if (state.currentSubject === newSubject) return;
  state.currentSubject = newSubject;
  state.saveState();

  soundEngine.playTap();

  updateSubjectTabs();
  renderMascot();
  renderTopBar();
  renderPath();
  renderModesHub();
  renderExamHub();
  renderReportCard();
}
window.switchSubject = switchSubject;

function updateSubjectTabs() {
  const engBtn = document.getElementById('sub-btn-english');
  const compBtn = document.getElementById('sub-btn-computing');
  const hindiBtn = document.getElementById('sub-btn-hindi');

  [engBtn, compBtn, hindiBtn].forEach(b => { if (b) b.classList.remove('active'); });

  if (state.currentSubject === 'english') {
    if (engBtn) engBtn.classList.add('active');
    document.title = 'English SA-1 Prep App | Universal Wisdom School Grade 2';
  } else if (state.currentSubject === 'computing') {
    if (compBtn) compBtn.classList.add('active');
    document.title = 'Computing Theory SA-1 Prep | Universal Wisdom School Grade 2';
  } else {
    if (hindiBtn) hindiBtn.classList.add('active');
    document.title = 'Hindi SA-1 Prep App | Universal Wisdom School Grade 2';
  }
}

function renderMascot() {
  const avatar = document.getElementById('mascot-avatar-display');
  const bubble = document.getElementById('mascot-speech-bubble');
  if (!avatar || !bubble) return;

  if (state.currentSubject === 'english') {
    avatar.textContent = '🐊';
    bubble.innerHTML = `Welcome to <strong>English SA-1 Prep</strong>! Let's explore <strong>Roald Dahl stories</strong>, party instructions, and grammar topics! 📖`;
  } else if (state.currentSubject === 'computing') {
    avatar.textContent = '🤖';
    bubble.innerHTML = `Welcome to <strong>Computing Theory</strong>! Let's master <strong>Algorithms, Hardware vs Software, and Data Expert</strong> for your SA-1 Exam (20 Marks)! ⚡`;
  } else {
    avatar.textContent = '🦉';
    bubble.innerHTML = `Hello! Let's prepare for your <strong>Hindi SA-1 Exam</strong> using your textbook <strong>'Bal Patwar 2'</strong>! ✨`;
  }
}

function initUI() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  const settingsSoundBtn = document.getElementById('settings-sound-btn');

  function updateSoundUI(isMuted) {
    if (soundBtn) {
      soundBtn.querySelector('.sound-label').textContent = isMuted ? 'Mute' : 'Sound';
      soundBtn.style.opacity = isMuted ? '0.5' : '1';
    }
    if (settingsSoundBtn) {
      settingsSoundBtn.textContent = isMuted ? 'Sound: OFF' : 'Sound: ON';
    }
  }

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const isMuted = soundEngine.toggleMute();
      updateSoundUI(isMuted);
    });
  }

  const heartsChip = document.getElementById('hearts-stat-chip');
  if (heartsChip) {
    heartsChip.addEventListener('click', () => {
      if (state.hearts < state.maxHearts) {
        state.refillHearts();
        renderTopBar();
        soundEngine.playCorrect();
        alert('💖 All 5 Hearts have been refilled! Keep going!');
      }
    });
  }

  // Settings Modal Controls
  const settingsBtn = document.getElementById('settings-toggle-btn');
  const settingsModal = document.getElementById('settings-modal');
  const closeSettingsBtn = document.getElementById('close-settings-btn');
  const settingsRefillBtn = document.getElementById('settings-refill-btn');
  const resetProgressBtn = document.getElementById('reset-progress-btn');

  if (settingsBtn && settingsModal) {
    settingsBtn.addEventListener('click', () => {
      soundEngine.playTap();
      settingsModal.classList.add('active');
    });
  }

  if (closeSettingsBtn && settingsModal) {
    closeSettingsBtn.addEventListener('click', () => {
      soundEngine.playTap();
      settingsModal.classList.remove('active');
    });
  }

  if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
      if (e.target === settingsModal) {
        settingsModal.classList.remove('active');
      }
    });
  }

  if (settingsSoundBtn) {
    settingsSoundBtn.addEventListener('click', () => {
      const isMuted = soundEngine.toggleMute();
      updateSoundUI(isMuted);
    });
  }

  if (settingsRefillBtn) {
    settingsRefillBtn.addEventListener('click', () => {
      state.refillHearts();
      renderTopBar();
      soundEngine.playCorrect();
      alert('💖 All 5 Hearts have been refilled!');
    });
  }

  if (resetProgressBtn) {
    resetProgressBtn.addEventListener('click', () => {
      const confirmed = confirm(
        '⚠️ Are you sure you want to reset all progress?\n\nThis will reset:\n• All stars & completed lessons in English, Computing & Hindi\n• XP Gems & Daily streak\n• All Mock Exam Report Cards\n\nThis cannot be undone.'
      );
      if (confirmed) {
        state.resetProgress();
        renderTopBar();
        renderPath();
        renderModesHub();
        renderExamHub();
        renderReportCard();
        if (settingsModal) settingsModal.classList.remove('active');
        soundEngine.playIncorrect();
        alert('✨ Progress has been completely reset. You have a clean fresh start!');
      }
    });
  }
}

function renderTopBar() {
  document.getElementById('streak-count').textContent = state.streak;
  document.getElementById('gems-count').textContent = state.xp;
  document.getElementById('hearts-count').textContent = state.hearts;
}

function setupNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      soundEngine.playTap();
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.dataset.target;
      document.querySelectorAll('.view-section').forEach(view => {
        view.classList.remove('active');
      });
      const activeView = document.getElementById(target);
      if (activeView) activeView.classList.add('active');

      if (target === 'report-view') {
        renderReportCard();
      } else if (target === 'modes-view') {
        renderModesHub();
      } else if (target === 'exam-view') {
        renderExamHub();
      }
    });
  });
}

// ================= Duolingo Path Map Renderer =================
function renderPath() {
  const container = document.getElementById('path-nodes-container');
  if (!container) return;
  container.innerHTML = '';

  let activeData = HINDI_DATA;
  if (state.currentSubject === 'english') activeData = ENGLISH_DATA;
  else if (state.currentSubject === 'computing') activeData = COMPUTING_DATA;

  activeData.adventureUnits.forEach((unit) => {
    const banner = document.createElement('div');
    banner.className = 'unit-banner';
    banner.style.background = unit.color;
    banner.style.boxShadow = `0 4px 0 ${darkenColor(unit.color)}`;
    banner.innerHTML = `
      <h2>${unit.title}</h2>
      <p>${unit.desc}</p>
    `;
    container.appendChild(banner);

    const pathGroup = document.createElement('div');
    pathGroup.className = 'path-container';

    unit.lessons.forEach((lesson) => {
      const node = document.createElement('div');
      const starsEarned = state.completedLessons[lesson.id] || 0;
      const isCompleted = starsEarned > 0;
      node.className = `path-step-node ${isCompleted ? 'completed' : ''}`;

      node.innerHTML = `
        <button class="node-btn" style="${isCompleted ? '' : `background:${unit.color}; box-shadow: 0 7px 0 ${darkenColor(unit.color)};`}">
          ${isCompleted ? '👑' : lesson.icon}
        </button>
        <span class="node-label">
          <strong>${lesson.title}</strong>
          <small style="display:block; font-size: 11px; opacity:0.8;">${lesson.subtitle || ''}</small>
          ${isCompleted ? '⭐'.repeat(starsEarned) : ''}
        </span>
      `;

      node.addEventListener('click', () => {
        soundEngine.playTap();
        startPractice(lesson.type, lesson.filter, lesson.type.includes('exam'), lesson.id);
      });

      pathGroup.appendChild(node);
    });

    container.appendChild(pathGroup);
  });
}

function darkenColor(hex) {
  if (hex.startsWith('#58cc02')) return '#46a302';
  if (hex.startsWith('#1cb0f6')) return '#1899d6';
  if (hex.startsWith('#ff9600')) return '#e08500';
  if (hex.startsWith('#ce82ff')) return '#a559df';
  if (hex.startsWith('#ff4b4b')) return '#ea2b2b';
  return '#afafaf';
}

// ================= Practice Modes Hub Renderer =================
function renderModesHub() {
  const container = document.getElementById('modes-view-container');
  if (!container) return;

  if (state.currentSubject === 'english') {
    container.innerHTML = `
      <div class="unit-banner" style="background: var(--duo-purple); box-shadow: 0 4px 0 var(--duo-purple-dark);">
        <h2>📖 6 English Practice Modes</h2>
        <p>Targeted exercises mapped to Roald Dahl & Party Units (SA-1)</p>
      </div>

      <div class="modes-grid">
        <!-- Mode 1: Story Explorer -->
        <div class="mode-card" onclick="startPractice('e_story')">
          <div class="mode-card-icon">🐊</div>
          <div class="mode-card-title">Story Explorer</div>
          <div class="mode-card-desc">Roald Dahl characters, settings & story mountain</div>
          <div class="mode-card-tag" style="background: var(--primary-green-light); color: var(--primary-green-dark);">Unit 1: Roald Dahl</div>
        </div>

        <!-- Mode 2: Grammar Detective -->
        <div class="mode-card" onclick="startPractice('e_grammar')">
          <div class="mode-card-icon">🔤</div>
          <div class="mode-card-title">Grammar Detective</div>
          <div class="mode-card-desc">Nouns, action verbs & adjective positions</div>
          <div class="mode-card-tag" style="background: var(--sky-blue-light); color: var(--sky-blue-dark);">Language: Nouns & Verbs</div>
        </div>

        <!-- Mode 3: Suffix Speller -->
        <div class="mode-card" onclick="startPractice('e_suffix')">
          <div class="mode-card-icon">🧩</div>
          <div class="mode-card-title">Suffix Speller</div>
          <div class="mode-card-desc">Adding -ed & -ing rules (drop e, double letter)</div>
          <div class="mode-card-tag" style="background: var(--duo-orange-light); color: var(--duo-orange-dark);">Language: -ed & -ing</div>
        </div>

        <!-- Mode 4: Speech Marks Lab -->
        <div class="mode-card" onclick="startPractice('e_dialogue')">
          <div class="mode-card-icon">💬</div>
          <div class="mode-card-title">Speech Marks Lab</div>
          <div class="mode-card-desc">Inverted commas and expressive speech verbs</div>
          <div class="mode-card-tag" style="background: var(--duo-purple-light); color: var(--duo-purple-dark);">Language: Dialogue</div>
        </div>

        <!-- Mode 5: Command Verbs -->
        <div class="mode-card" onclick="startPractice('e_command')">
          <div class="mode-card-icon">⚡</div>
          <div class="mode-card-title">Command Verbs</div>
          <div class="mode-card-desc">Bossy verbs in instructions & directions</div>
          <div class="mode-card-tag" style="background: var(--primary-green-light); color: var(--primary-green-dark);">Unit 2: Instructions</div>
        </div>

        <!-- Mode 6: Compound Words -->
        <div class="mode-card" onclick="startPractice('e_compound')">
          <div class="mode-card-icon">🔗</div>
          <div class="mode-card-title">Compound Matcher</div>
          <div class="mode-card-desc">Joining two root words into one bigger word</div>
          <div class="mode-card-tag" style="background: var(--duo-red-light); color: var(--duo-red-dark);">Language: Compounds</div>
        </div>
      </div>
    `;
  } else if (state.currentSubject === 'computing') {
    container.innerHTML = `
      <div class="unit-banner" style="background: var(--sky-blue); box-shadow: 0 4px 0 var(--sky-blue-dark);">
        <h2>💻 6 Computing Practice Modes</h2>
        <p>Interactive exercises mapped to Cambridge Primary Computing SA-1</p>
      </div>

      <div class="modes-grid">
        <div class="mode-card" onclick="startPractice('c_algo')">
          <div class="mode-card-icon">🤖</div>
          <div class="mode-card-title">Algorithm Detective</div>
          <div class="mode-card-desc">Follow, understand, edit & correct algorithms</div>
          <div class="mode-card-tag" style="background: var(--primary-green-light); color: var(--primary-green-dark);">Unit 1: Algorithms</div>
        </div>

        <div class="mode-card" onclick="startPractice('c_concise')">
          <div class="mode-card-icon">✂️</div>
          <div class="mode-card-title">Concise Code</div>
          <div class="mode-card-desc">Combine repeated Scratch blocks to save power</div>
          <div class="mode-card-tag" style="background: var(--sky-blue-light); color: var(--sky-blue-dark);">Unit 1: Concise Scratch</div>
        </div>

        <div class="mode-card" onclick="startPractice('c_reset')">
          <div class="mode-card-icon">🔄</div>
          <div class="mode-card-title">Sprite Reset Master</div>
          <div class="mode-card-desc">Reset position (x, y) & size (100%), negative size</div>
          <div class="mode-card-tag" style="background: var(--duo-orange-light); color: var(--duo-orange-dark);">Unit 1: Reset Objects</div>
        </div>

        <div class="mode-card" onclick="startPractice('c_hardware')">
          <div class="mode-card-icon">💻</div>
          <div class="mode-card-title">Hardware vs Software</div>
          <div class="mode-card-desc">Physical parts, apps, football rules, bugs vs damage</div>
          <div class="mode-card-tag" style="background: var(--duo-purple-light); color: var(--duo-purple-dark);">Unit 2: Systems</div>
        </div>

        <div class="mode-card" onclick="startPractice('c_input')">
          <div class="mode-card-icon">🖲️</div>
          <div class="mode-card-title">Smart Input Lab</div>
          <div class="mode-card-desc">Manual vs Automatic, Barcodes, RFID & Biometrics</div>
          <div class="mode-card-tag" style="background: var(--primary-green-light); color: var(--primary-green-dark);">Unit 2: Input Devices</div>
        </div>

        <div class="mode-card" onclick="startPractice('c_data')">
          <div class="mode-card-icon">📊</div>
          <div class="mode-card-title">Data Expert</div>
          <div class="mode-card-desc">Categorical vs Discrete, bar charts & decision solving</div>
          <div class="mode-card-tag" style="background: var(--duo-red-light); color: var(--duo-red-dark);">Unit 3: Data Problems</div>
        </div>
      </div>
    `;
  } else {
    // Hindi Practice Modes
    container.innerHTML = `
      <div class="unit-banner" style="background: var(--sky-blue); box-shadow: 0 4px 0 var(--sky-blue-dark);">
        <h2>🎮 6 Hindi Practice Modes</h2>
        <p>Targeted exercises mapped to the SA-1 syllabus sections</p>
      </div>

      <div class="modes-grid">
        <div class="mode-card" onclick="startPractice('picture')">
          <div class="mode-card-icon">🖼️</div>
          <div class="mode-card-title">Picture Match</div>
          <div class="mode-card-desc">चित्र देखकर पहला अक्षर चुनें</div>
          <div class="mode-card-tag">Theory: First Letter</div>
        </div>

        <div class="mode-card" onclick="startPractice('train')">
          <div class="mode-card-icon">🚂</div>
          <div class="mode-card-title">Letter Train</div>
          <div class="mode-card-desc">रिक्त स्थान भरिए (क to श)</div>
          <div class="mode-card-tag">Alphabet Order</div>
        </div>

        <div class="mode-card" onclick="startPractice('sort')">
          <div class="mode-card-icon">🧺</div>
          <div class="mode-card-title">Basket Sorter</div>
          <div class="mode-card-desc">स्वर और व्यंजन को अलग कीजिए</div>
          <div class="mode-card-tag">Vowel vs Consonant</div>
        </div>

        <div class="mode-card" onclick="startPractice('match')">
          <div class="mode-card-icon">🧩</div>
          <div class="mode-card-title">Match Pairs</div>
          <div class="mode-card-desc">वर्ण और चित्र का मिलान कीजिए</div>
          <div class="mode-card-tag">Tile Matching</div>
        </div>

        <div class="mode-card" onclick="startPractice('listening')">
          <div class="mode-card-icon">🎧</div>
          <div class="mode-card-title">Listening Lab</div>
          <div class="mode-card-desc">सुनो और समझो (Textbook Pg 66)</div>
          <div class="mode-card-tag" style="background: var(--duo-orange-light); color: var(--duo-orange-dark);">Listening (5 Marks)</div>
        </div>

        <div class="mode-card" onclick="startPractice('speaking')">
          <div class="mode-card-icon">🎙️</div>
          <div class="mode-card-title">Speaking Studio</div>
          <div class="mode-card-desc">बोलो और सीखो (Rhymes & Mic)</div>
          <div class="mode-card-tag" style="background: var(--duo-red-light); color: var(--duo-red-dark);">Speaking (5 Marks)</div>
        </div>
      </div>
    `;
  }
}

// ================= Exam Hub View Renderer =================
function renderExamHub() {
  const container = document.getElementById('exam-view-container');
  if (!container) return;

  if (state.currentSubject === 'english') {
    container.innerHTML = `
      <div class="unit-banner" style="background: var(--duo-purple); box-shadow: 0 4px 0 var(--duo-purple-dark);">
        <h2>🇬🇧 English SA-1 Full Mock Exam</h2>
        <p>Universal Wisdom School - Summative Assessment 1 (30 Marks)</p>
      </div>

      <div style="background: #ffffff; border: 2px solid var(--duo-gray); border-radius: 20px; padding: 18px; margin-bottom: 20px; box-shadow: 0 4px 0 var(--duo-gray);">
        <h3 style="font-size: 16px; margin-bottom: 10px; color: var(--text-primary);">📊 Official Exam Breakdown (30 Marks):</h3>
        <ul style="padding-left: 20px; line-height: 1.8; font-size: 13.5px; color: var(--text-secondary); font-weight: 600;">
          <li><strong>Unit 1: Story Writing with Roald Dahl (10 Marks):</strong> Characters (Mr Wonka, Enormous Crocodile), settings (place, weather, time), sequencing events on story mountain.</li>
          <li><strong>Unit 2: Let's Have a Party (10 Marks):</strong> Making lists, following instructions (pop-up card), writing invitations & RSVP, improving instructions.</li>
          <li><strong>Language Topics (10 Marks):</strong> Nouns, verbs & suffix rules (-ed/-ing), adjectives, speech marks, command verbs, compound words.</li>
          <li><strong>Duration & Format:</strong> 45 Minutes • Total 30 Marks.</li>
        </ul>
      </div>

      <button class="btn-duo btn-purple" onclick="startPractice('e_exam', 'all', true)" style="font-size: 17px; padding: 16px; background: var(--duo-purple); box-shadow: 0 5px 0 var(--duo-purple-dark); color: #ffffff;">
        🚀 START ENGLISH MOCK EXAM (30 Marks)
      </button>
    `;
  } else if (state.currentSubject === 'computing') {
    container.innerHTML = `
      <div class="unit-banner" style="background: var(--sky-blue); box-shadow: 0 4px 0 var(--sky-blue-dark);">
        <h2>💻 Computing Theory Mock Exam</h2>
        <p>Universal Wisdom School - Summative Assessment 1 (20 Marks)</p>
      </div>

      <div style="background: #ffffff; border: 2px solid var(--duo-gray); border-radius: 20px; padding: 18px; margin-bottom: 20px; box-shadow: 0 4px 0 var(--duo-gray);">
        <h3 style="font-size: 16px; margin-bottom: 10px; color: var(--text-primary);">📊 Official Exam Breakdown (20 Marks Theory):</h3>
        <ul style="padding-left: 20px; line-height: 1.8; font-size: 13.5px; color: var(--text-secondary); font-weight: 600;">
          <li><strong>Unit 1: Making Programs Clear (7 Marks):</strong> Algorithms, step-by-step order, editing mistakes, concise Scratch code combinations, sprite resets.</li>
          <li><strong>Unit 2: Hardware & Software (7 Marks):</strong> Hardware vs software roles, physical damage vs bugs, 3 categories, manual vs automatic input devices.</li>
          <li><strong>Unit 3: Be a Data Expert (6 Marks):</strong> Categorical data, discrete data, reading bar charts, devices to record data, problem-solving.</li>
          <li><strong>Duration & Format:</strong> 40 Minutes • 20 Questions (1 mark each).</li>
        </ul>
      </div>

      <button class="btn-duo btn-blue" onclick="startPractice('c_exam', 'all', true)" style="font-size: 17px; padding: 16px;">
        🚀 START COMPUTING MOCK EXAM (20 Marks)
      </button>
    `;
  } else {
    container.innerHTML = `
      <div class="unit-banner" style="background: var(--duo-red); box-shadow: 0 4px 0 var(--duo-red-dark);">
        <h2>📝 SA-1 Hindi Full Mock Exam</h2>
        <p>Universal Wisdom School - Summative Assessment 1 (30 Marks)</p>
      </div>

      <div style="background: #ffffff; border: 2px solid var(--duo-gray); border-radius: 20px; padding: 18px; margin-bottom: 20px; box-shadow: 0 4px 0 var(--duo-gray);">
        <h3 style="font-size: 16px; margin-bottom: 10px; color: var(--text-primary);">📊 Official Exam Breakdown (30 Marks):</h3>
        <ul style="padding-left: 20px; line-height: 1.8; font-size: 13.5px; color: var(--text-secondary); font-weight: 600;">
          <li><strong>Theory (20 Marks):</strong> Vowels (स्वर), Consonants (क to श), Missing Letters, Picture First Letter, Swar/Vyanjan classification, Matching.</li>
          <li><strong>Listening (5 Marks):</strong> Audio recognition of words and sounds.</li>
          <li><strong>Speaking (5 Marks):</strong> Accurate pronunciation & poem recitation.</li>
          <li><strong>Duration:</strong> 40 Minutes (Untimed practice mode available).</li>
        </ul>
      </div>

      <button class="btn-duo btn-green" onclick="startPractice('exam', 'all', true)" style="font-size: 17px; padding: 16px;">
        🚀 START HINDI MOCK EXAM (शुरू करें)
      </button>
    `;
  }
}

// ================= Game Session Runner =================
function startPractice(mode, filter = 'all', isExam = false, lessonId = null) {
  if (state.hearts <= 0) {
    soundEngine.playIncorrect();
    const refill = confirm('❤️ You are out of Hearts!\nWould you like to refill your hearts for free?');
    if (refill) {
      state.refillHearts();
      renderTopBar();
    } else {
      return;
    }
  }

  currentSession = new GameSession(mode, filter, isExam);
  currentSession.lessonId = lessonId;

  const modal = document.getElementById('game-modal');
  modal.classList.add('active');

  renderCurrentQuestion();
}
window.startPractice = startPractice;

function renderCurrentQuestion() {
  const session = currentSession;
  if (!session) return;

  const q = session.questions[session.currentIndex];
  const progressPct = ((session.currentIndex) / session.questions.length) * 100;
  document.getElementById('game-progress-bar-fill').style.width = `${progressPct}%`;
  document.getElementById('modal-hearts-count').textContent = state.hearts;

  const contentArea = document.getElementById('game-content-area');
  contentArea.innerHTML = '';

  // Reset footer check action
  session.selectedOption = null;
  session.isAnswerChecked = false;
  const actionBtn = document.getElementById('check-answer-btn');
  actionBtn.textContent = 'CHECK';
  actionBtn.className = 'btn-duo btn-green';
  actionBtn.disabled = true;

  const feedbackBanner = document.getElementById('feedback-banner');
  feedbackBanner.className = 'feedback-banner';
  feedbackBanner.innerHTML = '';

  // Render question type
  if (q.type === 'e_mcq' || q.type === 'c_mcq') {
    renderGeneralMCQQuestion(q, contentArea, actionBtn);
  } else if (q.type === 'e_sort' || q.type === 'c_sort') {
    renderGeneralSortQuestion(q, contentArea, actionBtn);
  } else if (q.type === 'picture') {
    renderPictureQuestion(q, contentArea, actionBtn);
  } else if (q.type === 'train') {
    renderTrainQuestion(q, contentArea, actionBtn);
  } else if (q.type === 'sort') {
    renderSortQuestion(q, contentArea, actionBtn);
  } else if (q.type === 'match') {
    renderMatchQuestion(q, contentArea, actionBtn);
  } else if (q.type === 'listening') {
    renderListeningQuestion(q, contentArea, actionBtn);
  } else if (q.type === 'speaking') {
    renderSpeakingQuestion(q, contentArea, actionBtn);
  }
}

// ================= GENERAL MCQ RENDERER (ENGLISH & COMPUTING) =================
function renderGeneralMCQQuestion(q, container, actionBtn) {
  const heading = document.createElement('div');
  heading.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 6px;">
      <span class="mode-card-tag" style="background: var(--duo-purple-light); color: var(--duo-purple-dark);">${q.unitTitle || 'Practice'}</span>
      <span style="font-size: 12px; font-weight: 700; color: var(--text-secondary);">Question ${currentSession.currentIndex + 1}/${currentSession.questions.length}</span>
    </div>
    <div class="bilingual-heading" style="font-size: 19px; line-height: 1.35; margin-bottom: 4px;">${q.question}</div>
    ${q.subtext ? `<div class="bilingual-subheading" style="margin-bottom: 12px; color: var(--text-secondary);">${q.subtext}</div>` : ''}
  `;

  const visualCard = document.createElement('div');
  visualCard.className = 'picture-card';
  visualCard.style.padding = '14px';
  visualCard.style.marginBottom = '12px';
  visualCard.innerHTML = `
    ${getIllustrationHTML(q.iconKey, '📖')}
  `;

  const grid = document.createElement('div');
  grid.className = 'options-grid';
  grid.style.marginTop = 'auto';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.style.fontSize = '14px';
    btn.style.padding = '12px 14px';
    btn.style.lineHeight = '1.3';
    btn.textContent = opt;

    btn.addEventListener('click', () => {
      if (currentSession.isAnswerChecked) return;
      soundEngine.playTap();
      document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      currentSession.selectedOption = opt;
      actionBtn.disabled = false;
    });
    grid.appendChild(btn);
  });

  container.appendChild(heading);
  container.appendChild(visualCard);
  container.appendChild(grid);
}

// ================= GENERAL BASKET SORT RENDERER =================
function renderGeneralSortQuestion(q, container, actionBtn) {
  const heading = document.createElement('div');
  heading.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 6px;">
      <span class="mode-card-tag" style="background: var(--duo-purple-light); color: var(--duo-purple-dark);">${q.unitTitle || 'Sorting Lab'}</span>
      <span style="font-size: 12px; font-weight: 700; color: var(--text-secondary);">Sorting Challenge</span>
    </div>
    <div class="bilingual-heading" style="font-size: 19px;">${q.title}</div>
  `;

  const card = document.createElement('div');
  card.className = 'floating-sort-card';
  card.style.width = '200px';
  card.style.height = '140px';
  card.style.fontSize = '20px';
  card.style.padding = '10px';
  card.style.textAlign = 'center';
  card.innerHTML = `
    ${getIllustrationHTML(q.item.icon, '📦')}
    <strong style="display:block; font-size: 16px; margin-top: 6px; color: var(--text-primary);">${q.item.name}</strong>
  `;

  const basketsRow = document.createElement('div');
  basketsRow.className = 'sort-baskets-row';

  basketsRow.innerHTML = `
    <div class="basket-dropzone" id="basket-1" style="border-color: ${q.basket1.color}; background: #fdfdfd;">
      <div class="basket-title" style="color: ${q.basket1.color}; font-size: 15px;">${q.basket1.label}</div>
    </div>
    <div class="basket-dropzone" id="basket-2" style="border-color: ${q.basket2.color}; background: #fdfdfd;">
      <div class="basket-title" style="color: ${q.basket2.color}; font-size: 15px;">${q.basket2.label}</div>
    </div>
  `;

  container.appendChild(heading);
  container.appendChild(card);
  container.appendChild(basketsRow);

  const b1Btn = basketsRow.querySelector('#basket-1');
  const b2Btn = basketsRow.querySelector('#basket-2');

  b1Btn.addEventListener('click', () => {
    if (currentSession.isAnswerChecked) return;
    soundEngine.playTap();
    b1Btn.style.transform = 'scale(1.05)';
    b1Btn.style.background = '#f0f9ff';
    b2Btn.style.transform = 'scale(1)';
    b2Btn.style.background = '#fdfdfd';
    currentSession.selectedOption = q.basket1.key;
    actionBtn.disabled = false;
  });

  b2Btn.addEventListener('click', () => {
    if (currentSession.isAnswerChecked) return;
    soundEngine.playTap();
    b2Btn.style.transform = 'scale(1.05)';
    b2Btn.style.background = '#f0f9ff';
    b1Btn.style.transform = 'scale(1)';
    b1Btn.style.background = '#fdfdfd';
    currentSession.selectedOption = q.basket2.key;
    actionBtn.disabled = false;
  });
}

// ================= HINDI QUESTION RENDERERS =================
function renderPictureQuestion(q, container, actionBtn) {
  const heading = document.createElement('div');
  heading.innerHTML = `
    <div class="bilingual-heading">What is the first Hindi letter for this picture?</div>
    <div class="bilingual-subheading">चित्र पहचानकर पहला अक्षर चुनें</div>
  `;

  const card = document.createElement('div');
  card.className = 'picture-card';
  card.id = 'picture-question-card';
  card.innerHTML = `
    ${getIllustrationHTML(q.item.iconKey, q.item.emoji)}
    <div class="english-subtext" style="font-size: 15px; margin-top: 6px;">
      Object: <strong>${q.item.englishName}</strong>
    </div>
    <div id="picture-reveal-section" style="display: none; width: 100%; margin-top: 12px; text-align: center; border-top: 1px dashed #ccc; padding-top: 10px;">
      <div class="picture-word" style="font-size: 26px; color: var(--primary-green-dark);">${q.item.word}</div>
      <div style="font-size: 13px; color: var(--text-secondary);">${q.item.englishWord}</div>
      <div class="picture-rhyme-pill" style="margin-top: 8px;">
        <div>${q.item.rhyme}</div>
        <div class="rhyme-en-text">"${q.item.rhymeEn || ''}"</div>
      </div>
    </div>
  `;

  const grid = document.createElement('div');
  grid.className = 'options-grid';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => {
      if (currentSession.isAnswerChecked) return;
      soundEngine.playTap();
      document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      currentSession.selectedOption = opt;
      actionBtn.disabled = false;
    });
    grid.appendChild(btn);
  });

  container.appendChild(heading);
  container.appendChild(card);
  container.appendChild(grid);
}

function renderTrainQuestion(q, container, actionBtn) {
  const heading = document.createElement('div');
  heading.innerHTML = `
    <div class="bilingual-heading">Fill in the missing letter on the train:</div>
    <div class="bilingual-subheading">खाली डिब्बे में सही अक्षर भरें (Alphabet Order)</div>
  `;

  const train = document.createElement('div');
  train.className = 'train-wrapper';
  train.innerHTML = `<span class="train-engine">🚂</span>`;

  q.seq.forEach(letter => {
    const carriage = document.createElement('div');
    carriage.className = `train-carriage ${letter === null ? 'blank' : ''}`;
    carriage.id = letter === null ? 'blank-carriage-target' : '';
    carriage.textContent = letter !== null ? letter : '?';
    train.appendChild(carriage);
  });

  const optionsGrid = document.createElement('div');
  optionsGrid.className = 'options-grid';
  optionsGrid.style.marginTop = 'auto';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => {
      if (currentSession.isAnswerChecked) return;
      soundEngine.playTap();
      document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const target = document.getElementById('blank-carriage-target');
      if (target) target.textContent = opt;
      currentSession.selectedOption = opt;
      actionBtn.disabled = false;
    });
    optionsGrid.appendChild(btn);
  });

  container.appendChild(heading);
  container.appendChild(train);
  container.appendChild(optionsGrid);
}

function renderSortQuestion(q, container, actionBtn) {
  const heading = document.createElement('div');
  heading.innerHTML = `
    <div class="bilingual-heading">Is this letter a Vowel or a Consonant?</div>
    <div class="bilingual-subheading">अक्षर पहचानकर सही टोकरी चुनें</div>
  `;

  const card = document.createElement('div');
  card.className = 'floating-sort-card';
  card.textContent = q.letter;

  const basketsRow = document.createElement('div');
  basketsRow.className = 'sort-baskets-row';

  basketsRow.innerHTML = `
    <div class="basket-dropzone swar-basket" id="basket-swar">
      <div style="font-size: 34px;">🍎</div>
      <div class="basket-title">Vowel (स्वर)</div>
      <small style="color: #666;">अ, आ, इ, ई, उ...</small>
    </div>
    <div class="basket-dropzone vyanjan-basket" id="basket-vyanjan">
      <div style="font-size: 34px;">🦁</div>
      <div class="basket-title">Consonant (व्यंजन)</div>
      <small style="color: #666;">क, ख, ग, घ, च...</small>
    </div>
  `;

  container.appendChild(heading);
  container.appendChild(card);
  container.appendChild(basketsRow);

  const swarBtn = basketsRow.querySelector('#basket-swar');
  const vyanjanBtn = basketsRow.querySelector('#basket-vyanjan');

  swarBtn.addEventListener('click', () => {
    if (currentSession.isAnswerChecked) return;
    soundEngine.playTap();
    swarBtn.style.transform = 'scale(1.05)';
    vyanjanBtn.style.transform = 'scale(1)';
    currentSession.selectedOption = 'swar';
    actionBtn.disabled = false;
  });

  vyanjanBtn.addEventListener('click', () => {
    if (currentSession.isAnswerChecked) return;
    soundEngine.playTap();
    vyanjanBtn.style.transform = 'scale(1.05)';
    swarBtn.style.transform = 'scale(1)';
    currentSession.selectedOption = 'vyanjan';
    actionBtn.disabled = false;
  });

  setTimeout(() => soundEngine.speakHindi(q.letter), 300);
}

function renderMatchQuestion(q, container, actionBtn) {
  const heading = document.createElement('div');
  heading.innerHTML = `
    <div class="bilingual-heading">Match each letter to its picture:</div>
    <div class="bilingual-subheading">वर्ण और चित्र का सही मिलान करें</div>
  `;

  const matchCols = document.createElement('div');
  matchCols.className = 'match-columns';

  const lettersCol = document.createElement('div');
  lettersCol.style.display = 'flex';
  lettersCol.style.flexDirection = 'column';
  lettersCol.style.gap = '10px';

  const itemsCol = document.createElement('div');
  itemsCol.style.display = 'flex';
  itemsCol.style.flexDirection = 'column';
  itemsCol.style.gap = '10px';

  const shuffledLetters = shuffleArray(q.pairs);
  const shuffledItems = shuffleArray(q.pairs);

  let activeLetter = null;
  let activeItem = null;
  let solvedCount = 0;

  shuffledLetters.forEach(pair => {
    const tile = document.createElement('button');
    tile.className = 'match-tile';
    tile.textContent = pair.letter;
    tile.dataset.letter = pair.letter;

    tile.addEventListener('click', () => {
      soundEngine.playTap();
      lettersCol.querySelectorAll('.match-tile').forEach(t => t.classList.remove('selected'));
      tile.classList.add('selected');
      activeLetter = pair.letter;
      checkPair();
    });
    lettersCol.appendChild(tile);
  });

  shuffledItems.forEach(pair => {
    const tile = document.createElement('button');
    tile.className = 'match-tile';
    tile.innerHTML = `
      <span style="font-size: 24px;">${pair.emoji}</span>
      <span style="font-size: 13px; font-weight: 700;">${pair.englishName}</span>
    `;
    tile.dataset.letter = pair.letter;

    tile.addEventListener('click', () => {
      soundEngine.playTap();
      itemsCol.querySelectorAll('.match-tile').forEach(t => t.classList.remove('selected'));
      tile.classList.add('selected');
      activeItem = pair.letter;
      checkPair();
    });
    itemsCol.appendChild(tile);
  });

  function checkPair() {
    if (!activeLetter || !activeItem) return;
    if (activeLetter === activeItem) {
      soundEngine.playCorrect();
      const letTile = lettersCol.querySelector(`.match-tile[data-letter="${activeLetter}"]`);
      const itmTile = itemsCol.querySelector(`.match-tile[data-letter="${activeItem}"]`);
      if (letTile) {
        letTile.classList.add('matched');
        letTile.disabled = true;
      }
      if (itmTile) {
        itmTile.classList.add('matched');
        itmTile.disabled = true;
      }
      solvedCount++;
      activeLetter = null;
      activeItem = null;

      if (solvedCount === q.pairs.length) {
        currentSession.selectedOption = 'matched_all';
        q.answer = 'matched_all';
        actionBtn.disabled = false;
        actionBtn.click();
      }
    } else {
      soundEngine.playIncorrect();
      setTimeout(() => {
        lettersCol.querySelectorAll('.match-tile').forEach(t => t.classList.remove('selected'));
        itemsCol.querySelectorAll('.match-tile').forEach(t => t.classList.remove('selected'));
        activeLetter = null;
        activeItem = null;
      }, 500);
    }
  }

  matchCols.appendChild(lettersCol);
  matchCols.appendChild(itemsCol);
  container.appendChild(heading);
  container.appendChild(matchCols);
}

function renderListeningQuestion(q, container, actionBtn) {
  const centerBox = document.createElement('div');
  centerBox.style.textAlign = 'center';
  centerBox.style.margin = '20px auto';

  centerBox.innerHTML = `
    <button class="pulse-speaker" id="play-listening-audio" title="Tap to listen again">👂</button>
    <div class="bilingual-heading" style="margin-top: 18px;">Listen to the word and select its starting letter:</div>
    <div class="bilingual-subheading">ध्यान से सुनो और पहला अक्षर चुनो (Tap speaker to repeat)</div>
    <div id="listening-reveal-word" style="display: none; margin-top: 10px; font-size: 16px; font-weight: 700; color: var(--primary-green-dark);">
      Word: ${q.word} (${q.englishWord})
    </div>
  `;

  centerBox.querySelector('#play-listening-audio').addEventListener('click', () => {
    soundEngine.speakHindi(q.spokenPrompt);
  });

  const grid = document.createElement('div');
  grid.className = 'options-grid';
  grid.style.marginTop = 'auto';

  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => {
      if (currentSession.isAnswerChecked) return;
      soundEngine.playTap();
      document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      currentSession.selectedOption = opt;
      actionBtn.disabled = false;
    });
    grid.appendChild(btn);
  });

  container.appendChild(centerBox);
  container.appendChild(grid);

  setTimeout(() => {
    soundEngine.speakHindi(q.spokenPrompt);
  }, 400);
}

function renderSpeakingQuestion(q, container, actionBtn) {
  const rhymeCard = document.createElement('div');
  rhymeCard.className = 'speaking-rhyme-card';
  rhymeCard.innerHTML = `
    ${getIllustrationHTML(q.iconKey, q.emoji)}
    <div style="font-size: 24px; font-weight: 800; color: #8c6b00; margin-bottom: 2px;">
      ${q.letter} से ${q.word} (${q.englishWord})
    </div>
    <p class="rhyme-text">${q.rhyme}</p>
    <p class="rhyme-en-text" style="color: #8c6b00; margin-bottom: 12px;">"${q.rhymeEn}"</p>
    <button class="btn-duo btn-white" id="listen-rhyme-btn" style="width: auto; margin: 0 auto; font-size: 13px; padding: 6px 16px;">
      🔊 Listen Poem (कविता सुनें)
    </button>
  `;

  rhymeCard.querySelector('#listen-rhyme-btn').addEventListener('click', () => {
    soundEngine.speakHindi(q.rhyme);
  });

  const micContainer = document.createElement('div');
  micContainer.className = 'mic-action-container';
  micContainer.innerHTML = `
    <button class="mic-btn" id="start-speaking-mic" title="Press mic to speak">🎙️</button>
    <span id="speech-status-label" style="font-weight: 700; color: var(--duo-red-dark);">Press microphone to speak</span>
    <button class="btn-duo btn-white" id="manual-spoken-pass-btn" style="font-size: 13px; padding: 8px 14px; margin-top: 4px;">
      ✅ I Recited It Correctly
    </button>
  `;

  const micBtn = micContainer.querySelector('#start-speaking-mic');
  const statusLabel = micContainer.querySelector('#speech-status-label');
  const manualPassBtn = micContainer.querySelector('#manual-spoken-pass-btn');

  micBtn.addEventListener('click', () => {
    soundEngine.playTap();
    micBtn.classList.add('listening');
    statusLabel.textContent = 'Listening... Speak now!';
    statusLabel.style.color = 'var(--primary-green-dark)';

    soundEngine.listenHindi(
      (transcript) => {
        micBtn.classList.remove('listening');
        statusLabel.textContent = `You said: "${transcript}"`;
        currentSession.selectedOption = q.word;
        actionBtn.disabled = false;
        soundEngine.playCorrect();
      },
      () => {
        micBtn.classList.remove('listening');
        statusLabel.textContent = 'Mic busy. Tap the green check button below!';
        statusLabel.style.color = 'var(--text-secondary)';
      }
    );
  });

  manualPassBtn.addEventListener('click', () => {
    soundEngine.playTap();
    currentSession.selectedOption = q.word;
    actionBtn.disabled = false;
    actionBtn.click();
  });

  container.appendChild(rhymeCard);
  container.appendChild(micContainer);

  setTimeout(() => soundEngine.speakHindi(q.rhyme), 400);
}

// ================= Check Answer & Advance =================
document.getElementById('check-answer-btn').addEventListener('click', () => {
  const session = currentSession;
  if (!session) return;

  const actionBtn = document.getElementById('check-answer-btn');
  const feedbackBanner = document.getElementById('feedback-banner');

  if (session.isFinished) {
    document.getElementById('game-modal').classList.remove('active');
    currentSession = null;
    renderTopBar();
    return;
  }

  if (!session.isAnswerChecked) {
    session.isAnswerChecked = true;
    const q = session.questions[session.currentIndex];
    const isCorrect = session.selectedOption === q.answer;
    session.userAnswers[session.currentIndex] = isCorrect;

    const revealSection = document.getElementById('picture-reveal-section');
    if (revealSection && q.item) {
      revealSection.style.display = 'block';
      soundEngine.speakHindi(q.item.word);
    }
    const listeningWordReveal = document.getElementById('listening-reveal-word');
    if (listeningWordReveal) {
      listeningWordReveal.style.display = 'block';
    }

    if (isCorrect) {
      session.score++;
      if (q.section === 'theory') session.theoryScore++;
      else if (q.section === 'listening') session.listeningScore++;
      else if (q.section === 'speaking') session.speakingScore++;

      state.addXP(10);
      renderTopBar();
      soundEngine.playCorrect();

      feedbackBanner.className = 'feedback-banner success';
      feedbackBanner.innerHTML = `
        <span style="font-size: 26px;">🎉</span>
        <div>
          <div style="font-weight: 800; font-size: 17px;">Awesome! That's correct!</div>
          <small>${q.explanation ? q.explanation : '+10 XP gained • Very good!'}</small>
        </div>
      `;

      actionBtn.textContent = 'CONTINUE';
      actionBtn.className = 'btn-duo btn-green';
    } else {
      const remainingHearts = state.loseHeart();
      renderTopBar();
      document.getElementById('modal-hearts-count').textContent = remainingHearts;
      soundEngine.playIncorrect();

      feedbackBanner.className = 'feedback-banner error';
      feedbackBanner.innerHTML = `
        <span style="font-size: 26px;">💡</span>
        <div>
          <div style="font-weight: 800; font-size: 16px;">Correct Answer: "${q.answer}"</div>
          <small>${q.explanation ? q.explanation : 'Keep practicing!'}</small>
        </div>
      `;

      actionBtn.textContent = 'GOT IT';
      actionBtn.className = 'btn-duo btn-orange';
    }
  } else {
    session.currentIndex++;
    if (session.currentIndex < session.questions.length) {
      renderCurrentQuestion();
    } else {
      finishGameSession();
    }
  }
});

// Close game modal
document.getElementById('close-game-btn').addEventListener('click', () => {
  const confirmExit = confirm('Exit this practice round? Your progress will not be saved.');
  if (confirmExit) {
    document.getElementById('game-modal').classList.remove('active');
    currentSession = null;
  }
});

// ================= Finish & Victory Celebration =================
function finishGameSession() {
  const session = currentSession;
  session.isFinished = true;
  soundEngine.playVictory();
  triggerConfetti();

  const contentArea = document.getElementById('game-content-area');
  contentArea.innerHTML = '';

  const pct = Math.round((session.score / session.questions.length) * 100);
  const stars = pct >= 80 ? 3 : pct >= 50 ? 2 : 1;

  const isEnglish = state.currentSubject === 'english' || session.mode.startsWith('e_');
  const isComp = state.currentSubject === 'computing' || session.mode.startsWith('c_');

  if (session.lessonId) {
    if (isEnglish) {
      state.englishCompletedLessons[session.lessonId] = stars;
    } else if (isComp) {
      state.computingCompletedLessons[session.lessonId] = stars;
    } else {
      state.hindiCompletedLessons[session.lessonId] = stars;
    }
    state.saveState();
    renderPath();
  }

  if (session.isExam) {
    if (isEnglish) {
      // 15 questions = 30 marks total (2 marks each)
      const u1Correct = session.questions.filter((q, idx) => q.unit === 1 && session.userAnswers[idx] === true).length;
      const u2Correct = session.questions.filter((q, idx) => q.unit === 2 && session.userAnswers[idx] === true).length;
      const langCorrect = session.questions.filter((q, idx) => q.unitTitle && q.unitTitle.includes('Language') && session.userAnswers[idx] === true).length;

      const marks = Math.round((session.score / session.questions.length) * 30);
      state.englishLastExamScore = {
        score: session.score,
        total: session.questions.length,
        marks: marks,
        unit1Marks: Math.min(10, u1Correct * 2),
        unit2Marks: Math.min(10, u2Correct * 2),
        grammarMarks: Math.min(10, langCorrect * 2),
        date: new Date().toLocaleDateString('en-IN')
      };
      state.saveState();
    } else if (isComp) {
      const unit1Correct = session.questions.filter((q, idx) => q.unit === 1 && session.userAnswers[idx] === true).length;
      const unit2Correct = session.questions.filter((q, idx) => q.unit === 2 && session.userAnswers[idx] === true).length;
      const unit3Correct = session.questions.filter((q, idx) => q.unit === 3 && session.userAnswers[idx] === true).length;

      state.computingLastExamScore = {
        score: session.score,
        total: session.questions.length,
        marks: session.score, // 20 questions = 20 Marks
        unit1Marks: unit1Correct,
        unit2Marks: unit2Correct,
        unit3Marks: unit3Correct,
        date: new Date().toLocaleDateString('en-IN')
      };
      state.saveState();
    } else {
      const marks = Math.round((session.score / session.questions.length) * 30);
      state.hindiLastExamScore = {
        score: session.score,
        total: session.questions.length,
        marks: marks,
        theoryMarks: Math.min(20, Math.round((session.theoryScore / 8) * 20)),
        listeningMarks: Math.min(5, Math.round((session.listeningScore / 2) * 5)),
        speakingMarks: Math.min(5, Math.round((session.speakingScore / 2) * 5)),
        date: new Date().toLocaleDateString('en-IN')
      };
      state.saveState();
    }
  }

  const examMarksTotal = isComp ? 20 : 30;
  let examScoreVal = `${pct}%`;
  if (session.isExam) {
    if (isEnglish) examScoreVal = state.englishLastExamScore.marks;
    else if (isComp) examScoreVal = state.computingLastExamScore.marks;
    else examScoreVal = state.hindiLastExamScore.marks;
  }

  let themeBg = 'var(--primary-green)';
  if (isEnglish) themeBg = 'var(--duo-purple)';
  else if (isComp) themeBg = 'var(--sky-blue)';

  const victoryCard = document.createElement('div');
  victoryCard.className = 'report-card-modal';
  victoryCard.innerHTML = `
    <div class="report-header-badge">${session.isExam ? 'SA-1 Summative Assessment Complete' : 'Practice Lesson Completed!'}</div>
    <div style="font-size: 54px;">🏆</div>
    <h2 style="font-weight: 800; font-size: 24px; color: var(--text-primary);">
      ${pct >= 80 ? 'Outstanding Work!' : 'Good Effort! Keep Practicing!'}
    </h2>
    <div class="marks-circle" style="background: ${themeBg};">
      <span class="marks-score">${examScoreVal}</span>
      <span class="marks-total">${session.isExam ? `Marks out of ${examMarksTotal}` : `${session.score}/${session.questions.length} Correct`}</span>
    </div>
    <div style="font-size: 28px; margin: 4px 0;">
      ${'⭐'.repeat(stars)}
    </div>
    <p style="font-size: 14px; color: var(--text-secondary);">
      ${session.isExam
        ? 'Your child is well-prepared for the Summative Assessment 1 exam!'
        : 'You have mastered this lesson. Great job!'}
    </p>
  `;

  contentArea.appendChild(victoryCard);

  const actionBtn = document.getElementById('check-answer-btn');
  actionBtn.disabled = false;
  actionBtn.textContent = 'BACK TO HOME';
  actionBtn.className = isEnglish ? 'btn-duo btn-purple' : isComp ? 'btn-duo btn-blue' : 'btn-duo btn-green';
}

// ================= Report Card View Renderer =================
function renderReportCard() {
  const container = document.getElementById('report-view-container');
  if (!container) return;

  if (state.currentSubject === 'english') {
    const scoreData = state.englishLastExamScore;
    const maxMarks = 30;

    let gradeText = 'Take Exam';
    if (scoreData) {
      const pct = (scoreData.marks / maxMarks) * 100;
      if (pct >= 90) gradeText = 'A* (Outstanding Master!)';
      else if (pct >= 75) gradeText = 'A (Excellent)';
      else if (pct >= 50) gradeText = 'B (Good Effort)';
      else gradeText = 'C (Needs Practice)';
    }

    container.innerHTML = `
      <div class="report-card-modal">
        <div class="report-header-badge">Universal Wisdom School • Grade 2</div>
        <h2 style="font-size: 22px; font-weight: 800;">English SA-1 Report Card</h2>
        <div class="marks-circle" style="background: ${scoreData ? 'var(--duo-purple)' : 'var(--duo-gray-dark)'}">
          <span class="marks-score">${scoreData ? scoreData.marks : '--'}</span>
          <span class="marks-total">Marks out of 30</span>
        </div>

        <div class="report-breakdown">
          <div class="breakdown-row">
            <span>Unit 1: Roald Dahl & Characters (10 Marks):</span>
            <span style="color: var(--primary-green-dark);">${scoreData ? `${scoreData.unit1Marks}/10` : 'Pending'}</span>
          </div>
          <div class="breakdown-row">
            <span>Unit 2: Party & Instructions (10 Marks):</span>
            <span style="color: var(--sky-blue-dark);">${scoreData ? `${scoreData.unit2Marks}/10` : 'Pending'}</span>
          </div>
          <div class="breakdown-row">
            <span>Language & Grammar Topics (10 Marks):</span>
            <span style="color: var(--duo-purple-dark);">${scoreData ? `${scoreData.grammarMarks}/10` : 'Pending'}</span>
          </div>
          <hr style="border: 0; border-top: 1px dashed #ccc; margin: 4px 0;">
          <div class="breakdown-row">
            <span>Syllabus Scope:</span>
            <span>Cambridge Primary English Units 1 & 2</span>
          </div>
          <div class="breakdown-row">
            <span>Exam Date:</span>
            <span>${scoreData ? scoreData.date : '26th October 2026 (Monday)'}</span>
          </div>
          <div class="breakdown-row">
            <span>Performance Grade:</span>
            <strong style="color: var(--duo-purple-dark);">${gradeText}</strong>
          </div>
        </div>

        <button class="btn-duo btn-purple" id="re-take-exam-btn" style="background: var(--duo-purple); box-shadow: 0 5px 0 var(--duo-purple-dark); color: #ffffff;">
          🚀 TAKE ENGLISH MOCK EXAM (30 Marks)
        </button>
      </div>
    `;

    container.querySelector('#re-take-exam-btn').addEventListener('click', () => {
      soundEngine.playTap();
      startPractice('e_exam', 'all', true);
    });
  } else if (state.currentSubject === 'computing') {
    const scoreData = state.computingLastExamScore;
    const maxMarks = 20;

    let gradeText = 'Take Exam';
    if (scoreData) {
      const pct = (scoreData.marks / maxMarks) * 100;
      if (pct >= 90) gradeText = 'A* (Outstanding Master!)';
      else if (pct >= 75) gradeText = 'A (Excellent)';
      else if (pct >= 50) gradeText = 'B (Good Effort)';
      else gradeText = 'C (Needs Practice)';
    }

    container.innerHTML = `
      <div class="report-card-modal">
        <div class="report-header-badge">Universal Wisdom School • Grade 2</div>
        <h2 style="font-size: 22px; font-weight: 800;">Computing Theory SA-1 Report Card</h2>
        <div class="marks-circle" style="background: ${scoreData ? 'var(--sky-blue)' : 'var(--duo-gray-dark)'}">
          <span class="marks-score">${scoreData ? scoreData.marks : '--'}</span>
          <span class="marks-total">Marks out of 20</span>
        </div>

        <div class="report-breakdown">
          <div class="breakdown-row">
            <span>Unit 1: Making Programs Clear (7 Marks):</span>
            <span style="color: var(--primary-green-dark);">${scoreData ? `${scoreData.unit1Marks}/7` : 'Pending'}</span>
          </div>
          <div class="breakdown-row">
            <span>Unit 2: Hardware & Software (7 Marks):</span>
            <span style="color: var(--sky-blue-dark);">${scoreData ? `${scoreData.unit2Marks}/7` : 'Pending'}</span>
          </div>
          <div class="breakdown-row">
            <span>Unit 3: Be a Data Expert (6 Marks):</span>
            <span style="color: var(--duo-purple-dark);">${scoreData ? `${scoreData.unit3Marks}/6` : 'Pending'}</span>
          </div>
          <hr style="border: 0; border-top: 1px dashed #ccc; margin: 4px 0;">
          <div class="breakdown-row">
            <span>Syllabus Scope:</span>
            <span>Cambridge Primary Computing Units 1, 2, 3</span>
          </div>
          <div class="breakdown-row">
            <span>Exam Date:</span>
            <span>${scoreData ? scoreData.date : '27th October 2026 (Tuesday)'}</span>
          </div>
          <div class="breakdown-row">
            <span>Performance Grade:</span>
            <strong style="color: var(--sky-blue-dark);">${gradeText}</strong>
          </div>
        </div>

        <button class="btn-duo btn-blue" id="re-take-exam-btn">
          🚀 TAKE COMPUTING MOCK EXAM (20 Marks)
        </button>
      </div>
    `;

    container.querySelector('#re-take-exam-btn').addEventListener('click', () => {
      soundEngine.playTap();
      startPractice('c_exam', 'all', true);
    });
  } else {
    // Hindi report card
    const scoreData = state.hindiLastExamScore;
    let gradeText = 'Take Exam';
    if (scoreData) {
      if (scoreData.marks >= 25) gradeText = 'A+ (Outstanding)';
      else if (scoreData.marks >= 18) gradeText = 'A (Very Good)';
      else gradeText = 'B (Needs Practice)';
    }

    container.innerHTML = `
      <div class="report-card-modal">
        <div class="report-header-badge">Universal Wisdom School • Grade 2</div>
        <h2 style="font-size: 22px; font-weight: 800;">Hindi SA-1 Report Card</h2>
        <div class="marks-circle" style="background: ${scoreData ? 'var(--primary-green)' : 'var(--duo-gray-dark)'}">
          <span class="marks-score">${scoreData ? scoreData.marks : '--'}</span>
          <span class="marks-total">Marks out of 30</span>
        </div>

        <div class="report-breakdown">
          <div class="breakdown-row">
            <span>1. Theory (थ्योरी - 20 Marks):</span>
            <span style="color: var(--primary-green-dark);">${scoreData ? `${scoreData.theoryMarks}/20` : 'Pending'}</span>
          </div>
          <div class="breakdown-row">
            <span>2. Listening (सुनना - 5 Marks):</span>
            <span style="color: var(--sky-blue-dark);">${scoreData ? `${scoreData.listeningMarks}/5` : 'Pending'}</span>
          </div>
          <div class="breakdown-row">
            <span>3. Speaking (बोलना - 5 Marks):</span>
            <span style="color: var(--duo-orange-dark);">${scoreData ? `${scoreData.speakingMarks}/5` : 'Pending'}</span>
          </div>
          <hr style="border: 0; border-top: 1px dashed #ccc; margin: 4px 0;">
          <div class="breakdown-row">
            <span>Syllabus Scope:</span>
            <span>क से श (बाल पतवार २)</span>
          </div>
          <div class="breakdown-row">
            <span>Exam Date:</span>
            <span>${scoreData ? scoreData.date : '28th October 2026 (Wednesday)'}</span>
          </div>
          <div class="breakdown-row">
            <span>Performance Grade:</span>
            <strong style="color: var(--primary-green-dark);">${gradeText}</strong>
          </div>
        </div>

        <button class="btn-duo btn-green" id="re-take-exam-btn">
          🚀 TAKE HINDI MOCK EXAM (30 Marks)
        </button>
      </div>
    `;

    container.querySelector('#re-take-exam-btn').addEventListener('click', () => {
      soundEngine.playTap();
      startPractice('exam', 'all', true);
    });
  }
}

// ================= Lightweight Canvas Confetti =================
function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;

  const particles = [];
  const colors = ['#58cc02', '#1cb0f6', '#ff9600', '#ff4b4b', '#ffd900', '#ce82ff'];

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      r: Math.random() * 6 + 3,
      dx: (Math.random() - 0.5) * 12,
      dy: (Math.random() - 0.7) * 14,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1
    });
  }

  let animationFrame;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      p.dy += 0.35;
      p.alpha -= 0.015;

      if (p.alpha > 0) {
        alive = true;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }

  animate();
}
