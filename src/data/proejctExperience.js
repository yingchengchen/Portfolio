import React from "react";
const projectExperience = {
    header: "Projects",
    type: "project",
    items: [
      {
        sectionType: "project",
        header: "Lyudao: A Visual Analytics Platform for Environmental Policy Analysis",
        subheader: "VIDI Lab team project",
        meta: "Jan 2024 - Sep 2024",
        images: [
          `${process.env.PUBLIC_URL}/lyudao/01.png`,
          `${process.env.PUBLIC_URL}/lyudao/02.png`,
          `${process.env.PUBLIC_URL}/lyudao/03.png`,
          `${process.env.PUBLIC_URL}/lyudao/04.png`
        ],
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
        images:[
          `${process.env.PUBLIC_URL}/nova/01.png`,
          `${process.env.PUBLIC_URL}/nova/02.png`,
          `${process.env.PUBLIC_URL}/nova/03.png`,
          `${process.env.PUBLIC_URL}/nova/04.jpg`,
          `${process.env.PUBLIC_URL}/nova/05.png`,
          `${process.env.PUBLIC_URL}/nova/06.png`
        ],
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
        images: [
          `${process.env.PUBLIC_URL}/resame/01.png`,
          `${process.env.PUBLIC_URL}/resame/02.png`,
          `${process.env.PUBLIC_URL}/resame/03.png`,
          `${process.env.PUBLIC_URL}/resame/04.png`
        ],
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
        images: [
          `${process.env.PUBLIC_URL}/dssalary/01.png`,
          `${process.env.PUBLIC_URL}/dssalary/02.png`
        ],
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
      {
        sectionType: "project",
        header: "School Shooting Events Storytelling platform",
        subheader: "Self Projects",
        meta: "September 2023 - Dec 2023",
        images: [
          `${process.env.PUBLIC_URL}/schoolshooting/01.png`,
          `${process.env.PUBLIC_URL}/schoolshooting/02.png`,
          `${process.env.PUBLIC_URL}/schoolshooting/03.png`,
          `${process.env.PUBLIC_URL}/schoolshooting/04.png`,
          `${process.env.PUBLIC_URL}/schoolshooting/05.png`
        ],
        description:"Visualizes Columbine's influence on US school shootings using Vue.js, Vuetify, HTML, CSS, and JavaScript. Features a scrollable story-telling design with charts and web-scraped text snippets. Explores gun culture's impact on school violence through interactive data visualization and contextual information.",
        githubLink:"https://github.com/yingchengchen/SchoolShootingEvents_US",
        listItems: [
          {
            main: (
              <>
                Created a <strong>Vue.js</strong> platform for <strong>storytelling</strong> on school shooting events
              </>
            )
          },
          {
            main: (
              <>
                Utilized <strong>web-scraped</strong> text snippets to enhance user engagement
              </>
            )
          },
          {
            main: (
              <>
                Designed <strong>interactive</strong> data visualizations to explore gun culture's impact on school violence
              </>
            )
          }
        ],
        chips: [
          { label: "Vue.js", type: "primary" },
          { label: "Vuetify", type: "primary" },
          { label: "TypeScript", type: "primary" },
          { label: "storytelling", type: "secondary" }
        ]
      }
    ]
  }

export default projectExperience;