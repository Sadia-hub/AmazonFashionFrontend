import React from 'react';
const Login = () => {
    return (
        <div className="flex h-screen">
            <div className="m-auto p-6 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
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
                    >
                        Login
                    </button>

                </form>
                <p>Don't have an account? <span className='cursor-pointer font-bold'>Signup</span> </p>
            </div>
        </div>
    );
};

export default Login;
