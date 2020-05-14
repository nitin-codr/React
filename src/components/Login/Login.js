import React from 'react';
import '../../styles/Navbar/Navbar.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="row nav2">
            <p>
                <Link to = "/login">
                    Join Us
                </Link>
            </p>
        </div>
    );
};

export default Login;