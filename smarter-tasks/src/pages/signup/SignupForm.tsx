import React, { useState } from 'react';
import {API_ENDPOINT}  from '../../config/constants';
import  {useNavigate}  from "react-router-dom";


const SignupForm: React.FC = () => {
  const [organisationName, setOrganisationName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
//   const authToken = localStorage.getItem('authToken');
const nav=useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_ENDPOINT}/organisations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: organisationName, user_name: userName, email: userEmail, password: userPassword}),
      });

      const jsonData=await response.json();

      if (!response.ok && !jsonData.token) {
        throw new Error('SignUp failed');
      }
      console.log('SignUp successful');
     
      
      // Dialogue: After successful signin, first we will save the token in localStorage
      localStorage.setItem('authToken', jsonData.token);
    //   localStorage.setItem('userData', jsonData.user);
    localStorage.setItem('userData', jsonData.data);
    nav("/account")
    } catch (error) {
      console.error('SignUp failed:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Organisation Name:</label>
        <input type="text" name="organisationName" id="organisationName" value={organisationName} onChange={(e) => setOrganisationName(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Your Name:</label>
        <input type="text" name="userName" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input type="email" name="userEmail" id="userEmail" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Password:</label>
        <input type="password" name="userPassword" id="userPassword" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
      </div>
      <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign up</button>
    </form>
  );
};

export default SignupForm;