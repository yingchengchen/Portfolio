const education = {
  header: "Education",
  type: "education",
  items: [
    {
      sectionType: "education",
      header: "Master of Computer Science",
      subheader: "UCDavis",
      location: "University of California, Davis",
      meta: "Sep. 2022 - June 2024",
      sortDate: "2024-06",
      description: (
        <>
          During my time here, I focused on building my foundation in
          <strong> data-centric computing</strong>, where I developed expertise
          in algorithmic design, artificial intelligence and data visualization.
        </>
      ),
      chips: [
        { label: "Information Data Visualization", type: "primary" },
        { label: "Machine Learning", type: "primary" },
      ],
    },
    {
      sectionType: "education",
      header: "Bachelor of Computer Science",
      subheader: "NTNU",
      location: "National Taiwan Normal University",
      meta: "Sep. 2018 - June 2022",
      sortDate: "2022-06",
      description: (
        <>
          Here, I strengthened my <strong>CS fundamentals</strong> and specialized in information
          visualization, while expanding my knowledge in machine learning and
          systems architecture.
        </>
      ),

      chips: [
        { label: "Data Visualization", type: "primary" },
        { label: "Data Mining", type: "primary" },
        { label: "Database Theories", type: "primary" },
      ],
    },
  ],
};

export default education;
