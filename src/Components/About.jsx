import { Link } from "react-router-dom";
import img from "../assets/cover img.png"
import { LuCircleDot } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { MdOutlineWorkOutline } from "react-icons/md";



const About = () => {
    return (
        <div className="bg-gradient-to-r from-blue-100 via-white to-blue-200">
            <div className="hero lg:h-[700px] rounded-lg">
                <div className="hero-content flex-col lg:flex-row lg:gap-24">
                    {/* <img
                        src={img}
                        className="max-w-sm w-[200px] lg:w-full h-full hover: shadow-5xl" /> */}
                    <div className="card card-compact bg-white w-auto shadow-xl">
                        <figure>
                            <img
                                src={img}
                                alt="sanjida's img"
                                className=" h-52 rounded-full border-4 border-blue-400" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black text-center lg:ml-11">Sanjida!</h2>
                            <p className="text-black font-medium">FrontEnd Web Developer</p>
                            <p className="flex items-center gap-2 text-gray-500"><IoMailOutline></IoMailOutline>dev.sanjida1@gmail.com</p>
                            <p className="flex items-center gap-2 text-gray-500"><IoLocationOutline></IoLocationOutline>Dhaka, Bangladesh</p>
                            <p className="flex items-center gap-2 text-gray-500"><MdOutlineWorkOutline></MdOutlineWorkOutline>Full Time</p>

                            {/* <div className="flex gap-4">
                                <div className="badge border-green-600 bg-green-500 text-black">Html</div>
                                <div className="badge border-green-600 bg-green-500 text-black">css</div>
                                <div className="badge border-green-600 bg-green-500 text-black">js</div>
                                <div className="badge border-green-600 bg-green-500 text-black">react</div>
                            </div> */}

                        </div>
                    </div>
                    <div>
                        <h1 className="text-lg flex items-center gap-2 text-blue-500"> <LuCircleDot className="text-green-600"></LuCircleDot>About <span className="text-blue-500">Me-</span></h1>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-black mt-2">I Can Design Anything You Want</h1>
                        <p className="py-2 text-gray-600 ">
                            Hey there! I'm a front-end developer who loves turning imaginative ideas into interactive realities. With a background in diploma in computer Science and Technology. I've honed my skills in HTML, CSS, JavaScript and React to create stunning, responsive websites.
                        </p>
                        <p className="py-6 mb-2 text-gray-500 ">
                            In my journey as a developer, I've collaborated with diverse teams, solving complex problems and pushing the boundaries of web development. I enjoy experimenting with new tools and techniques, staying ahead of the curve, and continuously learning to enhance my craft.
                        </p>

                        <div className="flex gap-10 lg:gap-12">
                            <p className="flex gap-2 items-center text-gray-500"data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1600"><IoMdCheckmarkCircleOutline className="text-green-600 font-bold h-6 w-6"></IoMdCheckmarkCircleOutline> Work simple and cline design</p>
                            <p className="flex gap-2 items-center text-gray-500"data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1600"><IoMdCheckmarkCircleOutline className="text-green-600 font-bold h-6 w-6"></IoMdCheckmarkCircleOutline> Web Design Full stack</p>
                        </div>
                        <div className="flex gap-4">
                            <p className="flex gap-2 items-center text-gray-500"data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1600"><IoMdCheckmarkCircleOutline className="text-green-600 font-bold h-6 w-6"></IoMdCheckmarkCircleOutline>New idea and user friendly design</p>
                            <p className="flex gap-2 items-center text-gray-500" data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1600"><IoMdCheckmarkCircleOutline className="text-green-600 font-bold h-6 w-6"></IoMdCheckmarkCircleOutline> Unlimited Revisions</p>
                        </div>


                        <Link to='/contact'>
                            <button className="btn mt-10 px-8 py-2 bg-gradient-to-r from-green-600 to-teal-500 text-gray-800 rounded-lg font-semibold flex gap-2 justify-center items-center border-green-600" data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1600">Contact Me</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;













