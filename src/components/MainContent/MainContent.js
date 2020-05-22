import React from 'react';
import Logo from './Logo';
import '../../styles/MainContent/MainContent.css';

const MainContent = () => {
    return (
        <div className="row main">
            <div className="col-md-8">
                <div className="heading">
                    Anavrin
                </div>
                <hr className="sep" />
                <div className="desc">
                    A class notes archive
                </div>
            </div>
            <div className="col-md-4" >
                <Logo />
            </div>
        </div>
    );
};

export default MainContent;