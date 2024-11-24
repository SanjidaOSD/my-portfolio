// import dmpi from '../assets/dmpi.jfif'
// import dmpi1 from '../assets/dmpi1.jfif'
// import chs from '../assets/chs.jfif'
// import { FcGraduationCap } from 'react-icons/fc';
// const Education = () => {
//     return (
//         <div>
//             <h1 className='text-4xl font-bold text-center lg:mb-16 mb-4 text-black'>My<span className='font-bold'>Education</span></h1>
//             {/*dmpi  */}

//            <div className='flex items-center justify-center gap-5'>
//            <div className="card border-double border-4 border-green-600 w-96 shadow-xl">
//                 <div className="card-body">
//                     <FcGraduationCap className='text-gray-500 h-20 w-20'></FcGraduationCap>
                    
//                     <h2 className="card-title text-black">Diploma in Computer Science and Technology
//                     </h2>
//                     <p className='text-black'>Dhaka Mohila Polytechnic Institute</p>
                    
//                 </div>
//             </div>
//             <div className="card border-double border-4 border-green-600 w-96 shadow-xl">
//                 <div className="card-body">
//                     <FcGraduationCap className='text-gray-500 h-20 w-20'></FcGraduationCap>
                    
//                     <h2 className="card-title text-black">Secondary School Certificate <br /> (SSC)
//                     </h2>
//                     <p className='text-black'>Chinamura L N High School</p>
                    
//                 </div>
//             </div>
//            </div>
        
//             {/* sort courses */}
//             <div className='text-center'>
//                 <h1 className='text-2xl font-bold text-black pt-10 pb-5'>Sort Courses:</h1>
//                 <div className="card border-double border-4 border-green-600 w-[500px] shadow-xl items-center justify-center content-center lg:ml-[500px]">
//                 <div className="card-body ">
//                 <div className='mb-4'>
//                     <p className='lg:text-xl text-gray-600 font-bold'>Industrial Attachment In Professional Web Development In MERN Stack</p>
//                     <p className='lg:font-bold text-gray-600'>TechLight IT Institute ( June 2024 – Present )</p>
//                 </div>
//                 <div className='mb-12 mt-5'>
//                     <p className='lg:text-xl font-bold text-gray-600'> Professional Web Development</p>
//                     <p className='lg:font-bold text-gray-600'> Programming Hero ( Jan 2024 – Jun 2024 )</p>
//                 </div> 
                    
//                 </div>
//             </div>

//                 <div className='p-4  '>
                
//                 </div>
//             </div>



//             <div className='border-b-2 border-b-green-700'>

//             </div>

//         </div>

//         // </div>
//     );
// };

// export default Education;

import { FcGraduationCap } from 'react-icons/fc';

const Education = () => {
    return (
        <div className="p-6 bg-gray-50">
            {/* Title */}
            <h1 className="text-4xl font-bold text-center mb-12 text-black">
                My <span className="text-blue-500">Education</span>
            </h1>

            {/* Education Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Diploma Card */}
                <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <div className="text-center">
                        <FcGraduationCap className="h-16 w-16 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800">
                            Diploma in Computer Science and Technology
                        </h2>
                        <p className="text-gray-600 mt-2">Dhaka Mohila Polytechnic Institute</p>
                    </div>
                </div>

                {/* SSC Card */}
                <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <div className="text-center">
                        <FcGraduationCap className="h-16 w-16 mx-auto mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800">
                            Secondary School Certificate (SSC)
                        </h2>
                        <p className="text-gray-600 mt-2">Chinamura L N High School</p>
                    </div>
                </div>
            </div>

            {/* Short Courses Section */}
            <div className="mt-16">
                <h2 className="text-xl font-bold text-center mb-8 text-black">Short Courses</h2>
                <div className="max-w-2xl mx-auto bg-white border border-gray-300 rounded-lg shadow-lg p-6">
                    <div className="space-y-8">
                        {/* MERN Stack Course */}
                        <div className="text-left">
                            <p className="text-lg font-bold text-gray-800">
                                Industrial Attachment in MERN Stack Web Development
                            </p>
                            <p className="text-gray-600 mt-1">TechLight IT Institute (June 2024 – Present)</p>
                        </div>

                        {/* Professional Web Development Course */}
                        <div className="text-left">
                            <p className="text-lg font-bold text-gray-800">Professional Web Development</p>
                            <p className="text-gray-600 mt-1">Programming Hero (Jan 2024 – Jun 2024)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-green-600 mt-16"></div>
        </div>
    );
};

export default Education;
