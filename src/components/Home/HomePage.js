import React from 'react';
import Banner from './Banner';
import CareerGuidelines from './CareerGuidelines';
import Community from './Community';
import LiveCourse from './LiveCourse';
import Workshop from './Workshop';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <LiveCourse></LiveCourse>
            <Workshop></Workshop>
            <Community></Community>
            <CareerGuidelines></CareerGuidelines>
        </div>
    );
};

export default HomePage;