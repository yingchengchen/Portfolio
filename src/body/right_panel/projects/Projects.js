import React from 'react';
// Internal imports
import data from 'data/data';
import PanelSection from './item/PanelSection';
import ProjectItem from './item/projects/ProjectItem';
function Projects(props) {
  return (
    <PanelSection title="Dev Resources I Love">
      {data.rightPanel.projects.map((p, i) => (
        <ProjectItem
          key={i}
          header={p.header}
          link={p.link}
          description={p.description}
        />
      ))}
    </PanelSection>
  );
}
export default Projects;