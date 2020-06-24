'use strict';
import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

import useCSS from '../hooks/useCSS.mjs';
import useTheme from '../hooks/useTheme.mjs';

const Gap = ({ size }) => {
    const theme = useTheme();

    useCSS(`
        .Gap--${size} {
            padding-top: ${theme.padding[size]}
        }
    `);

    return html`
        <div class="Gap--${size}" />
    `;
}

export default Gap;
