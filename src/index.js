import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
// import BaseNavbar from './components/BaseBar/BaseNavbar';
// import MainContent from './components/MainContent/MainContent';
import './App.css';
import AboutApp from './components/About/AboutApp';

class App extends React.Component {
    state= {
        nMode: 0
    }
    onClickHandle = (nMode) => {
        this.setState({nMode});
    }
    render() {
        let modeClass;
        (this.state.nMode===0) ? modeClass="day" : modeClass="night";
        return (
            <div className={`app ${modeClass}`}>
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
                <div>
                    <AboutApp />
                </div>
            </div>
        );
    };
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)