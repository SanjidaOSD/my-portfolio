import github from '../assets/github1.png'
import mongo from '../assets/mongodb.png'
const Skills = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-red-500 text-center mb-24'>Skills</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-16 lg:w-[800px] justify-center lg:ml-[300px]'>
                <div className="card shadow-xl w-[200px] h-[250px] hover:scale-110 duration-200">
                    <figure>
                        <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg" className='w-[100px] h-[100px] rounded-full object-cover' alt="" />

                    </figure>
                    <div className="p-4">
                        <h2 className="card-title text-red-600 font-bold">HTML - 5</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card shadow-xl w-[200px] h-[250px] hover:scale-110 duration-200">
                    <figure>
                        <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg" className='w-[100px] h-[100px] rounded-full object-cover' alt="" />

                    </figure>
                    <div className="p-4">
                        <h2 className="card-title text-red-600 font-bold">CSS - 3</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card shadow-xl w-[200px] h-[250px] hover:scale-110 duration-200">
                    <figure>
                        <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg" className='w-[100px] h-[100px] rounded-full' alt="" />

                    </figure>
                    <div className="p-4">
                        <h2 className="card-title text-red-600 font-bold">Tailwind CSS</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card shadow-xl w-[200px] h-[250px] hover:scale-110 duration-200">
                    <figure>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHh0vRXprFF68CAQBFsNzmrOqPfW9VSs6o-zs3ZqWyBvfRs3GZLsoa2uQNch8UTejnfg4&usqp=CAU" className='w-[100px] h-[100px] rounded-full ' alt="" />

                    </figure>
                    <div className="p-4">
                        <h2 className="card-title text-red-600 font-bold">JavaScript</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card shadow-xl w-[200px] h-[250px] hover:scale-110 duration-200">
                    <figure>
                        <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" className='w-[100px] h-[100px] rounded-full object-cover' alt="" />

                    </figure>
                    <div className="p-4">
                        <h2 className="card-title text-red-600 font-bold">React JS</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

                <div className="card shadow-xl w-[200px] h-[250px] hover:scale-110 duration-200">
                    <figure>
                        <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Firebase-Dark.svg" className='w-[100px] h-[100px] rounded-full hover:scale-105 object-cover' alt="" />

                    </figure>
                    <div className="p-4">
                        <h2 className="card-title text-red-600 font-bold">Firebase</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card shadow-xl w-[200px] h-[250px] hover:scale-110 duration-200">
                    <figure>
                        <img src={github} className='w-[100px] h-[100px] rounded-full hover:scale-105' alt="" />

                    </figure>
                    <div className="p-4">
                        <h2 className="card-title text-red-600 font-bold">GitHub</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card shadow-xl w-[200px] h-[250px] hover:scale-110 duration-200">
                    <figure>
                        <img src={mongo} className='w-[100px] h-[100px] rounded-full hover:scale-105' alt="" />

                    </figure>
                    <div className="p-4">
                        <h2 className="card-title text-red-600 font-bold">MongoDB</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

                {/* <ul className="timeline timeline-vertical">
                <li>
                    <div className="timeline-start timeline-box font-bold">Figma</div>
                    <div className="timeline-middle">
                       <img src={figma} className='w-8 h-8 rounded-full' alt="" />
                    </div>
                    <hr className="bg-red-600" />
                </li>
                <li>
                    <hr className="bg-red-600" />
                    <div className="timeline-middle">
                        <img src={html} className='w-8 h-8 rounded-full' alt="" />
                    </div>
                    <div className="timeline-end timeline-box font-bold">Html</div>
                    <hr className="bg-red-600" />
                </li>
                <li>
                    <hr className="bg-red-600" />
                    <div className="timeline-start timeline-box font-bold">CSS</div>
                    <div className="timeline-middle">
                       <img src={css} className='w-8 h-8 rounded-full' alt="" />
                    </div>
                    <hr  className='bg-red-600' />
                </li>
                <li>
                    <hr className='bg-red-600' />
                    <div className="timeline-middle">
                       <img src={js} className='w-8 h-8 rounded-full' alt="" />
                    </div>
                    <div className="timeline-end timeline-box font-bold">Java Script</div>
                    <hr className='bg-red-600' />
                </li>
                <li>
                    <hr className='bg-red-600' />
                    <div className="timeline-start timeline-box">React</div>
                    <div className="timeline-middle">
                       
                       <img src={react} className='w-8 h-8 rounded-full' alt="" />
                    </div>
                </li>
            </ul> */}
            </div>
        </div>
    );
};

export default Skills;