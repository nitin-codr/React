import React from 'react';
import '../../styles/Title/Title.css';
import '../../styles/About/About.css';
import '../../styles/Cards/Cards.css';
import Back from '../Close/Close';

const About = () => {
    const desc="A free to use archive of day to day college classroom notes";
    return (
        <div>
            <div className="tit">
                About
            </div>
            <div className="cards">
                <div className="name">
                    Anavrin
                </div>
                <div className="detail">
                    {desc}
                </div>
            </div>
            <Back />
        </div>
    );
};

export default About;