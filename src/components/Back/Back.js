import React from 'react';
import '../../styles/BaseBar/Basebar.css';
import { Link } from 'react-router-dom';


const Back = () => {
    return (
        <div className="close">
            <Link to="/">
                <img alt="close" src="https://github.com/https-rahul/Anavrin/blob/master/assets/back.png?raw=true" />
            </Link>
        </div>
    );
};

export default Back;