import React from 'react';
import './Login.css';
const Login = () => {
    return (
        <div className='login-form'>
            <form>
                <input type="text" name="user-name" placeholder="Username" />
                <input type="password" name="user-password" placeholder="Password" />
                <div className="button-box">
                    <div className="login-toggle-btn">
                        <input type="checkbox" />
                        <label>Remember me</label>
                        <a href="/">Forgot Password?</a>
                    </div>
                    <button type='submit'><span>Login</span></button>
                </div>
            </form>
        </div>
    );
};

export default Login;