import React from 'react';
import { Link } from 'react-router-dom';
import Next from './Next';
import '../../styles/BaseBar/Basebar.css';

const BaseNavbar = () => {
    return (
        <div className="row base">
            <div className="col-md-2">
                <div>
                    <Link to="/team">Team</Link>
                </div>
            </div>
            <div className="col-md-4" >
                <div>
                    <Link to="/about">About</Link>
                </div>
            </div>
            <div className="col-md-6">
                <Next />
            </div>
        </div>
    );
};

export default BaseNavbar;