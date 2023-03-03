import React from 'react';
import Banner from './Banner';
import CareerGuidelines from './CareerGuidelines';
import Community from './Community';
import LiveCourse from './LiveCourse';
import Workshop from './Workshop';
import SliderSection from '../Home/Slider/SliderSection';
import TrustOstad from './TrustOstad';
import FreeResource from './Slider/FreeResource';
import IndustiesExpert from './Slider/IndustiesExpert';
const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <SliderSection></SliderSection>
            <LiveCourse></LiveCourse>
            <Workshop></Workshop>
            <FreeResource></FreeResource>
            <Community></Community>
            <IndustiesExpert></IndustiesExpert>
            <TrustOstad></TrustOstad>
            <CareerGuidelines></CareerGuidelines>

        </div>
    );
};

export default HomePage;