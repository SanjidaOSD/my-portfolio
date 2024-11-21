import { Link } from "react-router-dom";
import fb from "../assets/fb3.jpg"
import github from "../assets/github.png"
import link from "../assets/link9.jpg"

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-black text-white rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <Link to='/about'><a className="link link-hover font-bold">About Me</a></Link>
                    <Link to='/contact'><a className="link link-hover font-bold">Contact</a></Link>
                    <Link to='/education'> <a className="link link-hover font-bold">Education</a></Link>
                    <Link to='/skills'> <a className="link link-hover font-bold">Skills</a></Link>
                </nav>
                <nav>
                    <h1>FrontEnd Web Developer</h1>
                    {/* <div className="grid grid-flow-col justify-center gap-4">
                        <a href="https://web.facebook.com/profile.php?id=100054261816897">
                            <button className="btn-sm"><img src={fb} className="h-[50px] w-[50px] hover:scale-125" alt="" /></button>
                        </a>
                        <a href="https://github.com/SanjidaOSD">
                            <button className="btn-sm"><img src={github} className="h-[40px] w-[40px] hover:scale-125" alt="" /></button>
                        </a>
                        <button className="btn-sm"><img src={link} className="h-[40px] w-[40px] hover:scale-125" alt="" /></button>
                    </div> */}
                </nav>
                <aside>
                    <p>Copyright © ${new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>        </div>
    );
};

export default Footer;