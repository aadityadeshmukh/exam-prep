// ========================================================
// ENGLISH GRADE 2 DATA REPOSITORY
// Universal Wisdom School - Summative Assessment 1 (SA-1)
// Mapped to Hodder Cambridge Primary English Stage 2
// Units 1 & 2: Story Writing with Roald Dahl & Let's Have a Party
// Total Marks: 30 Marks • Duration: 45 Minutes
// ========================================================

const ENGLISH_DATA = {
  subjectId: 'english',
  subjectTitle: 'English Language',
  syllabusInfo: 'SA-1 Exam • 30 Marks Total • 45 Minutes',

  // ================= 1. ADVENTURE PATH UNITS =================
  adventureUnits: [
    {
      id: 'unit_e1',
      title: 'Unit 1: Roald Dahl & Characters',
      desc: 'Explore characters, descriptions & adjectives',
      color: '#58cc02',
      lessons: [
        { id: 'e_u1_l1', title: 'Looking at Characters', subtitle: 'Willy Wonka & Mr Bucket', icon: '🎩', type: 'e_story', filter: 'characters' },
        { id: 'e_u1_l2', title: 'Four Character Traits', subtitle: 'Looks, actions, thoughts, feelings', icon: '🔍', type: 'e_story', filter: 'traits' },
        { id: 'e_u1_l3', title: 'Adjective Placement', subtitle: 'Before or after the noun', icon: '📝', type: 'e_grammar', filter: 'adj_placement' },
        { id: 'e_u1_l4', title: 'Character Mastery', subtitle: 'Unit 1 Checkpoint', icon: '🏆', type: 'e_story', filter: 'all' }
      ]
    },
    {
      id: 'unit_e2',
      title: 'Unit 2: Settings & Story Mountain',
      desc: 'Setting descriptions & sequencing story events',
      color: '#1cb0f6',
      lessons: [
        { id: 'e_u2_l1', title: 'What is a Setting?', subtitle: 'Place, weather & time', icon: '🏞️', type: 'e_story', filter: 'settings' },
        { id: 'e_u2_l2', title: 'Sunny vs Stormy Park', subtitle: 'Sensory setting adjectives', icon: '⛅', type: 'e_story', filter: 'setting_adjectives' },
        { id: 'e_u2_l3', title: 'The Story Mountain', subtitle: '6 stages of every story', icon: '⛰️', type: 'e_story', filter: 'story_mountain' },
        { id: 'e_u2_l4', title: 'The Enormous Crocodile', subtitle: 'Sequencing story events', icon: '🐊', type: 'e_story', filter: 'sequencing' }
      ]
    },
    {
      id: 'unit_e3',
      title: 'Unit 3: Grammar Lab & Suffixes',
      desc: 'Nouns, action verbs & adding -ed / -ing rules',
      color: '#ff9600',
      lessons: [
        { id: 'e_u3_l1', title: 'Nouns & Action Verbs', subtitle: 'Naming words vs doing words', icon: '🔤', type: 'e_grammar', filter: 'nouns_verbs' },
        { id: 'e_u3_l2', title: 'Past Tense: Adding -ed', subtitle: 'helped, smiled, hopped', icon: '⏳', type: 'e_suffix', filter: 'suffix_ed' },
        { id: 'e_u3_l3', title: 'Present: Adding -ing', subtitle: 'sitting, baking, playing', icon: '🔄', type: 'e_suffix', filter: 'suffix_ing' },
        { id: 'e_u3_l4', title: 'Grammar Champion', subtitle: 'Suffixes & verbs checkpoint', icon: '🏆', type: 'e_grammar', filter: 'all' }
      ]
    },
    {
      id: 'unit_e4',
      title: 'Unit 4: Speech Marks & Dialogue',
      desc: 'Inverted commas and expressive speech verbs',
      color: '#ce82ff',
      lessons: [
        { id: 'e_u4_l1', title: 'Using Speech Marks', subtitle: 'Inverted commas "..."', icon: '💬', type: 'e_dialogue', filter: 'speech_marks' },
        { id: 'e_u4_l2', title: 'Crocodile Dialogue', subtitle: 'What characters actually say', icon: '🗣️', type: 'e_dialogue', filter: 'croc_dialogue' },
        { id: 'e_u4_l3', title: 'Better Words for Said', subtitle: 'whispered, snorted, cried', icon: '✨', type: 'e_dialogue', filter: 'dialogue_verbs' },
        { id: 'e_u4_l4', title: 'Dialogue Pro', subtitle: 'Speech punctuation checkpoint', icon: '🏆', type: 'e_dialogue', filter: 'all' }
      ]
    },
    {
      id: 'unit_e5',
      title: 'Unit 5: Party Instructions & Compound Words',
      desc: 'Writing instructions, command verbs & compound words',
      color: '#ff4b4b',
      lessons: [
        { id: 'e_u5_l1', title: 'Party Lists & Pop-Up Card', subtitle: 'You will need & steps', icon: '✂️', type: 'e_command', filter: 'instructions' },
        { id: 'e_u5_l2', title: 'Command Verbs', subtitle: 'Bossy verbs in directions', icon: '⚡', type: 'e_command', filter: 'command_verbs' },
        { id: 'e_u5_l3', title: 'Writing an Invitation', subtitle: 'Who, where, when & RSVP', icon: '💌', type: 'e_command', filter: 'invitations' },
        { id: 'e_u5_l4', title: 'Compound Words', subtitle: 'playground, bedroom, football', icon: '🧩', type: 'e_compound', filter: 'compounds' },
        { id: 'e_u5_l5', title: 'SA-1 Grand Mock Exam', subtitle: 'Complete 30 Marks Paper', icon: '👑', type: 'e_exam', filter: 'all' }
      ]
    }
  ],

  // ================= 2. MASTER QUESTION POOL =================
  // Mapped directly to Hodder Cambridge English Stage 2 & SA-1 Syllabus
  questionPool: [
    // --- UNIT 1: ROALD DAHL & CHARACTERS ---
    {
      id: 'q_eng_1',
      unit: 1,
      unitTitle: 'Unit 1: Story Writing with Roald Dahl',
      mode: 'e_story',
      category: 'characters',
      question: 'In Charlie and the Chocolate Factory, what does Mr Willy Wonka wear on his head?',
      subtext: 'Textbook Page 21: Looking at characters',
      iconKey: 'top_hat',
      options: [
        'A black top hat',
        'A baseball cap',
        'A party cone hat',
        'A woolly winter beanie'
      ],
      answer: 'A black top hat',
      explanation: 'Roald Dahl writes: "He had a black top hat on his head and wore a tail coat of plum-coloured velvet."'
    },
    {
      id: 'q_eng_2',
      unit: 1,
      unitTitle: 'Unit 1: Story Writing with Roald Dahl',
      mode: 'e_story',
      category: 'characters',
      question: 'What extraordinary item does Mr Wonka carry in his hand?',
      subtext: 'Textbook Page 21: Character details',
      iconKey: 'top_hat',
      options: [
        'A fine gold-topped walking cane',
        'A chocolate umbrella',
        'A silver trumpet',
        'A bag of sweets'
      ],
      answer: 'A fine gold-topped walking cane',
      explanation: 'Mr Wonka carried "a fine gold-topped walking cane" in one hand!'
    },
    {
      id: 'q_eng_3',
      unit: 1,
      unitTitle: 'Unit 1: Story Writing with Roald Dahl',
      mode: 'e_story',
      category: 'traits',
      question: 'When we meet a character in a story, what are the FOUR things we usually want to know?',
      subtext: 'Textbook Page 21: Four character aspects',
      iconKey: 'top_hat',
      options: [
        'What they look like, what they do, what they think/say, and how they feel',
        'Their telephone number, home address, school name, and favourite colour',
        'How fast they run, how tall they are, what they eat for breakfast, and their shoes',
        'Only what clothes they are wearing'
      ],
      answer: 'What they look like, what they do, what they think/say, and how they feel',
      explanation: 'Good character descriptions cover: 1. Looks, 2. Actions (do), 3. Thoughts/Dialogue, 4. Feelings.'
    },
    {
      id: 'q_eng_4',
      unit: 1,
      unitTitle: 'Unit 1: Story Writing with Roald Dahl',
      mode: 'e_story',
      category: 'characters',
      question: 'What does the word "extraordinary" mean?',
      subtext: 'Textbook Page 22: Roald Dahl Glossary',
      iconKey: 'chocolate_bar',
      options: [
        'Very special or unusual',
        'Very boring and ordinary',
        'Extremely noisy',
        'Small and unimportant'
      ],
      answer: 'Very special or unusual',
      explanation: 'Glossary: extraordinary means very special and out of the ordinary.'
    },
    {
      id: 'q_eng_5',
      unit: 1,
      unitTitle: 'Unit 1: Story Writing with Roald Dahl',
      mode: 'e_story',
      category: 'characters',
      question: 'In The Enormous Crocodile, what does the Enormous Crocodile boast he wants to eat for lunch?',
      subtext: 'Textbook Page 23: What happens next?',
      iconKey: 'crocodile',
      options: [
        'A nice juicy little child',
        'Fresh river fish',
        'Chocolate cake and biscuits',
        'Green jungle leaves'
      ],
      answer: 'A nice juicy little child',
      explanation: 'The Enormous Crocodile tells the Notsobig One: "For my lunch today, I would like a nice juicy little child!"'
    },
    {
      id: 'q_eng_6',
      unit: 1,
      unitTitle: 'Unit 1: Story Writing with Roald Dahl',
      mode: 'e_story',
      category: 'characters',
      question: 'What does the Notsobig One eat instead of children?',
      subtext: 'Textbook Page 23: Extract from The Enormous Crocodile',
      iconKey: 'crocodile',
      options: [
        'Only fish',
        'Bananas and coconuts',
        'Insects and frogs',
        'Ice cream'
      ],
      answer: 'Only fish',
      explanation: 'The Notsobig One says: "I never eat children. Only fish."'
    },
    {
      id: 'q_eng_7',
      unit: 1,
      unitTitle: 'Unit 1: Story Writing with Roald Dahl',
      mode: 'e_story',
      category: 'characters',
      question: 'Why does the Enormous Crocodile claim he is the "bravest croc in the whole river"?',
      subtext: 'Textbook Page 24',
      iconKey: 'crocodile',
      options: [
        'He is the only one who dares to leave the water and go through the jungle to the town',
        'He can swim faster than a speedboat',
        'He can climb tall coconut trees',
        'He is friends with the river hippos'
      ],
      answer: 'He is the only one who dares to leave the water and go through the jungle to the town',
      explanation: 'He boasts that only he is brave enough to leave the muddy river to hunt for children in town.'
    },

    // --- UNIT 1: SETTINGS & STORY MOUNTAIN ---
    {
      id: 'q_eng_8',
      unit: 1,
      unitTitle: 'Unit 1: Story Writing with Roald Dahl',
      mode: 'e_story',
      category: 'settings',
      question: 'What three pieces of information does a story setting tell the reader?',
      subtext: 'Textbook Page 18: Writing a setting',
      iconKey: 'story_mountain',
      options: [
        'The place, the weather, and the time',
        'The title, the price, and the author name',
        'The ending, the moral, and the spelling',
        'The characters, their age, and their pets'
      ],
      answer: 'The place, the weather, and the time',
      explanation: 'A setting describes WHERE (place), WHEN (time, e.g. early morning), and the WEATHER (e.g. in a noisy thunderstorm).'
    },
    {
      id: 'q_eng_9',
      unit: 1,
      unitTitle: 'Unit 1: Story Writing with Roald Dahl',
      mode: 'e_story',
      category: 'settings',
      question: 'Where is the opening of The Enormous Crocodile set?',
      subtext: 'Textbook Page 23: Setting description',
      iconKey: 'crocodile',
      options: [
        'In the biggest, brownest muddiest river in Africa',
        'In a frozen pond in Antarctica',
        'In a swimming pool at a holiday resort',
        'In a shiny bathtub inside a house'
      ],
      answer: 'In the biggest, brownest muddiest river in Africa',
      explanation: 'Roald Dahl sets the scene: "In the biggest, brownest muddiest river in Africa, two crocodiles lay..."'
    },
    {
      id: 'q_eng_10',
      unit: 1,
      unitTitle: 'Unit 1: Story Writing with Roald Dahl',
      mode: 'e_story',
      category: 'setting_adjectives',
      question: 'Which group of adjectives best describes a SUNNY, cheerful park setting?',
      subtext: 'Textbook Page 19: Adjective sorting table',
      iconKey: 'story_mountain',
      options: [
        'Bright, warm, lively, and colourful',
        'Gloomy, thundery, stormy, and dark',
        'Freezing, icy, snowy, and bitter',
        'Empty, dull, silent, and foggy'
      ],
      answer: 'Bright, warm, lively, and colourful',
      explanation: 'A sunny park is bright, warm, lively, cheerful, and full of colour!'
    },
    {
      id: 'q_eng_11',
      unit: 1,
      unitTitle: 'Unit 1: Story Writing with Roald Dahl',
      mode: 'e_story',
      category: 'setting_adjectives',
      question: 'Which adjective describes a dark, stormy, overcast sky before heavy rain?',
      subtext: 'Textbook Page 19',
      iconKey: 'story_mountain',
      options: [
        'Gloomy',
        'Smiley',
        'Sunny',
        'Sparkling'
      ],
      answer: 'Gloomy',
      explanation: 'Gloomy means dark, dull, and shadowy—often used to describe thundery skies.'
    },
    {
      id: 'q_eng_12',
      unit: 1,
      unitTitle: 'Unit 1: Story Writing with Roald Dahl',
      mode: 'e_story',
      category: 'story_mountain',
      question: 'What are the 6 parts of a Story Mountain in order?',
      subtext: 'Textbook Page 31: 1.9 Sequencing events',
      iconKey: 'story_mountain',
      options: [
        '1. Introduction → 2. Problem → 3. Development → 4. Exciting part → 5. Then what happens → 6. Ending',
        '1. Ending → 2. Exciting part → 3. Problem → 4. Introduction',
        '1. Title → 2. Pictures → 3. Price → 4. Barcode',
        '1. Recipe → 2. Ingredients → 3. Mixing → 4. Baking'
      ],
      answer: '1. Introduction → 2. Problem → 3. Development → 4. Exciting part → 5. Then what happens → 6. Ending',
      explanation: 'A story mountain tracks narrative structure: Introduction, Problem, Development, Climax (Exciting part), Falling action, and Ending.'
    },
    {
      id: 'q_eng_13',
      unit: 1,
      unitTitle: 'Unit 1: Story Writing with Roald Dahl',
      mode: 'e_story',
      category: 'sequencing',
      question: 'In the exciting climax of The Enormous Crocodile, how is the crocodile finally stopped?',
      subtext: 'Textbook Page 31',
      iconKey: 'crocodile',
      options: [
        'Trunky the Elephant swings him by his tail and flings him into the sun!',
        'The croc slips on a banana skin and falls asleep',
        'The children tame the croc with sweet chocolate',
        'He swims back to his river and never leaves again'
      ],
      answer: 'Trunky the Elephant swings him by his tail and flings him into the sun!',
      explanation: 'Trunky the elephant grabs the crocodile by his tail, spins him around like a lasso, and flings him into outer space!'
    },

    // --- LANGUAGE TOPICS: NOUNS, VERBS & ADJECTIVES ---
    {
      id: 'q_eng_14',
      unit: 1,
      unitTitle: 'Language Topics: Nouns & Verbs',
      mode: 'e_grammar',
      category: 'nouns_verbs',
      question: 'What is a NOUN?',
      subtext: 'Language topics: Parts of speech',
      iconKey: 'chocolate_bar',
      options: [
        'A naming word for a person, place, animal, or thing',
        'A doing or action word',
        'A describing word for colour and size',
        'A punctuation mark at the end of a sentence'
      ],
      answer: 'A naming word for a person, place, animal, or thing',
      explanation: 'Nouns name things (e.g. Charlie, crocodile, river, party, chocolate).'
    },
    {
      id: 'q_eng_15',
      unit: 1,
      unitTitle: 'Language Topics: Nouns & Verbs',
      mode: 'e_grammar',
      category: 'nouns_verbs',
      question: 'Identify the VERB in this sentence: "Some people dance at parties."',
      subtext: 'Textbook Page 41: Question 2b',
      iconKey: 'party_hat',
      options: [
        'dance',
        'people',
        'parties',
        'Some'
      ],
      answer: 'dance',
      explanation: '"Dance" is the action verb (what the people do). People and parties are nouns.'
    },
    {
      id: 'q_eng_16',
      unit: 1,
      unitTitle: 'Language Topics: Nouns & Verbs',
      mode: 'e_grammar',
      category: 'nouns_verbs',
      question: 'Can you write a proper sentence without a verb?',
      subtext: 'Textbook Page 41: Question 2a',
      iconKey: 'story_mountain',
      options: [
        'No, every complete sentence must have a verb',
        'Yes, sentences never need verbs',
        'Only on weekends',
        'Only if the sentence is very short'
      ],
      answer: 'No, every complete sentence must have a verb',
      explanation: 'A sentence always needs at least one verb (action or being verb like is/are/was) to make complete sense!'
    },
    {
      id: 'q_eng_17',
      unit: 1,
      unitTitle: 'Language Topics: Adjectives',
      mode: 'e_grammar',
      category: 'adj_placement',
      question: 'Look at the rule on Textbook Page 20: Where can an adjective go in a sentence?',
      subtext: 'Example: "It was a narrow room" vs "The room was narrow"',
      iconKey: 'top_hat',
      options: [
        'An adjective can go BEFORE the noun OR AFTER the noun',
        'An adjective can only go at the very end of a book',
        'An adjective must always go inside brackets',
        'An adjective can only be placed before a full stop'
      ],
      answer: 'An adjective can go BEFORE the noun OR AFTER the noun',
      explanation: 'Adjectives can go before the noun ("a narrow room") or after the noun with a linking verb ("The room was narrow").'
    },
    {
      id: 'q_eng_18',
      unit: 1,
      unitTitle: 'Language Topics: Adjectives',
      mode: 'e_grammar',
      category: 'adj_placement',
      question: 'In the sentence: "His trousers were bottle green", what is the adjective and where is it placed?',
      subtext: 'Textbook Page 20 & 21',
      iconKey: 'top_hat',
      options: [
        '"bottle green" is the adjective, placed AFTER the noun trousers',
        '"His" is the adjective, placed at the start',
        '"trousers" is the adjective, placed in the middle',
        '"were" is the adjective, placed before trousers'
      ],
      answer: '"bottle green" is the adjective, placed AFTER the noun trousers',
      explanation: '"Trousers" is the noun; "bottle green" describes their colour and comes after the verb "were".'
    },
    {
      id: 'q_eng_18b',
      unit: 1,
      unitTitle: 'Language Topics: Nouns & Adjectives',
      mode: 'e_grammar',
      category: 'nouns_verbs',
      question: 'In the sentence "The clever monkey climbed the tall tree", which word is a VERB (action word)?',
      subtext: 'Hodder English: Identifying parts of speech',
      iconKey: 'crocodile',
      options: [
        'climbed',
        'monkey',
        'clever',
        'tree'
      ],
      answer: 'climbed',
      explanation: '"Climbed" is the action that the monkey did, so it is a verb. Monkey and tree are nouns; clever is an adjective.'
    },

    // --- LANGUAGE TOPICS: SUFFIXES (-ed & -ing) ---
    {
      id: 'q_eng_19',
      unit: 2,
      unitTitle: 'Language Topics: Suffixes',
      mode: 'e_suffix',
      category: 'suffix_ed',
      question: 'What is the correct past tense spelling when adding -ed to the verb "smile"?',
      subtext: 'Textbook Page 49 & 64: Word ending in silent "e"',
      iconKey: 'party_hat',
      options: [
        'smiled',
        'smileed',
        'smild',
        'smilyed'
      ],
      answer: 'smiled',
      explanation: 'When a word ends in a silent "e", drop the "e" before adding -ed (or just add "d"): smile + ed = smiled.'
    },
    {
      id: 'q_eng_20',
      unit: 2,
      unitTitle: 'Language Topics: Suffixes',
      mode: 'e_suffix',
      category: 'suffix_ed',
      question: 'What is the correct spelling when adding -ed to "hop"?',
      subtext: 'Textbook Page 50: Short vowel followed by a single consonant',
      iconKey: 'party_hat',
      options: [
        'hopped',
        'hoped',
        'hopeing',
        'hopd'
      ],
      answer: 'hopped',
      explanation: 'For a short vowel word ending in a single consonant (h-o-p), double the final consonant: h-o-p-p-e-d!'
    },
    {
      id: 'q_eng_21',
      unit: 2,
      unitTitle: 'Language Topics: Suffixes',
      mode: 'e_suffix',
      category: 'suffix_ing',
      question: 'What is the correct spelling of "sit + -ing"?',
      subtext: 'Textbook Page 50 & 64: Word sum',
      iconKey: 'party_hat',
      options: [
        'sitting',
        'siting',
        'sitteing',
        'siteing'
      ],
      answer: 'sitting',
      explanation: '"Sit" has a short "i" sound before "t", so double the "t" to make sitting.'
    },
    {
      id: 'q_eng_22',
      unit: 2,
      unitTitle: 'Language Topics: Suffixes',
      mode: 'e_suffix',
      category: 'suffix_ing',
      question: 'What is the correct spelling when adding -ing to "bake"?',
      subtext: 'Textbook Page 50: Drop the "e" rule',
      iconKey: 'party_hat',
      options: [
        'baking',
        'bakeing',
        'bakking',
        'bakeng'
      ],
      answer: 'baking',
      explanation: 'Drop the silent "e" at the end of "bake" before adding "-ing": b-a-k-i-n-g.'
    },
    {
      id: 'q_eng_23',
      unit: 2,
      unitTitle: 'Language Topics: Suffixes',
      mode: 'e_suffix',
      category: 'suffix_ing',
      question: 'Why do we NOT double the letter "y" when adding -ing to "play"?',
      subtext: 'Textbook Page 49: Language focus exception rule',
      iconKey: 'party_hat',
      options: [
        'Because the rule says never double words ending in w, x, or y (play → playing)',
        'Because "play" is a compound word',
        'Because "play" is a noun only',
        'Because double "yy" is illegal in English'
      ],
      answer: 'Because the rule says never double words ending in w, x, or y (play → playing)',
      explanation: 'Exception rule: Do not double the last letter if the word ends in w, x, or y (e.g. playing, boxing).'
    },
    {
      id: 'q_eng_23b',
      unit: 1,
      unitTitle: 'Language Topics: Suffix Rules',
      mode: 'e_suffix',
      category: 'suffix_ing',
      question: 'How do you add "-ing" to the verb "dance"?',
      subtext: 'Rule: Drop the silent "e" before adding -ing',
      iconKey: 'party_hat',
      options: [
        'dancing (drop the e)',
        'danceing (keep the e)',
        'dancey (replace with y)',
        'dancceing (double the c)'
      ],
      answer: 'dancing (drop the e)',
      explanation: 'Rule: Drop the final silent "e" before adding -ing or -ed (dance → dancing, danced).'
    },

    // --- LANGUAGE TOPICS: SPEECH MARKS & DIALOGUE ---
    {
      id: 'q_eng_24',
      unit: 1,
      unitTitle: 'Language Topics: Speech Marks',
      mode: 'e_dialogue',
      category: 'speech_marks',
      question: 'What are speech marks (inverted commas) used for in a story?',
      subtext: 'Syllabus: Language topics d) Speech marks',
      iconKey: 'speech_bubble_quotes',
      options: [
        'To show the exact words spoken out loud by a character',
        'To show where a chapter ends',
        'To indicate that a word is spelt wrong',
        'To make the letters bigger on the page'
      ],
      answer: 'To show the exact words spoken out loud by a character',
      explanation: 'Speech marks (e.g. "Hello!") go around the spoken dialogue so the reader knows who is talking.'
    },
    {
      id: 'q_eng_25',
      unit: 1,
      unitTitle: 'Language Topics: Speech Marks',
      mode: 'e_dialogue',
      category: 'speech_marks',
      question: 'Which sentence has the speech marks in the CORRECT place?',
      subtext: 'Textbook Page 23: Punctuating dialogue',
      iconKey: 'speech_bubble_quotes',
      options: [
        '"I never eat children," the Notsobig One said.',
        'I never eat children "the Notsobig One said."',
        '"I never eat" children the Notsobig One said.',
        'I "never eat children the Notsobig One" said.'
      ],
      answer: '"I never eat children," the Notsobig One said.',
      explanation: 'The quotation marks enclose only what was said: "I never eat children," followed by the dialogue tag.'
    },
    {
      id: 'q_eng_26',
      unit: 1,
      unitTitle: 'Language Topics: Dialogue Verbs',
      mode: 'e_dialogue',
      category: 'dialogue_verbs',
      question: 'Which of the following is a more exciting dialogue verb to use instead of "said"?',
      subtext: 'Textbook Page 24: Dialogue verbs',
      iconKey: 'speech_bubble_quotes',
      options: [
        'whispered',
        'table',
        'purple',
        'slowly'
      ],
      answer: 'whispered',
      explanation: 'Words like whispered, shouted, snorted, cried, and gasped show HOW a character speaks.'
    },
    {
      id: 'q_eng_27',
      unit: 1,
      unitTitle: 'Language Topics: Dialogue Verbs',
      mode: 'e_dialogue',
      category: 'dialogue_verbs',
      question: 'In the text: "\'Ho, ho, ho!\' cried the Enormous Crocodile." What is the dialogue verb?',
      subtext: 'Textbook Page 23',
      iconKey: 'crocodile',
      options: [
        'cried',
        'Crocodile',
        'Ho, ho, ho',
        'Enormous'
      ],
      answer: 'cried',
      explanation: '"Cried" is the dialogue verb that tells us how the crocodile bellowed loudly.'
    },
    {
      id: 'q_eng_27b',
      unit: 1,
      unitTitle: 'Language Topics: Speech Marks',
      mode: 'e_dialogue',
      category: 'speech_marks',
      question: 'Which punctuation mark belongs INSIDE the speech marks when asking something?',
      subtext: 'Hodder English: Punctuating direct speech',
      iconKey: 'speech_bubble_quotes',
      options: [
        'A question mark (?)',
        'A full stop only (.)',
        'An arrow (→)',
        'A plus sign (+)'
      ],
      answer: 'A question mark (?)',
      explanation: 'When a character asks a question in speech, put the question mark inside the quotation marks: "Where are you going?"'
    },
    {
      id: 'q_eng_27c',
      unit: 1,
      unitTitle: 'Language Topics: Dialogue Verbs',
      mode: 'e_dialogue',
      category: 'dialogue_verbs',
      question: 'Choose the best dialogue verb: "Please speak quietly in the library," ________ the teacher.',
      subtext: 'Hodder English: Choosing descriptive dialogue verbs',
      iconKey: 'speech_bubble_quotes',
      options: [
        'whispered',
        'screamed',
        'bellowed',
        'danced'
      ],
      answer: 'whispered',
      explanation: '"Whispered" matches the quiet setting of a library, whereas shouted or danced would not fit.'
    },

    // --- UNIT 2: PARTY INSTRUCTIONS & COMMAND VERBS ---
    {
      id: 'q_eng_28',
      unit: 2,
      unitTitle: 'Unit 2: Let\'s Have a Party!',
      mode: 'e_command',
      category: 'instructions',
      question: 'How are lists usually written on a page when planning a party?',
      subtext: 'Textbook Page 41: Writing tip',
      iconKey: 'invitation',
      options: [
        'Down the page in clear rows or bullet points, not across',
        'Across in one long run-on sentence without spaces',
        'In a circle around the edge of the paper',
        'Upside down at the bottom of the sheet'
      ],
      answer: 'Down the page in clear rows or bullet points, not across',
      explanation: 'Lists are written vertically down the page, making each item distinct and easy to tick off.'
    },
    {
      id: 'q_eng_29',
      unit: 2,
      unitTitle: 'Unit 2: Let\'s Have a Party!',
      mode: 'e_command',
      category: 'instructions',
      question: 'In instructions for making a pop-up card, why is the "You will need" section placed first?',
      subtext: 'Textbook Page 46: Question b',
      iconKey: 'pop_up_card',
      options: [
        'So you can gather all equipment and materials before you begin',
        'Because it looks prettier at the top',
        'To tell the reader how much the card costs to buy',
        'To hide the secret steps'
      ],
      answer: 'So you can gather all equipment and materials before you begin',
      explanation: 'A "You will need" section ensures you have scissors, glue, ruler, and card ready before starting step 1.'
    },
    {
      id: 'q_eng_30',
      unit: 2,
      unitTitle: 'Unit 2: Let\'s Have a Party!',
      mode: 'e_command',
      category: 'command_verbs',
      question: 'What is a COMMAND VERB (imperative verb)?',
      subtext: 'Textbook Page 47: Language focus box',
      iconKey: 'direction_sign',
      options: [
        'A "bossy" verb that tells or orders someone to do an action (e.g. Cut, Fold, Glue)',
        'A verb that describes what happened 100 years ago',
        'A word that describes how loud someone shouts',
        'The name of a person who gives commands'
      ],
      answer: 'A "bossy" verb that tells or orders someone to do an action (e.g. Cut, Fold, Glue)',
      explanation: 'Command verbs (imperative verbs) tell the reader what to do, such as Fold, Cut, Turn, or Stir.'
    },
    {
      id: 'q_eng_31',
      unit: 2,
      unitTitle: 'Unit 2: Let\'s Have a Party!',
      mode: 'e_command',
      category: 'command_verbs',
      question: 'Which of the following sentences begins with a COMMAND VERB?',
      subtext: 'Textbook Page 51: Directions',
      iconKey: 'direction_sign',
      options: [
        'Cross the road carefully at the traffic lights.',
        'The road was very busy today.',
        'We love walking to the playground.',
        'Children are having lots of fun.'
      ],
      answer: 'Cross the road carefully at the traffic lights.',
      explanation: '"Cross" is a command verb directing the reader to take an action.'
    },
    {
      id: 'q_eng_32',
      unit: 2,
      unitTitle: 'Unit 2: Let\'s Have a Party!',
      mode: 'e_command',
      category: 'command_verbs',
      question: 'Which words are SEQUENCING WORDS used to show the order of steps?',
      subtext: 'Textbook Page 47',
      iconKey: 'pop_up_card',
      options: [
        'First, Then, Next, and Finally',
        'Quietly, Loudly, Happily, and Sadly',
        'Red, Blue, Yellow, and Green',
        'Elephant, Crocodile, Monkey, and Hippo'
      ],
      answer: 'First, Then, Next, and Finally',
      explanation: 'Sequencing words (time connectives) indicate chronological order: First, Then, Next, After that, Finally.'
    },
    {
      id: 'q_eng_33',
      unit: 2,
      unitTitle: 'Unit 2: Let\'s Have a Party!',
      mode: 'e_command',
      category: 'invitations',
      question: 'What do the letters "RSVP" at the bottom of a party invitation mean?',
      subtext: 'Textbook Page 48: Writing an invitation',
      iconKey: 'invitation',
      options: [
        'Please reply to let the host know if you can come (répondez s\'il vous plaît)',
        'Remember to Sing Very Proudly',
        'Ready, Set, Vote, Party!',
        'Real Secret VIP Party'
      ],
      answer: 'Please reply to let the host know if you can come (répondez s\'il vous plaît)',
      explanation: 'RSVP comes from the French phrase "répondez s\'il vous plaît", meaning "please respond" to confirm attendance.'
    },

    // --- LANGUAGE TOPICS: COMPOUND WORDS ---
    {
      id: 'q_eng_34',
      unit: 2,
      unitTitle: 'Language Topics: Compound Words',
      mode: 'e_compound',
      category: 'compounds',
      question: 'What is a COMPOUND WORD?',
      subtext: 'Textbook Page 53: Key word definition',
      iconKey: 'compound_puzzle',
      options: [
        'Two smaller words put together to make one bigger new word',
        'A word that has three syllables',
        'A word with a silent letter at the beginning',
        'A question mark at the end of a sentence'
      ],
      answer: 'Two smaller words put together to make one bigger new word',
      explanation: 'A compound word combines two root words (e.g. play + ground = playground).'
    },
    {
      id: 'q_eng_35',
      unit: 2,
      unitTitle: 'Language Topics: Compound Words',
      mode: 'e_compound',
      category: 'compounds',
      question: 'Which two words join together to make "bedroom"?',
      subtext: 'Textbook Page 53: Activity 3b',
      iconKey: 'compound_puzzle',
      options: [
        'bed + room',
        'be + droom',
        'bedr + oom',
        'be + drum'
      ],
      answer: 'bed + room',
      explanation: '"bed" (a piece of furniture) + "room" (a space in a house) = "bedroom".'
    },
    {
      id: 'q_eng_36',
      unit: 2,
      unitTitle: 'Language Topics: Compound Words',
      mode: 'e_compound',
      category: 'compounds',
      question: 'Which of the following is a COMPOUND WORD?',
      subtext: 'Textbook Page 53: Reading tip list',
      iconKey: 'compound_puzzle',
      options: [
        'toothbrush',
        'dancing',
        'crocodile',
        'chocolate'
      ],
      answer: 'toothbrush',
      explanation: '"tooth" + "brush" = "toothbrush". The others are single root words or suffixed words.'
    },
    {
      id: 'q_eng_37',
      unit: 2,
      unitTitle: 'Language Topics: Compound Words',
      mode: 'e_compound',
      category: 'compounds',
      question: 'Combine "foot" + "ball" to make a compound word:',
      subtext: 'Textbook Page 63: Check your progress',
      iconKey: 'compound_puzzle',
      options: [
        'football',
        'foot ball',
        'foot-ball-ing',
        'footyball'
      ],
      answer: 'football',
      explanation: 'foot + ball = football (written as a single closed compound word).'
    },
    {
      id: 'q_eng_38',
      unit: 2,
      unitTitle: 'Language Topics: Compound Words',
      mode: 'e_compound',
      category: 'compounds',
      question: 'Which compound word can be made from "any" and "where"?',
      subtext: 'Textbook Page 54: Compound word combinations',
      iconKey: 'compound_puzzle',
      options: [
        'anywhere',
        'anyplace-nowhere',
        'anywear',
        'any-where'
      ],
      answer: 'anywhere',
      explanation: 'any + where = anywhere!'
    },
    {
      id: 'q_eng_38b',
      unit: 2,
      unitTitle: 'Language Topics: Compound Words',
      mode: 'e_compound',
      category: 'compounds',
      question: 'Which two root words join together to make the compound word "scarecrow"?',
      subtext: 'Language topics g) Compound words',
      iconKey: 'compound_puzzle',
      options: [
        'scare + crow',
        'scar + ecrow',
        'scared + row',
        'scary + crow'
      ],
      answer: 'scare + crow',
      explanation: 'scare + crow = scarecrow (a figure dressed in old clothes placed in fields to scare birds away).'
    },
    {
      id: 'q_eng_39',
      unit: 2,
      unitTitle: 'Unit 2: Improving Instructions',
      mode: 'e_command',
      category: 'instructions',
      question: 'When proofreading your instructions, what three things should you check?',
      subtext: 'Textbook Page 62: Proofreading instructions',
      iconKey: 'pop_up_card',
      options: [
        'Grammar, spelling, and punctuation (capital letters & full stops)',
        'How many colours of ink you used',
        'Whether your friend likes the story',
        'If the paper can be folded into a plane'
      ],
      answer: 'Grammar, spelling, and punctuation (capital letters & full stops)',
      explanation: 'Proofreading always checks: 1. Grammar (makes sense), 2. Spelling, 3. Punctuation (capital letters and full stops).'
    },
    {
      id: 'q_eng_40',
      unit: 1,
      unitTitle: 'Unit 1: Story Writing with Roald Dahl',
      mode: 'e_story',
      category: 'traits',
      question: 'What inspired Roald Dahl to write Charlie and the Chocolate Factory?',
      subtext: 'Textbook Page 22: Did you know box',
      iconKey: 'chocolate_bar',
      options: [
        'At boarding school, a chocolate company sent new chocolate bars for pupils to test',
        'He owned a large sweet factory in London',
        'He found a golden ticket on a London bus',
        'His grandmother made delicious fudge'
      ],
      answer: 'At boarding school, a chocolate company sent new chocolate bars for pupils to test',
      explanation: 'Cadbury used to send boxes of new chocolate bars to his school for the boys to test and review!'
    }
  ],

  // ================= 3. SORTING CHALLENGES =================
  sortBaskets: [
    {
      id: 'sort_nouns_verbs',
      title: 'Nouns vs Verbs Sorter',
      desc: 'Sort each word into Noun (naming word) or Verb (action word)',
      basket1: { key: 'noun', label: '📦 Noun (Name/Thing)', color: '#1cb0f6' },
      basket2: { key: 'verb', label: '⚡ Verb (Action/Doing)', color: '#ff9600' },
      items: [
        { name: 'Crocodile', category: 'noun', icon: 'crocodile' },
        { name: 'Dance', category: 'verb', icon: 'party_hat' },
        { name: 'Chocolate', category: 'noun', icon: 'chocolate_bar' },
        { name: 'Fold', category: 'verb', icon: 'pop_up_card' },
        { name: 'Factory', category: 'noun', icon: 'top_hat' },
        { name: 'Whisper', category: 'verb', icon: 'speech_bubble_quotes' },
        { name: 'Scissors', category: 'noun', icon: 'pop_up_card' },
        { name: 'Cross', category: 'verb', icon: 'direction_sign' }
      ]
    },
    {
      id: 'sort_setting_adj',
      title: 'Setting Adjectives Sorter',
      desc: 'Sort into Sunny Park Setting or Stormy Thunder Setting',
      basket1: { key: 'sunny', label: '☀️ Sunny Park', color: '#58cc02' },
      basket2: { key: 'stormy', label: '⛈️ Stormy Thunder', color: '#805ad5' },
      items: [
        { name: 'Bright', category: 'sunny', icon: 'weather_sun' },
        { name: 'Gloomy', category: 'stormy', icon: 'story_mountain' },
        { name: 'Cheerful', category: 'sunny', icon: 'party_hat' },
        { name: 'Thundery', category: 'stormy', icon: 'story_mountain' },
        { name: 'Warm', category: 'sunny', icon: 'weather_sun' },
        { name: 'Dark and cold', category: 'stormy', icon: 'story_mountain' },
        { name: 'Lively and colourful', category: 'sunny', icon: 'party_hat' }
      ]
    },
    {
      id: 'sort_commands',
      title: 'Command Verbs vs Ordinary Words',
      desc: 'Is this a Command (Bossy) Verb for instructions, or a Normal Word?',
      basket1: { key: 'command', label: '📢 Command Verb', color: '#ff4b4b' },
      basket2: { key: 'not_command', label: '🎈 Ordinary Word', color: '#3182ce' },
      items: [
        { name: 'Glue', category: 'command', icon: 'pop_up_card' },
        { name: 'Purple', category: 'not_command', icon: 'party_hat' },
        { name: 'Cut', category: 'command', icon: 'pop_up_card' },
        { name: 'Quietly', category: 'not_command', icon: 'speech_bubble_quotes' },
        { name: 'Turn', category: 'command', icon: 'direction_sign' },
        { name: 'Crocodile', category: 'not_command', icon: 'crocodile' },
        { name: 'Open', category: 'command', icon: 'invitation' },
        { name: 'Balloons', category: 'not_command', icon: 'party_hat' }
      ]
    }
  ]
};
