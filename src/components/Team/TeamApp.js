import React from 'react';
import Title from '../Title/Title';
import Name from '../Name/Name';
import Detail from '../Detail/Detail';
import '../../styles/Cards/Cards.css';

const About = (props) => {
    const desc="Hi, I'm the developer behind this project. Currently pursuing my B.E. degree from NSIT. My interest in development bought us here.";
    return (
        <div className={`${props.nMode}`}>
            <div>
                <Title nMode={props.nMode} title="Team" />
            </div>
            <div className="cards">
                <div>
                    <Name nMode={props.nMode} text="Nitin Porwal"/>
                </div>
                <div>
                    <Detail nMode={props.nMode} desc={desc} />
                </div>
            </div>
        </div>
    );
};

export default About;