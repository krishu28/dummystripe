// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Layout from './Layout';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    {AppRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
