// import fb from "../assets/fb.png"
// import github from "../assets/github.png"
// import link from "../assets/linkdin.png"
// import call from '../assets/call.png'
// import gmail from '../assets/gmail.png'

// const Contact = () => {

//     const fileURL = 'http://localhost:5173/cv.pdf'

//     const downloadPdf = (url)=>{
//         fetch(url).then(res=>res.blob()).then(blob=>{
//             const blobURL = window.URL.createObjectURL(new Blob([blob]))
//             const fileName = url.split('/').pop()
//             const aTag = document.createElement('a')
//             aTag.href=blobURL
//             aTag.setAttribute('download',fileName)
//             document.body.appendChild(aTag)
//             aTag.click()
//             aTag.remove()
//         })
       

//     }
//     return (
//         <div>
//             <h1 className="text-4xl font-bold text-center mt-4">Contact<span className="text-red-500">Me</span></h1>
//             <div className="hero">
//                 <div className="hero-content flex-col lg:flex-row-reverse lg:gap-56 lg:mt-16">
//                     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                         <form className="card-body">
//                             <div className="form-control">

//                                 <input type="name" name='name'placeholder="Your Name" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
//                             </div>
//                             <div className="form-control">
//                                 <input type="number"name="phone" placeholder="Phone Number" className="input input-bordered" required />
//                             </div>
//                             <textarea
//                             name="message"
//                                 placeholder="Your Message"
//                                 className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
//                             <div className="form-control mt-6">
//                                 <button className="btn bg-red-500 text-white font-bold">Send Me</button>
//                             </div>

//                         </form>
//                     </div>
//                     <div>
//                         <h1 className="flex gap-2 text-xl font-bold justify-center"><img src={gmail} className="w-[25px] h-[25px] text-center justify-center" alt="" />dev.sanjida1@gmail.com</h1>
//                         <p className=" flex gap-2 py-6 font-bold"><img src={call} className="w-[25px] h-[25px] text-center justify-center" alt="" />
//                             01892530675
//                         </p>
//                         <a href="https://web.facebook.com/profile.php?id=100054261816897">
//                             <button className="btn-sm"><img src={fb} className="h-[40px] w-[40px] hover:scale-125" alt="" /></button>
//                         </a>
//                         <a href="https://github.com/SanjidaOSD">
//                             <button className="btn-sm"><img src={github} className="h-[40px] w-[40px] hover:scale-125" alt="" /></button>
//                         </a>
//                         <button className="btn-sm"><img src={link} className="h-[40px] w-[40px] hover:scale-125" alt="" /></button>
//                         <div>
//                             <button onClick={()=>{downloadPdf(fileURL)}} className="btn bg-red-500 mt-12 text-white">Download cv</button>

//                         </div>
//                     </div>
//                 </div>
//             </div>


//         </div>



//     );
// };

// export default Contact;











import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import fb from '../assets/fb.png';
import github from '../assets/github.png';
import link from '../assets/linkdin.png';
import call from '../assets/call.png';
import gmail from '../assets/gmail.png';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                alert('Message sent successfully');
            }, (error) => {
                alert('Failed to send message, please try again');
            });
    };

    const fileURL = 'http://localhost:5173/cv.pdf';

    const downloadPdf = (url) => {
        fetch(url).then(res => res.blob()).then(blob => {
            const blobURL = window.URL.createObjectURL(new Blob([blob]));
            const fileName = url.split('/').pop();
            const aTag = document.createElement('a');
            aTag.href = blobURL;
            aTag.setAttribute('download', fileName);
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        });
    }

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-4">Contact<span className="text-red-500">Me</span></h1>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse lg:gap-56 lg:mt-16">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
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
                                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                                required>
                            </textarea>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-red-500 text-white font-bold">Send Me</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h1 className="flex gap-2 text-xl font-bold justify-center">
                            <img src={gmail} className="w-[25px] h-[25px] text-center justify-center" alt="" />dev.sanjida1@gmail.com
                        </h1>
                        <p className=" flex gap-2 py-6 font-bold">
                            <img src={call} className="w-[25px] h-[25px] text-center justify-center" alt="" /> 01892530675
                        </p>
                        <a href="https://web.facebook.com/profile.php?id=100054261816897">
                            <button className="btn-sm"><img src={fb} className="h-[40px] w-[40px] hover:scale-125" alt="" /></button>
                        </a>
                        <a href="https://github.com/SanjidaOSD">
                            <button className="btn-sm"><img src={github} className="h-[40px] w-[40px] hover:scale-125" alt="" /></button>
                        </a>
                        <button className="btn-sm"><img src={link} className="h-[40px] w-[40px] hover:scale-125" alt="" /></button>
                        <div>
                            <button onClick={() => { downloadPdf(fileURL) }} className="btn bg-red-500 mt-12 text-white">Download cv</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
