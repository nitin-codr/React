import React from 'react';
import Team from './Team';
import About from './About';
import Next from './Next';
import '../../styles/BaseBar/Basebar.css';

const BaseNavbar = () => {
    return (
        <div className="row base">
            <div className="col-md-2">
                <Team />
            </div>
            <div className="col-md-1" >
                <About />
            </div>
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
                <Next />
            </div>
        </div>
    );
};

export default BaseNavbar;