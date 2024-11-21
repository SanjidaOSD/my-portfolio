
import img from "../assets/cover img.png";
import { Typewriter } from 'react-simple-typewriter';
import { PiGithubLogo } from "react-icons/pi";
import { CiFacebook, CiLinkedin, CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { LuCircleDot } from "react-icons/lu";
import { SiKnexdotjs } from "react-icons/si";

const Banner = () => {
    return (
        <div className="bg-green-50 p-1 relative">
            <p><LuCircleDot className="text-green-300 h-28 w-12 lg:ml-96 lg:mt-48 absolute"></LuCircleDot></p>
            <div className="px-3 md:px-8 lg:px-12">
                <div className="hero mt-8 md:mt-16 lg:mt-20">
                <p><SiKnexdotjs className="text-green-300 h-28 w-12"></SiKnexdotjs></p>
                    <div className="hero-content flex-col lg:flex-row-reverse items-center lg:items-start text-center lg:text-left lg:gap-24">
                       <div>
                       <img
                            src={img}
                            className="sm:w-48 md:w-60 lg:w-auto rounded-lg mb-6 lg:mb-0"
                            alt="Sanjida's profile"
                        />
                       </div>
                        <div className="text-black">
                            
                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
                                Hi, I'm <span>Sanjida</span>
                            </h1>
                            
                            <h1 className="font-bold text-2xl md:text-3xl mt-6">
                                a <span>Frontend
                                    <Typewriter
                                        words={[' Developer']}
                                        loop={0}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    /></span>
                            </h1>
                            <div className="mb-6 lg:mb-8 mt-4">
                                <p className="py-4 font-semibold mb-4 mx-auto lg:mx-0 max-w-md md:max-w-full">
                                    I&apos;m a front-end developer passionate about creating visually stunning and user-friendly web experiences. With expertise in HTML, CSS, JavaScript, and React. I specialize in building responsive and interactive websites. I enjoy turning complex problems into elegant solutions. Let's collaborate to bring your ideas to life!
                                </p>
                                <p className="flex justify-center lg:justify-start items-center gap-1 mb-1"data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1600">
                                    <CiLocationOn className="h-5 w-5" />Agargaon, Dhaka
                                </p>
                                <p className="flex justify-center lg:justify-start items-center gap-1 mb-8"data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1600">
                                    <GoDotFill className="h-5 w-5 text-green-700" />Available
                                </p>
                                <div className="flex justify-center lg:justify-start gap-1">
                                    <a href="https://web.facebook.com/profile.php?id=100054261816897" target="_blank">
                                        <button className="btn-sm"data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1600">
                                            <CiFacebook className="h-8 w-8" />
                                        </button>
                                    </a>
                                    <a href="https://github.com/SanjidaOSD" target="_blank">
                                        <button className="btn-sm"data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1600">
                                            <PiGithubLogo className="h-8 w-8" />
                                        </button>
                                    </a>
                                    <a href="https://www.linkedin.com/in/sanjidaema/" target="_blank">
                                        <button className="btn-sm"data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1600">
                                              <CiLinkedin className="h-8 w-8" />
                                        </button>
                                    </a>
                                    {/* <button className="btn-sm"data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1600">
                                        <CiLinkedin className="h-8 w-8" />
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;











// import img from "../assets/mypic.jfif"
// import { Typewriter } from 'react-simple-typewriter'
// import { PiGithubLogo} from "react-icons/pi";
// import { CiFacebook, CiLinkedin, CiLocationOn } from "react-icons/ci";
// import { GoDotFill } from "react-icons/go";


// const Banner = () => {
//     return (
//         <div>
//             <div className="hero mt-12 md:mt-16 lg:mt-24">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     <img
//                         src={img}
//                         className="max-w-sm  rounded-lg shadow-2xl" />
//                     <div className="text-black">
//                         {/* <h1 className="font-bold text-xl">Hi!</h1> */}
//                         <h1 className="text-5xl font-bold text-black">Hi, I'm <span className="">Sanjida</span></h1>
//                         <h1 className="font-bold text-3xl mt-4">a <span className="">Frontend
//                         <Typewriter
//                                         words={[' Developer|']}
//                                         loop={0}
//                                         cursor
//                                         cursorStyle='|'
//                                         typeSpeed={70}
//                                         deleteSpeed={50}
//                                         delaySpeed={1000}
//                                     /></span></h1>
//                         <div className="mb-6 lg:mb-8">
//                             <p className="py-6 font-semibold mb-4">
//                                 I&apos;m a front-end developer passionate about creating visually stunning and user-friendly web experiences. With expertise in HTML, CSS, JavaScript, and React. I specialize in building responsive and interactive websites. I enjoy turning complex problems into elegant solutions. Let's collaborate to bring your ideas to life!
//                             </p>
//                              <p className="flex text-center items-center gap-1 mb-1"><CiLocationOn className="h-6 w-6"></CiLocationOn>Agargaon, Dhaka</p>

//                              <p className="flex text-center items-center gap-1 mb-12"><GoDotFill className="h-6 w-6 text-green-700"></GoDotFill>Available</p>


//                             <a href="https://web.facebook.com/profile.php?id=100054261816897">
//                                 <button className="btn-sm"><CiFacebook className="h-8 w-8"></CiFacebook></button>
//                             </a>
//                             <a href="https://github.com/SanjidaOSD">
//                                 <button className="btn-sm"><PiGithubLogo className="h-8 w-8"></PiGithubLogo ></button>
//                             </a>
//                             <button className="btn-sm"><CiLinkedin className="h-8 w-8"></CiLinkedin ></button>

//                         </div>
//                         {/* <Link to='/contact'>
//                             <button className="btn font-bold border-black">Hire me</button>
//                         </Link> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;