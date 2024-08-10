import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import '../styles/Auth.css';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://todo-app1-lv0m.onrender.com/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/home"); // Use navigate function directly

        } else {
            alert("Invalid credentials");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (    
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <label>Email address</label>
                </div>
                    <div className='authT'>
                    <input type="email"  value={credentials.email} onChange={onChange} name="email" className='authTxt'/> {/* Add name attribute */}
                    </div>
                <div className="pass">
                    <label htmlFor="password" >Password</label>
                </div>
                    <div className='authT'>
                    <input type="password"  value={credentials.password} onChange={onChange} name="password" id="password" className='authTxt' />
                    </div>
                <button type="submit" className="submit">Login</button>
                <p>If You Don't Have An Account <Link to="/signup" >SignUp  </Link></p>
            </form>
        </div>
    );
};

export default Login;
