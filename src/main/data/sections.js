// sections.js
const sections = [
  {
    header: "Experience",
    items: [
      {
        header: "Graduate Student Assistant (AI-Assisted Visual Analytics Developer)",
        subheader: "UCDavis, VIDI lab",
        meta: "July 2023 - September 2024",
        listItems: [
          {
            main: "Created a **Vue-based** three-stage visual interface for media bias assessment",
            subItems: [
              "Spearheaded improvements reaching **83.3%** effective navigation and **73.8%** user engagement",
              "Managed **25,000+** articles from 6 news outlets using **PostgreSQL** on **AWS EC2** for data storage",
              "Collaborated with lab researchers to publish findings in ***IEEE*** Transactions on Visualization and Computer Graphics (arXiv:2403.00334)"
            ]
          },
          {
            main: "Initiated **Svelte-based** frontend for environmental policy analysis with **LLM**",
            subItems: [
              "Created 5+ interactive visualizations, including network graphs and **sentiment analysis**, to interpret complex ecological data",
              "Implemented an AI-driven orthogonal routing algorithm using **A* search**",
              "Collaborated with environmental scientists to engineer **ChatGPT API** prompts analyzing interview transcripts with **NLP**"
            ]
          }
        ],
        chips: [
          { label: "Vue.js", type: "primary" },
          { label: "Svelte", type: "primary" },
          { label: "PostgreSQL", type: "secondary" },
          { label: "AWS", type: "secondary" },
          { label: "LLM", type: "secondary" },
          { label: "NLP", type: "primary" }
        ]
      },
      {
        header: "Programming Teaching Assistant",
        subheader: "UCDavis, Information Visualization",
        meta: "January 2024 - March 2024",
        listItems: [
          {
            main: "Prepared course materials and coding assignments focusing on **JavaScript** and modern data visualization libraries like **D3.js**, with materials maintained in **GitHub** repository"
          },
          {
            main: "Mentored **50+** students in applying current research to analytical and **storytelling** projects, emphasizing **JavaScript**-based web visualization techniques"
          }
        ],
        chips: [
          { label: "JavaScript", type: "primary" },
          { label: "D3.js", type: "primary" },
          { label: "Git", type: "secondary" }
        ]
      },
      {
        header: "Undergraduate Research Assistant",
        subheader: "NTNU, Data Visualization Lab",
        meta: "September 2021 - June 2022",
        listItems: [
          {
            main: "Analyzed Isabel Typhoon Data using Unity platform and C# with 3D visualization "
          },
          {
            main: "Implemented Marching Cubes algorithm for iso-surface generation and volume rendering"
          }
        ],
        chips: [
          { label: "C#", type: "primary" },
          { label: "Unity", type: "primary" },
        ]
      }
      // Add other experience items similarly
    ]
  },
  {
    header: "Education",
    items: [
      {
        header: "Master of Science in Computer Science",
        subheader: "University of California, Davis",
        meta: "September 2022 - June 2024",
        listItems: [
          {
            main: "Relevant Coursework: Information Visualization, Machine Learning and Discovery, Distributed Database System, Algorithm Design and Analysis, Computer Architecture, Network Theory and Applications, Computer and Information Security",
          },
        ],
        // chips: [
        //   { label: "AI", type: "primary" },
        //   { label: "ML", type: "primary" },
        //   { label: "NLP", type: "primary" }
        // ]
      },
      {
        header: "Bachelor of Science in Computer Science",
        subheader: "National Taiwan Normal University",
        meta: "September 2018 - June 2022",
        listItems: [
          {
            main: "Relevant Coursework: Data Structures, Computer Algorithms, Computer Graphics, Data Visualization, Artificial Intelligence, Data Mining, Numerical Methods, Database Theories, Software Engineering, Image Processing",
          }
        ],
        // chips: [
        //   { label: "DS", type: "primary" },
        //   { label: "Algorithms", type: "primary" },
        //   { label: "Software Engineering", type: "primary" }
        // ]
      }
    ]
  }
  // Add other sections (Education, Projects, etc.)
];

export default sections;