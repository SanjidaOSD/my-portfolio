import { Link } from "react-router-dom";
import img from "../assets/mypic.jfif"

const About = () => {
    return (
        <div>
            <div className="hero bg-black lg:h-[700px] rounded-lg">
                <div className="hero-content flex-col lg:flex-row lg:gap-24">
                    <img
                        src={img}
                        className="max-w-sm w-[200px] lg:w-full h-full rounded-full ring-2 ring-red-500 ring-offset-4 ring-offset-red-600 dark:ring-offset-red-400 shadow-5xl" />
                    <div>
                        <h1 className="text-2xl font-bold text-white">About<span className="text-red-600">Me-</span></h1>
                        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Frontend<span className="text-red-600">Developer</span></h1>
                        <p className="py-2 text-white">
                            Hey there! I'm a front-end developer who loves turning imaginative ideas into interactive realities. With a background in diploma in computer Science and Technology. I've honed my skills in HTML, CSS, JavaScript and React to create stunning, responsive websites.
                        </p>
                        <p className="py-6 mb-4 text-white">
                        In my journey as a developer, I've collaborated with diverse teams, solving complex problems and pushing the boundaries of web development. I enjoy experimenting with new tools and techniques, staying ahead of the curve, and continuously learning to enhance my craft.
                        </p>
                        <Link to='/contact'>
                            <button className="btn bg-white text-red-500 font-bold">Contact Me</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;