import React from "react";
const projectExperience = {
  header: "Projects",
  type: "project",
  items: [
    {
      sectionType: "project",
      header:
        "Lyudao: A Visual Analytics Platform for Environmental Policy Analysis",
      subheader: "VIDI Lab team project",
      meta: "Jan 2024 - Sep 2024",
      images: [
        `${process.env.PUBLIC_URL}/lyudao/01.png`,
        `${process.env.PUBLIC_URL}/lyudao/02.png`,
        `${process.env.PUBLIC_URL}/lyudao/03.png`,
        `${process.env.PUBLIC_URL}/lyudao/04.png`,
      ],
      description:
        "In collaboration with environmental experts from Taiwan, we developed a platform that visualizes insights from interviews with Green Island residents. The platform not only generates meaningful visualizations from interview transcripts but also provides an intuitive interface for non-technical experts to leverage ChatGPT for data analysis.",
      githubLink: "https://github.com/yingchengchen/Lyudao",
      listItems: [
        {
          main: (
            <>
              Initiated <strong>Svelte-based</strong> frontend for environmental
              policy analysis with <strong>LLM</strong>
            </>
          ),
        },
        {
          main: (
            <>
              Created <strong>5+</strong> interactive visualizations, including
              network graphs and <strong>sentiment analysis</strong>, to
              interpret complex ecological data
            </>
          ),
        },
        {
          main: (
            <>
              Implemented an AI-driven <strong>Orthogonal Routing</strong>
              algorithm using A* search
            </>
          ),
        },
        {
          main: (
            <>
              Allowed modification of <strong>ChatGPT API</strong> prompts
              through easy-to-use interface with tutorial
            </>
          ),
        },
      ],
      chips: [
        { label: "TypeScript", type: "primary" },
        { label: "Svelte", type: "primary" },
        { label: "Flask", type: "primary" },
        { label: "Prompt Engineering", type: "secondary" },
        { label: "Natural Language Processing (NLP)", type: "secondary" },
      ],
    },
    {
      sectionType: "project",
      header:
        "NOVA: A Visual Interface for Assessing Polarizing Media Coverage",
      subheader: "VIDI Lab team project",
      meta: "July 2023 - March 2024",
      images: [
        `${process.env.PUBLIC_URL}/nova/01.png`,
        `${process.env.PUBLIC_URL}/nova/02.png`,
        `${process.env.PUBLIC_URL}/nova/03.png`,
        `${process.env.PUBLIC_URL}/nova/04.jpg`,
        `${process.env.PUBLIC_URL}/nova/05.png`,
        `${process.env.PUBLIC_URL}/nova/06.png`,
      ],
      description:
        "Media news coverage can be polarizing, and NOVA aims to help users navigate through different perspectives. We developed a three-stage visual interface that allows users to explore news articles from different viewpoints, assess media bias, and compare news coverage across different outlets.",
      githubLink: "https://github.com/yingchengchen/Lyudao",
      publicationLink: "https://arxiv.org/abs/2403.00334",
      demoLink: "https://samlee-dedeboy.github.io/Nova/",
      listItems: [
        {
          main: (
            <>
              Created a Vue-based <strong>three-stage</strong> visual interface
              for media bias assessment
            </>
          ),
        },
        {
          main: (
            <>
              Spearheaded improvements reaching <strong>83.3%</strong> effective
              navigation and <strong>73.8%</strong> user engagement
            </>
          ),
        },
        {
          main: (
            <>
              Managed <strong>25,000+</strong> articles from 6 news outlets
              using <strong>PostgreSQL</strong> on <strong>AWS EC2</strong> for
              data storage
            </>
          ),
        },
        {
          main: (
            <>
              Co-authored{" "}
              <strong>
                {" "}
                "NOVA: A visual interface for assessing polarizing media
                coverage"{" "}
              </strong>{" "}
              published in{" "}
              <em>
                <strong>IEEE</strong> Transactions on Visualization and Computer
                Graphics
              </em>
            </>
          ),
        },
      ],
      chips: [
        { label: "TypeScript", type: "primary" },
        { label: "Vue.js", type: "primary" },
        { label: "Flask", type: "primary" },
        { label: "Publication Writing", type: "secondary" },
        { label: "Communications", type: "secondary" },
      ],
    },
    {
      sectionType: "project",
      header: "Res-A-Me: Blockchain-Based Decentralized Resume Platform",
      subheader: "Full-Stack Development Project",
      meta: "September 2023 - December 2023",
      images: [
        `${process.env.PUBLIC_URL}/resame/01.png`,
        `${process.env.PUBLIC_URL}/resame/02.png`,
        `${process.env.PUBLIC_URL}/resame/03.png`,
        `${process.env.PUBLIC_URL}/resame/04.png`,
      ],
      description:
        "Res-A-Me is a decentralized resume platform that leverages blockchain technology to provide a secure and immutable platform for users to store their resumes. The platform allows users to create, update, and share their resumes with potential employers, ensuring data integrity and privacy.",
      githubLink: "https://github.com/ResilientApp/Res-a-Me",
      listItems: [
        {
          main: (
            <>
              Led frontend development using <strong>Vue.js</strong>, creating
              responsive and standardized resume format
            </>
          ),
        },
        {
          main: (
            <>
              Developed a robust <strong>Python/Flask</strong> backend,
              implementing seamless API integration with ResilientDB
            </>
          ),
        },
        {
          main: (
            <>Implemented immutable data storage with unique transaction IDs</>
          ),
        },
      ],
      chips: [
        { label: "Vue.js", type: "primary" },
        { label: "Python", type: "primary" },
        { label: "Flask", type: "primary" },
        { label: "Blockchain", type: "secondary" },
        { label: "API Integration", type: "secondary" },
      ],
    },
    {
      sectionType: "project",
      header: "Salary Analyst Platform",
      subheader: "Self Projects",
      meta: "September 2023 - Dec 2023",
      images: [
        `${process.env.PUBLIC_URL}/dssalary/01.png`,
        `${process.env.PUBLIC_URL}/dssalary/02.png`,
      ],
      description:
        "An interactive Drill-Down platform for analyze salary of data analyst from 2020 - 2023 from different country. We lead viewers to explore the salary distribution, job title composition, and relationship between salary and other factors (experience level and company size) of the selected country with interactive visulizations.",
      githubLink: "https://github.com/yingchengchen/Data-Analyst-Salary",
      listItems: [
        {
          main: (
            <>
              Dual-mode salary distribution visualization that switches between
              scatter plots for granular data examination and box plots for
              statistical analysis, enabling users to toggle between
              comprehensive data overview and key statistical metrics (median,
              quartiles, and outliers).
            </>
          ),
        },
        {
          main: (
            <>
              Color encoded Sankey diagram showing the composition of each
              categorical factors and relationship between salary and others of
              the selected country.
            </>
          ),
        },
        {
          main: (
            <>
              Donut chart showing composition of job title in the selected
              country and salary range.
            </>
          ),
        },
      ],
      chips: [
        { label: "TypeScript", type: "primary" },
        { label: "Vue", type: "primary" },
        { label: "D3.js", type: "primary" },
        { label: "Data Analysis", type: "secondary" },
      ],
    },
    {
      sectionType: "project",
      header: "School Shooting Events Storytelling website",
      subheader: "Self Projects",
      meta: "September 2023 - Dec 2023",
      images: [
        `${process.env.PUBLIC_URL}/schoolshooting/01.png`,
        `${process.env.PUBLIC_URL}/schoolshooting/02.png`,
        `${process.env.PUBLIC_URL}/schoolshooting/03.png`,
        `${process.env.PUBLIC_URL}/schoolshooting/04.png`,
        `${process.env.PUBLIC_URL}/schoolshooting/05.png`,
      ],
      description:
        "An interactive storytelling visualization that explores Columbine's lasting impact on U.S. school shootings. Through a scrollytelling design, users navigate through data visualizations , revealing patterns in subsequent school violence and examining the broader context of American gun culture.",
      githubLink: "https://github.com/yingchengchen/SchoolShootingEvents_US",
      listItems: [
        {
          main: (
            <>
              Created a <strong>Vue.js</strong> platform for
              <strong>storytelling</strong> on school shooting events
            </>
          ),
        },
        {
          main: (
            <>
              Utilized <strong>web-scraped</strong> text snippets to enhance
              user engagement
            </>
          ),
        },
        {
          main: (
            <>
              Designed <strong>interactive</strong> data visualizations with analyzed data
            </>
          ),
        },
      ],
      chips: [
        { label: "Vue.js", type: "primary" },
        { label: "Vuetify", type: "primary" },
        { label: "TypeScript", type: "primary" },
        { label: "storytelling", type: "secondary" },
      ],
    },
  ],
};

export default projectExperience;
