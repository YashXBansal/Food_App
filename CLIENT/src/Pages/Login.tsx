import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Login = () => {

  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log("User logged in successfully");
        // Reset form fields after successful submission
        setFormData({
          email: '',
          password: '',
        });
        setInterval(() =>{
          navigate('/')
        }, 200)
        
      } else {
        console.error("Error logging in");
        alert('Wrong credentials')
      }
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-extrabold text-center text-white mb-8">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              // autoComplete="new-password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
              type="submit"
            >
              Sign In
            </button>
            <a className="text-sm text-blue-500 hover:text-blue-700" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-sm text-gray-400 text-center">Don't have an account?<Link to="/signup"className=" px-2 text-blue-500 hover:text-blue-700">SignUp</Link></p>
      </div>
    </div>
  );
}

export default Login;
