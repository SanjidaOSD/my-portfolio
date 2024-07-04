import img from "../assets/mypic.jfif"
import fb from "../assets/fb.png"
import github from "../assets/github.png"
import link from "../assets/linkdin.png"

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
                        <h1 className="text-5xl font-bold">It's <span className="text-red-600">Sanjida</span></h1>
                        <h1 className="font-bold text-3xl mt-4">a <span className="text-black-600">Frontend Developer|</span></h1>
                       <div className="mb-6 lg:mb-16">
                       <p className="py-6 font-semibold mb-4">
                        Hi, I'm Sanjida, a front-end developer passionate about creating visually stunning and user-friendly web experiences. With expertise in HTML, CSS, JavaScript, and React. I specialize in building responsive and interactive websites. I enjoy turning complex problems into elegant solutions. Let's collaborate to bring your ideas to life! Reach out to me at-
                        </p>
                        <a href="https://web.facebook.com/profile.php?id=100054261816897">
                        <button className="btn-sm"><img src={fb} className="h-[40px] w-[40px] hover:scale-125"  alt="" /></button>
                        </a>
                        <a href="https://github.com/SanjidaOSD">
                        <button className="btn-sm"><img src={github} className="h-[40px] w-[40px] hover:scale-125"  alt="" /></button>
                        </a>
                        <button className="btn-sm"><img src={link} className="h-[40px] w-[40px] hover:scale-125"  alt="" /></button>

                       </div>
                        <button className="btn bg-red-500 text-white font-bold border-black">Download cv</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;