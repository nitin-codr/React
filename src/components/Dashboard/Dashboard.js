import React from 'react';
import Seperator from '../MainContent/Seperator';
import Description from '../MainContent/Description';
import Topic from '../Topic/Topic';

const Dashboard = () => {
    return (
        <div>
            <div>
                <Topic text="Anavrin" />
            </div>
            <div>
                <Seperator />
            </div>
            <div>
                <Description desc="Select your archive" />
            </div>
        </div>
    );
};

export default Dashboard;