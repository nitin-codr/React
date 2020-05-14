import React from 'react';
import Title from '../Title/Title';
import Name from '../Name/Name';
import Detail from '../Detail/Detail';
import '../../styles/Cards/Cards.css';

const About = () => {
    const desc="A free to use archive of day to day college classroom notes";
    return (
        <div>
            <div>
                <Title title="About" />
            </div>
            <div className="cards">
                <div>
                    <Name text="Anavrin"/>
                </div>
                <div>
                    <Detail desc={desc} />
                </div>
            </div>
        </div>
    );
};

export default About;