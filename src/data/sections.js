// sections.js
import { Tooltip } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
const sections = [
  {
    header: "Education",
    items: [
      {
        header: "Master of Science in Computer Science",
        subheader: "University of California, Davis",
        meta: "September 2023 - June 2024",
        listItems: [
          {
            main: (
              <>
                Relevant Coursework: Information Visualization, Machine Learning and Discovery, Distributed Database System, Algorithm Design and Analysis, Computer Architecture, Network Theory and Applications, Computer and Information Security
              </>
            )
          }
        ]
      },
      {
        header: "Bachelor of Science in Computer Science",
        subheader: "National Taiwan Normal University",
        meta: "September 2019 - June 2023",
        listItems: [
          {
            main: (
              <>
                Relevant Coursework: Data Structures, Computer Algorithms, Computer Graphics, Data Visualization, Artificial Intelligence, Data Mining, Numerical Methods, Database Theories, Software Engineering, Image Processing
              </>
            )
          }
        ]
      }
    ]
  },
  {
    header: "Work Experience",
    items: [
      {
        header: "Graduate Student Assistant (AI-Assisted Visual Analytics Developer)",
        subheader: "UCDavis, VIDI lab",
        meta: "July 2023 - September 2024",
        listItems: [
          {
            main: (
              <>
                Created a <strong>Vue-based</strong> three-stage visual interface for media bias assessment
              </>
            ),
            subItems: [
              (
                <>
                  Spearheaded improvements reaching <strong>83.3%</strong> effective navigation and <strong>73.8%</strong> user engagement
                </>
              ),
              (
                <>
                  Managed <strong>25,000+</strong> articles from 6 news outlets using <strong>PostgreSQL</strong> on <strong>AWS EC2</strong> for data storage
                </>
              ),
              (
                  <>
                    Co-authored <strong>
                        <a 
                          href="https://arxiv.org/abs/2403.00334" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            color: '#6C5CE7', 
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center'
                          }}
                          onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                          onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                        >
                          "NOVA: A visual interface for assessing polarizing media coverage"
                          <OpenInNewIcon style={{ 
                            fontSize: 16, 
                            marginLeft: 4, 
                            opacity: 0.7,
                            verticalAlign: 'middle' 
                          }} />
                        </a>
                    </strong> published in <em><strong>IEEE</strong> Transactions on Visualization and Computer Graphics</em>
                  </>
              )
            ]
          },
          {
            main: (
              <>
                Initiated <strong>Svelte-based</strong> frontend for environmental policy analysis with <strong>LLM</strong>
              </>
            ),
            subItems: [
              (
                <>
                  Created <strong>5+</strong> interactive visualizations, including network graphs and <strong>sentiment analysis</strong>, to interpret complex ecological data
                </>
              ),
              (
                <>
                  Implemented an AI-driven <strong>Orthogonal Routing</strong> algorithm using A* search
                </>
              ),
              (
                <>
                  Collaborated with environmental scientists to engineer <strong>ChatGPT API</strong> prompts analyzing interview transcripts with <strong>NLP</strong>
                </>
              )
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
            main: (
              <>
                Prepared course materials and coding assignments focusing on <strong>JavaScript</strong> and modern data visualization libraries like <strong>D3.js</strong>, with materials maintained in <strong>GitHub</strong> repository
              </>
            )
          },
          {
            main: (
              <>
                Mentored <strong>50+</strong> students in applying current research to analytical and <strong>storytelling</strong> projects, emphasizing <strong>JavaScript</strong>-based web visualization techniques
              </>
            )
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
            main: "Analyzed Isabel Typhoon Data using Unity platform and C# with 3D visualization"
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
    ]
  },
  {
    header: "Project Experience",
    items: [
      {
        header: "Res-A-Me: Blockchain-Based Decentralized Resume Platform",
        meta: "September 2023 - December 2023",
        listItems: [
          {
            main: (
              <>
                Developed a <strong>Blockchain-Based</strong> Decentralized Resume Platform
              </>
            ),
            subItems: [
              (
                <>
                  Led frontend development using <strong>Vue.js</strong>, creating responsive and standardized resume format
                </>
              ),
              (
                <>
                  Developed a robust <strong>Python/Flask</strong> backend, implementing seamless API integration with ResilientDB
                </>
              ),
              "Implemented immutable data storage with unique transaction IDs"
            ]
          }
        ],
        chips: [
          { label: "Vue.js", type: "primary" },
          { label: "Python", type: "primary" },
          { label: "Flask", type: "primary" },
          { label: "Blockchain", type: "secondary" },
          { label: "API Integration", type: "secondary" }
        ]
      },
      {
        header: "Data Analysis and Machine Learning Projects",
        meta: "September 2021 - June 2022",
        listItems: [
          {
            main: (
              <>
                Scraped data from e-commerce websites using <strong>Excel VBA</strong>
              </>
            )
          },
          {
            main: (
              <>
                Visualized results using <strong>Matplotlib</strong>, <strong>Seaborn</strong>, and <strong>R</strong>
              </>
            )
          },
          {
            main: (
              <>
                Developed predictive models using <strong>Scikit-learn</strong>
              </>
            )
          },
          {
            main: (
              <>
                Implemented KNN and CNN classifications on MNIST and CIFAR10 datasets using <strong>Python</strong> and <strong>PyTorch</strong>
              </>
            )
          }
        ],
        chips: [
          { label: "Python", type: "primary" },
          { label: "PyTorch", type: "primary" },
          { label: "Scikit-learn", type: "primary" },
          { label: "Data Analysis", type: "secondary" },
          { label: "Machine Learning", type: "secondary" },
          { label: "R", type: "secondary" }
        ]
      }
    ]
  }
];

export default sections;