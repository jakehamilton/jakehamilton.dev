'use strict';
import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

import useCSS from '../hooks/useCSS.mjs';

const content = `
Hi! I'm Jake Hamilton. For the last 5 years, I've been working on engineering teams
to build unique applications and services. Even before then, I had been working on
hobby projects since 2013. My most comfortable position is within web technologies
building user interfaces, but I've been expanding my toolset for the last 3 years
to now include DevOps (Docker, Kubernetes, etc). I take pride in learning new
technologies and building a better understanding of the greater tech ecosystem.
`.trim();

const Bio = () => {
    useCSS(`
        .Bio {
            margin-top: 1.5rem;
        }

        .Bio__title {
            display: flex;
            align-items: center;
            font-size: 2rem;
            margin: 0;
        }

        .Bio__content {
            font-size: 1.1rem;
            margin-top: 0.75rem;
        }
    `);

    return html`
        <div class="Bio">
            <h2 class="Bio__title">
                Bio
            </h2>
            <p class="Bio__content">
                ${content}
            </p>
        </div>
    `;
};

export default Bio;
