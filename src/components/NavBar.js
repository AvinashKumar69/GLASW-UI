import React from 'react';
import LOGO from '../assets/glaswLOGO1.png';
import { LoginIcon, UserCircleIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success font-font-custom">
            <div className="container-fluid">
                <NavLink to='/'><img className='inline object-cover w-10 h-10 mr-2 rounded-full' src={LOGO} /></NavLink>
                {/* <a className="navbar-brand" href="#">GLASW</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-options-custom navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="navbar-options-custom nav-link active" aria-current="page" to="/">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/aboutus">ABOUT US</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                CONSULTANCY SERVICES
                            </a>
                            <ul className="dropdown-menu rounded-lg bg-success align-items-center" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="/startups">Start-Up</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/greenloans">GreenLoans</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-0 md:mt-0" type="submit">
                            LOGIN
                            <LoginIcon className='h-5 w-5' />
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;