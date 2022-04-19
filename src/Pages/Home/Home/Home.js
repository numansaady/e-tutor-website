import React from 'react';
import Services from '../../Services/Services';
import Advantages from '../Advantage/Advantages';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className="">
            <Banner/>
            <Services/>
            <Advantages/>
        </div>
    );
};

export default Home;