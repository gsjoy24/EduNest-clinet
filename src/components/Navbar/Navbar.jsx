import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
   const { user, logOutUser } = useContext(AuthContext)
   const handleLogOut = () => {
      logOutUser()
         .then(() => console.log('logged out'))
         .then((err) => console.log(err.message))
   }

   const navItems =
      <>
         <li> <NavLink to='/'>Home</NavLink></li>
         <li> <NavLink to='/colleges'>Colleges</NavLink></li>
         <li> <NavLink to='/admission'>Admission</NavLink></li>
         {user?.email && <li> <NavLink to='/my-college'>My College</NavLink></li>}
         {!user?.email ?
            <>
               <li> <NavLink to='/signup'>Sign Up</NavLink></li>
               <li><NavLink to='/login'>Login</NavLink></li></>
            :
            <li onClick={handleLogOut}><button className='p-2 bg-slate-100 rounded-md cursor-pointer focus:scale-90'>Log out</button></li>}
      </>

   return (
      <div className="navbar bg-base-100 border-b z-50">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-5 space-y-3 shadow bg-base-100 rounded-box w-60">
                  {navItems}
               </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl font-bold">EduNEST</Link>
         </div>
         <div className="navbar-center hidden lg:flex items-center">
            <ul className="menu menu-horizontal px-1 space-x-2">
               {navItems}
            </ul>
         </div>
         <div className="navbar-end flex justify-end">
            <div className="join hidden md:block">
               <input className="input input-bordered join-item input-sm focus:outline-0" placeholder="Email" />
               <button className="btn btn-sm join-item rounded-r-full ">search</button>
            </div>
         </div>
      </div>
   );
};

export default Navbar;