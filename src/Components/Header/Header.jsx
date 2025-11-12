import { NavLink, useNavigate } from 'react-router';
import { FaUserCircle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import Swal from "sweetalert2";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const links = (
        <div className='text-base font-semibold flex flex-col lg:flex-row gap-8'>
            <NavLink to={'/'} className={'nav-links px-2 py-1'}>Home</NavLink>
            <NavLink to={'/allmodels'} className={'nav-links px-2 py-1'}>All Models</NavLink>
            <NavLink to={'/addmodels'} className={'nav-links px-2 py-1'}>Add Models</NavLink>
        </div>
    );

    const handleLoginButtonClick = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Logged Out!",
                    text: "You have successfully logged out.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000,
                    toast: true,
                    position: "center",
                    timerProgressBar: true
                });

            })
            .catch((error) => console.log(error.message));
    };

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">3D ModelHub</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-2">
                {user ? (
                    <>
                        <div className="tooltip tooltip-left" data-tip={user.email}>
                            <img
                                src={user.photoURL}
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer"
                            />
                        </div>
                        <button
                            onClick={handleLogout}
                            className="btn btn-outline btn-error btn-sm"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <div className="tooltip tooltip-left" data-tip="Login">
                        <FaUserCircle
                            onClick={handleLoginButtonClick}
                            className="text-3xl text-gray-600 cursor-pointer hover:text-blue-500"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
