import React from 'react';
import Layout from './components/Layout';

const Homepage = React.lazy(() => import('./screens/Homepage'));
const Impression = React.lazy(() => import('./screens/Impression'));
const Teacher = React.lazy(() => import('./screens/Teacher'));
const About = React.lazy(() => import('./screens/About'));
const Student = React.lazy(() => import('./screens/Student'));
const StudentDetail = React.lazy(() => import('./screens/StudentDetail'));

const routes = [
    { path: '/', exact: true, name: 'Home', component: Layout },
    { path: '/homepage', exact: true, name: 'Homepage', component: Homepage },
    { path: '/impression', exact: true, name: 'Impression', component: Impression },
    { path: '/teacher', exact: true, name: 'Teacher', component: Teacher },
    { path: '/about', exact: true, name: 'About', component: About },
    { path: '/student', exact: true, name: 'Student', component: Student },
    { path: '/student-detail', exact: true, name: 'StudentDetail', component: StudentDetail },
];

export default routes;