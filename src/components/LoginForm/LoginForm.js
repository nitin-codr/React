import React from 'react';
import '../../styles/Cards/Cards.css';
import Close from '../Close/Close';
import '../../styles/Dashboard/Dashboard.css';

const LoginForm = () => {
    return (
        <div>
            <div className="tit">
                Login
            </div>
            <div className="cards">
                <div className="topic">
                    Login
                </div>
                <div>
                    <form class="ui form" id="login">
                        <div className="field row">
                            <label className="col-md-2" for="email"><span>Email</span></label>
                            <input className="col-md-10" id="email" name="email" type="email" placeholder="john@wick.com" />
                        </div>
                        <div className="field row">
                            <label className="col-md-2" for="passowrd"><span>Password</span></label>
                            <input className="col-md-10" id="password" name="password" type="password" placeholder="John123" />
                        </div>
                    </form>
                    <button type="submit">Login</button>
                </div>
            </div>
            <div classname="row base">
                <div className="col-md-12">
                    <Close />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;