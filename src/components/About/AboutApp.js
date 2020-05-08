import React from 'react';
import Title from '../Title/Title';
import Name from '../Name/Name';
import Detail from '../Detail/Detail';
import '../../styles/Cards/Cards.css';

const About = (props) => {
    const desc="A free to use archive of day to day college classroom notes";
    return (
        <div className={`${props.nMode}`}>
            <div>
                <Title nMode={props.nMode} title="About" />
            </div>
            <div className="cards">
                <div>
                    <Name nMode={props.nMode} text="Anavrin"/>
                </div>
                <div>
                    <Detail nMode={props.nMode} desc={desc} />
                </div>
            </div>
        </div>
    );
};

export default About;