import React from 'react';
import Heading from './Heading';
import Seperator from './Seperator';
import Logo from './Logo';
import Description from './Description';
import '../../styles/MainContent/MainContent.css';

const MainContent = (props) => {
    return (
        <div className="row main">
            <div className="col-md-8">
                <Heading text="Anavrin" />
                <Seperator />
                <Description desc="A class notes archive" />
            </div>
            <div className="col-md-4" >
                <Logo />
            </div>
        </div>
    );
};

export default MainContent;