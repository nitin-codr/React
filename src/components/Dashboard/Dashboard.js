import React from 'react';
import '../../styles/Dashboard/Dashboard.css';
import '../../styles/Register/Register.css';
import '../../styles/BaseBar/Basebar.css';
import Next from '../BaseBar/Next';
import { Link } from 'react-router-dom';
import Back from '../Back/Back';

const Dashboard = () => {
    return (
        <div className = "dash">
            <div className="clo-md-4 nav2">
                <p>
                    <Link to="/profile">
                        <i className="ui large user circle icon"/>
                        <span>Welcome Nitin</span>
                    </Link>
                </p>
            </div>
            <div>
                <div className="heading">
                    Anavrin
                </div>
            </div>
            <div>
                <hr className="sep" />
            </div>
            <div className='desc'>
                Select your archive
            </div>
            <div className="ui form row">
                <div className="col-md-6">
                    <div className="field">
                        <label htmlFor="semester"><span>Semester</span></label>
                        <select id="semester" name="semester" placeholder="Semester">
                            <option disabled  value="select">Select</option>
                            <option value="cse">1</option>
                            <option value="it">2</option>
                            <option value="ece">3</option>
                            <option value="mpae">4</option>
                            <option value="ice">5</option>
                            <option value="be">6</option>
                            <option value="ice">7</option>
                            <option value="be">8</option>
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="subCode"><span>Subject Code</span></label>
                        <input type="text" id="subCode" name="subCode" placeholder="ITC-01"/>
                    </div>
                    <div className="field">
                        <label htmlFor="date"><span>Date</span></label>
                        <input type="date" id="date" name="date" placeholder="Date"/>
                    </div>
                </div>
            </div>
            <div>
                <Next />
            </div>
            <div>
                <Back />
            </div>
        </div>
    );
};

export default Dashboard;