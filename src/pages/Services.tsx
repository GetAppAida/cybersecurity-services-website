import React from 'react';
import Forensics from '../components/Forensics';
import Tracking from '../components/Tracking';
import Recovery from '../components/Recovery';
import Partnerships from '../components/Partnerships';

const Services: React.FC = () => {
    return (
        <div>
            <h1>Our Cybersecurity Services</h1>
            <Forensics />
            <Tracking />
            <Recovery />
            <Partnerships />
        </div>
    );
};

export default Services;