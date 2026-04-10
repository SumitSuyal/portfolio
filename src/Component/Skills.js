import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "SCSS"],
    },
    {
      title: "Libraries",
      skills: ["Redux", "Redux Toolkit", "React Router DOM", "Thunk", "Jest", "React Testing Library"],
    },
    {
      title: "Backend",
      skills: ["Java 8", "Spring Boot", "Microservices"],
    },
    {
      title: "Frameworks",
      skills: ["Tailwind", "Material UI", "JUnit"],
    },
    {
      title: "Database",
      skills: ["MySQL (Primary)", "Oracle (Basic)"],
    },
    {
      title: "Tools & Technology",
      skills: [
        "Git", "GitHub", "Jira", "RESTful API Design", "Azure", "AEM",
        "Jenkins", "Figma", "Webpack", "Babel", "Maven"
      ],
    },
    {
      title: "Concepts",
      skills: ["Micro Frontend", "Performance Optimization", "OOPs", "Agile Methodology"],
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full pt-20">
        
        {/* Heading */}
        <div className="pb-10 pt-10">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Skills
          </p>
          <p className="py-6 text-gray-300">
            My technical expertise as a Full Stack Developer
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-4 shadow-md hover:scale-105 duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                {category.title}
              </h3>

              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="bg-gray-700 px-3 py-1 rounded-md text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Skills;