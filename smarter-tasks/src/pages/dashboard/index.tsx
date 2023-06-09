import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
 const userData = JSON.parse(localStorage.getItem('userData')|| '{}');
 console.log(userData.name);
 console.log(userData.email);
 const logout = async () => {
  localStorage.removeItem('userData');

 }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <Link to='/' id='logout-link' className="ml-6 text-gray-300 hover:text-white"> <button
          
          id="backToHomeButton"
          onClick={logout}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
         Log Out
        </button>
        </Link>
    </div>
  );
}

export default Dashboard;