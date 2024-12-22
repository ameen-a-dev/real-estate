import React, { useState, useEffect, useRef } from "react";
import { assets, projectsData } from "../assets/assets";

const Projects = () => {
  const [currentIndx, setCurrentIndx] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0); // Store the width of each slide
  const sliderRef = useRef(null); // Reference for the slider container

  // Dynamically calculate the width of each slide
  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const containerWidth = sliderRef.current.offsetWidth;
        // Set slide width based on container width
        if (containerWidth >= 1024) {
          setSlideWidth(containerWidth / 4); // Large screens: each slide 25% width
        } else if (containerWidth >= 640) {
          setSlideWidth(containerWidth / 2); // Medium screens: each slide 50% width
        } else {
          setSlideWidth(containerWidth); // Small screens: each slide 100% width
        }
      }
    };

    handleResize(); // Run the resize handler initially
    window.addEventListener("resize", handleResize); // Add event listener for resize

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Go to next project
  const nextProject = () => {
    setCurrentIndx((prev) => (prev + 1) % projectsData.length);
  };

  // Go to previous project
  const previousProject = () => {
    setCurrentIndx((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  return (
    <div
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
      id="Projects"
      ref={sliderRef} // Reference for slider container
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies-Explore Our Portfolio
      </p>
      {/* Slider Buttons */}
      <div className="flex justify-end mb-8 items-center">
        <button
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
          onClick={previousProject}
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      {/* Project Slider */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndx * slideWidth}px)`, // Move based on slideWidth
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 bottom-5 right-0 flex justify-center">
                <div className="inline-block bg-white w-4/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span className="px-1"> | </span>{" "}
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
