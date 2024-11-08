// import { MdOutlineDone } from "react-icons/md";

const Projects = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold lg:mb-16 text-black">Here is my <span className="text-green-600">Projects-</span></h1>
            {/* card1 */}
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-12 lg:ml-16 justify-center'>
                <div className="card text-black w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.postimg.cc/hPLMrpjM/devdive-ss.jpg" className="h-[220px]"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-green-600">Devdive</h2>
                        <p>Build a Collaborative Forum for Read-Time Problem Solving and Developer Community Engagement..</p>

                        <p className="text-xl font-bold">Features:-</p>
                        <li>Integrated AI assistant to answer general questions and resolve common issues.</li>
                        <li>Users can schedule meetings and chat with mentors or moderators for exclusive support.</li>
                        <li>Real-time notifications to keep users updated on activities and responses.
                        </li>
                        <li>Built-in code editor for writing and testing code in various programming languages.
                        </li>
                        
                       <p className="text-black font-semibold">Technologies:</p>
                       <p> HTML-5, CSS-3, Tailwind CSS, JavaScript, React JS, Redux JS, Firebase, Zegocloud, Node JS,
                       SSL Commerz, Mongo DB, Express JS</p>
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
                <div className="card text-black w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.postimg.cc/R0JT49mh/pet.jpg" className="h-[220px]"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body bg-white">
                        <h2 className="card-title text-2xl font-bold text-green-600">PetHouse</h2>
                        <p>This website is a Pet Adoption & Donation related website. There are 2 role for users one is Admin and another is User.</p>

                        <p className="text-xl font-bold">Features:-</p>
                        <li>A navbar and two protected routes.</li>
                        <li>Created user Dashboard.</li>
                        <li> Create Donation Campaign.
                        </li>
                        <li>Card data from MongoDbAtlas data.
                        </li>
                        <li>Using firebase authentication created register form and login.
                        </li>
                        <li>Created admin pane.</li>
                        <li>Payment emplement..</li>
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
                <div className="card text-black w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.postimg.cc/zDtR1hQ5/travelo1.jpg" className="h-[220px]"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-green-600">Travelo</h2>
                        <p>
                        User Contributions: Logged-in users can easily add new tourist spots or delete spots to the site.
                        </p>
                        <p className="text-xl font-bold">Features:-</p>
                            <li>Manage Listings: Users can update or delete spots they've added in the "My List" section.</li>
                            <li> A banner is with using swiper slider.
                            </li>
                            <li>Estate data from json data.
                            </li>
                            <li>Using firebase authentication created register form and login(Email login, Google login, Github login).
                            </li>
                            <li>Mobile Friendly: The website works smoothly on mobile, tablet, and desktop devices.
                            </li>
                        <div className="card-actions justify-end">
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


// User Contributions: Logged-in users can easily add new tourist spots or delete spots to the site.
// Manage Listings: Users can update or delete spots they've added in the "My List" section.
// Mobile Friendly: The website works smoothly on mobile, tablet, and desktop devices.
// Technology Used : React, NodeJS, ExpressJS, MongoDB, JavaScript, Firebase, Tailwind, Flowbite.