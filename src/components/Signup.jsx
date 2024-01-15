// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiCall from '../apiCall';

const Signup = () => {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ name, setName] = useState("")

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSingup = (e) => {

        e.preventDefault()
        const body = {
            name,
            email,
            password
        }
        apiCall('signup',body, "POST", "json", null)
        .then((res)=>{
            console.log("res of contact is",res)
            res.success && navigate("/login")
            
        })
        .catch((err)=>{
            console.log(err)
        })
        
    };

    return (
        <div className="flex h-screen">
            <div className="m-auto p-10 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
                <form onSubmit={handleSingup}>
                <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="border border-gray-300 p-2 w-full"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={({target})=>{setName(target.value)}}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="border border-gray-300 p-2 w-full"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={({target})=>{setEmail(target.value)}}
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
                            placeholder="Enter your password"
                            value={password}
                            onChange={({target})=>{setPassword(target.value)}}
                            required
                        />
                    </div>
                    <button
                        className="p-2 rounded border-2 border-black"
                        type="submit"
                    >
                        Signup
                    </button>
                    <p>Already have an account? <span className='cursor-pointer font-bold' onClick={handleLogin}>Sign In</span> </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
