import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import IntroModal from "../components/IntroModal";
import AvatarImage from "../images/myAvatar.png";
import {
  ProjectsWrapper,
  ProjectRoot,
  ProjectContent,
  HeaderTitle,
} from "./ProjectsStyle";
import data from "../data/data";

const Projects = ({ id, activeSection }) => {
  const [showIntro, setShowIntro] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  const introText =
    `Now, let's explore my projects and journey through my achievements. I look forward to connecting with you and sharing my story.`;
    const toggleScroll = (disable) => {
    if (disable) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          activeSection === "Projects" &&
          !hasBeenClosed
        ) {
          setShowIntro(true);
          toggleScroll(true);
        }
      },
      { threshold: 0.1 }
      
    );

    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      toggleScroll(false);
    };
  }, [id, hasBeenClosed, activeSection]);

  const handleModalClose = () => {
    setShowIntro(false);
    setHasBeenClosed(true);
    toggleScroll(false);
  };

  const projectData = data.body.projectExperience;

  return (
    <ProjectsWrapper id={id}>
      <ProjectRoot>
        <IntroModal
          isVisible={showIntro}
          onClose={handleModalClose}
          introText={introText}
          sectionId={id}
          avatarImage={AvatarImage}
        />
        <HeaderTitle>{projectData.header}</HeaderTitle>
        <ProjectContent>
          <Grid container spacing={2} columns={12}>
            {projectData.items.map((project, index) => (
              <Grid
                item
                xs={12} // Full width on mobile (<= 480px)
                sm={6} // Two columns on small screens (> 480px)
                md={4} // Three columns on medium up
                key={index}
              >
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </ProjectContent>
      </ProjectRoot>
    </ProjectsWrapper>
  );
};

export default Projects;
