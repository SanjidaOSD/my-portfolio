import dmpi from '../assets/dmpi.jfif'
import dmpi1 from '../assets/dmpi1.jfif'
import chs from '../assets/chs.jfif'
const Education = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center lg:mb-16 mb-4'>My<span className=' text-red-600 font-bold'>Education</span></h1>
            {/*dmpi  */}
            <div className="hero">
                <div className="hero-content flex-row lg:gap-16">
                    <img
                        src={dmpi1}
                        className="max-w-sm rounded-lg shadow-2xl lg:h-36 lg:w-64 h-20 w-36" />
                    <div>
                        <h1 className="text-xl lg:text-2xl font-bold text-red-600">Diploma in Computer Science and Technology

                        </h1>
                        <p className='lg:font-bold lg:text-xl'>
                            Dhaka Mohila Polytechnic Institute
                        </p>
                        <p className='lg:font-bold'>August 2020 – Present
                        </p>
                    </div>
                </div>
            </div>
            {/* chs */}
            {/* <div className="hero"> */}
            <div className="hero-content lg:ml-12 flex-row lg:gap-16 ">

                <img
                    src={chs}
                    className="max-w-sm rounded-lg shadow-2xl lg:h-36 lg:w-64 h-20 w-28" />
                <div>
                    <h1 className="text-xl lg:text-2xl font-bold text-red-600 ">Secondary School Certificate (SSC)
                    </h1>
                    <p className='lg:font-bold lg:text-xl'>
                        Chinamura L N High School
                    </p>
                    <p className='lg:font-bold'>January 2017 – February 2020
                    </p>
                    <p className='lg:font-bold'> Result – 4.89 (Out of 5.00)</p>
                </div>
            </div>
            {/* sort courses */}
            <div className='text-center'>
                <h1 className='text-2xl font-bold text-red-600'>Sort Courses:</h1>
                <div className='mb-4'>
                    <p className='lg:text-xl font-bold'>Industrial Attachment In Professional Web Development In MERN Stack</p>
                    <p className='lg:font-bold'>TechLight IT Institute ( June 2024 – Present )</p>
                </div>
                <div className='mb-4'>
                    <p className='lg:text-xl font-bold'> Professional Web Development</p>
                    <p className='lg:font-bold'> Programming Hero ( Jan 2024 – Jun 2024 )</p>
                </div>
            </div>



            <div className='border-b-2 border-b-red-600'>

            </div>

        </div>

        // </div>
    );
};

export default Education;