'use strict';
import { html } from 'https://unpkg.com/htm/preact/standalone.module.js';

import useCSS from '../hooks/useCSS.mjs';

const Profile = () => {
    useCSS(`
        .Profile {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 1.5rem;
        }

        .Profile__image {
            width: 10rem;
            height: 10rem;
            border-radius: 50%;
        }
    `);

    return html`
        <div class="Profile">
            <img src="/assets/img/profile.jpg" class="Profile__image" />
        </div>
    `;
}

export default Profile;
