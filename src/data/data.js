// Personal account details i.e. GitHub username for now
import githubDetails from './details/github';
// Banner
import infoData from './banner/info';
import buttonData from './banner/buttons';
// Body
import sections from './sections';
import education from './education';
import workExperience from './workExperience';
import projectExperience from './proejctExperience';
// Panel on the right
import projectsData from './projects';

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
  rightPanel: {
    projects:projectsData
  },
  details: {
    github:githubDetails
  }
};
export default data;