import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleLogout = () => {
        actions.logout();
        navigate('/login');
    };


	return (
		<nav class="navbar navbar-expand-lg background_blue">
			 <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>PetShop</Link>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/signup'>Signup</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/login'>Login</Link>
                        </li>
                        {store.isAuthenticated && (
                            <>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/private'>Private</Link>
                                </li>
                                <li className='nav-item'>
                                    <button className='nav-link btn' onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
		</nav>
	);
};
