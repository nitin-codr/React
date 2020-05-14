import React from 'react';
import '../../styles/BaseBar/Basebar.css';
import { useHistory } from 'react-router-dom';


const Close = () => {
    const history = useHistory();
    return (
        <div className="next">
            <img onClick={()=> history.goBack()} alt="close" src="https://raw.githubusercontent.com/https-rahul/Anavrin/master/assets/close.png" />
        </div>
    );
};

export default Close;