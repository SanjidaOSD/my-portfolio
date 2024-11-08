import fb from "../assets/fb.png"
import github from "../assets/github.png"
import link from "../assets/linkdin.png"
import call from '../assets/call.png'
import gmail from '../assets/gmail.png'
import emailjs from "@emailjs/browser"
import toast, { Toaster } from 'react-hot-toast';

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
            <h1 className="text-4xl font-bold text-center mt-4">Contact<span className="text-black">Me</span></h1>
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
                                <button type="submit" className="btn bg-green-100 font-bold text-black hover:bg-green-100">Send</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h1 className="flex gap-2 text-xl font-bold justify-center"><img src={gmail} className="w-[25px] h-[25px] text-center justify-center" alt="" />dev.sanjida1@gmail.com</h1>
                        <p className=" flex gap-2 py-6 font-bold"><img src={call} className="w-[25px] h-[25px] text-center justify-center" alt="" />
                            01892530675
                        </p>
                        <a href="https://web.facebook.com/profile.php?id=100054261816897">
                            <button className="btn-sm"><img src={fb} className="h-[40px] w-[40px] hover:scale-125" alt="" /></button>
                        </a>
                        <a href="https://github.com/SanjidaOSD">
                            <button className="btn-sm"><img src={github} className="h-[40px] w-[40px] hover:scale-125 text-black" alt="" /></button>
                        </a>
                        <button className="btn-sm"><img src={link} className="h-[40px] w-[40px] hover:scale-125" alt="" /></button>
                    </div>
                </div>
                <Toaster/>
            </div>
        </div>
    );
};

export default Contact;











