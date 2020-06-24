'use strict';
import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

import useCSS from '../hooks/useCSS.mjs';
import useTheme from '../hooks/useTheme.mjs';

const Toolbar = ({ children }) => {
    const theme = useTheme();

    useCSS(`
        .Toolbar {
            display: grid;
            grid-template: 1fr / max-content 1fr;
            width: 100%;
            height: 3.75rem;
            padding: 0.5rem 1rem;

            font-size: 1rem;
            font-weight: bold;

            background: ${theme.white};
            box-shadow: ${theme.shadows[1]};
        }

        .Toolbar > * {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        .Toolbar__logo {
            font-size: 1.25rem;
        }

        .Toolbar__right {
            justify-content: flex-end;
        }

        .Toolbar__highlight {
            color: ${theme.primary}
        }

        .Toolbar__link {
            display: inline-block;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            color: ${theme.link};
            text-decoration: none;
            background: transparent;

            transition: background 0.25s ease;
        }

        .Toolbar__link:hover {
            background: rgba(86, 146, 191, 0.17);
        }
    `);

    return html`
        <div class="Toolbar">
            <div class="Toolbar__left">
                <div class="Toolbar__logo">
                    👨‍💻 jakehamilton<span class="Toolbar__highlight">.dev</span>
                </div>
            </div>
            <div class="Toolbar__right">
                <a href="/assets/docs/Jake Hamilton Resume.pdf" download="Jake Hamilton Resume" class="Toolbar__link">Resume</a>
                <a href="mailto:jake.hamilton@hey.com" class="Toolbar__link">Email</a>
            </div>
        </div>
    `;
};

export default Toolbar;
