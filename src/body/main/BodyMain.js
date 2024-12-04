// BodyMain.js
import React from 'react';
import { BodyRoot } from './bodyStyles';
import data from 'data/data';
import BodySection from './section/BodySection';
import SectionItem from './section/item/SectionItem';

function BodyMain({ activeSection }) {
  const sections = [
    { type: 'project', data: data.body.projectExperience },
    { type: 'work', data: data.body.workExperience },
    { type: 'education', data: data.body.education }
  ];

  return (
    <BodyRoot>
      {sections.map((section, index) => (
        <BodySection
          key={index}
          header={section.data.header}
          type={section.type}
          activeSection={activeSection}
        >
          {section.data.items.map((item, si) => (
            <SectionItem
              key={si}
              sectionType={section.type}
              {...item}
            />
          ))}
        </BodySection>
      ))}
    </BodyRoot>
  );
}

export default BodyMain;