import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
// import BaseNavbar from './components/BaseBar/BaseNavbar';
// import MainContent from './components/MainContent/MainContent';
import './App.css';
// import AboutApp from './components/About/AboutApp';
// import TeamApp from './components/Team/TeamApp';
import Register from './components/Register/Register';

class App extends React.Component {
    state= {
        nMode: "day"
    }
    onClickHandle = (nMode) => {
        this.setState({nMode});
    }
    render() {
        return (
            <div className={`app ${this.state.nMode}`}>
                <div>
                    <Navbar onClick={this.onClickHandle} nMode={this.state.nMode} />
                </div>
                <br />
                {/* <div>
                    <MainContent />
                </div>
                <div>
                    <BaseNavbar />
                </div> */}
                {/* <div>
                    <AboutApp nMode={this.state.nMode} />
                </div> */}
                {/* <div>
                    <TeamApp />
                </div> */}
                <div>
                    <Register />
                </div>
            </div>
        );
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)