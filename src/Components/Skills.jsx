import Marquee from 'react-fast-marquee';

const Skills = () => {
    return (
        <div className="py-8 bg-gradient-to-r from-blue-50 via-white to-blue-100">
            <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-16">
                My <span className="text-blue-500">Skills</span>
            </h1>

            <section className="py-12">
                <Marquee pauseOnHover speed={50}>
                    <div className="flex gap-10 max-w-6xl mx-auto">
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
                                className="card shadow-xl p-8 bg-white rounded-2xl text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                                <img
                                    src={`https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/${skill.icon}.svg`}
                                    alt={`${skill.name} Icon`}
                                    className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-100 to-white p-2"
                                />
                                <h3 className="text-2xl font-semibold text-gray-700 hover:text-blue-500">
                                    {skill.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </section>
        </div>
    );
};

export default Skills;
