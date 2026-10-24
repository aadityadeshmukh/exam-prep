// ========================================================
// DUOLINGO HINDI GRADE 2 PREP APP CONTROLLER
// Universal Wisdom School - Summative Assessment 1
// Rigorous Assessment: No Answer Leaks Before Check
// ========================================================

class AppState {
  constructor() {
    this.hearts = 5;
    this.maxHearts = 5;
    this.streak = 1;
    this.xp = 0;
    this.completedLessons = {};
    this.lastExamScore = null;
    this.loadState();
  }

  loadState() {
    try {
      const saved = localStorage.getItem('hindi_duo_state');
      if (saved) {
        const data = JSON.parse(saved);
        this.hearts = data.hearts ?? 5;
        this.streak = data.streak ?? 1;
        this.xp = data.xp ?? 0;
        this.completedLessons = data.completedLessons ?? {};
        this.lastExamScore = data.lastExamScore ?? null;
      }
    } catch (e) {
      console.warn('Storage not accessible', e);
    }
  }

  saveState() {
    try {
      localStorage.setItem('hindi_duo_state', JSON.stringify({
        hearts: this.hearts,
        streak: this.streak,
        xp: this.xp,
        completedLessons: this.completedLessons,
        lastExamScore: this.lastExamScore
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
}

const state = new AppState();

// ================= Game Session Manager =================
class GameSession {
  constructor(mode, filter = 'all', isExam = false) {
    this.mode = mode;
    this.filter = filter;
    this.isExam = isExam;
    this.questions = [];
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
    if (this.isExam) {
      // 12 Questions covering all SA-1 Syllabus Areas (20M Theory + 5M Listening + 5M Speaking)
      // 1. Picture Identification (3 Qs - Theory)
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

      // 2. Missing Letter Train (3 Qs - Theory)
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

      // 3. Swar vs Vyanjan Sorting (2 Qs - Theory)
      const swarSample = getRandomItem(HINDI_DATA.swarList);
      const vyanjanSample = getRandomItem(HINDI_DATA.vyanjanList);
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

      // 4. Listening Dictation (2 Qs - Listening 5M)
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

      // 5. Speaking Recitation (2 Qs - Speaking 5M)
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
      // Individual Mode Practice (5 Questions)
      for (let i = 0; i < 5; i++) {
        if (this.mode === 'picture') {
          let pool = HINDI_DATA.textbookItems;
          if (this.filter === 'swar') pool = pool.filter(p => p.category === 'swar');
          if (this.filter === 'k_ch') pool = pool.filter(p => ['क','ख','ग','घ','ङ','च','छ','ज','झ','ञ'].includes(p.letter));
          if (this.filter === 't_ta') pool = pool.filter(p => ['ट','ठ','ड','ढ','ण','त','थ','द','ध','न'].includes(p.letter));
          if (this.filter === 'p_sh') pool = pool.filter(p => ['प','फ','ब','भ','म','य','र','ल','व','श'].includes(p.letter));
          if (!pool.length) pool = HINDI_DATA.textbookItems;

          const item = getRandomItem(pool);
          this.questions.push({
            type: 'picture',
            section: 'theory',
            sectionLabel: 'Picture Identification',
            item: item,
            answer: item.letter,
            options: this.generateOptions(item.letter)
          });
        } else if (this.mode === 'train') {
          const seq = getRandomItem(HINDI_DATA.trainSequences);
          this.questions.push({
            type: 'train',
            section: 'theory',
            sectionLabel: 'Letter Sequence',
            seq: seq.seq,
            answer: seq.answer,
            options: seq.options
          });
        } else if (this.mode === 'sort') {
          const isSwar = Math.random() > 0.5;
          const letter = isSwar ? getRandomItem(HINDI_DATA.swarList) : getRandomItem(HINDI_DATA.vyanjanList);
          this.questions.push({
            type: 'sort',
            section: 'theory',
            sectionLabel: 'Vowel vs Consonant',
            letter: letter,
            answer: isSwar ? 'swar' : 'vyanjan'
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
          const l = getRandomItem(HINDI_DATA.listeningQuestions);
          this.questions.push({
            type: 'listening',
            section: 'listening',
            sectionLabel: 'Listening Lab',
            ...l,
            answer: l.targetLetter
          });
        } else if (this.mode === 'speaking') {
          const s = getRandomItem(HINDI_DATA.speakingCards);
          this.questions.push({
            type: 'speaking',
            section: 'speaking',
            sectionLabel: 'Speaking Studio',
            ...s,
            answer: s.word
          });
        }
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
  renderTopBar();
  renderPath();
  setupNavigation();
});

function initUI() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const isMuted = soundEngine.toggleMute();
      soundBtn.querySelector('.sound-label').textContent = isMuted ? 'Mute' : 'Sound';
      soundBtn.style.opacity = isMuted ? '0.5' : '1';
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
      }
    });
  });
}

// ================= Duolingo Path Map Renderer =================
function renderPath() {
  const container = document.getElementById('path-nodes-container');
  if (!container) return;
  container.innerHTML = '';

  HINDI_DATA.adventureUnits.forEach((unit) => {
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
        startPractice(lesson.type, lesson.filter, lesson.type === 'exam', lesson.id);
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
  if (q.type === 'picture') {
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

// 1. Picture Mode Renderer (Does NOT leak word or poem before checking!)
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
    <!-- Hidden educational reveal container: Only shows AFTER child checks answer! -->
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

// 2. Train Mode Renderer (Missing Letter)
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

// 3. Basket Sorter Mode
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

// 4. Match Madness Mode (Shows picture + English name only - NO Hindi word leak!)
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
    if (activeLetter && activeItem) {
      if (activeLetter === activeItem) {
        soundEngine.playMatchPop();
        solvedCount++;

        const lEl = lettersCol.querySelector(`[data-letter="${activeLetter}"]`);
        const iEl = itemsCol.querySelector(`[data-letter="${activeItem}"]`);
        if (lEl) lEl.classList.add('matched');
        if (iEl) iEl.classList.add('matched');

        activeLetter = null;
        activeItem = null;

        if (solvedCount === q.pairs.length) {
          currentSession.selectedOption = 'all_matched';
          q.answer = 'all_matched';
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
        }, 300);
      }
    }
  }

  matchCols.appendChild(lettersCol);
  matchCols.appendChild(itemsCol);

  container.appendChild(heading);
  container.appendChild(matchCols);
}

// 5. Listening Mode Renderer (Does NOT leak word in text before check!)
function renderListeningQuestion(q, container, actionBtn) {
  const centerBox = document.createElement('div');
  centerBox.className = 'listening-center';

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

  // Play audio twice like school dictation without revealing written word!
  setTimeout(() => {
    soundEngine.speakHindi(q.spokenPrompt);
  }, 400);
}

// 6. Speaking Mode Renderer (Recitation & mic practice)
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

    // Reveal hidden educational content on the card after checking
    const revealSection = document.getElementById('picture-reveal-section');
    if (revealSection) {
      revealSection.style.display = 'block';
      // Speak the word now to reinforce pronunciation
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
          <small>+10 XP gained • बहुत अच्छे!</small>
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
          <div style="font-weight: 800; font-size: 17px;">The correct letter is: "${q.answer}"</div>
          <small>See textbook word above</small>
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

  if (session.lessonId) {
    state.completedLessons[session.lessonId] = stars;
    state.saveState();
    renderPath();
  }

  if (session.isExam) {
    const marks = Math.round((session.score / session.questions.length) * 30);
    state.lastExamScore = {
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

  const victoryCard = document.createElement('div');
  victoryCard.className = 'report-card-modal';
  victoryCard.innerHTML = `
    <div class="report-header-badge">${session.isExam ? 'SA-1 Summative Assessment Complete' : 'Practice Lesson Completed!'}</div>
    <div style="font-size: 54px;">🏆</div>
    <h2 style="font-weight: 800; font-size: 24px; color: var(--text-primary);">
      ${pct >= 80 ? 'Outstanding Work!' : 'Good Effort! Keep Practicing!'}
    </h2>
    <div class="marks-circle">
      <span class="marks-score">${session.isExam ? state.lastExamScore.marks : `${pct}%`}</span>
      <span class="marks-total">${session.isExam ? 'Marks out of 30' : `${session.score}/${session.questions.length} Correct`}</span>
    </div>
    <div style="font-size: 28px; margin: 4px 0;">
      ${'⭐'.repeat(stars)}
    </div>
    <p style="font-size: 14px; color: var(--text-secondary);">
      ${session.isExam ? 'Your child is well-prepared for the Hindi SA-1 exam!' : 'You have mastered this lesson. Great job!'}
    </p>
  `;

  contentArea.appendChild(victoryCard);

  const actionBtn = document.getElementById('check-answer-btn');
  actionBtn.disabled = false;
  actionBtn.textContent = 'BACK TO HOME';
  actionBtn.className = 'btn-duo btn-blue';
}

// ================= Report Card View Renderer =================
function renderReportCard() {
  const container = document.getElementById('report-view-container');
  if (!container) return;

  const scoreData = state.lastExamScore;

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
          <span>Performance Grade:</span>
          <strong style="color: var(--primary-green-dark);">${scoreData ? (scoreData.marks >= 24 ? 'A+ (Outstanding)' : scoreData.marks >= 18 ? 'A (Very Good)' : 'B (Needs Practice)') : 'Take Exam'}</strong>
        </div>
      </div>

      <button class="btn-duo btn-green" id="re-take-exam-btn">
        🚀 TAKE SA-1 MOCK EXAM
      </button>
    </div>
  `;

  container.querySelector('#re-take-exam-btn').addEventListener('click', () => {
    soundEngine.playTap();
    startPractice('exam', 'all', true);
  });
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
