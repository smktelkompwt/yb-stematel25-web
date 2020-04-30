import React from 'react';
import Layout from './components/Layout';

const Homepage = React.lazy(() => import('./screens/Homepage'));
const Major = React.lazy(() => import('./screens/Major'));
const Impression = React.lazy(() => import('./screens/Impression'));
const Teacher = React.lazy(() => import('./screens/Teacher'));
const Video = React.lazy(() => import('./screens/Video'));
const Student = React.lazy(() => import('./screens/Student'));

const routes = [
    { path: '/', exact: true, name: 'Home', component: Layout },
    { path: '/homepage', exact: true, name: 'Homepage', component: Homepage },
    { path: '/major', exact: true, name: 'Major', component: Major },
    { path: '/impression', exact: true, name: 'Impression', component: Impression },
    { path: '/teacher', exact: true, name: 'Teacher', component: Teacher },
    { path: '/video', exact: true, name: 'Video', component: Video },
    { path: '/student', exact: true, name: 'Student', component: Student },
];

export default routes;