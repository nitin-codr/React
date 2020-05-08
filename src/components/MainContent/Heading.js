import React from 'react';
import '../../styles/MainContent/MainContent.css';

const Heading = (props) => {
    return (
        <div className="heading">
            {props.text}
        </div>
    );
};

export default Heading;