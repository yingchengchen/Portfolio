/*
  Sample object:
  {
    type: "<origin name>", (optional)
    link: "<website url>"
  }
  Icons will be picked based on 'type'.
  Valid values for 'type': linkedin, github, stackoverflow
*/
import githubDetails from 'data/details/github';
const buttonData = [
  {
    type: "linkedin",
    link: "https://www.linkedin.com/in/ying-cheng-chen/"
  },
  {
    type: "github",
    link: "https://github.com/" + githubDetails.username
  },
];

export default buttonData;