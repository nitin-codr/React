import React from 'react';
import '../../styles/Navbar/Navbar.css'
import { connect } from 'react-redux';
import {day, night} from '../../actions'

class Navbar extends React.Component {
    onIconClick = () => {
        console.log(this.props);
        if(this.props.mode==="day") {
            this.props.night();
        }
        else {
            this.props.day();
        }
    }
    render() {   
        let nMode=this.props.mode;
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

const mapStateToProps = (state) => {
    return {mode: state.mode.mode};
}

export default connect(mapStateToProps, {
    day, night
}) (Navbar);