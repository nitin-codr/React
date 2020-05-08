import React from 'react';
import '../../styles/Title/Title.css';

const Title = (props) => {
    return (
        <div className="tit">
            {props.title}
        </div>
    );
};

export default Title;