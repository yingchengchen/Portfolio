import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import React from 'react';
const wotkExperience = {
  header: "Work Experience",
  type: "work",
  items: [
    {
      sectionType: "work",
      header:
        "Visual Analytics Researcher",
      // subheader: "UCDavis, VIDI lab",
      meta: "July 2023 - Sep. 2024",
      location: "UCDavis, VIDI lab",
      description:
        "I devoted my time to developing interactive visual interfaces that helped domain experts discover meaningful insights from their large-scale datasets.",
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
      location: "UCDavis",
      description:
        "As a TA, I created course materials and coding assignments to teach students JavaScript and modern data visualization libraries like D3.js, keeping everything organized in a GitHub repository.",
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
      location: "NTNU, Data Visualization Lab",
      description:"In this research, I tackled the visualization of Isabel Typhoon Data by implementing advanced 3D techniques like iso-surface and volume rendering to help us better understand the typhoon's behavior.",
      // listItems: [
      //   {
      //     main: "Analyzed Isabel Typhoon Data using Unity platform and C# with 3D visualization",
      //   },
      //   {
      //     main: "Implemented Marching Cubes algorithm for iso-surface generation and volume rendering",
      //   },
      // ],
      chips: [
        { label: "C#", type: "primary" },
        { label: "Unity", type: "primary" },
      ],
    },
    {
      sectionType: "work",
      header: "UI/UX Designer",
      // subheader: "NTNU, Data Visualization Lab",
      meta: "Oct. 2024 - now",
      location: "Community School of the Arts Foundation",
      description:
        "I designed and developed a website for the foundation where I focused on making it easy and intuitive for both students and parents to navigate and find what they need.",
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
