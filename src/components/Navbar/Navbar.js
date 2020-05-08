import React from 'react';
import '../../styles/Navbar/Navbar.css'

class Navbar extends React.Component {
    onIconClick = (event) => {
        let x=this.props.nMode;
        (x==="day") ? x="night" : x="day";
        this.props.onClick(x);
    }
    render() {   
        let nMode=this.props.nMode;
        let cl='off';
        if(nMode==="night") {
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