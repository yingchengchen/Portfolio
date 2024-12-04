import React from "react";

const education = {
  header: "Education",
  type: "education",
  items: [
    {
      sectionType: "education",
      header: "Master of Science in Computer Science",
      subheader: "University of California, Davis",
      meta: "September 2023 - June 2024",
      location: "Davis, CA",
      logo: `${process.env.PUBLIC_URL}/uc_davis_logo.jpg`,
      description: "Specialized in information visualization techniques and advanced analytics, complemented by expertise in machine learning, distributed systems architecture, and network security fundamentals.",
      chips: [
        { label: "Information Data Visualization", type: "primary" },
        { label: "Machine Learning", type: "primary" },
        { label: "Distributed Database Systems", type: "secondary" },
        { label: "Computer Architecture", type: "secondary" },
      ]
    },
    {
      sectionType: "education",
      header: "Bachelor of Science in Computer Science",
      subheader: "National Taiwan Normal University",
      meta: "September 2019 - June 2023",
      location: "Taipei, Taiwan",
      logo: `${process.env.PUBLIC_URL}/ntnu_logo.jpg`,
      description: "Focus on data-centric computing fundamentals and applied software development, with expertise spanning algorithmic design, artificial intelligence, data visualization, and computational methods.",
      chips: [
        { label: "Data Structures & Algorithms", type: "primary" },
        { label: "Computer Graphics & Data Visualization", type: "primary" },
        { label: "Data Mining", type: "primary" },
        { label: "Database Theories", type: "primary"},
        { label: "Software Engineering", type: "secondary" },
      ]
    }
  ]
};

export default education;