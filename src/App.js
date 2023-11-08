import React, { useState, useRef } from 'react';

import './tailwind-config.js';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const validateForm = () => {
    let errors = {};
    let isValid = true;
    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    }
    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Do something with the form data
    } else {
      formRef.current.classList.add('shake');
      setTimeout(() => {
        formRef.current.classList.remove('shake');
      }, 1000);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md" ref={formRef}>
        <h1 className="text-3xl font-extrabold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className={`block w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              className={`block w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}