import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Test from './pages/Test';
import MultiStepForm from 'pages/MultiStepForm';
import ThankYou from 'pages/ThankYou';
import NotFound from 'components/navBar/NotFound';
import About from 'components/about/about';
import Merchant from 'components/merchant/Merchant';
import Mission from 'components/merchant/mission'
const AppRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/test',
        element: <Test />,
    },
    {
        path: '/form',
        element: <MultiStepForm />
    },{
        path: '/thank-you',
        element: <ThankYou />
    },{
        path: '/*',
        element: <NotFound />
    },{
        path: "/about",
        element: <About />
    },
    {
        path:"/merchants",
        element: <Merchant />
    },
    {
        path:"/mission",
        element: <Mission />
    }
];

export default AppRoutes;
