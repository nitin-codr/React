import React from 'react';
import '../../styles/Register/Register.css';

const Topic = (props) => {
    return (
        <div className={`topic ${props.nMode}`}>
            {props.text}
        </div>
    );
};

export default Topic;