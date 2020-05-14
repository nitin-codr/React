import React from 'react';
import '../../styles/Cards/Cards.css';
import '../../styles/Register/Register.css';

const Register = () => {
    return (
        <div>
            <form class="ui form">
                <div className="field row">
                    <label className="col-md-2" style={{fontSize: '1.2vw'}} for="name">Name</label>
                    <input className="col-md-10" id="name" name="name" type="text" placeholder="Name" />
                </div>
                <div className="field row">
                    <label className="col-md-2" style={{fontSize: '1.2vw'}} for="email">Email</label>
                    <input className="col-md-10" id="email" name="email" type="email" placeholder="Email" />
                </div>
                <div className="field row">
                    <label className="col-md-2" style={{fontSize: '1.2vw'}} for="college">College</label>
                    <input className="col-md-10" id="college" name="college" type="text" placeholder="College" />
                </div>
                <div className="field row">
                    <label className="col-md-2" style={{fontSize: '1.2vw'}} for="semester">Semester</label>
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
                    <label className="col-md-2" style={{fontSize: '1.2vw'}} for="title">Title</label>
                    <select className="col-md-10" id="title" name="title" placeholder="Title">
                        <option disabled selected value="select">Select</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="fiat">Fiat</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <button type="submit" className="ui primary button">Register</button>
            </form>
        </div>
    );
};

export default Register;