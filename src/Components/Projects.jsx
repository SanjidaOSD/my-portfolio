
const Projects = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold lg:mb-16 text-black">Here is my <span className="text-green-600">Projects-</span></h1>
            {/* card1 */}
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-12 lg:ml-16 justify-center'>
                <div className="card text-black w-96 shadow-xl border-double border-4 border-green-600">
                    <figure>
                        <img
                            src="https://i.postimg.cc/hPLMrpjM/devdive-ss.jpg" className="h-[220px]"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-green-600">Devdive</h2>
                        <p> This project is a developer-centric platform designed to foster a collaborative environment for developers through real-time problem-solving, knowledge sharing, and mentorship.</p>

                        {/* <p className="text-xl font-bold">Features:-</p>
                        <li>Integrated AI assistant to answer general questions and resolve common issues.</li>
                        <li>Users can schedule meetings and chat with mentors or moderators for exclusive support.</li>
                        <li>Real-time notifications to keep users updated on activities and responses.
                        </li>
                        <li>Built-in code editor for writing and testing code in various programming languages.
                        </li> */}
                        
                       {/* <p className="text-black font-semibold">Technologies:</p>
                       <p> HTML-5, CSS-3, Tailwind CSS, JavaScript, React JS, Redux JS, Firebase, Zegocloud, Node JS,
                       SSL Commerz, Mongo DB, Express JS</p> */}
                        <div className="card-actions">
                            <a href="https://devdive1.netlify.app/" 
                            target="_blank" className="font-bold link-hover text-green-600">Live Link</a>
                            <div className="text-green-600">
                                <a href="https://github.com/MDRUHULAMIN7/DevDive-Client-Side"
                                target="_blank" className="ml-4 font-bold link-hover">Client Code</a>
                                <a href="https://github.com/MDRUHULAMIN7/Dev-Dive-Server-Side" 
                               target="_blank" className="ml-4 link-hover font-bold ">Server Code</a>
                            </div>
                        </div>
                    </div>
                </div>
           
                {/* card2 */}
                <div className="card text-black w-96 shadow-xl border-double border-4 border-green-600">
                    <figure>
                        <img
                            src="https://i.postimg.cc/R0JT49mh/pet.jpg" className="h-[220px]"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body bg-white">
                        <h2 className="card-title text-2xl font-bold text-green-600">PetHouse</h2>
                        <p>This website is a Pet Adoption & Donation related website. There are 2 role for users one is Admin and another is User. An User can add pet, donation campaign and manage them</p>

                        {/* <p className="text-xl font-bold">Features:-</p>
                        <li>A navbar and two protected routes.</li>
                        <li>Created user Dashboard.</li>
                        <li> Create Donation Campaign.
                        </li>
                        <li>Card data from MongoDbAtlas data.
                        </li>
                        <li>Using firebase authentication created register form and login.
                        </li>
                        <li>Created admin pane.</li>
                        <li>Payment emplement..</li> */}
                        <div className="card-actions">
                            <a href="https://pethousebd.netlify.app/"
                            target="_blank" className="font-bold link-hover text-green-600">Live Link</a>
                            <div className="">
                                <a href="https://github.com/SanjidaOSD/Assignment12-client"
                                target="_blank" className="ml-4 font-bold link-hover text-green-600">Client Code</a>
                                <a href="https://github.com/SanjidaOSD/Assignment12-server"
                                target="_blank" className="ml-4 link-hover font-bold text-green-600">Server Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card3 */}
                <div className="card text-black w-96 shadow-xl border-double border-4 border-green-600">
                    <figure>
                        <img
                            src="https://i.postimg.cc/zDtR1hQ5/travelo1.jpg" className="h-[220px]"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-green-600">Travelo</h2>
                        <p>
                        This website showcases tourist spots across Southeast Asia. Users can browse through various destinations and view details of each spot. To add a new tourist spot, users need to be logged in. 
                        </p>
                        {/* <p className="text-xl font-bold">Features:-</p>
                            <li>Manage Listings: Users can update or delete spots they've added in the "My List" section.</li>
                            <li> A banner is with using swiper slider.
                            </li>
                            <li>Estate data from json data.
                            </li>
                            <li>Using firebase authentication created register form and login(Email login, Google login, Github login).
                            </li>
                            <li>Mobile Friendly: The website works smoothly on mobile, tablet, and desktop devices.
                            </li> */}
                        <div className="card-actions">
                            <a href="https://travelobd.netlify.app/" 
                           target="_blank" className="link-hover font-bold flex text-green-600">Live Link</a>
                            <div className="">
                                <a href="https://github.com/SanjidaOSD/MyHome-a9"
                                target="_blank" className="link-hover font-bold text-green-600">Client Code</a>
                                <a href="https://github.com/SanjidaOSD/Tourist-management-server"
                                target="_blank" className="ml-4 link-hover font-bold text-green-600">Server Code</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;







// import { useState } from "react";
// import { LuPlus } from "react-icons/lu";

// const Projects = () => {

//   const [isHovered, setIsHovered] = useState(false);


//   const data = [
//     {
//       head: 'Devdive',
//       img: 'https://i.postimg.cc/hPLMrpjM/devdive-ss.jpg',
//       title: "Commercial",
//       des: 'Welcome to DevDive! This project is a developer-centric platform designed to foster a collaborative environment for developers through real-time problem-solving, knowledge sharing, and mentorship.',
//       num: '928 367 3789'
//     },
//     {
//       gap: true
//     },
//     {
//       head: "PetHouse",
//       img: 'https://i.postimg.cc/R0JT49mh/pet.jpg',
//       title: "Commercial",
//       des: 'This website is a Pet Adoption & Donation related website. There are 2 role for users one is Admin and another is User. An User can add pet, donation campaign and manage them. Admin can control all content of this website.',
//       num: '928 367 3789'
//     },
//     {
//       gap: true
//     },
//     {
//       head: "Travelo",
//       img: 'https://i.postimg.cc/zDtR1hQ5/travelo1.jpg',
//       title: "Commercial",
//       des: 'This website showcases tourist spots across Southeast Asia. Users can browse through various destinations and view details of each spot. To add a new tourist spot, users need to be logged in.',
//       num: '928 367 3789'
//     }
//   ]


//   return (
//     <div>
//       <div className="bg-[#5C5C5C] min-h-[576px] w-full px-20 xl:block hidden">
//         <div className="max-w-[1366px] xl:flex justify-evenly items-center gap-20 mx-auto h-full">
//           {data.map((item, index) => (
//             <div key={index} className="relative xl:h-[576px] group">
//               {
//                 item.gap ? <div className={`border-x border-[#747474] transition-all duration-500 h-[350px] xl:mt-[145px] xl:block hidden ${isHovered && "xl:opacity-0 hidden"}`}>
//                 </div> :
//                   <div onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                     className="xl:block flex"
//                   >
//                     {/* Image */}
                    
//                     <div className="relative xl:mb-0 mb-5">
//                       {
//                         index === 0 &&
//                         <h4 className="uppercase text-white absolute transition-all duration-700 top-[-50px] group-hover:top-[90px] left-0 group-hover:left-[120%] text-nowrap">Projects We have done</h4>
//                       }
//                       <h2 className="text-[32px] transition-all duration-700 group-hover:text-[24px] font-medium text-green-600 absolute bottom-16 group-hover:bottom-[-65px] hover:text-white group-hover:left-[38px] -left-10 z-10">{item.head}</h2>
//                      <div className="relative">
//                      <img
//                         src={item.img}
//                         alt="Sample"
//                         className="xl:w-[380px] w-screen h-[350px] object-cover transition-all duration-700 group-hover:w-[416px] group-hover:h-[300px] xl:mt-[146px] group-hover:mt-0"
//                       />
//                      </div>
//                       <div className="bg-[#EA4715] cursor-pointer p-7 rounded-full transition-all duration-500 absolute right-8 bottom-[30px] group-hover:opacity-100 opacity-0">
//                         <LuPlus className="text-[24px] text-white" />
//                       </div>
//                     </div>

//                     {/* Details Overlay */}
                    
//                     <div className="xl:absolute bottom-0 left-0 w-full h-0 overflow-hidden bg-[#393939] bg-opacity-60 text-white flex items-center justify-center opacity-0 xl:group-hover:h-[276px] group-hover:h-[300px] group-hover:opacity-100 transition-all duration-700">

//                       <div className="mt-[-25px]">
//                         <h3 className="text-[24px] px-10 pb-10 opacity-0 text-white">{item.head}</h3>
//                         <p className="text-[12px] pl-10 pb-8 pr-20 text-[#C4C4C4] text-left">{item.des}</p>
//                         <div className="card-actions px-8">
//                           <a href="https://devdive1.netlify.app/" 
//                             target="_blank" className="font-bold link-hover text-green-600">Live Link</a>
//                             <div className="text-green-600">
//                                 <a href="https://github.com/MDRUHULAMIN7/DevDive-Client-Side"
//                                 target="_blank" className="ml-4 font-bold link-hover">Client Code</a>
//                                 <a href="https://github.com/MDRUHULAMIN7/Dev-Dive-Server-Side" 
//                                target="_blank" className="ml-4 link-hover font-bold ">Server Code</a>
//                             </div>
//                         </div>
                
                
//                         <hr className="border border-white border-opacity-10" />
                       
//                         {/* <p className="text-[15px] px-10 pt-4 text-[#C4C4C4] text-left">{item.num}</p> */}
//                       </div>
//                     </div>
//                   </div>
//               }
//             </div>
//           ))}
//         </div>
//       </div>


//       <div className="bg-[#5C5C5C] min-h-[576px] w-full py-10 px-5 xl:hidden">
//         <h4 className="uppercase text-white text-center py-10 pb-20">Projects We have done</h4>
//         <div className="max-w-full lg:max-w-[1366px] md:grid md:grid-cols-2 gap-5 mx-auto h-full">
//           {data.filter(item => !item.gap).map((item, index) => (
//             <div key={index} className={`relative group w-full md:mb-0 mb-5 ${index == 2 && "col-span-2"}`}>
//               {
//                 item.gap ? (
//                   <div className={`hidden opacity-0 border-none`}>
//                   </div>
//                 ) : (
//                   <div>
//                     <div className="relative">
//                       <h2 className="text-[32px] transition-all z-[100] group-hover:hidden duration-700 font-thin text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
//                         {item.head}
//                       </h2>
//                       <div className="relative">
//                         <img
//                           src={item.img}
//                           alt="Sample"
//                           className="w-screen h-[300px] object-cover"
//                         />
//                         <div className="bg-black absolute w-full h-full top-0 opacity-20"></div>
//                       </div>

//                       <div className="absolute top-0 left-0 w-full h-0 overflow-hidden bg-[#393939] bg-opacity-80 text-white flex items-center justify-center opacity-0  group-hover:h-[300px] group-hover:opacity-100 transition-all duration-700">
//                         <div className="bg-[#EA4715] cursor-pointer p-7 rounded-full transition-all duration-500 absolute right-8 bottom-8 group-hover:opacity-100 opacity-0">
                       
//                         <a href="https://devdive1.netlify.app/" 
//                             target="_blank" className="font-bold link-hover text-green-600"> <LuPlus className="text-[24px] text-white" /></a>
                         
//                         </div>
//                         <div className="mt-[-25px]">
//                           <h3 className="text-[24px] px-10 pb-8 text-white">{item.head}</h3>
//                           <p className="text-[15px] px-10 pb-10 text-[#C4C4C4]">{item.des}</p>
//                           <hr className="border border-white border-opacity-10" />
//                           <p className="text-[15px] px-10 pt-8 text-[#C4C4C4]">{item.num}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//               )
//               }
//             </div>
//           ))}
//         </div>


//       </div>
//     </div>

//   );
// };

// export default Projects;