// Personal account details i.e. GitHub username for now
import React from 'react';
// Banner
import infoData from './banner/info';
import buttonData from './banner/buttons';
// Body
import education from './education';
import workExperience from './workExperience';
import projectExperience from './proejctExperience';

const data = {
  banner: {
    info:infoData,
    buttons:buttonData
  },
  body: {
    education:education,
    workExperience:workExperience,
    projectExperience:projectExperience,
  },
};
export default data;