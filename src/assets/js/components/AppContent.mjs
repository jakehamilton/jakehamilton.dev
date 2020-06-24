'use strict';
import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

import useCSS from '../hooks/useCSS.mjs';

import Gap from './Gap.mjs';
import Profile from './Profile.mjs';
import Bio from './Bio.mjs';
import Projects from './Projects.mjs';

const AppContent = () => {
    useCSS(`
        .AppContent {
            margin: 0 auto;
            padding-top: 1rem;
            padding-bottom: 2.5rem;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            width: 100%;
            max-width: 1024px;
        }
    `);

    return html`
        <div class="AppContent">
            <${Profile} />
            <${Bio} />
            <${Gap} size="large" />
            <${Projects} />
        </div>
    `;
};

export default AppContent;
