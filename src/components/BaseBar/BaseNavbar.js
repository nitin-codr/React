import React from 'react';
import Team from './Team';
import About from './About';
import Register from './Register';
import Next from './Next';
import '../../styles/BaseBar/Basebar.css';

const BaseNavbar = () => {
    return (
        <div className="row base">
            <div className="col-md-2">
                <Team />
            </div>
            <div className="col-md-2" >
                <About />
            </div>
            <div className="col-md-2" >
                <Register />
            </div>
            <div className="col-md-6">
                <Next />
            </div>
        </div>
    );
};

export default BaseNavbar;