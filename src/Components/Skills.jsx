import github from '../assets/github1.png'
import mongo from '../assets/mongodb.png'



const Skills = () => {
    return (
        <div className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
            <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-16">My Skills</h1>

            <section className="py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {/* Skill Cards */}
                    {[
                        { name: "HTML", icon: "HTML" },
                        { name: "CSS", icon: "CSS" },
                        { name: "JavaScript", icon: "JavaScript" },
                        { name: "React.js", icon: "React-Dark" },
                        { name: "Node.js", icon: "NodeJS-Dark" },
                        { name: "MongoDB", icon: "MongoDB" },
                        { name: "Express.js", icon: "ExpressJS-Dark" },
                        { name: "Firebase", icon: "Firebase-Dark" },
                    ].map((skill, index) => (
                        <div
                            key={index}
                            className="card shadow-lg p-6 bg-white rounded-xl text-center transform hover:scale-105 transition-all duration-300 ease-out"
                        >
                            <img
                                src={`https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/${skill.icon}.svg`}
                                alt={`${skill.name} Icon`}
                                className="w-16 h-16 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-700 hover:text-gray-900">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Skills;





  {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-16 lg:w-[800px] justify-center lg:ml-[300px]'>
                <div className="card shadow-xl w-[200px] h-[250px] hover:scale-110 duration-200">
                    <figure>
                        <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/HTML.svg" className='w-[100px] h-[100px] rounded-full object-cover' alt="" />

                    </figure>
                    <div className="p-4">
                        <h2 className="card-title text-black font-bold">HTML - 5</h2>
                        <p className='text-gray-600'>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card shadow-xl w-[200px] h-[250px] hover:scale-110 duration-200">
                    <figure>
                        <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/CSS.svg" className='w-[100px] h-[100px] rounded-full object-cover' alt="" />

                    </figure>
                    <div className="p-4">
                        <h2 className="card-title text-red-600 font-bold">CSS - 3</h2>
                        <p className='text-gray-600'>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card shadow-xl w-[200px] h-[250px] hover:scale-110 duration-200">
                    <figure>
                        <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg" className='w-[100px] h-[100px] rounded-full' alt="" />

                    </figure>
                    <div className="p-4">
                        <h2 className="card-title text-red-600 font-bold">Tailwind CSS</h2>
                        <p className='text-gray-600'>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="card shadow-xl w-[200px] h-[250px] hover:scale-110 duration-200">
                    <figure>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHh0vRXprFF68CAQBFsNzmrOqPfW9VSs6o-zs3ZqWyBvfRs3GZLsoa2uQNch8UTejnfg4&usqp=CAU" className='w-[100px] h-[100px] rounded-full ' alt="" />

                    </figure>
                    <div className="p-4">
                        <h2 className="card-title text-red-600 font-bold">JavaScript</h2>
                        <p className='text-gray-600'>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="card shadow-xl w-[200px] h-[250px] hover:scale-110 duration-200">
                    <figure>
                        <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" className='w-[100px] h-[100px] rounded-full object-cover' alt="" />

                    </figure>
                    <div className="p-4">
                        <h2 className="card-title text-red-600 font-bold">React JS</h2>
                        <p className='text-gray-600'>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

                <div className="card shadow-xl w-[200px] h-[250px] hover:scale-110 duration-200">
                    <figure>
                        <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Firebase-Dark.svg" className='w-[100px] h-[100px] rounded-full hover:scale-105 object-cover' alt="" />

                    </figure>
                    <div className="p-4">
                        <h2 className="card-title text-red-600 font-bold">Firebase</h2>
                        <p className='text-gray-600'>If a dog chews shoes whose shoes does he choose?</p>

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

            
            </div> */}