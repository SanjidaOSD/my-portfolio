import { NavLink } from "react-router-dom";
import { FaDownload, FaRegCircleDot } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";

const Navbar = () => {
    const links = <>
        <li><NavLink to='/' className='link link-hover text-black font-normal lg:text-base'>Portfolio</NavLink></li>
        <li><NavLink to='/about' className='link link-hover text-black font-normal lg:text-base'>About Me</NavLink></li>
        <li><NavLink to='/education' className='link link-hover  text-black font-normal lg:text-base'>Education</NavLink></li>
        <li><NavLink to='/skills' className='link link-hover text-black font-normal lg:text-base'>Skills</NavLink></li>
        <li><NavLink to='/contact' className='link link-hover text-black font-normal lg:text-base'>Contact Me</NavLink></li>


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

            <div className="navbar bg-white">
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
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-white">
                           {links}
                        </ul>
                    </div>
                    
                    <p><FaDotCircle className="text-green-500 hidden lg:block lg:ml-16 lg:h-16 lg:w-12 lg:relative"></FaDotCircle></p>
                    <a className="btn btn-ghost text-xl lg:text-4xl font-bold text-black lg:absolute">SanjiDa</a>
                   
                   
                </div>
                <div className="navbar-center hidden lg:flex bg-white">
                    <ul className="menu menu-horizontal px-1 bg-white text-white">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="px-8 py-2 bg-gradient-to-r from-green-600 to-teal-500 text-gray-800 rounded-lg font-semibold flex gap-2 justify-center items-center" onClick={handleDownload}>Resume <FaDownload /> </button>
                </div>
            </div>







            {/* <div className="navbar lg:h-32 ">
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
                    <p><FaDotCircle className="text-green-500 lg:ml-16 h-16 w-12 relative"></FaDotCircle></p>
                    <a className="btn btn-ghost text-3xl lg:text-4xl font-bold text-black absolute ">SanjiDa</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-4">
                        {links}
                    </ul>
                </div>
                <div>
                    <button className="px-8 py-2 bg-gradient-to-r from-green-600 to-teal-500 text-gray-800 rounded-lg font-semibold flex gap-2 justify-center items-center" onClick={handleDownload}>Resume <FaDownload /> </button>
                </div>
            </div> */}


        </div>
    );
};

export default Navbar;