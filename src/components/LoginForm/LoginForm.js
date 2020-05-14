import React from 'react';
import Title from '../Title/Title';
import Topic from '../Topic/Topic';
import '../../styles/Cards/Cards.css';
import Close from '../Close/Close';

const LoginForm = () => {
    return (
        <div>
            <div>
                <Title title="Join Us" />
            </div>
            <div className="cards">
                <div>
                    <Topic text="Login"/>
                </div>
                <div>
                    <form class="ui form" id="login">
                        <div className="field row">
                            <label className="col-md-2" style={{fontSize: '1.5vw'}} for="email">Email</label>
                            <input className="col-md-10" id="email" name="email" type="email" placeholder="Email" />
                        </div>
                        <div className="field row">
                            <label className="col-md-2" style={{fontSize: '1.5vw'}} for="passowrd">Password</label>
                            <input className="col-md-10" id="password" name="password" type="password" placeholder="Password" />
                        </div>
                    </form>
                    <button type="submit" className="ui primary button large">Login</button>
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