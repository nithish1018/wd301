import React from 'react';
import { Link } from 'react-router-dom';


const NotFound: React.FC = () => {
  return (
    <div>
      <h1 className='px-4'>404
      Page doesn't exists</h1>
     <Link to='/' className="ml-6 text-gray-300 hover:text-white"> <button
          
          id="backToHomeButton"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go Home
        </button>
        </Link>
    </div>
  );
};

export default NotFound;