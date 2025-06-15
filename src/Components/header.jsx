import React from 'react';

const Header = () => {
    return (
<div className='container mx-auto '>
    <div className="navbar bg-base-100 pt-4 justify-between">
      <div className="flex-1 lg:flex-0 lg:basis-3/5 flex justify-between order-1">
        <a className=" text-2xl cursor-pointer font-bold">Recipe Calories</a>

        <div className="navbar-center hidden lg:flex gap-5">
        <ul className="menu menu-horizontal px-5">
        <li><a className='text-secondary dark:text-primary' >Home</a></li>
        <li><a className='text-secondary dark:text-primary' >Recepies</a></li>
        <li><a className='text-secondary dark:text-primary' >About</a></li>
        <li><a className='text-secondary dark:text-primary' >Search</a></li>
        </ul>
        </div>

    <div className="dropdown inline-flex lg:hidden ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 right-0 mt-10 w-52 p-2 shadow">
        <li><a className='text-secondary dark:text-primary' >Home</a></li>
        <li><a className='text-secondary dark:text-primary' >Recepies</a></li>
        <li><a className='text-secondary dark:text-primary' >About</a></li>
        <li><a className='text-secondary dark:text-primary' >Search</a></li>
      </ul>
    </div>
     </div>
    <div className="flex hidden lg:inline-flex gap-2 order-2">
        <label className="input hidden lg:inline-flex rounded-4xl focus-within:outline-none bg-gray-200 dark:bg-gray-950">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
          </svg>
        <input className="outline-none" type="search" required placeholder="Search" />
      </label>
     <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="CSS Navbar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
        </div>
    </div>
</div>
    );
};

export default Header;