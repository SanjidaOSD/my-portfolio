import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className="lg:mt-24">
                <About></About>
            </div>
            <div className="lg:mt-24 mt-12">
                <Education></Education>
            </div>
            <div className="lg:mt-24 mt-12">
                <Skills></Skills>
            </div>
            <div className="lg:mt-24 mt-12">
                <Projects></Projects>
            </div>
            <div className='lg:mt-24 mt-12'>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;