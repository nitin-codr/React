import React from 'react';
import '../../styles/About/About.css';

const Detail = (props) => {
    return (
        <div className="detail">
            {props.desc}
        </div>
    );
};

export default Detail;