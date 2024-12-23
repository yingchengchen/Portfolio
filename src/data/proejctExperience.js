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
      description: (
        <>
          Collaborated with environmental experts to create a platform that
          visualizes Green Island resident interviews. The platform provides an
          intuitive interface for non-technical experts to analyze data using
          ChatGPT.
        </>
      ),
      githubLink: "https://github.com/yingchengchen/Lyudao",
      listItems: [
        {
          main: (
            <>
              Sentiment analysis with{" "}
              <span style={{ backgroundColor: "#FFEB3B" }}>
                Large Language Model
              </span>
            </>
          ),
        },
        {
          main: (
            <>
              <span style={{ backgroundColor: "#FFEB3B" }}>5+</span> interactive
              visualizations
            </>
          ),
        },
        {
          main: (
            <>
              <span style={{ backgroundColor: "#FFEB3B" }}>
                Creating and editing ChatGPT prompts
              </span>{" "}
              with user-friendly interface
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
        "Media news coverage can be polarizing, and NOVA aims to help users navigate through different perspectives. It allows users to explore news articles from different viewpoints, assess media bias, and compare news coverage across different outlets.",
      githubLink: "https://github.com/yingchengchen/Lyudao",
      publicationLink: "https://arxiv.org/abs/2403.00334",
      demoLink: "https://samlee-dedeboy.github.io/Nova/",
      listItems: [
        {
          main: (
            <>
              <span style={{ backgroundColor: "#FFEB3B" }}>Three-stage</span>{" "}
              visual interface for media bias assessment
            </>
          ),
        },
        {
          main: (
            <>
              Reaching <span style={{ backgroundColor: "#FFEB3B" }}>83.3%</span>{" "}
              effective navigation and{" "}
              <span style={{ backgroundColor: "#FFEB3B" }}>73.8%</span> user
              engagement
            </>
          ),
        },
        {
          main: (
            <>
              <span style={{ backgroundColor: "#FFEB3B" }}>25,000+</span>{" "}
              articles from 6 news outlets
            </>
          ),
        },
        {
          main: (
            <>
              Published in{" "}
              <em>
                <span style={{ backgroundColor: "#FFEB3B" }}>IEEE</span>{" "}
                Transactions on Visualization and Computer Graphics
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
        "Res-A-Me is a decentralized resume platform that leverages blockchain technology to provide a secure platform for users to store their resumes. The platform allows users to create, update, and share their resumes with potential employers.",
      githubLink: "https://github.com/ResilientApp/Res-a-Me",
      listItems: [
        {
          main: <>Responsive and standardized resume format</>,
        },
        {
          main: (
            <>
              {" "}
              <span style={{ backgroundColor: "#FFEB3B" }}>
                Immutable data storage
              </span>{" "}
              with unique transaction IDs to ensure data integrity and privacy
            </>
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
              Dual-mode salary visualization that switches between{" "}
              <span style={{ backgroundColor: "#FFEB3B" }}>scatter plots</span> for detailed data and{" "}
              <span style={{ backgroundColor: "#FFEB3B" }}>box plots</span> for statistical analysis, providing
              both comprehensive and summary views.
            </>
          ),
        },
        {
          main: (
            <>
              <span style={{ backgroundColor: "#FFEB3B" }}>Color-encoded Sankey diagram</span> to visualize salary
              relationships and factor distributions across selected countries.
            </>
          ),
        },
        {
          main: (
            <>
              Visualized job title distributions by country using <span style={{ backgroundColor: "#FFEB3B" }}>donut charts</span> with salary range filters.
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
        "An interactive visualization exploring Columbine's impact on U.S. school shootings, using scrollytelling to reveal patterns in subsequent incidents and their broader cultural context.",
      githubLink: "https://github.com/yingchengchen/SchoolShootingEvents_US",
      listItems: [
        {
          main:(
            <>
              <span style={{ backgroundColor: "#FFEB3B" }}>4+</span> interactive visualizations with analyzed data
            </>
          )
        },
        {
          main: (
            <>
              Utilized <span style={{ backgroundColor: "#FFEB3B" }}>web-scraped</span> text snippets to enhance
              user engagement
            </>
          ),
        },
      ],
      chips: [
        { label: "Vue.js", type: "primary" },
        { label: "Vuetify", type: "primary" },
        { label: "TypeScript", type: "primary" },
        { label: "Storytelling", type: "secondary" },
      ],
    },
  ],
};

export default projectExperience;
