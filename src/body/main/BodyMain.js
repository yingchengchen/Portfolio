// BodyMain.js
import React, { useState } from 'react';
import styles from './bodyStyles';
import data from 'data/data';
import BodySection from './section/BodySection';
import SectionItem from './section/item/SectionItem';

function BodyMain() {
  const classes = styles();
  const [expandedSection, setExpandedSection] = useState(null);

  // Function to toggle section expansion
  const toggleSection = (sectionHeader) => {
    setExpandedSection(prevSection => 
      prevSection === sectionHeader ? null : sectionHeader
    );
  };

  // Function to collapse all sections
  const collapseAllSections = () => {
    setExpandedSection(null);
  };

  // Handle section expansion change from individual sections
  const handleSectionExpandChange = (sectionHeader, isExpanded) => {
    if (!isExpanded && window.updateActiveNavSection) {
      window.updateActiveNavSection(null);
    } else if (isExpanded) {
      window.updateActiveNavSection(sectionHeader);
    }
  };

  React.useEffect(() => {
    window.toggleSection = toggleSection;
    window.collapseAllSections = collapseAllSections;
    
    return () => {
      window.toggleSection = undefined;
      window.collapseAllSections = undefined;
    };
  }, []);

  return (
    <div className={classes.root}>
      {data.body.sections.map((s, i) => (
        <BodySection
          key={i}
          header={s.header}
          type={s.type} // Pass the section type
          expandSection={expandedSection === s.header}
          isInitiallyCollapsed={true}
          onExpandChange={handleSectionExpandChange}
        >
          {s.items.map((item, si) => (
            <SectionItem
              key={si}
              sectionType={s.type} // Pass the section type to items
              {...item}
            />
          ))}
        </BodySection>
      ))}
    </div>
  );
}

export default BodyMain;