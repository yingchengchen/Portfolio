import React from 'react';
import { isMobile } from 'react-device-detect';
import './Body.css';
import BodyMain from './main/BodyMain';
import RightPanel from './right_panel/RightPanel';

function Body({ activeSection }) {
  return (
    <div className={`Body-root ${isMobile ? 'Body-root-mobile' : ''}`}>
      <div className="BodyMain-root">
        <BodyMain activeSection={activeSection} />
      </div>
      {isMobile ? (
        <div className="Body-mobile-panel">
          <RightPanel />
        </div>
      ) : (
        <RightPanel />
      )}
    </div>
  );
}

export default Body;