import React from 'react';
import Navbar from './Navbar/Navbar';
import BaseNavbar from './BaseBar/BaseNavbar';
import MainContent from './MainContent/MainContent';
import '../App.css';
import AboutApp from './About/AboutApp';
import TeamApp from './Team/TeamApp';
import Register from './Register/Register';
// import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import {Link, BrowserRouter, Route} from 'react-router-dom';

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
                <BrowserRouter>
                    <Navbar onClick={this.onClickHandle} nMode={this.state.nMode} />
                    <Route path="/" exact component={MainContent} />
                    <Route path="/" exact component={BaseNavbar} />
                    <Route 
                        path="/about" exact 
                        render={(routeProps) => (
                            <AboutApp {...routeProps} nMode={this.state.nMode} />
                        )}
                    />
                    <Route path="/team" exact component={TeamApp} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                </BrowserRouter>
                <div>
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
                {/* <div>
                    <Register />
                </div> */}
                {/* <div>
                    <Login />
                </div> */}
                {/* <Dashboard /> */}
            </div>
        );
    };
};

export default App;