import React from "react";
import finearc from "../assets/portfolio/FineArc.png";
import rollingdice from "../assets/portfolio/RollingDice.png";
import packkaro from "../assets/portfolio/PackKaro.png";
import hungerhub from "../assets/portfolio/HungerHub.png";
import streamefy from "../assets/portfolio/Streamefy.png";
import readzone from "../assets/portfolio/ReadZone.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: finearc,
      demoLink: "https://interior-design-1234.netlify.app/",
      name: "Fine Arc (Interior Design Website)",
    },
    {
      id: 2,
      src: rollingdice,
      demoLink: "#",
      name: "Rolling Dice Game",
    },
    {
      id: 3,
      src: packkaro,
      demoLink: "https://pack-karoo.netlify.app/",
      name: "Pack Karo (Logistics Platform)",
    },
    {
      id: 4,
      src: hungerhub,
      demoLink: "#",
      name: "Hunger Hub (Food Ordering App)",
    },
    {
      id: 5,
      src: streamefy,
      demoLink: "#",
      name: "Streamefy (Video Streaming UI)",
    },
    {
      id: 6,
      src: readzone,
      demoLink: "#",
      name: "ReadZone (Blog / Reading App)",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20">
        
        <div className="pb-10 pt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              
              <img
                src={src}
                alt={name}
                className="rounded-md duration-200 hover:scale-105"
              />

              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noreferrer">
                  <button className="px-3 py-2 m-4 duration-200 hover:scale-105">
                    {name}
                  </button>
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;