import React from 'react';
import Layout from './components/Layout';

const Homepage = React.lazy(() => import('./screens/Homepage'));
const Major = React.lazy(() => import('./screens/Major'));
const Impression = React.lazy(() => import('./screens/Impression'));

const routes = [
    { path: '/', exact: true, name: 'Home', component: Layout },
    { path: '/homepage', exact: true, name: 'Homepage', component: Homepage },
    { path: '/major', exact: true, name: 'Major', component: Major },
    { path: '/impression', exact: true, name: 'Impression', component: Impression },
];

export default routes;