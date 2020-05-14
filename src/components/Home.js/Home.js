import React from 'react';
import MainContent from '../MainContent/MainContent';
import BaseNavbar from '../BaseBar/BaseNavbar';
import Login from '../Login/Login';

const Home = () => {
    return (
        <div>
            <div>
                <Login />
            </div>
            <div>
                <MainContent />
            </div>
            <div>
                <BaseNavbar />
            </div>
        </div>
    )
};

export default Home;