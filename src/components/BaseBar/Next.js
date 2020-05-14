import React from 'react';
import '../../styles/BaseBar/Basebar.css';
import { Link } from 'react-router-dom';

const Next = () => {
    return (
        <div className="next">
            <Link to = "/dashboard">
                <img alt="next" src="https://github.com/https-rahul/Anavrin/blob/master/assets/back.png?raw=true" />
            </Link>
        </div>
    );
};

export default Next;