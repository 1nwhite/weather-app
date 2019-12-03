'use strict';

import '../sass/main.sass';
import { get } from './helpers';

import weather from './components/weather';

const app = get("#app");

const renderApp = (appContainer) => {
    appContainer.innerHTML = (`
        <div class="container">
            ${weather}
        </div>
    `);
};

renderApp(app);