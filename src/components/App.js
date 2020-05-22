import React from 'react';
import Navbar from './Navbar/Navbar';
import '../App.css';
import AboutApp from './About/AboutApp';
import TeamApp from './Team/TeamApp';
import RegisterForm from './RegisterForm/RegisterForm';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import LoginForm from './LoginForm/LoginForm';
import { connect } from 'react-redux';

class App extends React.Component {
    state= {
        nMode: "day"
    }
    onClickHandle = (nMode) => {
        this.setState({nMode});
    }
    render() {
        return (
            <div className={`app ${this.props.mode}`}>
                <BrowserRouter>
                    <div>
                        <Navbar onClick={this.onClickHandle} />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route 
                                path="/about" exact 
                                render={(routeProps) => (
                                    <AboutApp {...routeProps} />
                                )}
                            />
                            <Route path="/team" exact component={TeamApp} />
                            <Route path="/register" exact component={RegisterForm} />
                            <Route path="/login" exact component={LoginForm} />
                            <Route path="/dashboard" exact component={Dashboard} />
                        </Switch>
                    </div>
                </BrowserRouter>
                <div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {mode: state.mode.mode}
}

export default connect(mapStateToProps) (App);