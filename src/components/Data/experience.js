const interviewExperiences = [
  {
    id: 1,
    company: 'Google',
    role: 'Software Engineer',
    rounds: 4,
    candidate: 'Alice',
    status: 'SELECTED',
    interviewType: 'online',
    experienceDate: '2024-12-01',
    packageCtc: '30 LPA',
    details: {
      description: 'Challenging but rewarding experience. Focused on algorithms and system design.',
      location: 'Remote (Online)',
      interviewer: 'John Doe, Senior Engineer',
      duration: '1.5 hours',
      feedback: 'Strong problem-solving skills, excellent communication.',
      questions: [
        'Explain Dijkstra’s Algorithm',
        'Design a scalable chat application',
        'How would you optimize search performance in a large database?',
        'Explain the concept of Big O notation.'
      ]
    }
  },
  {
    id: 2,
    company: 'Microsoft',
    role: 'Data Scientist',
    rounds: 3,
    candidate: 'Bob',
    status: 'REJECTED',
    interviewType: 'offline',
    experienceDate: '2024-11-20',
    packageCtc: '25 LPA',
    details: {
      description: 'Questions focused on machine learning models, SQL, and statistics.',
      location: 'On-site at Microsoft HQ, Redmond',
      interviewer: 'Sarah Lee, Data Science Manager',
      duration: '2 hours',
      feedback: 'Good understanding of machine learning algorithms, but weak in SQL performance optimization.',
      questions: [
        'Explain overfitting and how to prevent it',
        'Write a SQL query for ranking sales',
        'What is cross-validation in machine learning?',
        'How would you improve a recommendation system?'
      ]
    }
  },
  {
    id: 3,
    company: 'Amazon',
    role: 'Backend Developer',
    rounds: 5,
    candidate: 'Charlie',
    status: 'SELECTED',
    interviewType: 'online',
    experienceDate: '2024-10-15',
    packageCtc: '28 LPA',
    details: {
      description: 'Great experience with a focus on scalability, system design, and API architecture.',
      location: 'Remote (Online)',
      interviewer: 'Michael Richards, Tech Lead',
      duration: '2 hours 15 minutes',
      feedback: 'Solid understanding of distributed systems, demonstrated strong coding skills.',
      questions: [
        'Design a RESTful API for an e-commerce platform',
        'Explain eventual consistency',
        'How would you implement caching to improve API performance?',
        'Describe a situation where you had to troubleshoot a production issue.'
      ]
    }
  },
  {
    id: 4,
    company: 'Facebook',
    role: 'Frontend Developer',
    rounds: 4,
    candidate: 'Diana',
    status: 'SELECTED',
    interviewType: 'offline',
    experienceDate: '2024-12-03',
    packageCtc: '35 LPA',
    details: {
      description: 'Focus on React, component design, and performance optimization.',
      location: 'On-site at Facebook Campus, Menlo Park',
      interviewer: 'James T, Senior Frontend Developer',
      duration: '1.5 hours',
      feedback: 'Excellent React knowledge and UI/UX design skills.',
      questions: [
        'Optimize a large React application',
        'Explain the virtual DOM',
        'How would you improve performance in a single-page application?',
        'What is the significance of code-splitting in React?'
      ]
    }
  },
  {
    id: 5,
    company: 'Tesla',
    role: 'DevOps Engineer',
    rounds: 3,
    candidate: 'Evan',
    status: 'REJECTED',
    interviewType: 'online',
    experienceDate: '2024-11-15',
    packageCtc: '22 LPA',
    details: {
      description: 'Focus on CI/CD pipelines, Docker, Kubernetes, and cloud infrastructure.',
      location: 'Remote (Online)',
      interviewer: 'Samantha Wright, DevOps Manager',
      duration: '1 hour',
      feedback: 'Lacked hands-on experience with Kubernetes.',
      questions: [
        'Explain Kubernetes architecture',
        'Set up a Jenkins pipeline',
        'Describe how you would handle infrastructure as code using Terraform.',
        'How would you implement monitoring for a cloud-based application?'
      ]
    }
  },
  {
    id: 6,
    company: 'Apple',
    role: 'iOS Developer',
    rounds: 4,
    candidate: 'Fiona',
    status: 'SELECTED',
    interviewType: 'offline',
    experienceDate: '2024-12-08',
    packageCtc: '32 LPA',
    details: {
      description: 'Questions on Swift, UI development, and Apple’s ecosystem.',
      location: 'On-site at Apple HQ, Cupertino',
      interviewer: 'Liam Green, iOS Team Lead',
      duration: '2 hours',
      feedback: 'Impressive knowledge of Swift and iOS development best practices.',
      questions: [
        'Explain Auto Layout in Swift',
        'Build a sample weather app UI',
        'Describe how you would handle memory management in iOS apps.',
        'How would you implement push notifications in an iOS app?'
      ]
    }
  },
  {
    id: 7,
    company: 'IBM',
    role: 'AI Researcher',
    rounds: 3,
    candidate: 'George',
    status: 'SELECTED',
    interviewType: 'online',
    experienceDate: '2024-11-25',
    packageCtc: '27 LPA',
    details: {
      description: 'Focus on neural networks, machine learning, and AI ethics.',
      location: 'Remote (Online)',
      interviewer: 'Sophia Thompson, AI Research Lead',
      duration: '1.5 hours',
      feedback: 'Demonstrated deep understanding of AI concepts and ethical considerations.',
      questions: [
        'Explain transformers in NLP',
        'How to mitigate bias in AI models',
        'Describe how you would build a neural network for image recognition.',
        'What are the ethical implications of using AI in healthcare?'
      ]
    }
  },
  {
    id: 8,
    company: 'Intel',
    role: 'Embedded Systems Engineer',
    rounds: 3,
    candidate: 'Hannah',
    status: 'REJECTED',
    interviewType: 'offline',
    experienceDate: '2024-10-10',
    packageCtc: '18 LPA',
    details: {
      description: 'In-depth questions on microcontrollers, hardware-software integration, and real-time systems.',
      location: 'On-site at Intel Campus, Santa Clara',
      interviewer: 'Jack Parker, Embedded Systems Manager',
      duration: '1 hour 45 minutes',
      feedback: 'Good hardware knowledge, but missed a few key concepts in real-time operating systems.',
      questions: [
        'Explain the concept of interrupt handling',
        'Write a simple ISR (Interrupt Service Routine)',
        'Describe how you would design a real-time system for a smart home device.',
        'How do you optimize power consumption in embedded systems?'
      ]
    }
  },
  {
    id: 9,
    company: 'Oracle',
    role: 'Database Administrator',
    rounds: 3,
    candidate: 'Ian',
    status: 'SELECTED',
    interviewType: 'online',
    experienceDate: '2024-11-01',
    packageCtc: '24 LPA',
    details: {
      description: 'Focused on database optimization, query performance, and system design.',
      location: 'Remote (Online)',
      interviewer: 'Olivia Harris, Senior DBA',
      duration: '1 hour 30 minutes',
      feedback: 'Good understanding of databases and optimization techniques.',
      questions: [
        'How to optimize a slow query',
        'Explain ACID properties',
        'What is database sharding and why is it used?',
        'How would you design a scalable database for an e-commerce platform?'
      ]
    }
  },
  {
    id: 10,
    company: 'Cisco',
    role: 'Network Engineer',
    rounds: 4,
    candidate: 'Jane',
    status: 'SELECTED',
    interviewType: 'offline',
    experienceDate: '2024-11-18',
    packageCtc: '26 LPA',
    details: {
      description: 'Focus on networking protocols, troubleshooting, and security.',
      location: 'On-site at Cisco, San Jose',
      interviewer: 'David Mitchell, Senior Network Engineer',
      duration: '2 hours',
      feedback: 'Strong networking knowledge and problem-solving abilities.',
      questions: [
        'Explain OSPF and BGP',
        'How to debug a network bottleneck',
        'What is the difference between a Layer 2 and Layer 3 switch?',
        'How would you handle a DDoS attack on a corporate network?'
      ]
    }
  }, {
    id: 11,
    company: 'Spotify',
    role: 'Software Engineer',
    rounds: 4,
    candidate: 'Liam',
    status: 'SELECTED',
    interviewType: 'online',
    experienceDate: '2024-12-10',
    packageCtc: '30 LPA',
    details: {
      description: 'Interview focused on algorithms, coding, and understanding of music streaming platforms.',
      location: 'Remote (Online)',
      interviewer: 'Rachel Green, Engineering Manager',
      duration: '1.5 hours',
      feedback: 'Great coding skills, and a good understanding of scalability in streaming services.',
      questions: [
        'Explain the working of a priority queue',
        'How would you design a recommendation system for music?',
        'Optimize a function that calculates the top N most streamed songs in a database',
        'What are the key considerations when designing a high-availability system for a music streaming platform?'
      ]
    }
  },
  {
    id: 12,
    company: 'Snapchat',
    role: 'Android Developer',
    rounds: 3,
    candidate: 'Olivia',
    status: 'REJECTED',
    interviewType: 'offline',
    experienceDate: '2024-11-30',
    packageCtc: '24 LPA',
    details: {
      description: 'Focus on Android development concepts, UI/UX, and app performance.',
      location: 'On-site at Snapchat HQ, Los Angeles',
      interviewer: 'Lucas Lee, Android Lead',
      duration: '1 hour 45 minutes',
      feedback: 'Strong understanding of UI principles but missed some key concepts in background processing in Android.',
      questions: [
        'Explain how to manage background tasks in Android',
        'How would you handle memory leaks in an Android application?',
        'What is the difference between RecyclerView and ListView in Android?',
        'Explain Android’s activity lifecycle.'
      ]
    }
  },
  {
    id: 13,
    company: 'Twitter',
    role: 'Backend Developer',
    rounds: 5,
    candidate: 'Sophia',
    status: 'SELECTED',
    interviewType: 'online',
    experienceDate: '2024-11-22',
    packageCtc: '33 LPA',
    details: {
      description: 'Interview involved solving complex backend system design and API-related problems.',
      location: 'Remote (Online)',
      interviewer: 'Brian Shaw, Senior Backend Engineer',
      duration: '2 hours',
      feedback: 'Strong system design skills and a good understanding of high-scale backend systems.',
      questions: [
        'Design an API for posting and retrieving tweets',
        'How would you optimize a system for handling millions of requests per second?',
        'Explain how you would handle data consistency in a distributed system',
        'What are some approaches to database partitioning?'
      ]
    }
  },
  {
    id: 14,
    company: 'Adobe',
    role: 'UI/UX Designer',
    rounds: 3,
    candidate: 'Emma',
    status: 'SELECTED',
    interviewType: 'offline',
    experienceDate: '2024-11-10',
    packageCtc: '27 LPA',
    details: {
      description: 'Interview focused on design principles, user-centric design, and Adobe’s design tools.',
      location: 'On-site at Adobe HQ, San Jose',
      interviewer: 'Aiden Martin, Senior UI Designer',
      duration: '1 hour 30 minutes',
      feedback: 'Great design portfolio, good understanding of usability testing.',
      questions: [
        'How do you conduct user research for a design project?',
        'Describe how you would design a user-friendly interface for a mobile app.',
        'Explain the difference between UI and UX design.',
        'How would you ensure that your designs are accessible?'
      ]
    }
  },
  {
    id: 15,
    company: 'Netflix',
    role: 'Machine Learning Engineer',
    rounds: 4,
    candidate: 'David',
    status: 'REJECTED',
    interviewType: 'online',
    experienceDate: '2024-10-25',
    packageCtc: '38 LPA',
    details: {
      description: 'Focused on machine learning models, performance evaluation, and recommendation systems.',
      location: 'Remote (Online)',
      interviewer: 'Grace T, ML Engineer Lead',
      duration: '1 hour 45 minutes',
      feedback: 'Great theoretical knowledge, but missed some practical aspects in model deployment.',
      questions: [
        'How would you improve a recommendation system for movies?',
        'What are the trade-offs between precision and recall in machine learning?',
        'Explain the concept of overfitting in machine learning.',
        'How would you deploy a machine learning model into production?'
      ]
    }
  },
  {
    id: 16,
    company: 'PayPal',
    role: 'Security Engineer',
    rounds: 3,
    candidate: 'Ethan',
    status: 'SELECTED',
    interviewType: 'offline',
    experienceDate: '2024-11-28',
    packageCtc: '30 LPA',
    details: {
      description: 'Focus on cybersecurity concepts, cryptography, and system vulnerability assessment.',
      location: 'On-site at PayPal HQ, San Jose',
      interviewer: 'Isaac Holmes, Lead Security Engineer',
      duration: '1 hour 30 minutes',
      feedback: 'Strong knowledge of security protocols and great problem-solving abilities.',
      questions: [
        'What are common types of network attacks, and how would you mitigate them?',
        'Explain how HTTPS works.',
        'Describe how you would perform a penetration test on a web application.',
        'What is your experience with cryptographic algorithms?'
      ]
    }
  },
  {
    id: 17,
    company: 'Salesforce',
    role: 'Cloud Engineer',
    rounds: 4,
    candidate: 'Mia',
    status: 'SELECTED',
    interviewType: 'online',
    experienceDate: '2024-12-05',
    packageCtc: '32 LPA',
    details: {
      description: 'Interview focused on cloud infrastructure, DevOps practices, and AWS.',
      location: 'Remote (Online)',
      interviewer: 'Hannah Smith, Cloud Architect',
      duration: '2 hours',
      feedback: 'Excellent knowledge of cloud platforms and CI/CD pipeline management.',
      questions: [
        'What are the key differences between IaaS, PaaS, and SaaS?',
        'How would you manage a cloud environment with multiple services?',
        'Explain how you would set up a continuous integration pipeline on AWS.',
        'Describe a disaster recovery plan for a cloud infrastructure.'
      ]
    }
  },
  {
    id: 18,
    company: 'LinkedIn',
    role: 'Product Manager',
    rounds: 5,
    candidate: 'Isla',
    status: 'REJECTED',
    interviewType: 'offline',
    experienceDate: '2024-10-30',
    packageCtc: '40 LPA',
    details: {
      description: 'Focused on product design, problem-solving, and market analysis.',
      location: 'On-site at LinkedIn HQ, Sunnyvale',
      interviewer: 'Daniel Watts, Senior Product Manager',
      duration: '2 hours 15 minutes',
      feedback: 'Strong analytical skills but missed some product design thinking aspects.',
      questions: [
        'How would you prioritize features for a new product launch?',
        'Describe a time when you made a difficult product decision.',
        'How do you gather and prioritize customer feedback?',
        'What is your approach to analyzing market competition?'
      ]
    }
  },
  {
    id: 19,
    company: 'Uber',
    role: 'Software Engineer',
    rounds: 4,
    candidate: 'Jack',
    status: 'SELECTED',
    interviewType: 'online',
    experienceDate: '2024-12-12',
    packageCtc: '28 LPA',
    details: {
      description: 'Interview focused on system design, coding, and scalability in transportation systems.',
      location: 'Remote (Online)',
      interviewer: 'Victoria Collins, Senior Software Engineer',
      duration: '1 hour 45 minutes',
      feedback: 'Good understanding of scalable systems and strong coding skills.',
      questions: [
        'How would you design an API for ride-sharing?',
        'Describe how you would handle high traffic load in a ride-booking app.',
        'What are the trade-offs between horizontal and vertical scaling?',
        'Explain how to implement a load balancing strategy.'
      ]
    }
  },
  {
    id: 20,
    company: 'Slack',
    role: 'Software Engineer',
    rounds: 4,
    candidate: 'Henry',
    status: 'REJECTED',
    interviewType: 'offline',
    experienceDate: '2024-10-20',
    packageCtc: '34 LPA',
    details: {
      description: 'Focus on real-time messaging systems, data consistency, and API design.',
      location: 'On-site at Slack HQ, San Francisco',
      interviewer: 'Megan Lee, Engineering Manager',
      duration: '2 hours',
      feedback: 'Solid coding skills, but missed some key aspects of building scalable messaging systems.',
      questions: [
        'Design a real-time messaging API',
        'Explain how you would ensure message delivery in a distributed system',
        'How would you handle message ordering in a chat system?',
        'Describe your approach to testing a messaging application.'
      ]
    }
  }
];

export default interviewExperiences;
