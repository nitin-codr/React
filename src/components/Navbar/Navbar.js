import React from 'react';
import '../../styles/Navbar/Navbar.css'

class Navbar extends React.Component {
    onIconClick = (event) => {
        this.props.onClick(1-this.props.nMode);
    }
    render() {   
        let nMode=this.props.nMode;
        let cl='off';
        if(nMode===1) {
            cl='on';
        }
        return (
            <div className="row nav">
                <i onClick={this.onIconClick} className = {`ui icon huge toggle ${cl}`} />
            </div>
        );

    }
};

export default Navbar;