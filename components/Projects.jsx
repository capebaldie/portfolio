import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="w-full slide">
      <div className="flex flex-col max-w-[1240px] w-full mx-auto p-4 justify-center items-center">
        <h1 className="text-green text-5xl text-green-400 mt-16 mb-10 font-bold">
          My <span className="text text-white">Projects</span>
        </h1>
        <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col bg-[#112240] p-4 rounded-lg hover:shadow-xl scales">
            <img
              src="netflix.png"
              className="w-[20rem] rounded-md opacity-80"
              alt=""
            />
            <h1 className="text-white/80 my-3">Netflix Clone</h1>
            <div className="flex justify-between items-center">
              <a
                href="https://netflix-clone-sepia-tau.vercel.app"
                target="_blank"
              >
                <p className="border px-4">demo</p>
              </a>
              <a
                href="https://github.com/capebaldie/netflix-clone"
                target="_blank"
              >
                <p className="border px-4">code</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-[#112240] p-4 rounded-lg hover:shadow-xl scales">
            <img
              src="amazon.png"
              className="w-[20rem] rounded-md opacity-80"
              alt=""
            />
            <h1 className="text-white/80 my-3">Amazon clone</h1>
            <div className="flex justify-between items-center">
              <a href="https://amzn-clone-ten.vercel.app/" target="_blank">
                <p className="border px-4">demo</p>
              </a>
              <a
                href="https://github.com/capebaldie/amzn-clone"
                target="_blank"
              >
                <p className="border px-4">code</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-[#112240] p-4 rounded-lg hover:shadow-xl scales">
            <img
              src="budget.png"
              className="w-[20rem] rounded-md opacity-80"
              alt=""
            />
            <h1 className="text-white/80 my-3">Budget Tracker</h1>
            <div className="flex justify-between items-center">
              <a href="https://budget-tracker-ten.vercel.app" target="_blank">
                <p className="border px-4">demo</p>
              </a>
              <a
                href="https://github.com/capebaldie/budget-tracker"
                target="_blank"
              >
                <p className="border px-4">code</p>
              </a>
            </div>
          </div>

          <div className="flex flex-col bg-[#112240] p-4 rounded-lg hover:shadow-xl scales">
            <img src="todo.png" className="w-[20rem] rounded-md" alt="" />
            <h1 className="text-white/80 my-3">Todo App</h1>
            <div className="flex justify-between items-center">
              <a href="https://nothingtodo.netlify.app/" target="_blank">
                <p className="border px-4">demo</p>
              </a>
              <a href="https://github.com/capebaldie" target="_blank">
                <p className="border px-4">code</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
