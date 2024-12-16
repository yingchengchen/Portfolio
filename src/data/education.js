import React from "react";

const education = {
  header: "Education",
  type: "education",
  items: [
    {
      sectionType: "education",
      header: "Master of Computer Science",
      subheader: "UCDavis",
      location:"University of California, Davis",
      meta: "Sep. 2022 - June 2024",
      logo: `${process.env.PUBLIC_URL}/uc_davis_logo.jpg`,
      description: "Specialized in information visualization techniques and advanced analytics, complemented by expertise in machine learning, distributed systems architecture, and network security fundamentals.",
      chips: [
        { label: "Information Data Visualization", type: "primary" },
        { label: "Machine Learning", type: "primary" },
      ]
    },
    {
      sectionType: "education",
      header: "Bachelor of Computer Science",
      subheader: "NTNU",
      location:"National Taiwan Normal University",
      meta: "Sep. 2018 - June 2022",
      logo: `${process.env.PUBLIC_URL}/ntnu_logo.jpg`,
      description: "Focus on data-centric computing fundamentals with expertise spanning algorithmic design, artificial intelligence, data visualization, and computational methods.",
      chips: [
        { label: "Data Visualization", type: "primary" },
        { label: "Data Mining", type: "primary" },
        { label: "Database Theories", type: "primary"},
      ]
    }
  ]
};

export default education;