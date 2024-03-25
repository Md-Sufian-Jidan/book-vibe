import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 lg:px-28 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 mr-3">
                        <NavLink className={({isActive}) => isActive === true ? 'text-[#23BE0A] font-bold' : 'font-semibold'} to={'/'}>Home</NavLink>
                        <NavLink className={({isActive}) => isActive === true ? 'text-[#23BE0A] font-bold' : 'font-semibold'} to={'/listedBooks'}>Listed Books</NavLink>
                        <NavLink className={({isActive}) => isActive === true ? 'text-[#23BE0A] font-bold' : 'font-semibold'} to={'/pagesRead'}>Pages To Read</NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to={'./'} className={({isActive}) => isActive === true ? 'text-[#23BE0A] border border-[#23BE0A] font-bold btn mr-2' : 'font-semibold btn mr-2'}>Home</NavLink>
                    <NavLink to={'./listedBooks'} className={({isActive}) => isActive === true ? 'text-[#23BE0A] border border-[#23BE0A] font-bold btn mr-2' : 'font-semibold btn mr-2'}>Listed Books</NavLink>
                    <NavLink to={'/pagesRead'} className={({isActive}) => isActive === true ? 'text-[#23BE0A] border border-[#23BE0A] font-bold btn mr-2' : 'font-semibold btn mr-2'}>Pages To Read</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn bg-[#23be0a] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;