// Signup.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login logic if needed
        
        // Redirect to the login page
        navigate('/login');
    };

    const handleSingup = () => {
        // Perform login logic if needed
        
        // Redirect to the login page
        navigate('/');
    };

    return (
        <div className="flex h-screen">
            <div className="m-auto p-10 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="border border-gray-300 p-2 w-full"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
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
                        />
                    </div>
                    <button
                        className="p-2 rounded border-2 border-black"
                        type="submit"
                        onClick={handleSingup}
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
