import React from 'react';
import '../../styles/MainContent/MainContent.css';

const Description = (props) => {
    return (
        <div className="desc">
            {props.desc}            
        </div>
    );
};

export default Description;