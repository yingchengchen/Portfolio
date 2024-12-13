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
    "Now, let's explore my projects and journey through my achievements. I look forward to connecting with you and sharing my story.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenClosed) {
          if (activeSection === "Projects" && !hasBeenClosed) {
            setShowIntro(true);
          }
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById(id);
    if (section) {
      observer.observe(section);
    }

    if (activeSection === "Projects" && !hasBeenClosed) {
      setShowIntro(true);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [id, hasBeenClosed, activeSection]);

  const handleModalClose = () => {
    setShowIntro(false);
    setHasBeenClosed(true);
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
          <Grid container spacing={3}>
            {projectData.items.map((project, index) => (
              <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
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
