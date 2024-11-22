// Personal account details i.e. GitHub username for now
import githubDetails from './details/github';
// Banner
import infoData from './banner/info';
import buttonData from './banner/buttons';
// Body
import sections from './sections';
// Panel on the right
import projectsData from './projects';

const data = {
  banner: {
    info:infoData,
    buttons:buttonData
  },
  body: {
    sections
  },
  rightPanel: {
    projects:projectsData
  },
  details: {
    github:githubDetails
  }
};
export default data;