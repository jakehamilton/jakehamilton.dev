'use strict';
import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

import useCSS from '../hooks/useCSS.mjs';

import Project from './Project.mjs';

import projects from '../data/projects.mjs';

const Projects = () => {
    useCSS(`
        .Projects__title {
            display: flex;
            align-items: center;
            font-size: 2rem;
            margin: 0;
        }

        .Projects__project {
            margin-top: 1rem;
        }
    `);

    const renderProjects = () => {
        return projects.map(({ name, url, description }) => {
            return html`
              <${Project}
                class="Projects__project"
                name="${name}"
                url="${url}"
                description="${description}"
              />
            `;
        });
    };

    return html`
        <div class="Projects">
            <h2 class="Projects__title">
                Projects
            </h2>
            ${renderProjects()}
        </div>
    `;
};

export default Projects;
