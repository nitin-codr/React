import React from 'react';
import Navbar from '../Navbar/Navbar';
import Title from '../Title/Title';
import Heading from '../MainContent/Heading';
import Name from '../Name/Name';
import Description from "../MainContent/Description";
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
                    <Description desc={desc} />
                </div>
            </div>
        </div>
    );
};

export default About;