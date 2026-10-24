// ========================================================
// HINDI SA-1 SYLLABUS & TEXTBOOK (बाल पतवार २) DATA ENGINE
// Universal Wisdom School - Grade 2 (Summative Assessment 1)
// Rigorous Assessment Design: Zero Answer Leaks Before Check
// ========================================================

const HINDI_DATA = {
  // 1. स्वर (Vowels - Complete set)
  swarList: ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ', 'अं', 'अः'],

  // 2. व्यंजन (Strictly क से श तक per Syllabus)
  vyanjanList: [
    // क वर्ग
    'क', 'ख', 'ग', 'घ', 'ङ',
    // च वर्ग
    'च', 'छ', 'ज', 'झ', 'ञ',
    // ट वर्ग
    'ट', 'ठ', 'ड', 'ढ', 'ण',
    // त वर्ग
    'त', 'थ', 'द', 'ध', 'न',
    // प वर्ग
    'प', 'फ', 'ब', 'भ', 'म',
    // अंतस्थ / ऊष्म (till श)
    'य', 'र', 'ल', 'व', 'श'
  ],

  // Extra joint & special consonants featured in textbook
  extraTextbookLetters: ['ड़', 'ढ़', 'क्ष', 'त्र', 'ज्ञ', 'श्र', 'स'],

  // 3. Textbook Illustrated Vocabulary (Directly from बाल पतवार २)
  textbookItems: [
    // --- ख ---
    {
      id: 'kh_1',
      letter: 'ख',
      word: 'खरगोश',
      englishName: 'Rabbit',
      englishWord: 'Khargosh (Rabbit)',
      iconKey: 'rabbit',
      emoji: '🐇',
      rhyme: "'ख' से है खरगोश, है उसमें बहुत जोश।",
      rhymeEn: "Kh for Rabbit, full of energy and speed.",
      category: 'vyanjan',
      isFromTextbook: true
    },
    {
      id: 'kh_2',
      letter: 'ख',
      word: 'खाना',
      englishName: 'Food Thali',
      englishWord: 'Khaana (Food Plate)',
      iconKey: 'plate',
      emoji: '🍲',
      rhyme: "'ख' से खाना, स्वादिष्ट और पौष्टिक।",
      rhymeEn: "Kh for Food, tasty and healthy.",
      category: 'vyanjan',
      isFromTextbook: true
    },
    {
      id: 'kh_3',
      letter: 'ख',
      word: 'खिड़की',
      englishName: 'Window',
      englishWord: 'Khidki (Window)',
      iconKey: 'window',
      emoji: '🪟',
      rhyme: "'ख' से खिड़की, घर में ताज़ी हवा लाए।",
      rhymeEn: "Kh for Window, bringing fresh morning air.",
      category: 'vyanjan',
      isFromTextbook: true
    },

    // --- छ ---
    {
      id: 'chh_1',
      letter: 'छ',
      word: 'छाता',
      englishName: 'Umbrella',
      englishWord: 'Chhaata (Umbrella)',
      iconKey: 'umbrella',
      emoji: '☂️',
      rhyme: "'छ' से है छाता, बारिश से है जो बचाता।",
      rhymeEn: "Chh for Umbrella, protects from the heavy rain.",
      category: 'vyanjan',
      isFromTextbook: true
    },
    {
      id: 'chh_2',
      letter: 'छ',
      word: 'छड़ी',
      englishName: 'Walking Stick',
      englishWord: 'Chhadi (Walking Stick)',
      iconKey: 'stick',
      emoji: '🦯',
      rhyme: "'छ' से छड़ी, दादाजी का सहारा।",
      rhymeEn: "Chh for Walking Cane, Grandpa's strong support.",
      category: 'vyanjan',
      isFromTextbook: true
    },

    // --- ङ ---
    {
      id: 'nga_1',
      letter: 'ङ',
      word: 'कंघी',
      englishName: 'Comb',
      englishWord: 'Kanghi (Comb)',
      iconKey: 'comb',
      emoji: '🪮',
      rhyme: "'ङ' ध्वनि कंघी में समाई, बालों को सुंदर बनाई।",
      rhymeEn: "Nga sound in Comb, styling hair nicely.",
      category: 'vyanjan',
      isFromTextbook: true
    },
    {
      id: 'nga_2',
      letter: 'ङ',
      word: 'कंगन',
      englishName: 'Bangles',
      englishWord: 'Kangan (Bangles)',
      iconKey: 'bangles',
      emoji: '⭕',
      rhyme: "'ङ' ध्वनि कंगन में खनके, हाथों की शोभा चमके।",
      rhymeEn: "Nga sound in Bangles, sparkling on the wrists.",
      category: 'vyanjan',
      isFromTextbook: true
    },

    // --- ड ---
    {
      id: 'd_1',
      letter: 'ड',
      word: 'डंडा',
      englishName: 'Wooden Stick',
      englishWord: 'Danda (Wooden Stick)',
      iconKey: 'stick',
      emoji: '🪵',
      rhyme: "'ड' से है डंडा, लकड़ी का मजबूत।",
      rhymeEn: "Da for Stick, strong and solid wood.",
      category: 'vyanjan',
      isFromTextbook: true
    },

    // --- ढ ---
    {
      id: 'dh_1',
      letter: 'ढ',
      word: 'ढोल',
      englishName: 'Drum',
      englishWord: 'Dhol (Drum)',
      iconKey: 'drum',
      emoji: '🥁',
      rhyme: "'ढ' से है ढोल, ढम-ढम बाजे बोल।",
      rhymeEn: "Dha for Drum, beating loud with rhythm.",
      category: 'vyanjan',
      isFromTextbook: true
    },
    {
      id: 'dh_2',
      letter: 'ढ',
      word: 'ढाल',
      englishName: 'Shield',
      englishWord: 'Dhaal (Shield)',
      iconKey: 'shield',
      emoji: '🛡️',
      rhyme: "'ढ' से ढाल, रक्षा करे हर हाल।",
      rhymeEn: "Dha for Shield, guarding in every battle.",
      category: 'vyanjan',
      isFromTextbook: true
    },

    // --- ण ---
    {
      id: 'na_1',
      letter: 'ण',
      word: 'बाण',
      englishName: 'Arrow',
      englishWord: 'Baan (Arrow)',
      iconKey: 'arrow',
      emoji: '🏹',
      rhyme: "'ण' से है बाण, होते हैं जो नुकीले।",
      rhymeEn: "Na sound in Arrow, sharp and aimed true.",
      category: 'vyanjan',
      isFromTextbook: true
    },

    // --- थ ---
    {
      id: 'th_1',
      letter: 'थ',
      word: 'थरमस',
      englishName: 'Thermos Flask',
      englishWord: 'Thermos (Flask)',
      iconKey: 'thermos',
      emoji: '🍶',
      rhyme: "'थ' से है थरमस, होता नहीं है टस से मस।",
      rhymeEn: "Tha for Thermos, keeping water warm or cool.",
      category: 'vyanjan',
      isFromTextbook: true
    },
    {
      id: 'th_2',
      letter: 'थ',
      word: 'थाली',
      englishName: 'Dinner Plate',
      englishWord: 'Thaali (Dinner Plate)',
      iconKey: 'plate',
      emoji: '🍽️',
      rhyme: "'थ' से थाली, परोसो इसमें रोटी-सब्ज़ी।",
      rhymeEn: "Tha for Plate, serving tasty food.",
      category: 'vyanjan',
      isFromTextbook: true
    },

    // --- द ---
    {
      id: 'da_1',
      letter: 'द',
      word: 'दवात',
      englishName: 'Inkpot & Quill',
      englishWord: 'Dawaat (Inkpot)',
      iconKey: 'inkpot',
      emoji: '✒️',
      rhyme: "'द' से है दवात, जो है सबसे खास।",
      rhymeEn: "Da for Inkpot, full of deep blue ink.",
      category: 'vyanjan',
      isFromTextbook: true
    },

    // --- ब ---
    {
      id: 'b_1',
      letter: 'ब',
      word: 'बादल',
      englishName: 'Rain Cloud',
      englishWord: 'Baadal (Rain Cloud)',
      iconKey: 'cloud',
      emoji: '☁️',
      rhyme: "'ब' से है बादल, बड़ा है जिनका दल।",
      rhymeEn: "Ba for Cloud, floating across the blue sky.",
      category: 'vyanjan',
      isFromTextbook: true
    },
    {
      id: 'b_2',
      letter: 'ब',
      word: 'बाल्टी',
      englishName: 'Water Bucket',
      englishWord: 'Baalti (Bucket)',
      iconKey: 'bucket',
      emoji: '🪣',
      rhyme: "'ब' से बाल्टी, पानी भरो नहाने को।",
      rhymeEn: "Ba for Bucket, filled with clean fresh water.",
      category: 'vyanjan',
      isFromTextbook: true
    },
    {
      id: 'b_3',
      letter: 'ब',
      word: 'बाँसुरी',
      englishName: 'Bamboo Flute',
      englishWord: 'Bansuri (Flute)',
      iconKey: 'flute',
      emoji: '🪈',
      rhyme: "'ब' से बाँसुरी, मधुर तान सुनाए।",
      rhymeEn: "Ba for Flute, playing sweet melodies.",
      category: 'vyanjan',
      isFromTextbook: true
    },

    // --- फ ---
    {
      id: 'ph_1',
      letter: 'फ',
      word: 'फूल',
      englishName: 'Flower',
      englishWord: 'Phool (Flower)',
      iconKey: 'flower',
      emoji: '🌸',
      rhyme: "'फ' से फूल, बगिया की खुशबू।",
      rhymeEn: "Pha for Flower, blooming bright in the garden.",
      category: 'vyanjan',
      isFromTextbook: true
    },

    // --- य ---
    {
      id: 'y_1',
      letter: 'य',
      word: 'यज्ञ',
      englishName: 'Sacred Fire',
      englishWord: 'Yajna (Sacred Fire)',
      iconKey: 'yajna',
      emoji: '🔥',
      rhyme: "'य' से है यज्ञ, खत्म करो झूठ को।",
      rhymeEn: "Ya for Sacred Fire, spreading warmth and purity.",
      category: 'vyanjan',
      isFromTextbook: true
    },

    // --- स ---
    {
      id: 's_1',
      letter: 'स',
      word: 'सूरज',
      englishName: 'Sun',
      englishWord: 'Sooraj (Sun)',
      iconKey: 'sun',
      emoji: '☀️',
      rhyme: "'स' से है सूरज, चमकता है जो हर रोज।",
      rhymeEn: "Sa for Sun, shining bright every morning.",
      category: 'vyanjan',
      isFromTextbook: true
    },
    {
      id: 's_2',
      letter: 'स',
      word: 'संतरा',
      englishName: 'Orange',
      englishWord: 'Santara (Orange)',
      iconKey: 'orange',
      emoji: '🍊',
      rhyme: "'स' से संतरा, खट्टा-मीठा फल।",
      rhymeEn: "Sa for Orange, sweet and juicy citrus fruit.",
      category: 'vyanjan',
      isFromTextbook: true
    },

    // --- संयुक्त वर्ण ---
    {
      id: 'ksh_1',
      letter: 'क्ष',
      word: 'क्षत्रिय',
      englishName: 'Warrior',
      englishWord: 'Kshatriya (Warrior)',
      iconKey: 'warrior',
      emoji: '⚔️',
      rhyme: "'क्ष' से है क्षत्रिय, चलाते हैं जो अस्त्र-शस्त्र।",
      rhymeEn: "Ksha for Warrior, brave protector of all.",
      category: 'vyanjan',
      isFromTextbook: true
    },
    {
      id: 'tra_1',
      letter: 'त्र',
      word: 'त्रिशूल',
      englishName: 'Trident',
      englishWord: 'Trishul (Trident)',
      iconKey: 'trishul',
      emoji: '🔱',
      rhyme: "'त्र' से है त्रिशूल, बात करो काम की।",
      rhymeEn: "Tra for Trident, three sacred prongs of power.",
      category: 'vyanjan',
      isFromTextbook: true
    },
    {
      id: 'tra_2',
      letter: 'त्र',
      word: 'त्रिकोण',
      englishName: 'Triangle',
      englishWord: 'Trikon (Triangle)',
      iconKey: 'triangle',
      emoji: '📐',
      rhyme: "'त्र' से त्रिकोण, तीन कोनों वाली आकृति।",
      rhymeEn: "Tra for Triangle, geometric shape with 3 sides.",
      category: 'vyanjan',
      isFromTextbook: true
    },
    {
      id: 'gya_1',
      letter: 'ज्ञ',
      word: 'ज्ञानी',
      englishName: 'Wise Scholar',
      englishWord: 'Gyaani (Wise Scholar)',
      iconKey: 'sage',
      emoji: '🧙‍♂️',
      rhyme: "'ज्ञ' से है ज्ञानी, नहीं है कोई उनका सानी।",
      rhymeEn: "Gya for Wise Sage, teacher of great wisdom.",
      category: 'vyanjan',
      isFromTextbook: true
    },

    // --- स्वर Items ---
    {
      id: 'swar_a',
      letter: 'अ',
      word: 'अनार',
      englishName: 'Pomegranate',
      englishWord: 'Anaar (Pomegranate)',
      iconKey: 'pomegranate',
      emoji: '🍎',
      rhyme: "'अ' से अनार, लाल-लाल दानों वाला।",
      rhymeEn: "A for Pomegranate, filled with ruby seeds.",
      category: 'swar',
      isFromTextbook: true
    },
    {
      id: 'swar_aa',
      letter: 'आ',
      word: 'आम',
      englishName: 'Mango',
      englishWord: 'Aam (Mango)',
      iconKey: 'mango',
      emoji: '🥭',
      rhyme: "'आ' से आम, फलों का प्यारा राजा।",
      rhymeEn: "Aa for Mango, the sweet king of fruits.",
      category: 'swar',
      isFromTextbook: true
    },
    {
      id: 'swar_u',
      letter: 'उ',
      word: 'उल्लू',
      englishName: 'Owl',
      englishWord: 'Ullu (Owl)',
      iconKey: 'owl',
      emoji: '🦉',
      rhyme: "'उ' से उल्लू, रात को जागे, दिन में सोए।",
      rhymeEn: "U for Owl, awake at night with watchful eyes.",
      category: 'swar',
      isFromTextbook: true
    },
    {
      id: 'swar_am',
      letter: 'अं',
      word: 'अंगूर',
      englishName: 'Grapes',
      englishWord: 'Angoor (Grapes)',
      iconKey: 'grapes',
      emoji: '🍇',
      rhyme: "'अं' से अंगूर, खट्टे-मीठे गुच्छेदार।",
      rhymeEn: "Am for Grapes, juicy clusters on the vine.",
      category: 'swar',
      isFromTextbook: true
    },
    {
      id: 'k_1',
      letter: 'क',
      word: 'कमल',
      englishName: 'Lotus',
      englishWord: 'Kamal (Lotus)',
      iconKey: 'lotus',
      emoji: '🪷',
      rhyme: "'क' से कमल, भारत का राष्ट्रीय फूल।",
      rhymeEn: "Ka for Lotus, the beautiful national flower.",
      category: 'vyanjan',
      isFromTextbook: true
    }
  ],

  // 4. Missing Letter Sequences (क से श तक - Syllabus sequence)
  trainSequences: [
    { seq: ['क', 'ख', null, 'घ', 'ङ'], answer: 'ग', options: ['ग', 'च', 'त', 'म'] },
    { seq: ['च', null, 'ज', 'झ', 'ञ'], answer: 'छ', options: ['छ', 'ट', 'ख', 'थ'] },
    { seq: ['ट', 'ठ', 'ड', null, 'ण'], answer: 'ढ', options: ['ढ', 'द', 'ब', 'र'] },
    { seq: ['त', null, 'द', 'ध', 'न'], answer: 'थ', options: ['थ', 'फ', 'ग', 'य'] },
    { seq: ['प', 'फ', null, 'भ', 'म'], answer: 'ब', options: ['ब', 'व', 'ल', 'स'] },
    { seq: ['य', 'र', 'ल', 'व', null], answer: 'श', options: ['श', 'ष', 'ह', 'क'] },
    { seq: [null, 'ख', 'ग', 'घ', 'ङ'], answer: 'क', options: ['क', 'च', 'त', 'प'] },
    { seq: ['च', 'छ', null, 'झ', 'ञ'], answer: 'ज', options: ['ज', 'ड', 'ब', 'न'] },
    { seq: ['ट', null, 'ड', 'ढ', 'ण'], answer: 'ठ', options: ['ठ', 'थ', 'ध', 'फ'] },
    { seq: ['त', 'थ', null, 'ध', 'न'], answer: 'द', options: ['द', 'ढ', 'ड', 'ट'] },
    { seq: ['प', null, 'ब', 'भ', 'म'], answer: 'फ', options: ['फ', 'क', 'ख', 'छ'] },
    { seq: ['अ', 'आ', null, 'ई', 'उ'], answer: 'इ', options: ['इ', 'ऋ', 'ए', 'ओ'] },
    { seq: ['उ', 'ऊ', null, 'ए', 'ऐ'], answer: 'ऋ', options: ['ऋ', 'औ', 'अं', 'इ'] }
  ],

  // 5. Listening Exam Phrases (Modeled after textbook Page 66: सुनो - समझो)
  // Audio plays the word twice without leaking the written word on screen
  listeningQuestions: [
    {
      audioWord: 'बाल्टी',
      spokenPrompt: 'बाल्टी ... बाल्टी',
      targetLetter: 'ब',
      word: 'बाल्टी',
      englishWord: 'Baalti (Bucket)',
      iconKey: 'bucket',
      emoji: '🪣',
      options: ['ब', 'थ', 'ढ', 'प']
    },
    {
      audioWord: 'ढोल',
      spokenPrompt: 'ढोल ... ढोल',
      targetLetter: 'ढ',
      word: 'ढोल',
      englishWord: 'Dhol (Drum)',
      iconKey: 'drum',
      emoji: '🥁',
      options: ['ढ', 'ड', 'ठ', 'द']
    },
    {
      audioWord: 'थरमस',
      spokenPrompt: 'थरमस ... थरमस',
      targetLetter: 'थ',
      word: 'थरमस',
      englishWord: 'Thermos (Flask)',
      iconKey: 'thermos',
      emoji: '🍶',
      options: ['थ', 'त', 'ध', 'फ']
    },
    {
      audioWord: 'खरगोश',
      spokenPrompt: 'खरगोश ... खरगोश',
      targetLetter: 'ख',
      word: 'खरगोश',
      englishWord: 'Khargosh (Rabbit)',
      iconKey: 'rabbit',
      emoji: '🐇',
      options: ['ख', 'क', 'ग', 'छ']
    },
    {
      audioWord: 'छाता',
      spokenPrompt: 'छाता ... छाता',
      targetLetter: 'छ',
      word: 'छाता',
      englishWord: 'Chhaata (Umbrella)',
      iconKey: 'umbrella',
      emoji: '☂️',
      options: ['छ', 'च', 'ज', 'ट']
    },
    {
      audioWord: 'दवात',
      spokenPrompt: 'दवात ... दवात',
      targetLetter: 'द',
      word: 'दवात',
      englishWord: 'Dawaat (Inkpot)',
      iconKey: 'inkpot',
      emoji: '✒️',
      options: ['द', 'ढ', 'ड', 'त']
    },
    {
      audioWord: 'सूरज',
      spokenPrompt: 'सूरज ... सूरज',
      targetLetter: 'स',
      word: 'सूरज',
      englishWord: 'Sooraj (Sun)',
      iconKey: 'sun',
      emoji: '☀️',
      options: ['स', 'श', 'य', 'र']
    }
  ],

  // 6. Speaking Recitation Cards (5 Marks Prep)
  speakingCards: [
    {
      letter: 'ख',
      word: 'खरगोश',
      englishWord: 'Khargosh (Rabbit)',
      iconKey: 'rabbit',
      emoji: '🐇',
      rhyme: "'ख' से है खरगोश, है उसमें बहुत जोश।",
      rhymeEn: "Kh for Rabbit, full of energy and speed.",
      sayPrompt: 'कहो: खरगोश'
    },
    {
      letter: 'छ',
      word: 'छाता',
      englishWord: 'Chhaata (Umbrella)',
      iconKey: 'umbrella',
      emoji: '☂️',
      rhyme: "'छ' से है छाता, बारिश से है जो बचाता।",
      rhymeEn: "Chh for Umbrella, protects from the heavy rain.",
      sayPrompt: 'कहो: छाता'
    },
    {
      letter: 'थ',
      word: 'थरमस',
      englishWord: 'Thermos (Flask)',
      iconKey: 'thermos',
      emoji: '🍶',
      rhyme: "'थ' से है थरमस, होता नहीं है टस से मस।",
      rhymeEn: "Tha for Thermos, keeping water warm or cool.",
      sayPrompt: 'कहो: थरमस'
    },
    {
      letter: 'ब',
      word: 'बादल',
      englishWord: 'Baadal (Rain Cloud)',
      iconKey: 'cloud',
      emoji: '☁️',
      rhyme: "'ब' से है बादल, बड़ा है जिनका दल।",
      rhymeEn: "Ba for Cloud, floating across the blue sky.",
      sayPrompt: 'कहो: बादल'
    },
    {
      letter: 'ढ',
      word: 'ढोल',
      englishWord: 'Dhol (Drum)',
      iconKey: 'drum',
      emoji: '🥁',
      rhyme: "'ढ' से है ढोल, ढम-ढम बाजे बोल।",
      rhymeEn: "Dha for Drum, beating loud with rhythm.",
      sayPrompt: 'कहो: ढोल'
    },
    {
      letter: 'स',
      word: 'सूरज',
      englishWord: 'Sooraj (Sun)',
      iconKey: 'sun',
      emoji: '☀️',
      rhyme: "'स' से है सूरज, चमकता है जो हर रोज।",
      rhymeEn: "Sa for Sun, shining bright every morning.",
      sayPrompt: 'कहो: सूरज'
    }
  ],

  // 7. Duolingo Adventure Path Units with DISTINCT lesson icons
  adventureUnits: [
    {
      id: 'unit_1',
      title: 'Unit 1: The World of Vowels (स्वर)',
      desc: 'Learn vowels अ to अः with pictures and matching',
      color: '#58cc02',
      lessons: [
        { id: 'u1_l1', title: 'Vowel Pictures', subtitle: 'स्वर दर्शन', icon: '🍎', type: 'picture', filter: 'swar' },
        { id: 'u1_l2', title: 'Pair Match', subtitle: 'स्वर मिलान', icon: '🧩', type: 'match', filter: 'swar' },
        { id: 'u1_l3', title: 'Missing Vowels', subtitle: 'स्वर रेल', icon: '🚂', type: 'train', filter: 'swar' }
      ]
    },
    {
      id: 'unit_2',
      title: 'Unit 2: Ka & Cha Groups (क व च वर्ग)',
      desc: 'Consonants क to ङ and च to ञ from textbook',
      color: '#1cb0f6',
      lessons: [
        { id: 'u2_l1', title: 'Rabbit & Umbrella', subtitle: 'ख व छ पहचान', icon: '🐇', type: 'picture', filter: 'k_ch' },
        { id: 'u2_l2', title: 'Train Sequence', subtitle: 'क से ञ रेल', icon: '🚂', type: 'train', filter: 'k_ch' },
        { id: 'u2_l3', title: 'Audio Lab', subtitle: 'सुनो और चुनो', icon: '🎧', type: 'listening', filter: 'k_ch' }
      ]
    },
    {
      id: 'unit_3',
      title: 'Unit 3: Ta & Tha Groups (ट व त वर्ग)',
      desc: 'Consonants ट to ण and त to न',
      color: '#ff9600',
      lessons: [
        { id: 'u3_l1', title: 'Drum & Thermos', subtitle: 'ढोल व थरमस', icon: '🥁', type: 'picture', filter: 't_ta' },
        { id: 'u3_l2', title: 'Match Pairs', subtitle: 'जोड़ी बनाओ', icon: '🧩', type: 'match', filter: 't_ta' },
        { id: 'u3_l3', title: 'Sort Baskets', subtitle: 'स्वर vs व्यंजन', icon: '🧺', type: 'sort', filter: 'all' }
      ]
    },
    {
      id: 'unit_4',
      title: 'Unit 4: Pa Group to Sha (प से श तक)',
      desc: 'Consonants प to म and य, र, ल, व, श',
      color: '#ce82ff',
      lessons: [
        { id: 'u4_l1', title: 'Cloud & Bucket', subtitle: 'बादल व बाल्टी', icon: '🪣', type: 'picture', filter: 'p_sh' },
        { id: 'u4_l2', title: 'Speaking Studio', subtitle: 'वाणी व कविता', icon: '🎙️', type: 'speaking', filter: 'p_sh' },
        { id: 'u4_l3', title: 'Vowel Sorter', subtitle: 'सुपर सॉर्टिंग', icon: '⚖️', type: 'sort', filter: 'all' }
      ]
    },
    {
      id: 'unit_5',
      title: 'Unit 5: SA-1 Final Mock Exam',
      desc: 'Complete 30-Marks Summative Assessment',
      color: '#ff4b4b',
      lessons: [
        { id: 'u5_l1', title: 'Full Mock Test', subtitle: '३० अंक परीक्षा', icon: '🎓', type: 'exam', filter: 'exam' }
      ]
    }
  ]
};

// Helper: Get random item from list
function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Helper: Shuffle an array (Fisher-Yates)
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
