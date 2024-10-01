import { useState } from "react";
import { projArray } from "../utils/projectsArray";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projArray.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projArray.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-slate-600">
      <h1 className="text-5xl mt-5 mb-10 text-white">
        Utilizamos as mesma tecnologias dos sites abaixo
      </h1>

      <div className="relative w-full max-w-6xl flex items-center justify-between space-x-8 p-6 rounded-md">

        <div className="w-1/2">
          <img
            src={projArray[currentIndex].projectImg}
            alt="Carrossel"
            className="w-full h-64 object-cover rounded-md"
          />
        </div>

        <div className="w-1/2 text-left">
          <h2 className="text-3xl font-bold mb-4">{projArray[currentIndex].name}</h2>
          <p className="">{projArray[currentIndex].text}</p>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projArray.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-7 rounded-full ${index === currentIndex ? "bg-blue" : "bg-white"} padding`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-white/80 text-black p-4 rounded-full shadow hover:bg-white"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white/80 text-black p-4 rounded-full shadow hover:bg-white"
      >
        ›
      </button>
    </div>
  );
};

export default Projects;
