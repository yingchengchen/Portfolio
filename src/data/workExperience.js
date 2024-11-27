import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import React from 'react';
const wotkExperience = {
  header: "Work Experience",
  type: "work",
  items: [
    {
      sectionType: "work",
      header:
        "Graduate Student Assistant (AI-Assisted Visual Analytics Developer)",
      subheader: "UCDavis, VIDI lab",
      meta: "July 2023 - September 2024",
      location: "Davis, CA",
      logo: `${process.env.PUBLIC_URL}/uc_davis_logo.jpg`,
      description:
        "Developed interactive visual interfaces for media bias assessment and environmental policy analysis",
      listItems: [
        {
          main: (
            <>
              Created a <strong>Vue-based</strong> three-stage visual interface
              for media bias assessment
            </>
          ),
          subItems: [
            <>
              Spearheaded improvements reaching <strong>83.3%</strong> effective
              navigation and <strong>73.8%</strong> user engagement
            </>,
            <>
              Managed <strong>25,000+</strong> articles from 6 news outlets
              using <strong>PostgreSQL</strong> on <strong>AWS EC2</strong> for
              data storage
            </>,
            <>
              Co-authored{" "}
              <strong>
                <a
                  href="https://arxiv.org/abs/2403.00334"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#6C5CE7",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                >
                  "NOVA: A visual interface for assessing polarizing media
                  coverage"
                  <OpenInNewIcon
                    style={{
                      fontSize: 16,
                      marginLeft: 4,
                      opacity: 0.7,
                    }}
                  />
                </a>
              </strong>{" "}
              published in{" "}
              <em>
                <strong>IEEE</strong> Transactions on Visualization and Computer
                Graphics
              </em>
            </>,
          ],
        },
        {
          main: (
            <>
              Initiated <strong>Svelte-based</strong> frontend for environmental
              policy analysis with <strong>LLM</strong>
            </>
          ),
          subItems: [
            <>
              Created <strong>5+</strong> interactive visualizations, including
              network graphs and <strong>sentiment analysis</strong>, to
              interpret complex ecological data
            </>,
            <>
              Implemented an AI-driven <strong>Orthogonal Routing</strong>{" "}
              algorithm using A* search
            </>,
            <>
              Collaborated with environmental scientists to engineer{" "}
              <strong>ChatGPT API</strong> prompts analyzing interview
              transcripts with <strong>NLP</strong>
            </>,
          ],
        },
      ],
      chips: [
        { label: "Vue.js", type: "primary" },
        { label: "Svelte", type: "primary" },
        { label: "PostgreSQL", type: "secondary" },
        { label: "AWS", type: "secondary" },
        { label: "LLM", type: "secondary" },
        { label: "NLP", type: "primary" },
      ],
    },
    {
      sectionType: "work",
      header: "Programming Teaching Assistant",
      subheader: "UCDavis, Information Visualization",
      meta: "January 2024 - March 2024",
      location: "Davis, CA",
      logo: `${process.env.PUBLIC_URL}/uc_davis_logo.jpg`,
      description:
        "Prepared course materials and coding assignments focusing on JavaScript and modern data visualization libraries like D3.js, with materials maintained in GitHub repository",
      listItems: [
        {
          main: (
            <>
              Prepared course materials and coding assignments focusing on{" "}
              <strong>JavaScript</strong> and modern data visualization
              libraries like <strong>D3.js</strong>, with materials maintained
              in <strong>GitHub</strong> repository
            </>
          ),
        },
        {
          main: (
            <>
              Mentored <strong>50+</strong> students in applying current
              research to analytical and <strong>storytelling</strong> projects,
              emphasizing <strong>JavaScript</strong>-based web visualization
              techniques
            </>
          ),
        },
      ],
      chips: [
        { label: "JavaScript", type: "primary" },
        { label: "D3.js", type: "primary" },
        { label: "Git", type: "secondary" },
      ],
    },
    {
      sectionType: "work",
      header: "Undergraduate Research Assistant",
      subheader: "NTNU, Data Visualization Lab",
      meta: "September 2021 - June 2022",
      location: "Taipei, Taiwan",
      logo: `${process.env.PUBLIC_URL}/ntnu_logo.jpg`,
      description:
        "Analyzed Isabel Typhoon Data using Unity platform and C# with 3D visualization",
      listItems: [
        {
          main: "Analyzed Isabel Typhoon Data using Unity platform and C# with 3D visualization",
        },
        {
          main: "Implemented Marching Cubes algorithm for iso-surface generation and volume rendering",
        },
      ],
      chips: [
        { label: "C#", type: "primary" },
        { label: "Unity", type: "primary" },
      ],
    },
  ],
};

export default wotkExperience;
