const wotkExperience = {
  header: "Work Experience",
  type: "work",
  items: [
    {
      sectionType: "work",
      header: "Visual Analytics Researcher",
      // subheader: "UCDavis, VIDI lab",
      meta: "July 2023 - Sep. 2024",
      sortDate: "2024-09",
      location: "UCDavis, VIDI lab",
      description: (
        <>
          I devoted my time to developing interactive visual interfaces that
          helped <strong>domain experts</strong> discover meaningful insights from their
          <strong> large-scale datasets</strong>.
        </>
      ),
      chips: [
        { label: "Vue.js", type: "primary" },
        { label: "Svelte", type: "primary" },
        { label: "NLP", type: "primary" },
      ],
    },
    {
      sectionType: "work",
      header: "Programming Teaching Assistant",
      // subheader: "UCDavis, Information Visualization",
      meta: "Jan. 2023 - Mar. 2023",
      sortDate: "2023-03",
      location: "UCDavis",
      description: (
        <>
          As a TA, I created course materials and coding assignments to teach
          students JavaScript and <strong>modern data visualization libraries</strong> like
          D3.js, and keep everything organized in a GitHub repository.
        </>
      ),
      chips: [
        { label: "JavaScript", type: "primary" },
        { label: "D3.js", type: "primary" },
        { label: "GitHub", type: "primary" },
      ],
    },
    {
      sectionType: "work",
      header: "3D Visualization Researcher",
      // subheader: "NTNU, Data Visualization Lab",
      meta: "Sep. 2020 - June 2021",
      sortDate: "2021-06",
      location: "NTNU, Data Visualization Lab",
      description: (
        <>
          In this research, I tackled the visualization of Isabel Typhoon Data
          by implementing advanced 3D techniques like <strong>iso-surface </strong>and <strong>volume
          rendering</strong> to help better understanding of the typhoon's behavior.
        </>
      ),
      chips: [
        { label: "C#", type: "primary" },
        { label: "Unity", type: "primary" },
      ],
    },
    {
      sectionType: "work",
      header: "UI/UX Developer",
      meta: "Oct. 2024 - now",
      sortDate: "2024-10",
      location: "Community School of the Arts Foundation",
      description: (
        <>
          I designed and developed a website for the foundation where I focused
          on making it <strong>easy and intuitive</strong> for both students and parents to
          navigate and find what they need.
        </>
      ),
      chips: [
        { label: "Figma", type: "primary" },
        { label: "React", type: "primary" },
        { label: "Next.js", type: "primary" },
        { label: "Tailwind CSS", type: "primary" },
      ],
    },
  ],
};

export default wotkExperience;
