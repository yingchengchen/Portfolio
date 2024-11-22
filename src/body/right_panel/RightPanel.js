import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import axios from 'axios';
import './right_panel.css';
import PanelSection from './item/PanelSection';
import GithubRepo from './item/github/GithubRepo';
import ProjectItem from './item/projects/ProjectItem';
import data from 'data/data';

const RightPanel = () => {
  const [pinnedRepos, setPinnedRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPinnedRepositories = async () => {
      const query = `
        {
          user(login: "${data.details.github.username}") {
            pinnedItems(first: 3, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                  url
                }
              }
            }
          }
        }
      `;

      try {
        const response = await axios({
          url: 'https://api.github.com/graphql',
          method: 'post',
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
            'Content-Type': 'application/json',
          },
          data: { query }
        });

        const repos = response.data.data.user.pinnedItems.nodes.map(repo => ({
          name: repo.name,
          html_url: repo.url
        }));

        setPinnedRepos(repos);
      } catch (error) {
        console.error('Error fetching pinned repositories:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getPinnedRepositories();
  }, []);

  const renderGithubSection = () => {
    if (isLoading) return <div>Loading...</div>;
    if (!pinnedRepos || pinnedRepos.length === 0) return <div>No pinned repositories found</div>;
    
    return pinnedRepos.map((repo, index) => (
      <GithubRepo 
        key={index} 
        name={repo.name} 
        link={repo.html_url}
      />
    ));
  };

  return (
    <div className={`RightPanel-root ${isMobile ? 'RightPanel-root-mobile' : ''}`}>
      <PanelSection title="GitHub Highlight">
        {renderGithubSection()}
      </PanelSection>
      <PanelSection title="Dev Resources I Love">
        {data.rightPanel.projects.map((project, index) => (
          <ProjectItem
            key={index}
            header={project.header}
            link={project.link}
            description={project.description}
          />
        ))}
      </PanelSection>
    </div>
  );
};

export default RightPanel;