const programmingDetails = [
  {
    name: "Python",
    difficulty: "Easy to Moderate",
    description: "Python is a versatile, high-level programming language known for its simplicity and readability. It's an excellent choice for beginners and is widely used in data science, artificial intelligence, web development, and automation.",
    useCases: [
      "Web Development",
      "Data Science",
      "Automation",
      "Artificial Intelligence",
      "Machine Learning",
      "Internet of Things (IoT)"
    ],
    learningResources: [
      "Official Docs",
      "Udemy Courses",
      "YouTube Tutorials",
      "Books like 'Python Crash Course'",
      "Real Python Website",
      "Coursera Python Courses"
    ],
    bestFor: [
      "Beginner Programmers",
      "Data Analysts",
      "AI Enthusiasts",
      "Automation Engineers"
    ],
    tools: [
      "PyCharm",
      "VS Code",
      "Jupyter Notebook",
      "Spyder",
      "Anaconda"
    ],
    keyConcepts: [
      "Variables & Data Types",
      "Control Flow",
      "Functions",
      "Object-Oriented Programming (OOP)",
      "Libraries like NumPy, pandas",
      "Error Handling"
    ],
    communitySupport: "Large community with lots of tutorials and open-source projects.",
    experienceLevel: "Beginner to Intermediate",
    bestForLearning: [
      "Hands-on Projects",
      "Video Tutorials",
      "Books"
    ],
    majorCompaniesUsing: [
      "Google",
      "Instagram",
      "Spotify",
      "Dropbox"
    ],
    assignments: [
      {
        title: "Basic Python Operations",
        description: "Write a Python program that takes user input and performs basic arithmetic operations like addition, subtraction, multiplication, and division.",
        difficulty: "Easy"
      },
      {
        title: "Data Analysis with Pandas",
        description: "Use Python and Pandas to analyze a dataset (CSV file). Clean the data and generate basic statistical reports.",
        difficulty: "Moderate"
      }
    ],
    questions: [
      {
        question: "What is the difference between a list and a tuple in Python?",
        answer: "A list is mutable (can be changed), while a tuple is immutable (cannot be changed)."
      },
      {
        question: "What is the purpose of the `self` keyword in Python?",
        answer: "`self` refers to the instance of the class in object-oriented programming. It allows instance variables and methods to be accessed within a class."
      }
    ]
  },
  {
    name: "JavaScript",
    difficulty: "Moderate",
    description: "JavaScript is a dynamic programming language that is commonly used for building interactive websites and web applications. It is an essential tool for front-end development and also works on the server-side with Node.js.",
    useCases: [
      "Web Development",
      "Mobile App Development",
      "Game Development",
      "Backend Development (Node.js)"
    ],
    learningResources: [
      "MDN Web Docs",
      "JavaScript.info",
      "FreeCodeCamp",
      "YouTube Tutorials",
      "Eloquent JavaScript Book",
      "Codecademy Courses"
    ],
    bestFor: [
      "Frontend Developers",
      "Full Stack Developers",
      "Game Developers",
      "Web App Developers"
    ],
    tools: [
      "VS Code",
      "Web Browsers (Chrome, Firefox)",
      "Node.js",
      "Webpack",
      "Babel"
    ],
    keyConcepts: [
      "Variables & Data Types",
      "DOM Manipulation",
      "Asynchronous Programming (Promises, async/await)",
      "Event Handling",
      "Closures",
      "ES6+ Features"
    ],
    communitySupport: "Large, active community with tons of resources, tutorials, and frameworks.",
    experienceLevel: "Intermediate to Advanced",
    bestForLearning: [
      "Online Coding Platforms",
      "Interactive Coding Exercises"
    ],
    majorCompaniesUsing: [
      "Netflix",
      "Airbnb",
      "Uber",
      "LinkedIn"
    ],
    assignments: [
      {
        title: "DOM Manipulation",
        description: "Create a webpage with dynamic content using JavaScript. Use DOM methods to update the page's content based on user input.",
        difficulty: "Moderate"
      },
      {
        title: "Asynchronous JavaScript",
        description: "Write a program using JavaScript Promises and async/await to fetch data from an API and display it on the webpage.",
        difficulty: "Moderate"
      }
    ],
    questions: [
      {
        question: "What is event delegation in JavaScript?",
        answer: "Event delegation is a technique where a single event listener is added to a parent element, and events are captured from its child elements using event bubbling."
      },
      {
        question: "What are closures in JavaScript?",
        answer: "A closure is a function that retains access to its lexical scope, even when the function is executed outside of that scope."
      }
    ]
  },
  {
    name: "Java",
    difficulty: "Moderate to Hard",
    description: "Java is a high-level, class-based, object-oriented programming language. It is widely used in enterprise applications, Android development, and large-scale systems due to its platform independence and robustness.",
    useCases: [
      "Enterprise Applications",
      "Android App Development",
      "Backend Development",
      "Web Development (Spring Framework)",
      "Big Data Technologies"
    ],
    learningResources: [
      "Official Docs",
      "Head First Java Book",
      "Udemy Courses",
      "YouTube Tutorials",
      "Codecademy Java Courses",
      "Java Brains Website"
    ],
    bestFor: [
      "Enterprise Developers",
      "Android App Developers",
      "Backend Developers",
      "Big Data Engineers"
    ],
    tools: [
      "Eclipse",
      "IntelliJ IDEA",
      "NetBeans",
      "Maven",
      "Spring Framework"
    ],
    keyConcepts: [
      "Object-Oriented Programming (OOP)",
      "Multithreading",
      "Java Collections Framework",
      "JVM and Memory Management",
      "Exceptions Handling",
      "Lambda Expressions (Java 8)"
    ],
    communitySupport: "Large community with excellent support from forums and user groups.",
    experienceLevel: "Intermediate to Advanced",
    bestForLearning: [
      "Books",
      "Practice Projects",
      "Online Courses"
    ],
    majorCompaniesUsing: [
      "Amazon",
      "LinkedIn",
      "eBay",
      "Twitter"
    ],
    assignments: [
      {
        title: "OOP with Java",
        description: "Create a class-based program that demonstrates the usage of inheritance, polymorphism, and encapsulation in Java.",
        difficulty: "Moderate"
      },
      {
        title: "Multithreading in Java",
        description: "Implement a multi-threaded Java application that simulates a real-world scenario like a bank account with multiple customers performing transactions concurrently.",
        difficulty: "Hard"
      }
    ],
    questions: [
      {
        question: "What is the difference between `==` and `===` in Java?",
        answer: "`==` compares values, while `===` compares both values and types (strict equality)."
      },
      {
        question: "What is the role of the `final` keyword in Java?",
        answer: "The `final` keyword is used to declare constants, prevent method overriding, and prevent inheritance in classes."
      }
    ]
  },
  {
    name: "C++",
    difficulty: "Hard",
    description: "C++ is a general-purpose, high-performance programming language known for its low-level memory manipulation and efficient execution. It is widely used in systems programming, game development, and high-performance applications.",
    useCases: [
      "Systems Programming",
      "Game Development",
      "Embedded Systems",
      "High-Performance Computing",
      "Software Development"
    ],
    learningResources: [
      "C++ Programming: Principles and Practice",
      "LearnCpp.com",
      "Udemy Courses",
      "YouTube Tutorials",
      "Books like 'Effective C++'"
    ],
    bestFor: [
      "System Programmers",
      "Game Developers",
      "Performance Engineers",
      "Embedded Systems Engineers"
    ],
    tools: [
      "GCC Compiler",
      "Visual Studio",
      "CLion",
      "Xcode",
      "CMake"
    ],
    keyConcepts: [
      "Memory Management (Pointers, References)",
      "Object-Oriented Programming (OOP)",
      "STL (Standard Template Library)",
      "Templates and Generics",
      "Multithreading",
      "RAII (Resource Acquisition Is Initialization)"
    ],
    communitySupport: "Active community with a large number of libraries, forums, and open-source projects.",
    experienceLevel: "Advanced",
    bestForLearning: [
      "Books",
      "Code Challenges",
      "Open-Source Projects"
    ],
    majorCompaniesUsing: [
      "Microsoft",
      "Intel",
      "Facebook",
      "Adobe"
    ],
    assignments: [
      {
        title: "Memory Management",
        description: "Write a C++ program that demonstrates dynamic memory allocation and deallocation using pointers.",
        difficulty: "Hard"
      },
      {
        title: "Multithreading with C++",
        description: "Create a multi-threaded program that performs parallel processing of large data sets using C++.",
        difficulty: "Hard"
      }
    ],
    questions: [
      {
        question: "What is RAII in C++?",
        answer: "RAII stands for Resource Acquisition Is Initialization. It is a programming technique where resources are acquired during object creation and released during object destruction."
      },
      {
        question: "What is the purpose of `new` and `delete` in C++?",
        answer: "`new` is used to dynamically allocate memory, while `delete` is used to deallocate that memory."
      }
    ]
  },
  {
    name: "Ruby",
    difficulty: "Moderate",
    description: "Ruby is an open-source, dynamic programming language focused on simplicity and productivity. It has an elegant syntax and is widely used for web development with the Ruby on Rails framework.",
    useCases: [
      "Web Development",
      "Backend Development",
      "DevOps",
      "Automation"
    ],
    learningResources: [
      "Official Ruby Docs",
      "Learn-Ruby.org",
      "Ruby Warrior Game (for beginners)",
      "RailsCasts (for Rails learning)",
      "RubyMonk Tutorials"
    ],
    bestFor: [
      "Web Developers",
      "Backend Developers",
      "Automation Engineers",
      "Startups & Small Businesses"
    ],
    tools: [
      "RubyMine",
      "VS Code",
      "Sublime Text",
      "Rails",
      "RVM (Ruby Version Manager)"
    ],
    keyConcepts: [
      "Ruby Syntax & Semantics",
      "Object-Oriented Programming (OOP)",
      "Ruby on Rails Framework",
      "Metaprogramming",
      "Blocks and Procs",
      "Gems (Ruby Libraries)"
    ],
    communitySupport: "Strong community with many resources and an extensive library ecosystem.",
    experienceLevel: "Intermediate to Advanced",
    bestForLearning: [
      "Hands-on Projects",
      "Rails Tutorials",
      "Ruby Books"
    ],
    majorCompaniesUsing: [
      "GitHub",
      "Airbnb",
      "Shopify",
      "Basecamp"
    ],
    assignments: [
      {
        title: "Ruby on Rails CRUD App",
        description: "Create a basic CRUD (Create, Read, Update, Delete) application using Ruby on Rails to manage a list of books.",
        difficulty: "Moderate"
      },
      {
        title: "Metaprogramming in Ruby",
        description: "Write Ruby code that dynamically creates classes and methods at runtime using metaprogramming techniques.",
        difficulty: "Hard"
      }
    ],
    questions: [
      {
        question: "What is the purpose of the `self` keyword in Ruby?",
        answer: "`self` refers to the current object in Ruby. It is used to access instance variables and methods within the current context."
      },
      {
        question: "What is the difference between `Proc` and `Lambda` in Ruby?",
        answer: "Both `Proc` and `Lambda` are callable objects, but a `Lambda` checks the number of arguments passed, while a `Proc` does not. Additionally, `Lambda` returns from the calling method, while `Proc` does not."
      }
    ]
  }
];
export default programmingDetails