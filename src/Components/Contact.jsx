import fb from "../assets/fb.png"
import github from "../assets/github.png"
import link from "../assets/linkdin.png"
import call from '../assets/call.png'
import gmail from '../assets/gmail.png'
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast';
import { CiFacebook } from "react-icons/ci"
import { VscGithub } from "react-icons/vsc"
import { TiSocialLinkedinCircular } from "react-icons/ti"
import { MdOutgoingMail } from "react-icons/md"
import { IoCallSharp } from "react-icons/io5"

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const fullName = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        const serviceId = "service_goqo0gd";
        const templateId = "template_wi8plik";
        const publicKey = "9d0HlpO586z0wy3my";

        const templateParams = {
            from_name: fullName,
            from_email: email,
            to_name: 'Sanjida',
            message: message
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey).then(
            (respons) => {
                console.log(respons);
                toast.success('Message sent successfully')
            },
            (error) => {
                console.log(error);
                toast.error('Message sent failed')
            },
        );
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-4 text-black">Contact <span className="text-blue-500">Me</span></h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-56 lg:mt-16">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control bg-green-100">

                                <input type="name" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered" required />
                            </div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn border border-white font-bold text-white hover:bg-green-100">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="">
                        <h1 className="flex gap-2 text-2xl font-bold justify-center text-gray-500"><MdOutgoingMail className="w-[25px] h-[25px] text-center justify-center text-black" ></MdOutgoingMail>dev.sanjida1@gmail.com</h1>
                        <p className=" flex gap-2 py-6 font-bold text-gray-500"><IoCallSharp className="w-[25px] h-[25px] text-center justify-center text-black"></IoCallSharp>
                            01892530675
                        </p>
                        <div className="flex items-center mr-16">
                            <a href="https://web.facebook.com/profile.php?id=100054261816897" target="_blank">
                                <button className="btn-sm"><CiFacebook className="h-[30px] w-[30px] hover:scale-125 text-black" ></CiFacebook></button>
                            </a>
                            <a href="https://github.com/SanjidaOSD" target="_blank">
                                <button className="btn-sm"><VscGithub className="h-[30px] w-[30px] hover:scale-125 text-black"></VscGithub></button>
                            </a>
                            <a href="https://github.com/SanjidaOSD" target="_blank">
                                <button className="btn-sm"><TiSocialLinkedinCircular className="h-[35px] w-[50px] hover:scale-125 text-black"></TiSocialLinkedinCircular></button>
                            </a>
                        </div>

                    </div>
                </div>
                <Toaster />
            </div>
        </div>
    );
};

export default Contact;











