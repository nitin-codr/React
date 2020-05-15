import React from 'react';
import '../../styles/BaseBar/Basebar.css';
import { Link } from 'react-router-dom';


const Close = () => {
    return (
        <div className="close">
            <Link to="/">
                <img alt="close" src="https://raw.githubusercontent.com/https-rahul/Anavrin/master/assets/close.png" />
            </Link>
        </div>
    );
};

export default Close;