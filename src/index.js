import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './styles/css/index.css';

const run = () => {
    const container = document.querySelector('#root');
    //@ts-ignore
    container.dataset.theme = 'light';

    const root = createRoot(container);
    const app = <App />;

    root.render(app);
};

// Run the application
run();
