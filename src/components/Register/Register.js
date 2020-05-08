import React from 'react';
import Title from '../Title/Title';
import Topic from '../Topic/Topic';
import '../../styles/Cards/Cards.css';

const Register = (props) => {
    return (
        <div className={`${props.nMode}`}>
            <div>
                <Title nMode={props.nMode} title="Join Us" />
            </div>
            <div className="cards">
                <div>
                    <Topic nMode={props.nMode} text="Signup"/>
                </div>
                <div>
                    <form class="ui form">
                        <div className="field row">
                            <label className="col-md-2" style={{fontSize: '1.5vw'}} for="name">Name</label>
                            <input className="col-md-10" id="name" name="name" type="text" placeholder="Name" />
                        </div>
                        <div className="field row">
                            <label className="col-md-2" style={{fontSize: '1.5vw'}} for="email">Email</label>
                            <input className="col-md-10" id="email" name="email" type="email" placeholder="Email" />
                        </div>
                        <div className="field row">
                            <label className="col-md-2" style={{fontSize: '1.5vw'}} for="college">College</label>
                            <input className="col-md-10" id="college" name="college" type="text" placeholder="College" />
                        </div>
                        <div className="field row">
                            <label className="col-md-2" style={{fontSize: '1.5vw'}} for="semester">Semester</label>
                            <select className="col-md-10" id="semester" name="semester" placeholder="Semester">
                                <option disabled selected value="select">Select</option>
                                <option value="cse">CSE</option>
                                <option value="it">IT</option>
                                <option value="ece">ECE</option>
                                <option value="mpae">MPAE</option>
                                <option value="ice">ICE</option>
                                <option value="be">BE</option>
                            </select>
                        </div>
                        <div className="field row">
                            <label className="col-md-2" style={{fontSize: '1.5vw'}} for="title">Title</label>
                            <select className="col-md-10" id="title" name="title" placeholder="Title">
                                <option disabled selected value="select">Select</option>
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                            </select>
                        </div>
                        <button type="submit" className="ui primary button large">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;