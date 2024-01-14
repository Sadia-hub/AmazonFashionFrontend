import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiCall from '../apiCall';

const Login = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")

    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/signup');
    };

    const handleLogin = (e) => {

        e.preventDefault()
        const body = {
            email,
            password
        }
        apiCall('login',body, "POST", "json", null)
        .then((res)=>{
            console.log("res of contact is",res)
            res.success ? navigate("/") : setError(res.msg)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
        

    return (
        <div className="flex h-screen">
            <div className="m-auto p-6 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="border border-gray-300 p-2 w-full"
                            type="text"
                            id="email"
                            name="email"
                            value={email}
                            onChange={({target})=>{setEmail(target.value)}}
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="border border-gray-300 p-2 w-full"
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={({target})=>{setPassword(target.value)}}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        className="p-2 rounded border-2 border-black"
                        type="submit"
                        
                    >
                        Login
                    </button>

                </form>
                <p className='text-red-500'>{error}</p>
                <p>Don't have an account? <span className='cursor-pointer font-bold' onClick={handleSignup}>Signup</span> </p>
            </div>
        </div>
    );
};

export default Login;
