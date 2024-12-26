const syllabusCompanyData =  [
  {
    id: 'accenture',
    companyName: 'Accenture',
    content: [
      {
        id: 'syllabus-2025',
        title: 'Accenture Syllabus 2025',
        heading: 'Accenture Syllabus for 2025 for freshers',
        description:
          'Accenture Syllabus for 2025 for freshers can be found here on this page. The syllabus is updated for all types of On-Campus and Off-Campus Drives. Here are a few highlights:',
        highlights: [
          '3 Rounds in the Accenture Hiring test divided into 8 sections and an interview round.',
          '92 Questions in the initial 7 Sections with 135 minutes to solve.',
          'Communication Assessment Test as the last section.',
          'Clearing the Placement Paper qualifies for the Interview Round.',
          'Updated hiring pattern for 2025 graduates.',
        ],
        sections: [
          {
            id: 'online-test',
            type: 'test',
            heading: 'Accenture Online Test Syllabus for 2025',
            details: {
              topics: [
                {id: 'verbal', name: 'English Ability (Verbal)', questions: 17},
                {
                  id: 'reasoning',
                  name: 'Critical Reasoning and Problem Solving',
                  questions: 18,
                },
                {id: 'abstract', name: 'Abstract Reasoning', questions: 15},
                {
                  id: 'ms-office',
                  name: 'Common Application and MS Office',
                  questions: 12,
                },
                {id: 'pseudo-code', name: 'Pseudo Code', questions: 18},
                {
                  id: 'networking',
                  name: 'Fundamentals of Networking, Security, and Cloud',
                  questions: 10,
                },
                {id: 'coding', name: 'Coding Round', questions: 2},
              ],
              notes: [
                'Inter-Sectional Navigation is allowed.',
                'No negative marking.',
                'Total time duration is 150 minutes.',
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'dxc',
    companyName: 'DXC Technology',
    content: [
      {
        id: 'syllabus-2024',
        title: 'DXC Technology Latest Syllabus 2024',
        heading: 'DXC Technology Latest Syllabus 2024',
        description:
          'Latest Updated DXC Technology Syllabus 2024 is given here on this page. We have collected all the updated information about DXC Technology Syllabus and Test pattern here on this page.',
        highlights: [
          'DXC hires through the AMCAT- SHL Platform.',
          'Number of Sections: 7',
          'Previously answered questions cannot be revisited.',
          'No Negative Marking.',
          'Registration Mode: Online.',
        ],
        sections: [
          {
            id: 'quantitative',
            type: 'test',
            heading: 'DXC Quantitative Section',
            details: {
              topics: [
                {id: 'lcm-hcf', name: 'LCM & HCF'},
                {id: 'profit-loss', name: 'Profit & Loss'},
                {id: 'interest', name: 'Simple and Compound Interest'},
                {id: 'time-speed', name: 'Time Speed and Distance'},
                {id: 'averages', name: 'Averages'},
                {id: 'logarithms', name: 'Logarithms'},
                {id: 'probability', name: 'Probability'},
              ],
              notes: [
                'This section is time-bound, and speed is crucial to solving all questions.',
                'Topics such as Profit & Loss, Time-Speed-Distance, and Logarithms are frequently asked.',
                'No negative marking is present, but time management is key.',
                'A good practice of solving problems quickly will help you perform better.',
              ],
            },
          },
          {
            id: 'verbal',
            type: 'test',
            heading: 'DXC Verbal Ability Section',
            details: {
              topics: [
                {id: 'sentence-correction', name: 'Sentence Correction'},
                {id: 'reading-comprehension', name: 'Reading Comprehension'},
                {id: 'synonyms', name: 'Synonyms & Antonyms'},
                {id: 'error-spotting', name: 'Error Spotting'},
              ],
              notes: [
                'The Verbal section assesses your understanding of grammar, vocabulary, and language.',
                'Reading comprehension passages may appear complex, so reading the questions first can be helpful.',
                'Sentence Correction questions will test your understanding of syntax and grammar.',
                'Antonyms and synonyms require a strong vocabulary base, so be sure to practice them.',
              ],
            },
          },
          {
            id: 'reasoning',
            type: 'test',
            heading: 'DXC Logical Reasoning Section',
            details: {
              topics: [
                {id: 'arrangement', name: 'Arrangements'},
                {id: 'blood-relations', name: 'Blood Relations'},
                {id: 'statement-conclusion', name: 'Statement & Conclusions'},
                {id: 'coding-decoding', name: 'Coding and Decoding'},
              ],
              notes: [
                'Logical Reasoning tests your ability to think critically and solve problems under time pressure.',
                'Focus on pattern recognition, sequencing, and coding-decoding questions.',
                'Blood Relations and Arrangements are important and are often asked in multiple variations.',
                'Practice with sample questions to improve speed and accuracy.',
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'capgemini',
    companyName: 'CapGemini',
    content: [
      {
        id: 'syllabus-2025',
        title: 'Capgemini Exceller Syllabus 2025',
        heading: 'Capgemini Syllabus For Placement',
        description:
          'Capgemini Exceller has changed its Syllabus for its recruitment drive in 2025. The number of rounds and the entire selection process have been updated.',
        highlights: [
          'The first round is the Technical Test round conducted by CoCubes/AMCAT.',
          'Eligibility Criteria: At least 60% in BE/B.Tech.',
          'Backlogs: 1 active backlog (must be cleared).',
          'The second round is a Technical Interview.',
          'The final round is an HR Interview.',
        ],
        sections: [
          {
            id: 'technical-test',
            type: 'test',
            heading: 'Capgemini Technical Test Syllabus',
            details: {
              topics: [
                {id: 'programming', name: 'Programming Concepts'},
                {id: 'os', name: 'Operating Systems'},
                {id: 'data-structures', name: 'Data Structures'},
                {id: 'dbms', name: 'Database Management Systems (DBMS)'},
              ],
              notes: [
                'You will be tested on your basic programming concepts.',
                'Ensure you understand the fundamentals of data structures and algorithms.',
                'The test will contain multiple-choice questions and coding problems.',
              ],
            },
          },
          {
            id: 'technical-interview',
            type: 'interview',
            heading: 'Capgemini Technical Interview',
            details: {
              topics: [
                {id: 'problem-solving', name: 'Problem-Solving and Algorithms'},
                {
                  id: 'programming-languages',
                  name: 'Programming Languages (C, C++, Java, etc.)',
                },
                {id: 'system-design', name: 'System Design'},
              ],
              notes: [
                'Prepare for questions based on problem-solving techniques and algorithms.',
                'You may be asked to write code for algorithms on the spot.',
                'Expect questions related to object-oriented programming concepts.',
              ],
            },
          },
          {
            id: 'hr-interview',
            type: 'interview',
            heading: 'Capgemini HR Interview',
            details: {
              topics: [
                {id: 'communication', name: 'Communication Skills'},
                {id: 'teamwork', name: 'Teamwork'},
                {id: 'adaptability', name: 'Adaptability'},
                {id: 'problem-solving', name: 'Problem-Solving'},
              ],
              notes: [
                'HR interview focuses on behavioral aspects, such as communication and teamwork.',
                'Be ready to answer questions about your resume, past experiences, and internships.',
                'Think about scenarios where you exhibited leadership, adaptability, and problem-solving skills.',
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'cocubes',
    companyName: 'CoCubes',
    content: [
      {
        id: 'syllabus-2024',
        title: 'CoCubes Syllabus and Online Test Pattern 2024',
        heading: 'CoCubes Syllabus for 2024',
        description:
          'CoCubes conducts online tests for recruitment. Below is the updated CoCubes paper pattern and exam syllabus for 2024.',
        highlights: [
          'Companies like Bosch, Tata, Capgemini, and many others use CoCubes for their hiring process.',
          'The test includes sections on Quantitative Aptitude, Logical Reasoning, Verbal Ability, and Coding.',
          'The test is typically for Quants, Logical, English, and Computer Programming.',
          'Some companies may include coding tests based on your performance.',
          'The test duration is generally around 90 minutes.',
        ],
        sections: [
          {
            id: 'aptitude',
            type: 'test',
            heading: 'CoCubes Aptitude Test',
            details: {
              topics: [
                {id: 'algebra', name: 'Algebra'},
                {id: 'probability', name: 'Probability and Permutation'},
                {id: 'progression', name: 'Progression'},
                {id: 'time-work', name: 'Time and Work'},
                {id: 'mensuration', name: 'Mensuration'},
                {id: 'simple-interest', name: 'Simple and Compound Interest'},
              ],
              notes: [
                'This section tests your ability to solve problems quickly and accurately.',
                'Make sure you practice algebra, progressions, and mensuration problems.',
                'You will be given a set of problems, and you must solve them under time constraints.',
              ],
            },
          },
          {
            id: 'logical-reasoning',
            type: 'test',
            heading: 'CoCubes Logical Reasoning Test',
            details: {
              topics: [
                {id: 'arrangements', name: 'Arrangements'},
                {id: 'blood-relations', name: 'Blood Relations'},
                {id: 'visual-reasoning', name: 'Visual Reasoning'},
                {
                  id: 'statements-conclusions',
                  name: 'Statements and Conclusions',
                },
              ],
              notes: [
                'The logical reasoning section assesses your ability to think logically and solve problems.',
                'There may be puzzles, arrangements, and questions involving blood relations.',
                'Focus on practicing logic puzzles and improving your speed in solving such problems.',
              ],
            },
          },
          {
            id: 'coding',
            type: 'test',
            heading: 'CoCubes Coding Test',
            details: {
              topics: [
                {
                  id: 'basic-coding',
                  name: 'Basic Coding (C, C++, Java, Python)',
                },
                {id: 'data-structures', name: 'Data Structures'},
              ],
              notes: [
                'Prepare for coding problems that test your knowledge of basic programming and data structures.',
                'The coding test may contain 2-3 problems with varying difficulty levels.',
                'Ensure you practice coding regularly and focus on common algorithms like searching, sorting, and linked lists.',
              ],
            },
          },
          {
            id: 'writing-test',
            type: 'test',
            heading: 'CoCubes Writing Test (WET)',
            details: {
              topics: [{id: 'essay', name: 'Essay Writing'}],
              notes: [
                'The Writing English Test (WET) involves writing essays or short paragraphs.',
                'Ensure you have good writing skills and can express your thoughts clearly.',
                'Practice writing essays on common topics like social issues, technology, and education.',
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'infosys',
    companyName: 'Infosys',
    content: [
      {
        id: 'syllabus-2025',
        title: 'Infosys Syllabus 2025',
        heading: 'Infosys Recruitment Process and Syllabus 2025',
        description:
          'Infosys recruitment process and syllabus have been updated for 2025. The process includes an online test, technical interview, and HR round.',
        highlights: [
          'Online test includes three sections: Aptitude, Logical Reasoning, and Verbal Ability.',
          'Technical interview focuses on core subjects and projects.',
          'HR interview assesses communication skills and adaptability.',
          'No negative marking in the online test.',
          'Total time for the online test is 120 minutes.',
        ],
        sections: [
          {
            id: 'aptitude',
            type: 'test',
            heading: 'Infosys Aptitude Test',
            details: {
              topics: [
                { id: 'percentages', name: 'Percentages' },
                { id: 'profit-loss', name: 'Profit & Loss' },
                { id: 'ratios', name: 'Ratios & Proportions' },
                { id: 'algebra', name: 'Algebra' },
              ],
              notes: [
                'Aptitude section focuses on basic mathematical skills.',
                'Practice topics like percentages and profit & loss.',
                'Time management is crucial to completing all questions.',
              ],
            },
          },
          {
            id: 'logical',
            type: 'test',
            heading: 'Infosys Logical Reasoning',
            details: {
              topics: [
                { id: 'puzzles', name: 'Puzzles' },
                { id: 'syllogisms', name: 'Syllogisms' },
                { id: 'coding-decoding', name: 'Coding & Decoding' },
              ],
              notes: [
                'Focus on solving puzzles and pattern recognition.',
                'Coding-Decoding questions often appear in this section.',
                'Syllogism problems test logical deduction skills.',
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'tcs',
    companyName: 'TCS',
    content: [
      {
        id: 'syllabus-2024',
        title: 'TCS National Qualifier Test (NQT) Syllabus 2024',
        heading: 'TCS NQT 2024 Exam Pattern and Syllabus',
        description:
          'The TCS NQT syllabus is designed to assess candidates cognitive skills, programming ability, and overall personality.',
        highlights: [
          'Four sections: Verbal Ability, Reasoning Ability, Quantitative Aptitude, and Programming.',
          'Each section has a predefined time limit.',
          'Programming includes both multiple-choice and coding questions.',
          'Assessment is adaptive in nature.',
          'No negative marking for incorrect answers.',
        ],
        sections: [
          {
            id: 'verbal',
            type: 'test',
            heading: 'TCS Verbal Ability Section',
            details: {
              topics: [
                { id: 'reading-comprehension', name: 'Reading Comprehension' },
                { id: 'grammar', name: 'Grammar Usage' },
                { id: 'sentence-completion', name: 'Sentence Completion' },
              ],
              notes: [
                'Verbal section tests English language proficiency.',
                'Focus on grammar, vocabulary, and comprehension skills.',
                'Practice reading passages and answering related questions.',
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'wipro',
    companyName: 'Wipro',
    content: [
      {
        id: 'syllabus-2024',
        title: 'Wipro Syllabus 2024',
        heading: 'Wipro Syllabus and Exam Pattern for Freshers 2024',
        description:
          'Wipros syllabus for freshers in 2024 includes an online test, technical round, and HR interview.',
        highlights: [
          'Adaptive online test pattern.',
          'Focus on cognitive ability and programming skills.',
          'Technical interview assesses domain-specific knowledge.',
          'HR interview focuses on behavioral traits.',
        ],
        sections: [
          {
            id: 'quantitative',
            type: 'test',
            heading: 'Wipro Quantitative Ability',
            details: {
              topics: [
                { id: 'time-speed', name: 'Time, Speed & Distance' },
                { id: 'percentages', name: 'Percentages' },
                { id: 'profit-loss', name: 'Profit & Loss' },
              ],
              notes: [
                'Quantitative ability section focuses on numerical problem-solving.',
                'Practice common topics like percentages and profit & loss.',
                'Ensure you manage time effectively during this section.',
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'mindtree',
    companyName: 'Mindtree',
    content: [
      {
        id: 'syllabus-2025',
        title: 'Mindtree Syllabus 2025',
        heading: 'Mindtree Recruitment Process 2025',
        description:
          'The recruitment process for Mindtree in 2025 includes an aptitude test, technical test, and interview rounds.',
        highlights: [
          'Focus on programming concepts and aptitude.',
          'Coding round involves real-time problem-solving.',
          'Interviews test technical and behavioral skills.',
          'Eligibility: Minimum 60% aggregate in academics.',
        ],
        sections: [
          {
            id: 'coding',
            type: 'test',
            heading: 'Mindtree Coding Round',
            details: {
              topics: [
                { id: 'data-structures', name: 'Data Structures' },
                { id: 'algorithms', name: 'Algorithms' },
              ],
              notes: [
                'Practice data structure implementation and algorithms.',
                'Focus on efficient coding practices.',
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'hcl',
    companyName: 'HCL',
    content: [
      {
        id: 'syllabus-2025',
        title: 'HCL Recruitment Syllabus 2025',
        heading: 'HCL Syllabus for Freshers 2025',
        description:
          'HCL recruitment for freshers in 2025 involves an online test followed by interviews.',
        highlights: [
          'Online test covers aptitude, technical skills, and communication.',
          'No negative marking.',
          'Interviews assess problem-solving and technical expertise.',
        ],
        sections: [
          {
            id: 'technical',
            type: 'test',
            heading: 'HCL Technical Section',
            details: {
              topics: [
                { id: 'programming', name: 'Programming Basics' },
                { id: 'networking', name: 'Networking Fundamentals' },
                { id: 'dbms', name: 'Database Management Systems' },
              ],
              notes: [
                'Focus on programming, networking, and database concepts.',
                'Ensure you have practical knowledge of basic coding.',
              ],
            },
          },
        ],
      },
    ],
  },
]


  
export default syllabusCompanyData
  
  