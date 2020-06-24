'use strict';
import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

import useCSS from './hooks/useCSS.mjs';

import AppProvider from './components/AppProvider.mjs';
import Toolbar from './components/Toolbar.mjs';
import AppContent from './components/AppContent.mjs';

const App = () => {
    useCSS(`
        .app {
            width: 100%;
            height: 100%;
        }
    `);

    return html`
        <${AppProvider}>
            <div class="app">
                <${Toolbar} />
                <${AppContent} />
            </div>
        </${AppProvider}>
    `;
};

export default App;
