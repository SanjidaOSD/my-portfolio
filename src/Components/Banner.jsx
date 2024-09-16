import img from "../assets/mypic.jfif"
import fb from "../assets/fb.png"
import github from "../assets/github.png"
import link from "../assets/linkdin.png"
import { Typewriter } from 'react-simple-typewriter'
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";

import { FaFacebookSquare } from "react-icons/fa";



import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero mt-12 md:mt-16 lg:mt-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={img}
                        className="max-w-sm  rounded-full shadow-2xl" />
                    <div>
                        {/* <h1 className="font-bold text-xl">Hi!</h1> */}
                        <h1 className="text-5xl font-bold">It's <span className="">Sanjida</span></h1>
                        <h1 className="font-bold text-3xl mt-4">a <span className="text-pink-400">Frontend 
                        <Typewriter
                                        words={[' Developer|']}
                                        loop={0}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    /></span></h1>
                        <div className="mb-6 lg:mb-16">
                            <p className="py-6 font-semibold mb-4">
                                Hi, I&apos;m Sanjida, a front-end developer passionate about creating visually stunning and user-friendly web experiences. With expertise in HTML, CSS, JavaScript, and React. I specialize in building responsive and interactive websites. I enjoy turning complex problems into elegant solutions. Let's collaborate to bring your ideas to life! Reach out to me at-
                            </p>
                            <a href="https://web.facebook.com/profile.php?id=100054261816897">
                                <button className="btn-sm"><FaFacebookSquare className="h-8 w-8"></FaFacebookSquare></button>
                            </a>
                            <a href="https://github.com/SanjidaOSD">
                                <button className="btn-sm"><PiGithubLogoFill className="h-8 w-8"></PiGithubLogoFill></button>
                            </a>
                            <button className="btn-sm"><FaLinkedinIn className="h-8 w-8"></FaLinkedinIn></button>

                        </div>
                        <Link to='/contact'>
                            <button className="btn bg-pink-400 border-pink text-white font-bold border-black">Hire me</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;




// import img from "../assets/mypic.jfif";
// import { Typewriter } from 'react-simple-typewriter';
// import { PiGithubLogoFill } from "react-icons/pi";
// import { FaLinkedinIn, FaFacebookSquare } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Banner = () => {
//     return (
//         <div className="bg-white text-gray-900 min-h-screen flex items-center justify-center">
//             <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-24 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
//                 {/* Profile Image */}
//                 <div className="flex-shrink-0">
//                     <img
//                         src={img}
//                         alt="Profile"
//                         className="w-48 h-48 lg:w-56 lg:h-56 rounded-full shadow-lg object-cover"
//                     />
//                 </div>

//                 {/* Text Content */}
//                 <div className="text-center lg:text-left space-y-6">
//                     <h1 className="text-3xl lg:text-4xl font-semibold">
//                         Hello, I'm <span className="text-pink-400">Sanjida</span>
//                     </h1>
//                     <h2 className="text-xl lg:text-2xl font-medium">
//                         a <span className="text-teal-400">
//                             Frontend
//                             <Typewriter
//                                 words={[' Developer']}
//                                 loop={0}
//                                 cursor
//                                 cursorStyle='|'
//                                 typeSpeed={70}
//                                 deleteSpeed={50}
//                                 delaySpeed={1000}
//                             />
//                         </span>
//                     </h2>
//                     <p className="text-lg font-light">
//                         I'm passionate about creating beautiful and user-friendly web experiences with HTML, CSS, JavaScript, and React. I turn ideas into interactive realities with a focus on simplicity and elegance.
//                     </p>

//                     {/* Social Media Icons */}
//                     <div className="flex justify-center lg:justify-start gap-4 mb-8">
//                         <a href="https://web.facebook.com/profile.php?id=100054261816897" className="text-gray-600 hover:text-blue-600 transition-colors">
//                             <FaFacebookSquare className="h-8 w-8" />
//                         </a>
//                         <a href="https://github.com/SanjidaOSD" className="text-gray-600 hover:text-gray-700 transition-colors">
//                             <PiGithubLogoFill className="h-8 w-8" />
//                         </a>
//                         <a href="https://www.linkedin.com/in/sanjida-akter-330b6b22b/" className="text-gray-600 hover:text-blue-400 transition-colors">
//                             <FaLinkedinIn className="h-8 w-8" />
//                         </a>
//                     </div>

//                     {/* "Hire Me" Button */}
//                     <Link to='/contact'>
//                         <button className="mt-6 px-6 py-3 bg-pink-400 text-white font-semibold rounded-lg shadow-md hover:bg-pink-500 transition-colors">
//                             Hire Me
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;
