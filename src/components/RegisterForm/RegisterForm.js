import React from 'react';
import '../../styles/Cards/Cards.css';
import '../../styles/Register/Register.css';
import Close from '../Close/Close';

const RegisterForm = () => {
    return (
        <div>
            <div className='tit'>
                Join Us
            </div>
            <div className="cards">
                <div className="topic">
                    Signup
                </div>
                <form className="row ui form">
                    <div className="col-md-6" style={{"paddingRight": '5vw', 'borderRight': '1px solid green'}}>
                        <div>
                            <div className="field row">
                                <label htmlFor="name"><span>Name</span></label>
                                <input id="name" name="name" type="text" placeholder="John Wick" />
                            </div>
                            <div className="field row">
                                <label htmlFor="email"><span>Email</span></label>
                                <input id="email" name="email" type="email" placeholder="john@wick.com" />
                            </div>
                            <div className="field row">
                                <label htmlFor="password"><span>Password</span></label>
                                <input id="password" name="password" type="password" placeholder="baba_yaga" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{"paddingLeft": '5vw', 'borderLeft': '1px solid green'}}>
                        <div>
                            <div className="field row">
                                <label htmlFor="college"><span>College</span></label>
                                <input id="college" name="college" type="text" placeholder="NSUT" />
                            </div>
                            <div className="field row">
                                <label htmlFor="branch"><span>Branch</span></label>
                                <select id="branch" name="branch" placeholder="Branch">
                                    <option disabled  value="select">Select</option>
                                    <option value="cse">CSE</option>
                                    <option value="it">IT</option>
                                    <option value="ece">ECE</option>
                                    <option value="mpae">MPAE</option>
                                    <option value="ice">ICE</option>
                                    <option value="be">BE</option>
                                </select>
                            </div>
                            <div className="field row">
                                <label htmlFor="designation"><span>Designation</span></label>
                                <select id="designation" name="designation" placeholder="Designation">
                                    <option disabled value="select">Select</option>
                                    <option value="student">Student</option>
                                    <option value="teacher">Teacher</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button type="submit" >Register</button>
                </form>
            </div>
            <div className="row base">
                <div className="col-md-12">
                    <Close />
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;