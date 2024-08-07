// import { MdOutlineDone } from "react-icons/md";

const Projects = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold lg:mb-16">Here is my <span className="text-red-500">Projects-</span></h1>
            {/* card1 */}
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-12 lg:ml-16 justify-center'>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.postimg.cc/R0JT49mh/pet.jpg" className="h-[220px]"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-red-600">PetHouse</h2>
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
                            <a href="https://pethousebd.netlify.app/" className="font-bold link-hover">Live Link</a>
                            <div className="">
                                <a href="https://github.com/SanjidaOSD/Assignment12-client" className="ml-4 font-bold link-hover">Client Code</a>
                                <a href="https://github.com/SanjidaOSD/Assignment12-server" className="ml-4 link-hover font-bold ">Server Code</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card2 */}
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.postimg.cc/Xv59t8Ky/tourism.png" className="h-[220px]"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-red-600">AdventureAtlas</h2>
                        <p> This website is a Tourist management website. user can see different kind of visiting place and thei can purches for travilling.</p>
                        <div>
                            <p className="text-xl font-bold">Features:-</p>
                            <li>A navbar and two protected routes.</li>
                            <li> A banner is with using swiper slider.
                            </li>
                            <li>Estate data from json data.
                            </li>
                            <li>Using firebase authentication created register form and login(Email login, Google login, Github login).
                            </li>
                            <li>Daynamic add spot place option and a footer section.
                            </li>
                            {/* <li>Created a footer section.</li> */}
                        </div>

                        <div className="card-actions">
                            <a href="https://tourismmanagement.netlify.app/" className="link-hover font-bold flex">Live Link</a>

                            <div className="">
                                <a href="https://github.com/SanjidaOSD/Tourist-Management-client" className="ml-4 font-bold link-hover">Client Code</a>
                                <a href="https://github.com/SanjidaOSD/Tourist-management-server" className="ml-4 link-hover font-bold  ">Server Code</a>
                            </div>

                        </div>
                    </div>
                </div>
                {/* card3 */}
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://i.postimg.cc/hjG39NRq/hotel.png" className="h-[220px]"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold text-red-600">MyHome</h2>
                        <p>
                        This is a real state assignment. But not just any real state I am focusing on the specific type. There is 8 different categories of real state properties.
                        </p>
                        <p className="text-xl font-bold">Features:-</p>
                            <li>A navbar and two protected routes.</li>
                            <li> A banner is with using swiper slider.
                            </li>
                            <li>Estate data from json data.
                            </li>
                            <li>Using firebase authentication created register form and login(Email login, Google login, Github login).
                            </li>
                            <li>Daynamic add spot place option and a footer section.
                            </li>
                        <div className="card-actions justify-end">
                            <a href="https://myhomea9.netlify.app/" className="link-hover font-bold flex">Live Link</a>
                            <div className="">
                                <a href="https://github.com/SanjidaOSD/MyHome-a9" className="link-hover font-bold">Client Code</a>
                                <a href="https://github.com/SanjidaOSD/Tourist-management-server" className="ml-4 link-hover font-bold ">Server Code</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Projects;