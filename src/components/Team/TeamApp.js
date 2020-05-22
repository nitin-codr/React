import React from 'react';
import '../../styles/Cards/Cards.css';
import Close from '../Close/Close';

const About = () => {
    const desc="Hi, I'm the developer behind this project. Currently pursuing my B.E. degree from NSIT. My interest in development bought us here.";
    return (
        <div >
            <div className='tit'>
                Team
            </div>
            <div className="cards">
                <div className='name'>
                    Nitin Porwal
                </div>
                <div className="detail">
                    {desc}
                </div>
            </div>
            <div className="row base">
                <div className="col-md-12">
                    <Close />
                </div>
            </div>
        </div>
    );
};

export default About;