/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Login from './Login/Login';
import './LoginRegister.css';
import Register from './Register/Register';
const LoginRegister = () => {

    const [loginOpen, setLoginOpen] = useState(true);
    const [registerOpen, setRegisterOpen] = useState(false);

    const showLogin = () => {
        setLoginOpen(true);
        setRegisterOpen(false);
    }
    const showRegister = () => {
        setRegisterOpen(true);
        setLoginOpen(false);
        
    }
    return (
            <Container>
                <Row>
                    <Col md={12} lg={7} className="mx-auto">
                        <div className="login-register-wrapper">
                            <div className="login-register-tab">
                                <div className="nav-item" id="login">
                                <a onClick={showLogin}><h4 className={loginOpen ? 'selected-nav-link' : ''}>Login</h4></a>
                                </div>
                                <div className="nav-item">
                                <a onClick={showRegister}><h4 className={registerOpen ? 'selected-nav-link' : ''}>Register</h4></a>
                                </div>
                            </div>
                            <div className="login-register-container">
                                {
                                    loginOpen && <Login />
                                }
                                {
                                    registerOpen && <Register />
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
    );
};

export default LoginRegister;