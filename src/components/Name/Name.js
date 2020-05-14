import React from 'react';
import '../../styles/About/About.css';

const Name = (props) => {
    return (
        <div className="name">
            {props.text}
        </div>
    );
};

export default Name;