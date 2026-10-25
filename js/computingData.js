// ========================================================
// COMPUTING THEORY GRADE 2 DATA REPOSITORY
// Universal Wisdom School - Summative Assessment 1 (SA-1)
// Mapped to Cambridge Primary Computing & Textbook Units 1, 2, 3
// ========================================================

const COMPUTING_DATA = {
  subjectId: 'computing',
  subjectTitle: 'Computing Theory',
  syllabusInfo: 'SA-1 Exam • 20 Marks Theory • 40 Minutes',

  // ================= 1. ADVENTURE PATH UNITS =================
  adventureUnits: [
    {
      id: 'unit_c1',
      title: 'Unit 1: Making Programs Clear',
      desc: 'Follow, edit, correct algorithms & write concise code',
      color: '#58cc02',
      lessons: [
        { id: 'c_u1_l1', title: 'What is an Algorithm?', subtitle: 'Steps in the right order', icon: '🤖', type: 'c_algo', filter: 'intro' },
        { id: 'c_u1_l2', title: 'Algorithm Detective', subtitle: 'Spot & edit wrong steps', icon: '🔍', type: 'c_algo', filter: 'edit' },
        { id: 'c_u1_l3', title: 'Ring Stacker & Seeds', subtitle: 'Sequencing real tasks', icon: '🌱', type: 'c_algo', filter: 'sequence' },
        { id: 'c_u1_l4', title: 'Unit 1 Mastery', subtitle: 'Algorithms Checkpoint', icon: '🏆', type: 'c_algo', filter: 'all' }
      ]
    },
    {
      id: 'unit_c2',
      title: 'Unit 2: Concise Programs & Scratch',
      desc: 'Combine repeated blocks to make efficient code',
      color: '#1cb0f6',
      lessons: [
        { id: 'c_u2_l1', title: 'Being Concise', subtitle: 'Save energy & computer power', icon: '⚡', type: 'c_concise', filter: 'concept' },
        { id: 'c_u2_l2', title: 'Combine Motion Blocks', subtitle: 'move 60 x 3 = 180 steps', icon: '🧩', type: 'c_concise', filter: 'motion' },
        { id: 'c_u2_l3', title: 'Pattern Recognition', subtitle: "Judy's Flower Bouquet", icon: '🌸', type: 'c_concise', filter: 'pattern' },
        { id: 'c_u2_l4', title: 'Concise Coder Pro', subtitle: 'Scratch block combinations', icon: '🏆', type: 'c_concise', filter: 'all' }
      ]
    },
    {
      id: 'unit_c3',
      title: 'Unit 3: Resetting Objects & Sprites',
      desc: 'Return sprites to original position & size in Scratch',
      color: '#ff9600',
      lessons: [
        { id: 'c_u3_l1', title: 'Reset Position', subtitle: 'go to x: y: coordinates', icon: '📍', type: 'c_reset', filter: 'position' },
        { id: 'c_u3_l2', title: 'Reset Size to 100%', subtitle: 'Stop sprites growing too big', icon: '🔄', type: 'c_reset', filter: 'size' },
        { id: 'c_u3_l3', title: 'Shrinking Sprites', subtitle: 'Negative numbers (-20)', icon: '📉', type: 'c_reset', filter: 'negative' },
        { id: 'c_u3_l4', title: 'Reset Master', subtitle: 'Coordinates & wait blocks', icon: '🏆', type: 'c_reset', filter: 'all' }
      ]
    },
    {
      id: 'unit_c4',
      title: 'Unit 4: Hardware & Software Roles',
      desc: 'Physical parts vs computer instructions & apps',
      color: '#ce82ff',
      lessons: [
        { id: 'c_u4_l1', title: 'Hardware vs Software', subtitle: 'Physical parts vs rules/code', icon: '💻', type: 'c_hardware', filter: 'roles' },
        { id: 'c_u4_l2', title: 'Physical Damage vs Bugs', subtitle: 'Hardware breaks, software has bugs', icon: '🐛', type: 'c_hardware', filter: 'bugs' },
        { id: 'c_u4_l3', title: '3 Hardware Types', subtitle: 'Input, Output & Storage', icon: '📦', type: 'c_hardware', filter: 'categories' },
        { id: 'c_u4_l4', title: 'Systems Expert', subtitle: 'Hardware & Software Checkpoint', icon: '🏆', type: 'c_hardware', filter: 'all' }
      ]
    },
    {
      id: 'unit_c5',
      title: 'Unit 5: Smart Input & Data Expert',
      desc: 'Manual vs automatic input & categorical vs discrete data',
      color: '#ff4b4b',
      lessons: [
        { id: 'c_u5_l1', title: 'Manual vs Automatic', subtitle: 'Human fingers vs smart sensors', icon: '🖲️', type: 'c_input', filter: 'input_types' },
        { id: 'c_u5_l2', title: 'Barcodes, RFID & Biometrics', subtitle: 'Price scanners & fingerprints', icon: '📲', type: 'c_input', filter: 'auto_devices' },
        { id: 'c_u5_l3', title: 'Categorical vs Discrete', subtitle: 'Labels vs Countable numbers', icon: '📊', type: 'c_data', filter: 'data_types' },
        { id: 'c_u5_l4', title: 'Solving Problems with Data', subtitle: "Vanessa's savings & weather", icon: '🌦️', type: 'c_data', filter: 'problem_solving' },
        { id: 'c_u5_l5', title: 'SA-1 Mock Exam Ready', subtitle: 'Complete 20 Marks Theory test', icon: '👑', type: 'c_exam', filter: 'all' }
      ]
    }
  ],

  // ================= 2. MASTER QUESTION POOL =================
  // Mapped directly to Textbook Photos and SA-1 Syllabus
  questionPool: [
    // --- UNIT 1: ALGORITHMS & EDITING ---
    {
      id: 'q_algo_1',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_algo',
      category: 'intro',
      question: 'What is an algorithm?',
      subtext: 'Choose the correct definition from your textbook:',
      iconKey: 'robot',
      options: [
        'A set of step-by-step instructions in the right order',
        'A physical part of a computer you can touch',
        'A screen that displays videos and games',
        'A computer mouse with two buttons'
      ],
      answer: 'A set of step-by-step instructions in the right order',
      explanation: 'An algorithm is a step-by-step set of instructions in the right order to complete a task.'
    },
    {
      id: 'q_algo_2',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_algo',
      category: 'intro',
      question: 'What does the word "edit" mean in computing?',
      subtext: 'Textbook Keyword (Page 15)',
      iconKey: 'scratch_blocks',
      options: [
        'To change or correct something',
        'To delete the entire computer',
        'To make the computer louder',
        'To turn off the power'
      ],
      answer: 'To change or correct something',
      explanation: 'Keyword: edit means "to change" (e.g. to fix an error in an algorithm).'
    },
    {
      id: 'q_algo_3',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_algo',
      category: 'edit',
      question: 'Find the mistake in this Peanut Butter Sandwich algorithm:',
      subtext: 'Step 1: Get bread • Step 2: Eat the sandwich • Step 3: Spread peanut butter • Step 4: Close bread',
      iconKey: 'robot',
      options: [
        'Step 2 is wrong: You cannot eat the sandwich before making it!',
        'Step 1 is wrong: You do not need bread',
        'Step 3 is wrong: Peanut butter is not allowed',
        'There is no mistake'
      ],
      answer: 'Step 2 is wrong: You cannot eat the sandwich before making it!',
      explanation: 'In an algorithm, instructions must be in the right order. You must spread peanut butter and close the bread before eating!'
    },
    {
      id: 'q_algo_4',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_algo',
      category: 'edit',
      question: 'Look at the Pizza Delivery algorithm. The boy walks 3 steps forward, turns left, but the house is on the right! What should we do?',
      subtext: 'Textbook Page 14',
      iconKey: 'robot',
      options: [
        'Edit the algorithm: Change "Turn left" to "Turn right"',
        'Throw away the pizza',
        'Turn off the computer',
        'Change the color of the house'
      ],
      answer: 'Edit the algorithm: Change "Turn left" to "Turn right"',
      explanation: 'When an algorithm has a wrong step, we edit (change) it so the boy reaches the correct house!'
    },
    {
      id: 'q_algo_5',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_algo',
      category: 'sequence',
      question: 'In the Ring Stacking toy, what is the correct order to stack rings from bottom to top?',
      subtext: 'Textbook Page 21: Look at the ring tower from wide base to top ball',
      iconKey: 'stacking_rings',
      options: [
        'Blue (bottom) → Green → Yellow → Red → Orange (top)',
        'Orange (bottom) → Red → Green → Blue (top)',
        'Green (bottom) → Blue → Red → Yellow (top)',
        'Red (bottom) → Blue → Orange → Green (top)'
      ],
      answer: 'Blue (bottom) → Green → Yellow → Red → Orange (top)',
      explanation: 'The largest blue ring goes on the base first, followed by green, yellow, red, and the small orange top!'
    },
    {
      id: 'q_algo_6',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_algo',
      category: 'sequence',
      question: 'What is the correct algorithm for planting seeds in a pot?',
      subtext: 'Textbook Page 25: Match the 5 pictures in order',
      iconKey: 'plant_seeds',
      options: [
        '1. Fill pot with soil → 2. Put seeds → 3. Water pot → 4. Place in sun',
        '1. Place in sun → 2. Fill with soil → 3. Put seeds → 4. Water pot',
        '1. Water pot → 2. Place in sun → 3. Put seeds → 4. Fill soil',
        '1. Put seeds → 2. Place in sun → 3. Fill pot with soil'
      ],
      answer: '1. Fill pot with soil → 2. Put seeds → 3. Water pot → 4. Place in sun',
      explanation: 'You must first fill the pot with soil, drop the seeds inside, add water, and place in sunlight so the plant can grow!'
    },
    {
      id: 'q_algo_7',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_algo',
      category: 'sequence',
      question: 'Look at the shape pattern: Square, Circle, Square, Circle. An algorithm says: "Draw square, Draw circle, Draw circle, Draw square". Is it correct?',
      subtext: 'Textbook Page 23: Challenge yourself',
      iconKey: 'scratch_blocks',
      options: [
        'No, it draws two circles together instead of alternating!',
        'Yes, it is completely correct',
        'No, it should draw triangles',
        'No, circles are not shapes'
      ],
      answer: 'No, it draws two circles together instead of alternating!',
      explanation: 'The pattern alternates: Square, Circle, Square, Circle. Drawing two circles in a row is an error!'
    },

    // --- UNIT 1 & 2: CONCISE PROGRAMS & SCRATCH CODE ---
    {
      id: 'q_con_1',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_concise',
      category: 'concept',
      question: 'What does it mean to make a program "concise"?',
      subtext: 'Textbook Keyword (Page 17)',
      iconKey: 'scratch_blocks',
      options: [
        'Making the code shorter using fewer blocks to do the same task',
        'Making the sprite run very fast',
        'Changing the screen background color to yellow',
        'Adding 100 extra lines of code'
      ],
      answer: 'Making the code shorter using fewer blocks to do the same task',
      explanation: 'Keyword: concise means short. A concise program accomplishes the exact same goal using fewer blocks.'
    },
    {
      id: 'q_con_2',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_concise',
      category: 'concept',
      question: 'Did you know? Why does writing concise code help save the planet?',
      subtext: 'Textbook Page 27: Green computing fact',
      iconKey: 'computer',
      options: [
        'Computers use less power and generate less heat when running efficient programs',
        'Computers turn into trees when they run short code',
        'Concise programs make the monitor turn green',
        'Short code allows keyboards to recharge batteries'
      ],
      answer: 'Computers use less power and generate less heat when running efficient programs',
      explanation: 'Efficient, concise programs require fewer computer calculations, which saves electricity and produces less heat!'
    },
    {
      id: 'q_con_3',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_concise',
      category: 'motion',
      question: 'In Scratch, a balloon has two blocks: [change y by 30] and [change y by 30]. Which single block replaces them to make the code concise?',
      subtext: 'Textbook Page 16: Combine repeated motion blocks',
      iconKey: 'scratch_blocks',
      options: [
        'change y by 60',
        'change y by 30',
        'change y by 0',
        'change x by 60'
      ],
      answer: 'change y by 60',
      explanation: '30 + 30 = 60! Combining two [change y by 30] blocks into one [change y by 60] block makes the program concise.'
    },
    {
      id: 'q_con_4',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_concise',
      category: 'motion',
      question: 'Monkey walks to the bananas with 3 blocks: [move 60 steps], [move 60 steps], [move 60 steps]. What single block replaces them?',
      subtext: 'Textbook Page 21-22: Monkey and Bananas',
      iconKey: 'scratch_blocks',
      options: [
        'move 180 steps',
        'move 120 steps',
        'move 60 steps',
        'move 300 steps'
      ],
      answer: 'move 180 steps',
      explanation: '60 + 60 + 60 = 180! One [move 180 steps] block does the exact same motion in a single concise step.'
    },
    {
      id: 'q_con_5',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_concise',
      category: 'motion',
      question: 'Monkey grows with 3 blocks: [change size by 10], [change size by 10], [change size by 10]. Which concise block does this?',
      subtext: 'Textbook Page 22',
      iconKey: 'scratch_blocks',
      options: [
        'change size by 30',
        'change size by 10',
        'set size to 30%',
        'change size by -30'
      ],
      answer: 'change size by 30',
      explanation: '10 + 10 + 10 = 30! [change size by 30] combines the three repeated growth blocks.'
    },
    {
      id: 'q_con_6',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_concise',
      category: 'pattern',
      question: 'Judy picks flowers for her mother: Pick rose, Pick rose, Pick lily, Pick sunflower, Pick sunflower, Pick sunflower. How can we write this concisely?',
      subtext: 'Textbook Page 25: Pattern recognition',
      iconKey: 'plant_seeds',
      options: [
        'Pick 2 roses, Pick 1 lily, Pick 3 sunflowers',
        'Pick 6 roses only',
        'Pick 1 rose, Pick 2 lilies, Pick 1 sunflower',
        'Pick all flowers together in 1 step'
      ],
      answer: 'Pick 2 roses, Pick 1 lily, Pick 3 sunflowers',
      explanation: 'By recognizing patterns, 6 individual steps are condensed into 3 concise instructions!'
    },
    {
      id: 'q_con_7',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_concise',
      category: 'motion',
      question: 'A tree sprite has two [change size by 20] blocks. Which single block will replace them?',
      subtext: 'Textbook Page 26',
      iconKey: 'scratch_blocks',
      options: [
        'change size by 40',
        'change size by 20',
        'change size by 200',
        'set size to 20%'
      ],
      answer: 'change size by 40',
      explanation: '20 + 20 = 40! [change size by 40] replaces the two duplicate blocks.'
    },

    // --- UNIT 1: RESETTING OBJECTS ---
    {
      id: 'q_res_1',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_reset',
      category: 'position',
      question: 'What does "reset" mean in Scratch programming?',
      subtext: 'Textbook Keyword (Page 19)',
      iconKey: 'scratch_cat',
      options: [
        'To return a sprite or object to its original state or starting point',
        'To erase all Scratch blocks forever',
        'To turn off the computer monitor',
        'To make the sprite spin around in circles'
      ],
      answer: 'To return a sprite or object to its original state or starting point',
      explanation: 'Keyword: reset means to return to the original state (starting position and size) each time Green Flag is clicked.'
    },
    {
      id: 'q_res_2',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_reset',
      category: 'position',
      question: 'The Cat sprite moves 400 steps every time. Which block resets the Cat back to its starting position on the left?',
      subtext: 'Textbook Page 18: Resetting Cat sprite position',
      iconKey: 'scratch_cat',
      options: [
        'go to x: -200 y: 0',
        'move 400 steps',
        'change y by 100',
        'turn 90 degrees'
      ],
      answer: 'go to x: -200 y: 0',
      explanation: 'The [go to x: -200 y: 0] block placed right after [when green flag clicked] resets the Cat to its original start point.'
    },
    {
      id: 'q_res_3',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_reset',
      category: 'size',
      question: 'If a sprite grows bigger every time the Green Flag is clicked, which block resets it to its normal size?',
      subtext: 'Textbook Page 19: Reset size',
      iconKey: 'scratch_cat',
      options: [
        'set size to 100 %',
        'change size by 10',
        'change size by 50',
        'set size to 0 %'
      ],
      answer: 'set size to 100 %',
      explanation: '100% is the original default size of any sprite in Scratch. [set size to 100 %] resets it.'
    },
    {
      id: 'q_res_4',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_reset',
      category: 'negative',
      question: 'What does the block [change size by -20] cause the Bus sprite to do?',
      subtext: 'Textbook Page 20: Note the minus sign (-)',
      iconKey: 'scratch_blocks',
      options: [
        'It causes the Bus sprite to get smaller (shrink)',
        'It causes the Bus sprite to grow 20 times bigger',
        'It moves the bus backwards 20 steps',
        'It paints the bus black'
      ],
      answer: 'It causes the Bus sprite to get smaller (shrink)',
      explanation: 'A negative number (-20) decreases the sprite size, making it shrink!'
    },
    {
      id: 'q_res_5',
      unit: 1,
      unitTitle: 'Unit 1: Making Programs Clear',
      mode: 'c_reset',
      category: 'position',
      question: 'Why do we add a [wait 1 seconds] block right after resetting position before moving?',
      subtext: 'Textbook Page 18',
      iconKey: 'scratch_blocks',
      options: [
        'Otherwise the sprite moves instantly and appears not to move at all',
        'Because the computer gets tired',
        'To change the sprite sound',
        'To turn the screen off'
      ],
      answer: 'Otherwise the sprite moves instantly and appears not to move at all',
      explanation: 'Without a wait block, the computer resets and moves so fast that human eyes cannot see the animation!'
    },

    // --- UNIT 2: HARDWARE AND SOFTWARE ROLES ---
    {
      id: 'q_hw_1',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_hardware',
      category: 'roles',
      question: 'What is computer hardware?',
      subtext: 'Textbook Keyword (Page 30)',
      iconKey: 'computer',
      options: [
        'The physical objects and parts that make up a computer',
        'The games and apps downloaded on a phone',
        'The internet connection speed',
        'The instructions that tell the screen what to draw'
      ],
      answer: 'The physical objects and parts that make up a computer',
      explanation: 'Keyword: hardware refers to physical parts of a computing device that you can see and touch (e.g. keyboard, mouse, monitor).'
    },
    {
      id: 'q_hw_2',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_hardware',
      category: 'roles',
      question: 'What is computer software?',
      subtext: 'Textbook Keyword (Page 30)',
      iconKey: 'scratch_blocks',
      options: [
        'The set of instructions or programs that tell a computer what to do',
        'The plastic case around a computer',
        'The wires plugged into the wall',
        'A soft mousepad on your desk'
      ],
      answer: 'The set of instructions or programs that tell a computer what to do',
      explanation: 'Keyword: software is a computer program or set of instructions. Another name for software is "app".'
    },
    {
      id: 'q_hw_3',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_hardware',
      category: 'roles',
      question: "In Gina's dad's football analogy: What is hardware and what is software?",
      subtext: 'Textbook Page 31: Sports analogy',
      iconKey: 'robot',
      options: [
        'Hardware is the players, ball and pitch; Software is the rules of the game',
        'Hardware is the whistle; Software is the referee shoes',
        'Hardware is the goals; Software is the grass',
        'Hardware and software are exactly the same'
      ],
      answer: 'Hardware is the players, ball and pitch; Software is the rules of the game',
      explanation: 'You cannot play a football match without players and a ball (hardware), and you cannot play without the rules of the game (software)!'
    },
    {
      id: 'q_hw_4',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_hardware',
      category: 'bugs',
      question: 'Which of the following is TRUE about software?',
      subtext: 'Textbook Page 33: Comparison table',
      iconKey: 'scratch_blocks',
      options: [
        'Software cannot be touched or dropped, but can have bugs (errors)',
        'Software can be dropped on the floor and crack',
        'Software can be plugged into a wall socket',
        'Software works even if there is no hardware at all'
      ],
      answer: 'Software cannot be touched or dropped, but can have bugs (errors)',
      explanation: 'Software is non-physical instructions. It cannot physically break on the floor, but errors in code are called "bugs".'
    },
    {
      id: 'q_hw_5',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_hardware',
      category: 'bugs',
      question: 'What is a "bug" in computing?',
      subtext: 'Textbook Keyword (Page 34)',
      iconKey: 'robot',
      options: [
        'An error or mistake in a computer program',
        'An insect crawling inside the keyboard',
        'A button that changes volume',
        'A type of USB charging cable'
      ],
      answer: 'An error or mistake in a computer program',
      explanation: 'Keyword: bug is an error in a computer program that prevents it from working correctly.'
    },
    {
      id: 'q_hw_6',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_hardware',
      category: 'categories',
      question: 'What are the three main categories of hardware in a computer system?',
      subtext: 'Textbook Page 31',
      iconKey: 'computer',
      options: [
        'Input devices, Output devices, and Storage devices',
        'Apps, Games, and Web browsers',
        'Plastic, Metal, and Glass',
        'Fast, Medium, and Slow'
      ],
      answer: 'Input devices, Output devices, and Storage devices',
      explanation: 'Hardware is classified into: 1. Input devices (mouse, mic), 2. Output devices (monitor, printer), 3. Storage devices (USB drive, hard drive).'
    },
    {
      id: 'q_hw_7',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_hardware',
      category: 'categories',
      question: 'Which of the following is a STORAGE hardware device?',
      subtext: 'Textbook Page 31: Word bank',
      iconKey: 'usb_drive',
      options: [
        'USB flash drive',
        'Computer monitor',
        'Microphone',
        'Web browser app'
      ],
      answer: 'USB flash drive',
      explanation: 'A USB drive and an external hard drive store data and files for later use.'
    },
    {
      id: 'q_hw_8',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_hardware',
      category: 'roles',
      question: 'Which of the following is NOT an example of software?',
      subtext: 'Textbook Page 32: Question 7',
      iconKey: 'computer',
      options: [
        'Flatbed Scanner',
        'Microsoft Word',
        'Scratch',
        'Google Chrome browser'
      ],
      answer: 'Flatbed Scanner',
      explanation: 'A scanner is a physical hardware input device. Word, Scratch, and Chrome are software applications.'
    },

    // --- UNIT 2: MANUAL VS AUTOMATIC INPUT DEVICES ---
    {
      id: 'q_inp_1',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_input',
      category: 'input_types',
      question: 'What is a MANUAL input device?',
      subtext: 'Textbook Page 35: Learn section',
      iconKey: 'keyboard',
      options: [
        'A device that needs a human to operate it using hands or fingers',
        'A device that works completely by itself with zero human help',
        'A device used only in space stations',
        'A book made of paper'
      ],
      answer: 'A device that needs a human to operate it using hands or fingers',
      explanation: 'A manual input device requires a person to click, type, press, or speak into it (e.g. keyboard, mouse).'
    },
    {
      id: 'q_inp_2',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_input',
      category: 'input_types',
      question: 'Why are manual input devices often less accurate than automatic input devices?',
      subtext: 'Textbook Page 35',
      iconKey: 'keyboard',
      options: [
        'Because humans can make typos and mistakes when entering data',
        'Because manual devices do not have batteries',
        'Because manual devices only work at night',
        'Because computers dislike keyboards'
      ],
      answer: 'Because humans can make typos and mistakes when entering data',
      explanation: 'Humans can press the wrong key or mistype numbers. Automatic devices scan data directly without human typing errors.'
    },
    {
      id: 'q_inp_3',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_input',
      category: 'auto_devices',
      question: 'What is an AUTOMATIC input device?',
      subtext: 'Textbook Page 35 & 36',
      iconKey: 'sensor',
      options: [
        'A device that collects and enters data with little or no human input',
        'A computer mouse with a red light',
        'A keyboard with mechanical switches',
        'A printer that prints photos'
      ],
      answer: 'A device that collects and enters data with little or no human input',
      explanation: 'Automatic input devices (like sensors, RFID, barcode readers) detect data and feed it to the computer automatically.'
    },
    {
      id: 'q_inp_4',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_input',
      category: 'auto_devices',
      question: 'What do barcode readers scan on grocery and store items?',
      subtext: 'Textbook Page 36',
      iconKey: 'barcode',
      options: [
        'Vertical black lines containing information such as item price',
        'Pictures of the store manager',
        'The weight of the grocery bag',
        'The color of the shopping cart'
      ],
      answer: 'Vertical black lines containing information such as item price',
      explanation: 'Barcodes are vertical black lines that encode product identification and price information.'
    },
    {
      id: 'q_inp_5',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_input',
      category: 'auto_devices',
      question: 'What device do contactless payment bank cards use to automatically send account data?',
      subtext: 'Textbook Page 36: RFID devices',
      iconKey: 'rfid',
      options: [
        'RFID (Radio Frequency Identification) chip',
        'A tiny pencil inside the card',
        'A barcode laser lens',
        'A sound speaker'
      ],
      answer: 'RFID (Radio Frequency Identification) chip',
      explanation: 'Contactless payment cards use RFID devices to transmit bank data when tapped on payment terminals.'
    },
    {
      id: 'q_inp_6',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_input',
      category: 'auto_devices',
      question: 'A smartphone unlocks when Mavis looks at it or touches the sensor with her thumb. What kind of device is this?',
      subtext: 'Textbook Page 36: Biometrics',
      iconKey: 'fingerprint',
      options: [
        'A Biometric device (face scan / fingerprint)',
        'A printer output device',
        'A barcode scanner',
        'A hard drive'
      ],
      answer: 'A Biometric device (face scan / fingerprint)',
      explanation: 'Biometric devices measure unique human body features (such as fingerprints and face geometry) to automatically authenticate users.'
    },
    {
      id: 'q_inp_7',
      unit: 2,
      unitTitle: 'Unit 2: Hardware and Software Work Together',
      mode: 'c_input',
      category: 'auto_devices',
      question: 'In Annay’s greenhouse, temperature sensors and light sensors detect conditions automatically. What category do they belong to?',
      subtext: 'Textbook Page 39: Challenge yourself',
      iconKey: 'sensor',
      options: [
        'Automatic input devices',
        'Manual input devices',
        'Storage output devices',
        'Computer software'
      ],
      answer: 'Automatic input devices',
      explanation: 'Environmental sensors take in data (temperature, light, moisture) continuously with zero human operation.'
    },

    // --- UNIT 3: BE A DATA EXPERT ---
    {
      id: 'q_dat_1',
      unit: 3,
      unitTitle: 'Unit 3: Be a Data Expert',
      mode: 'c_data',
      category: 'data_types',
      question: 'What is CATEGORICAL data?',
      subtext: 'Textbook Page 43: Categorical data',
      iconKey: 'bar_chart',
      options: [
        'Data that is sorted into distinct named groups or categories (e.g. hair colour: Blonde, Black, Brown)',
        'Data that can only be counted in millions',
        'A computer password',
        'A movie video file'
      ],
      answer: 'Data that is sorted into distinct named groups or categories (e.g. hair colour: Blonde, Black, Brown)',
      explanation: 'Categorical data describes qualities and labels (e.g., hair colour, favourite fruit, weather type: sunny/rainy).'
    },
    {
      id: 'q_dat_2',
      unit: 3,
      unitTitle: 'Unit 3: Be a Data Expert',
      mode: 'c_data',
      category: 'data_types',
      question: 'What is DISCRETE data?',
      subtext: 'Syllabus Page 2 & Textbook Page 43',
      iconKey: 'bar_chart',
      options: [
        'Numerical data that can be counted in exact whole numbers (e.g. student scores: 4, 2, 10, 8)',
        'Data that is kept secret',
        'A drawing of a robot',
        'The brand name of a computer'
      ],
      answer: 'Numerical data that can be counted in exact whole numbers (e.g. student scores: 4, 2, 10, 8)',
      explanation: 'Discrete data consists of distinct, countable numerical values (e.g., number of students, test scores, attendance days).'
    },
    {
      id: 'q_dat_3',
      unit: 3,
      unitTitle: 'Unit 3: Be a Data Expert',
      mode: 'c_data',
      category: 'problem_solving',
      question: 'Look at Mr Dawson’s weather forecast: Monday (Heavy rain), Tuesday (Rain), Friday (Warm & sunny), Saturday (Sunny). On which day should he go to the beach?',
      subtext: 'Textbook Page 42: Weather forecast data',
      iconKey: 'weather_sun',
      options: [
        'Friday or Saturday (Sunny & warm)',
        'Monday (Heavy rain)',
        'Tuesday (Light rain)',
        'Wednesday (Windy and raining)'
      ],
      answer: 'Friday or Saturday (Sunny & warm)',
      explanation: 'Data helps us make decisions! Looking at the forecast, Friday and Saturday have warm, sunny weather perfect for the beach.'
    },
    {
      id: 'q_dat_4',
      unit: 3,
      unitTitle: 'Unit 3: Be a Data Expert',
      mode: 'c_data',
      category: 'problem_solving',
      question: 'Vanessa needs $30 by May to buy a book. Her savings: Jan ($5), Feb ($6), Mar ($5), Apr ($5), May ($4) = Total $25. What problem did the data reveal?',
      subtext: 'Textbook Page 44: Understanding data',
      iconKey: 'bar_chart',
      options: [
        'She is short by $5 and did not save enough money yet',
        'She saved $100 too much',
        'The bookstore has closed down',
        'There is no problem at all'
      ],
      answer: 'She is short by $5 and did not save enough money yet',
      explanation: '$30 - $25 = $5 shortage! The data helped Vanessa see she needs $5 more, so she can borrow it or wait and save.'
    },
    {
      id: 'q_dat_5',
      unit: 3,
      unitTitle: 'Unit 3: Be a Data Expert',
      mode: 'c_data',
      category: 'problem_solving',
      question: 'Toys Inc. recorded store sales: Building blocks (120), Board games (250), Video games (500). What business decision should they make based on this data?',
      subtext: 'Textbook Page 45: Toys Inc. decision making',
      iconKey: 'bar_chart',
      options: [
        'Produce more video games because they are the most popular!',
        'Stop making all toys',
        'Only produce building blocks',
        'Double the price of board games'
      ],
      answer: 'Produce more video games because they are the most popular!',
      explanation: 'Video games sold 500 units (highest number). Businesses use data to manufacture more of what customers love.'
    },
    {
      id: 'q_dat_6',
      unit: 3,
      unitTitle: 'Unit 3: Be a Data Expert',
      mode: 'c_data',
      category: 'problem_solving',
      question: 'What are the 4 steps to solve problems using data?',
      subtext: 'Textbook Page 44: Learn box',
      iconKey: 'robot',
      options: [
        '1. Collect data → 2. Look at data → 3. Understand meaning → 4. Make decisions',
        '1. Guess the answer → 2. Delete data → 3. Buy toys → 4. Go home',
        '1. Print paper → 2. Turn off screen → 3. Walk outside → 4. Sleep',
        '1. Draw circles → 2. Color squares → 3. Erase table → 4. Restart'
      ],
      answer: '1. Collect data → 2. Look at data → 3. Understand meaning → 4. Make decisions',
      explanation: 'To solve problems: First collect data, examine it carefully, find its meaning, and use that insight to make smart decisions!'
    },
    {
      id: 'q_dat_7',
      unit: 3,
      unitTitle: 'Unit 3: Be a Data Expert',
      mode: 'c_data',
      category: 'devices',
      question: 'Which computing device is used to automatically record weather temperature data over 24 hours?',
      subtext: 'Syllabus Page 2: Computing devices used to record data',
      iconKey: 'sensor',
      options: [
        'A temperature sensor connected to a computer data-logger',
        'A headphone set',
        'A printer with coloured ink',
        'A game controller joystick'
      ],
      answer: 'A temperature sensor connected to a computer data-logger',
      explanation: 'Temperature sensors and data-loggers automatically record continuous readings day and night without human presence.'
    }
  ],

  // ================= 3. SORTING CHALLENGES =================
  // Basket sorting minigames
  sortBaskets: [
    {
      id: 'sort_hw_sw',
      title: 'Hardware vs Software Sorter',
      desc: 'Sort each item into Hardware (Physical) or Software (Programs)',
      basket1: { key: 'hardware', label: '💻 Hardware (Physical)', color: '#1cb0f6' },
      basket2: { key: 'software', label: '📱 Software (Apps / Code)', color: '#ce82ff' },
      items: [
        { name: 'Computer Monitor', category: 'hardware', icon: 'computer' },
        { name: 'Scratch Coding App', category: 'software', icon: 'scratch_blocks' },
        { name: 'Computer Mouse', category: 'hardware', icon: 'mouse' },
        { name: 'Google Chrome Browser', category: 'software', icon: 'scratch_blocks' },
        { name: 'Keyboard', category: 'hardware', icon: 'keyboard' },
        { name: 'Video Game App', category: 'software', icon: 'scratch_blocks' },
        { name: 'USB Flash Drive', category: 'hardware', icon: 'usb_drive' },
        { name: 'Operating System (Windows)', category: 'software', icon: 'scratch_blocks' }
      ]
    },
    {
      id: 'sort_manual_auto',
      title: 'Manual vs Automatic Input Sorter',
      desc: 'Sort into Manual (Human Operated) or Automatic (Smart/Sensors)',
      basket1: { key: 'manual', label: '🖐️ Manual Input', color: '#ff9600' },
      basket2: { key: 'automatic', label: '⚡ Automatic Input', color: '#58cc02' },
      items: [
        { name: 'Typing on Keyboard', category: 'manual', icon: 'keyboard' },
        { name: 'Supermarket Barcode Reader', category: 'automatic', icon: 'barcode' },
        { name: 'Clicking Computer Mouse', category: 'manual', icon: 'mouse' },
        { name: 'Contactless RFID Card Tap', category: 'automatic', icon: 'rfid' },
        { name: 'Fingerprint Biometric Scanner', category: 'automatic', icon: 'fingerprint' },
        { name: 'Speaking into Microphone', category: 'manual', icon: 'microphone' },
        { name: 'Greenhouse Temperature Sensor', category: 'automatic', icon: 'sensor' },
        { name: 'Tapping Smartphone Touchscreen', category: 'manual', icon: 'computer' }
      ]
    },
    {
      id: 'sort_cat_disc',
      title: 'Categorical vs Discrete Data Sorter',
      desc: 'Sort into Categorical (Categories / Words) or Discrete (Countable Numbers)',
      basket1: { key: 'categorical', label: '🏷️ Categorical Data', color: '#ce82ff' },
      basket2: { key: 'discrete', label: '🔢 Discrete Data', color: '#1cb0f6' },
      items: [
        { name: 'Hair Colour (Blonde, Black, Brown)', category: 'categorical', icon: 'bar_chart' },
        { name: 'Exam Test Scores (18, 19, 20)', category: 'discrete', icon: 'bar_chart' },
        { name: 'Weather Types (Sunny, Rainy, Snowy)', category: 'categorical', icon: 'weather_sun' },
        { name: 'Number of Students Present (24, 25)', category: 'discrete', icon: 'bar_chart' },
        { name: 'Favorite Animals (Cat, Dog, Bird)', category: 'categorical', icon: 'robot' },
        { name: 'Number of Video Games Sold (500)', category: 'discrete', icon: 'bar_chart' }
      ]
    }
  ]
};
