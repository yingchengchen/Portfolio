// SectionItem.js
import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';
import EducationCard from './EducationCard';
import WorkExperienceCard from './WorkExperienceCard';

function SectionItem(props) {
  switch (props.sectionType) {
    case 'work':
      return <WorkExperienceCard {...props} />;
    case 'project':
      return <ProjectCard {...props} />;
    case 'education':
      return <EducationCard {...props} />;
    default:
      return <WorkExperienceCard {...props} />;
  }
}

SectionItem.propTypes = {
  sectionType: PropTypes.oneOf(['work', 'project', 'education']).isRequired,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  meta: PropTypes.string,
  description: PropTypes.string,
  logo: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  demoLink: PropTypes.string,
  githubLink: PropTypes.string,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      main: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
      ]).isRequired,
      subItems: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.object
        ])
      )
    })
  ),
  chips: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['primary', 'secondary']).isRequired
    })
  )
};

export default SectionItem;