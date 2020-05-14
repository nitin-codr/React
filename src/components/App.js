import React from 'react';
import Navbar from './Navbar/Navbar';
import '../App.css';
import AboutApp from './About/AboutApp';
import TeamApp from './Team/TeamApp';
import RegisterForm from './RegisterForm/RegisterForm';
// import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './Home.js/Home';
import LoginForm from './LoginForm/LoginForm';

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
                    <Route path="/" exact component={Home} />
                    <Route 
                        path="/about" exact 
                        render={(routeProps) => (
                            <AboutApp {...routeProps} nMode={this.state.nMode} />
                        )}
                    />
                    <Route path="/team" exact component={TeamApp} />
                    <Route path="/register" exact component={RegisterForm} />
                    <Route path="/login" exact component={LoginForm} />
                </BrowserRouter>
                <div>
                </div>
                {/* <Dashboard /> */}
            </div>
        );
    };
};

export default App;