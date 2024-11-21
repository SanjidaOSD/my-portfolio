import dmpi from '../assets/dmpi.jfif'
import dmpi1 from '../assets/dmpi1.jfif'
import chs from '../assets/chs.jfif'
import { FcGraduationCap } from 'react-icons/fc';
const Education = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center lg:mb-16 mb-4 text-black'>My<span className='font-bold'>Education</span></h1>
            {/*dmpi  */}

           <div className='flex items-center justify-center gap-5'>
           <div className="card border-double border-4 border-green-600 w-96 shadow-xl">
                <div className="card-body">
                    <FcGraduationCap className='text-gray-500 h-20 w-20'></FcGraduationCap>
                    
                    <h2 className="card-title text-black">Diploma in Computer Science and Technology
                    </h2>
                    <p className='text-black'>Dhaka Mohila Polytechnic Institute</p>
                    
                </div>
            </div>
            <div className="card border-double border-4 border-green-600 w-96 shadow-xl">
                <div className="card-body">
                    <FcGraduationCap className='text-gray-500 h-20 w-20'></FcGraduationCap>
                    
                    <h2 className="card-title text-black">Secondary School Certificate <br /> (SSC)
                    </h2>
                    <p className='text-black'>Chinamura L N High School</p>
                    
                </div>
            </div>
           </div>
            {/* <div className="hero">
                <div className="hero-content flex-row lg:gap-16">
                    <img
                        src={dmpi1}
                        className="max-w-sm rounded-lg shadow-2xl lg:h-36 lg:w-64 h-20 w-36" />
                    <div>
                        <h1 className="text-xl lg:text-2xl font-bold text-black">Diploma in Computer Science and Technology

                        </h1>
                        <p className='lg:font-bold lg:text-xl text-gray-600'>
                            Dhaka Mohila Polytechnic Institute
                        </p>
                        <p className='lg:font-bold text-gray-600'>August 2020 – Present
                        </p>
                    </div>
                </div>
            </div> */}
            {/* chs */}
            {/* <div className="hero"> */}
            {/* <div className="hero-content lg:ml-12 flex-row lg:gap-16 ">

                <img
                    src={chs}
                    className="max-w-sm rounded-lg shadow-2xl lg:h-36 lg:w-64 h-20 w-28" />
                <div>
                    <h1 className="text-xl lg:text-2xl font-bold text-black">Secondary School Certificate (SSC)
                    </h1>
                    <p className='lg:font-bold text-gray-600 lg:text-xl'>
                        Chinamura L N High School
                    </p>
                    <p className='lg:font-bold text-gray-600'>January 2017 – February 2020
                    </p>
                    <p className='lg:font-bold text-gray-600'> Result – 4.89 (Out of 5.00)</p>
                </div>
            </div> */}
            {/* sort courses */}
            <div className='text-center'>
                <h1 className='text-2xl font-bold text-black pt-10 pb-5'>Sort Courses:</h1>
                <div className="card border-double border-4 border-green-600 w-[500px] shadow-xl items-center justify-center content-center lg:ml-[500px]">
                <div className="card-body ">
                <div className='mb-4'>
                    <p className='lg:text-xl text-gray-600 font-bold'>Industrial Attachment In Professional Web Development In MERN Stack</p>
                    <p className='lg:font-bold text-gray-600'>TechLight IT Institute ( June 2024 – Present )</p>
                </div>
                <div className='mb-12 mt-5'>
                    <p className='lg:text-xl font-bold text-gray-600'> Professional Web Development</p>
                    <p className='lg:font-bold text-gray-600'> Programming Hero ( Jan 2024 – Jun 2024 )</p>
                </div> 
                    
                </div>
            </div>

                <div className='p-4  '>
                
                </div>
            </div>



            <div className='border-b-2 border-b-green-700'>

            </div>

        </div>

        // </div>
    );
};

export default Education;