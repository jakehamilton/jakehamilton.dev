'use strict';
import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

import useCSS from '../hooks/useCSS.mjs';
import useTheme from '../hooks/useTheme.mjs';

const Project = ({ name, url, description, class: className }) => {
    const theme = useTheme();

    useCSS(`
        .Project {
            display: flex;
            flex-direction: column;
            border-radius: 0.5rem;
            box-shadow: ${theme.shadows[1]};
            padding: 1rem;
        }

        .Project__top {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            overflow-x: auto;
        }

        .Project__bottom {
            display: flex;
            align-items: center;
            padding-top: 0.75rem;
        }

        .Project__name {
            font-size: 1.2rem;
            margin: 0;
            white-space: nowrap;
        }

        .Project__link {
            margin-left: 1.5rem;
            color: ${theme.link};
        }

        .Project__description {
            margin: 0;
        }
    `);

    const renderURL = () => {
        if (url) {
            return html`
                <a href="${url}" class="Project__link">${url}</a>
            `;
        } else {
            return null;
        }
    };

    return html`
        <div class="Project ${className}">
            <div class="Project__top">
                <h3 class="Project__name">${name}</h3>
                ${renderURL()}
            </div>
            <div class="Project__bottom">
                <p class="Project__description">${description}</p>
            </div>
        </div>
    `;
};

export default Project;
