import React from 'react';
import { BodyRoot } from './bodyStyles';
import data from 'data/data';
import BodySection from './section/BodySection';
import SectionItem from './section/item/SectionItem';

function BodyMain({ activeSection }) {
  const renderSection = (sectionData) => (
    <BodyRoot>
      <BodySection
        header={sectionData.header}
        type={sectionData.type}
      >
        {sectionData.items.map((item, si) => (
          <SectionItem
            key={si}
            sectionType={sectionData.type}
            {...item}
          />
        ))}
      </BodySection>
    </BodyRoot>
  );

  switch (activeSection) {
    case 'Education':
      return renderSection(data.body.education);
    case 'Work Experience':
      return renderSection(data.body.workExperience);
    case 'Project Experience':
      return renderSection(data.body.projectExperience);
    default:
      return null;
  }
}

export default BodyMain;