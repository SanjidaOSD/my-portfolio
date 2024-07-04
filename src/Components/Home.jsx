import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";

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
            <div className='lg:mt-24 mt-12'>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;