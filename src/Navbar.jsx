import { NavLink } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
    const links = <>
        <li><NavLink to='/' className='link link-hover lg:text-white font-medium lg:text-lg'>Portfolio</NavLink></li>
        <li><NavLink to='/about' className='link link-hover lg:text-white font-medium lg:text-lg'>About Me</NavLink></li>
        <li><NavLink to='/education' className='link link-hover lg:text-white font-medium lg:text-lg'>Education</NavLink></li>
        <li><NavLink to='/skills' className='link link-hover lg:text-white font-medium lg:text-lg'>Skills</NavLink></li>
        <li><NavLink to='/contact' className='link link-hover lg:text-white font-medium lg:text-lg'>Contact Me</NavLink></li>


    </>

    const handleDownload = () => {
        const aTag = document.createElement('a')
        aTag.href = "/resume.pdf"
        aTag.setAttribute('download', "Resume_Sanjida")
        document.body.append(aTag);
        aTag.click();
        aTag.remove();
    }

    return (
        <div>
            <div className="navbar bg-gray-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost lg:text-4xl md:text-3xl sm:text-3xl font-bold text-white"><span className="text-white">Sanji</span>Da</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-4">
                        {links}
                    </ul>
                </div>
                <div>
                    <button className="px-8 py-2 bg-white text-gray-800 rounded-lg font-semibold flex gap-2 justify-center items-center" onClick={handleDownload}>Resume <FaDownload /> </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;