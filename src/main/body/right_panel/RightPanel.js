import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './right_panel.scss';
// import Projects from './item/projects/Projec ts';
import PanelSection from './item/PanelSection';
import GithubRepo from './item/github/GithubRepo';
import ProjectItem from './item/projects/ProjectItem';
import data from 'main/data/data';

function RightPanel(props) {
  const [pinnedRepos, setPinnedRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPinnedRepositories() {
      const query = `
        {
          user(login: "${data.details.github.username}") {
            pinnedItems(first: 6, types: REPOSITORY) {
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
    }

    getPinnedRepositories();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="RightPanel-root">
      <PanelSection title="GitHub Highlight">
        {isLoading ? (
          <div>Loading...</div>
        ) : pinnedRepos && pinnedRepos.length > 0 ? (
          <>
            {pinnedRepos.map((r, i) => (
              <GithubRepo key={i} name={r.name} link={r.html_url} />
            ))}
          </>
        ) : (
          <div>No pinned repositories found</div>
        )}
      </PanelSection>
      <PanelSection title="Dev Resources I Love">
        {data.rightPanel.projects.map((p, i) => (
          <ProjectItem
            key={i}
            header={p.header}
            link={p.link}
            description={p.description}
          />
        ))}
      </PanelSection>
    </div>
  );
}

export default RightPanel;