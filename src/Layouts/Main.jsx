import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Home from '../Pages/Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
   return (
      <div className='max-w-7xl mx-auto'>
         <div className='sticky top-0 z-50'>
            <Navbar />
         </div>
         <Outlet />
      </div>
   );
};

export default Main;