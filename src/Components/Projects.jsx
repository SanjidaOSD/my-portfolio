
// const Projects = () => {
//     return (
//         <div>
//             <h1 className="text-5xl font-bold lg:mb-16 text-black">Here is my <span className="text-green-600">Projects-</span></h1>
//             {/* card1 */}
//             <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-12 lg:ml-16 justify-center'>
//                 <div className="card text-black w-96 shadow-xl border-double border-4 border-green-600">
//                     <figure>
//                         <img
//                             src="https://i.postimg.cc/hPLMrpjM/devdive-ss.jpg" className="h-[220px]"
//                             alt="Shoes" />
//                     </figure>
//                     <div className="card-body">
//                         <h2 className="card-title text-2xl font-bold text-green-600">Devdive</h2>
//                         <p> This project is a developer-centric platform designed to foster a collaborative environment for developers through real-time problem-solving, knowledge sharing, and mentorship.</p>

//                         {/* <p className="text-xl font-bold">Features:-</p>
//                         <li>Integrated AI assistant to answer general questions and resolve common issues.</li>
//                         <li>Users can schedule meetings and chat with mentors or moderators for exclusive support.</li>
//                         <li>Real-time notifications to keep users updated on activities and responses.
//                         </li>
//                         <li>Built-in code editor for writing and testing code in various programming languages.
//                         </li> */}
                        
//                        {/* <p className="text-black font-semibold">Technologies:</p>
//                        <p> HTML-5, CSS-3, Tailwind CSS, JavaScript, React JS, Redux JS, Firebase, Zegocloud, Node JS,
//                        SSL Commerz, Mongo DB, Express JS</p> */}
//                         <div className="card-actions">
//                             <a href="https://devdive1.netlify.app/" 
//                             target="_blank" className="font-bold link-hover text-green-600">Live Link</a>
//                             <div className="text-green-600">
//                                 <a href="https://github.com/MDRUHULAMIN7/DevDive-Client-Side"
//                                 target="_blank" className="ml-4 font-bold link-hover">Client Code</a>
//                                 <a href="https://github.com/MDRUHULAMIN7/Dev-Dive-Server-Side" 
//                                target="_blank" className="ml-4 link-hover font-bold ">Server Code</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
           
//                 {/* card2 */}
//                 <div className="card text-black w-96 shadow-xl border-double border-4 border-green-600">
//                     <figure>
//                         <img
//                             src="https://i.postimg.cc/R0JT49mh/pet.jpg" className="h-[220px]"
//                             alt="Shoes" />
//                     </figure>
//                     <div className="card-body bg-white">
//                         <h2 className="card-title text-2xl font-bold text-green-600">PetHouse</h2>
//                         <p>This website is a Pet Adoption & Donation related website. There are 2 role for users one is Admin and another is User. An User can add pet, donation campaign and manage them</p>

//                         {/* <p className="text-xl font-bold">Features:-</p>
//                         <li>A navbar and two protected routes.</li>
//                         <li>Created user Dashboard.</li>
//                         <li> Create Donation Campaign.
//                         </li>
//                         <li>Card data from MongoDbAtlas data.
//                         </li>
//                         <li>Using firebase authentication created register form and login.
//                         </li>
//                         <li>Created admin pane.</li>
//                         <li>Payment emplement..</li> */}
//                         <div className="card-actions">
//                             <a href="https://pethousebd.netlify.app/"
//                             target="_blank" className="font-bold link-hover text-green-600">Live Link</a>
//                             <div className="">
//                                 <a href="https://github.com/SanjidaOSD/Assignment12-client"
//                                 target="_blank" className="ml-4 font-bold link-hover text-green-600">Client Code</a>
//                                 <a href="https://github.com/SanjidaOSD/Assignment12-server"
//                                 target="_blank" className="ml-4 link-hover font-bold text-green-600">Server Code</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* card3 */}
//                 <div className="card text-black w-96 shadow-xl border-double border-4 border-green-600">
//                     <figure>
//                         <img
//                             src="https://i.postimg.cc/zDtR1hQ5/travelo1.jpg" className="h-[220px]"
//                             alt="Shoes" />
//                     </figure>
//                     <div className="card-body">
//                         <h2 className="card-title text-2xl font-bold text-green-600">Travelo</h2>
//                         <p>
//                         This website showcases tourist spots across Southeast Asia. Users can browse through various destinations and view details of each spot. To add a new tourist spot, users need to be logged in. 
//                         </p>
//                         {/* <p className="text-xl font-bold">Features:-</p>
//                             <li>Manage Listings: Users can update or delete spots they've added in the "My List" section.</li>
//                             <li> A banner is with using swiper slider.
//                             </li>
//                             <li>Estate data from json data.
//                             </li>
//                             <li>Using firebase authentication created register form and login(Email login, Google login, Github login).
//                             </li>
//                             <li>Mobile Friendly: The website works smoothly on mobile, tablet, and desktop devices.
//                             </li> */}
//                         <div className="card-actions">
//                             <a href="https://travelobd.netlify.app/" 
//                            target="_blank" className="link-hover font-bold flex text-green-600">Live Link</a>
//                             <div className="">
//                                 <a href="https://github.com/SanjidaOSD/MyHome-a9"
//                                 target="_blank" className="link-hover font-bold text-green-600">Client Code</a>
//                                 <a href="https://github.com/SanjidaOSD/Tourist-management-server"
//                                 target="_blank" className="ml-4 link-hover font-bold text-green-600">Server Code</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     );
// };

// export default Projects;



import React from "react";

const Projects = () => {
    const projects = [
        {
            title: "Devdive",
            image: "https://i.postimg.cc/hPLMrpjM/devdive-ss.jpg",
            description:
                "This project is a developer-centric platform designed to foster a collaborative environment for developers through real-time problem-solving, knowledge sharing, and mentorship.",
            liveLink: "https://devdive1.netlify.app/",
            clientCode: "https://github.com/MDRUHULAMIN7/DevDive-Client-Side",
            serverCode: "https://github.com/MDRUHULAMIN7/Dev-Dive-Server-Side",
        },
        {
            title: "PetHouse",
            image: "https://i.postimg.cc/R0JT49mh/pet.jpg",
            description:
                "This website is a Pet Adoption & Donation-related website where users can add pets, start donation campaigns, and manage them. Admins have full control over website content.",
            liveLink: "https://pethousebd.netlify.app/",
            clientCode: "https://github.com/SanjidaOSD/Assignment12-client",
            serverCode: "https://github.com/SanjidaOSD/Assignment12-server",
        },
        {
            title: "Travelo",
            image: "https://i.postimg.cc/zDtR1hQ5/travelo1.jpg",
            description:
                "A website showcasing tourist spots across Southeast Asia. Users can browse destinations, view details, and add spots after logging in.",
            liveLink: "https://travelobd.netlify.app/",
            clientCode: "https://github.com/SanjidaOSD/MyHome-a9",
            serverCode: "https://github.com/SanjidaOSD/Tourist-management-server",
        },
    ];

    return (
        <section className="py-16 px-4 lg:px-16 bg-green-100">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 text-black">
                Here are my <span className="text-blue-500">Projects</span>
            </h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="card bg-green-100 shadow-lg rounded-lg overflow-hidden  border-double border-4 border-blue-500 hover:shadow-xl transition-all"
                    >
                        <figure className="overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-[220px] w-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </figure>
                        <div className="card-body p-6">
                            <h2 className="card-title text-2xl font-bold text-green-600 mb-4">
                                {project.title}
                            </h2>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 font-semibold hover:underline"
                                >
                                    Live Link
                                </a>
                                <div className="space-x-4">
                                    <a
                                        href={project.clientCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-600 font-semibold hover:underline"
                                    >
                                        Client Code
                                    </a>
                                    <a
                                        href={project.serverCode}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-600 font-semibold hover:underline"
                                    >
                                        Server Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;




