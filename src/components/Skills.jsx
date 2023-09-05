import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import JavaScript from "../assets/javascript.png"
import React from "../assets/react.png"
import TypeScript from "../assets/ts-logo-128.png"
function Skills() {
  return (
    <div name="skills" className="width-full h-screen bg-[#ecf0f3]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="inline text-4xl font-bold  border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">The are the technologies I have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md hover:scale-105 duration-300">
            <img src={HTML} alt="HTML icon" className="w-10 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-300">
            <img src={CSS} alt="CSS icon" className="w-10 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-300">
            <img
              src={JavaScript}
              alt="JavaScript icon"
              className="w-10 mx-auto"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-300">
            <img
              src={TypeScript}
              alt="Typescript icon"
              className="w-10 mx-auto"
            />
            <p className="my-4">Typescript</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-300">
            <img src={React} alt="React icon" className="w-10 mx-auto" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-300">
            <img src={HTML} alt="HTML icon" className="w-10 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-300">
            <img src={HTML} alt="HTML icon" className="w-10 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md hover:scale-105 duration-300">
            <img src={HTML} alt="HTML icon" className="w-10 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
