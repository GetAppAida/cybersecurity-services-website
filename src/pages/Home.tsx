import React from 'react';
import Forensics from '../components/Forensics';
import Tracking from '../components/Tracking';
import Recovery from '../components/Recovery';
import Partnerships from '../components/Partnerships';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Our Cybersecurity Services</h1>
            <p>Your trusted partner in digital safety and asset recovery.</p>
            <Forensics />
            <Tracking />
            <Recovery />
            <Partnerships />
        </div>
    );
};

export default Home;