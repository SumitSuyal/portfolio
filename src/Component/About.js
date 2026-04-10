import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20">
        
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>

          <p className="text-xl mt-10 leading-relaxed">
            I am a <span className="font-semibold">Full Stack Developer</span> with around{" "}
            <span className="font-semibold">5 years of experience</span> in building 
            scalable and high-performance web applications. I specialize in{" "}
            <span className="font-semibold">React.js, Next.js, and modern frontend architectures</span>, 
            along with backend development using <span className="font-semibold">Java and Spring Boot</span>.
          </p>

          <p className="text-xl mt-6 leading-relaxed">
            I have hands-on experience in developing end-to-end solutions, working with{" "}
            <span className="font-semibold">micro frontend and microservices architecture</span>. 
            I focus on building reusable components, integrating RESTful APIs, and ensuring seamless 
            communication between frontend and backend systems.
          </p>

          <p className="text-xl mt-6 leading-relaxed">
            I am passionate about writing clean, maintainable code and optimizing performance 
            using techniques like memoization, lazy loading, and efficient state management. 
            I enjoy solving complex problems and delivering user-centric solutions in Agile environments.
          </p>

          <p className="text-xl mt-6 leading-relaxed">
            Continuously learning and adapting to new technologies, I strive to build 
            scalable, efficient, and production-ready applications.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;