import React from "react";
import finearc from "../assets/portfolio/FineArc.png";
import rollingdice from "../assets/portfolio/RollingDice.png";
import packkaro from "../assets/portfolio/PackKaro.png";
import hungerhub from "../assets/portfolio/HungerHub.png";
import streamefy from "../assets/portfolio/Streamefy.png";
import readzone from "../assets/portfolio/ReadZone.png";

const Portfolio = () => {
  const Portfolios = [
    {
      id: 1,
      src: finearc,
      demoLink: "https://interior-design-1234.netlify.app/",
      codeLink: "https://github.com/vaishnaviytl/finearc",
      name: "Fine Arc"
    },
    {
      id: 2,
      src: rollingdice,
      demoLink: "https://example.com/demo1",
      codeLink: "https://example.com/demo1",
      name: "Rolling Dice"
    },
    {
      id: 3,
      src: packkaro,
      demoLink: "https://pack-karoo.netlify.app/",
      codeLink: "https://github.com/vaishnaviytl/PackKaro.io",
      name: "Pack Karo"
    },
    {
      id: 4,
      src: hungerhub,
      demoLink: "https://example.com/demo1",
      codeLink: "https://example.com/demo1",
      name: "Hunger Hub"
    },
    {
      id: 5,
      src: streamefy,
      demoLink: "https://example.com/demo1",
      codeLink: "https://example.com/demo1",
      name: "Streamify"
    },
    {
      id: 6,
      src: readzone,
      demoLink: "https://example.com/demo1",
      codeLink: "https://example.com/demo1",
      name: "Readzone"
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20  ">
        <div className="pb-10 pt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">check out some of my work right</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Portfolios.map(({ id, src, demoLink, codeLink ,name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"/>
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <button className=" px-2 py-3 m-4 duration-200 hover:scale-105">
                    {name}
                  </button>
                </a>
                {/*<a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    code
                  </button>
                </a>*/}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
