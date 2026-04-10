import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20">
        
        {/* Heading */}
        <div className="pb-10 pt-10">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education & Experience
          </p>
        </div>

        {/* EXPERIENCE */}
        <div>
          <div className="pb-6 w-full flex items-center">
            <p className="text-xl w-full text-center font-bold">Experience</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">

            {/* Publicis */}
            <div className="w-full md:w-1/3">
              <div className="h-full bg-gradient-to-b from-gray-800 to-black shadow-md rounded-md p-4 border border-white">
                <h2 className="text-lg font-semibold">
                  <MdOutlineWork className="inline mr-2" />
                  Software Engineer at Publicis Re:Sources
                </h2>
                <p className="text-gray-200 mt-2">Dec 2023 - Present</p>
                <p className="text-gray-300 mt-4 text-sm">
                  Worked on scalable internal applications using React.js, TypeScript, and modern frontend practices along with backend services built using Java and Spring Boot. 
                  Contributed to micro frontend architecture using Next.js, enabling modular and maintainable codebases. 
                  Integrated RESTful APIs and implemented efficient data-fetching strategies to enhance performance. 
                  Focused on building reusable UI components, improving user experience, and ensuring accessibility compliance 
                  (WCAG standards) while collaborating with cross-functional teams in an Agile environment.
                </p>
              </div>
            </div>

            {/* Matrix Marketers */}
            <div className="w-full md:w-1/3">
              <div className="h-full bg-gradient-to-b from-gray-800 to-black shadow-md rounded-md p-4 border border-white">
                <h2 className="text-lg font-semibold">
                  <MdOutlineWork className="inline mr-2" />
                  Software Engineer at Matrix Marketers
                </h2>
                <p className="text-gray-200 mt-2">May 2023 - Nov 2023</p>
                <p className="text-gray-300 mt-4 text-sm">
                  Developed and maintained web applications using React.js with backend support in Java and Spring Boot. 
                  Built scalable frontend architecture using Redux Toolkit and optimized state management. 
                  Improved application performance by 30% using techniques like debouncing, memoization, and lazy loading. 
                  Integrated RESTful APIs for seamless data flow and worked within microservices architecture to deliver 
                  efficient and reliable solutions.
                </p>
              </div>
            </div>

            {/* Webuters */}
            <div className="w-full md:w-1/3">
              <div className="h-full bg-gradient-to-b from-gray-800 to-black shadow-md rounded-md p-4 border border-white">
                <h2 className="text-lg font-semibold">
                  <MdOutlineWork className="inline mr-2" />
                  Software Engineer at Webuters Technologies
                </h2>
                <p className="text-gray-200 mt-2">Sep 2021 - March 2023</p>
                <p className="text-gray-300 mt-4 text-sm">
                  Started my professional journey by developing responsive and dynamic user interfaces using React.js. 
                  Built reusable components and integrated REST APIs with backend services using Java and Spring Boot. 
                  Actively worked on debugging and fixing UI and functional defects, improving application stability and user experience. 
                  Collaborated with teams to deliver scalable and maintainable solutions following Agile practices.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* EDUCATION */}
        <div className="pt-12">
          <div className="pb-6 w-full flex items-center">
            <p className="text-xl w-full text-center font-bold">Education</p>
          </div>

          <div className="max-w-md mx-auto bg-gradient-to-b from-gray-800 to-black shadow-md rounded-md p-4 border border-white">
            <h2 className="text-lg font-semibold">
              <FaGraduationCap className="inline mr-2" />
              Bachelor of Technology (ECE)
            </h2>
            <p className="text-gray-200 mt-2">2014 - 2018</p>
            <p className="text-gray-300 mt-2">
              Birla Institute of Applied Sciences, Uttarakhand
            </p>
            <p className="text-gray-300 mt-4 text-sm">
              Completed Bachelor's in Electronics and Communication Engineering with a strong foundation in 
              problem-solving, software development, and system design concepts.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;