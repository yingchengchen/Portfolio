// sections.js
import { Tooltip } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import React from 'react';
import { type } from '@testing-library/user-event/dist/type';
const sections = [
  {
    header: "Education",
    type: "education",
    items: [
      {
        sectionType: "education",
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
        sectionType: "education",
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
    type: "work",
    items: [
      {
        sectionType: "work",
        header: "Graduate Student Assistant (AI-Assisted Visual Analytics Developer)",
        subheader: "UCDavis, VIDI lab",
        meta: "July 2023 - September 2024",
        location: "Davis, CA",
        logo: "/uc_davis_logo.jpg",
        description: "Developed interactive visual interfaces for media bias assessment and environmental policy analysis",
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
        sectionType: "work",
        header: "Programming Teaching Assistant",
        subheader: "UCDavis, Information Visualization",
        meta: "January 2024 - March 2024",
        location: "Davis, CA",
        logo: "/uc_davis_logo.jpg",
        description: "Prepared course materials and coding assignments focusing on JavaScript and modern data visualization libraries like D3.js, with materials maintained in GitHub repository",
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
        sectionType: "work",
        header: "Undergraduate Research Assistant",
        subheader: "NTNU, Data Visualization Lab",
        meta: "September 2021 - June 2022",
        location: "Taipei, Taiwan",
        logo: "/ntnu_logo.jpg",
        description: "Analyzed Isabel Typhoon Data using Unity platform and C# with 3D visualization",
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
    type: "project",
    items: [
      {
        sectionType: "project",
        header: "Lyudao: A Visual Analytics Platform for Environmental Policy Analysis",
        subheader: "VIDI Lab team project",
        meta: "Jan 2024 - Sep 2024",
        images:["/lyudao/01.png","/lyudao/02.png","/lyudao/03.png","/lyudao/04.png"],
        description:"An Interactive Visualization System for Analyzing Public Opinions in Environmental Policy ",
        githubLink:"https://github.com/yingchengchen/Lyudao",
        listItems: [
          {
            main: (
              <>
                Initiated <strong>Svelte-based</strong> frontend for environmental policy analysis with <strong>LLM</strong>
              </>
            )
          },
          {
            main: (
              <>
                Created <strong>5+</strong> interactive visualizations, including network graphs and <strong>sentiment analysis</strong>, to interpret complex ecological data
              </>
            )
          },
          {
            main: (
              <>
                Implemented an AI-driven <strong>Orthogonal Routing</strong> algorithm using A* search
              </>
            )
          },
          {
            main: (
              <>
                Collaborated with environmental scientists to engineer <strong>ChatGPT API</strong> prompts analyzing interview transcripts with <strong>NLP</strong>
              </>
            )
          }
        ],
        chips: [
          { label: "TypeScript", type: "primary" },
          { label: "UI/UX Design", type: "primary" },
          { label: "Svelte", type: "primary" },
          { label: "Prompt Engineering", type: "secondary" },
          { label: "Flask", type: "secondary" },
          { label: "Natural Language Processing (NLP)", type: "secondary" }
        ]
      },
      {
        sectionType: "project",
        header: "NOVA: A visual interface for assessing polarizing media coverage",
        subheader: "VIDI Lab team project",
        meta: "July 2023 - March 2024",
        images:["/nova/01.png","/nova/02.png","/nova/03.png", "/nova/04.jpg", "/nova/05.png", "/nova/06.png"],
        description:"A visual interface for assessing polarizing media coverage using AI-driven sentiment analysis.",
        githubLink:"https://github.com/yingchengchen/Lyudao",
        publicationLink: "https://arxiv.org/abs/2403.00334",
        demoLink: "https://samlee-dedeboy.github.io/Nova/",
        listItems: [
          {
            main: (
              <>
                Created a <strong>Vue-based</strong> three-stage visual interface for media bias assessment
              </>
            )
          },
          {
            main: (
              <>
                Spearheaded improvements reaching <strong>83.3%</strong> effective navigation and <strong>73.8%</strong> user engagement
              </>
            )
          },
          {
            main: (
              <>
                Managed <strong>25,000+</strong> articles from 6 news outlets using <strong>PostgreSQL</strong> on <strong>AWS EC2</strong> for data storage
              </>
            )
          },
          {
            main: (
              <>
                Co-authored <strong> "NOVA: A visual interface for assessing polarizing media coverage" </strong> published in <em><strong>IEEE</strong> Transactions on Visualization and Computer Graphics</em>
              </>
            )
          }
        ],
        chips: [
          { label: "Frontend Development", type: "primary" },
          { label: "UI/UX Design", type: "primary" },
          { label: "Vue", type: "primary" },
          { label: "Publication Writing", type: "secondary" },
          { label: "Flask", type: "secondary" },
          { label: "Corporate Communications", type: "secondary" }
        ]
      },
      {
        sectionType: "project",
        header: "Res-A-Me: Blockchain-Based Decentralized Resume Platform",
        subheader:"Full-Stack Development Project",
        meta: "September 2023 - December 2023",
        images:["/resame/01.png","/resame/02.png","/resame/03.png","/resame/04.png"],
        description:"A blockchain-based platform revolutionizing resume verification and sharing through decentralized technology.",
        githubLink:"https://github.com/ResilientApp/Res-a-Me",
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
        sectionType: "project",
        header: "Salary Analyst Platform",
        subheader: "Self Projects",
        meta: "September 2023 - Dec 2023",
        images:["/dssalary/01.png","/dssalary/02.png"],
        description:"An interactive Drill-Down platform for analyze salary of data analyst from 2020 - 2023.",
        githubLink:"https://github.com/yingchengchen/Data-Analyst-Salary",
        listItems: [
          {
            main: (
              <>
                Swichable scatter plot and box plot showing distribution of salary in each country.
              </>
            )
          },
          {
            main: (
              <>
                Sankey diagram showing the relationship between salary and other factors (experience level and company size) of the selected country.
              </>
            )
          },
          {
            main: (
              <>
                Donut chart showing composition of job title in the selected country and salary range.
              </>
            )
          }
        ],
        chips: [
          { label: "TypeScript", type: "primary" },
          { label: "Vue", type: "primary" },
          { label: "D3.js", type: "primary" },
          { label: "Data Analysis", type: "secondary" }
        ]
      },
    ]
  }
];

export default sections;