import React, { useState } from "react"
import { data } from "../assets/projects/data/data.js"
import VideoModal from "./VideoModal.jsx"

const Work = () => {
  // projects file
  const project = data

  const [showVideoModal, setShowVideoModal] = useState(false)
  const [videoUrl, setVideoUrl] = useState("") // Store the video URL here

  // Function to open the video modal
  const openVideoModal = (videoUrl) => {
    setVideoUrl(videoUrl)
    setShowVideoModal(true)
  }

  // Function to close the video modal
  const closeVideoModal = () => {
    setVideoUrl("")
    setShowVideoModal(false)
  }

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#ecf0f3]">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-[#5651e5] border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "100% 100%",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* Use e.preventDefault() to prevent anchor tag navigation */}
                  <button
                    onClick={() => {
                      openVideoModal(item.videoUrl)
                    }}
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conditionally render VideoModal when showVideoModal is true */}
      {showVideoModal && (
        <VideoModal videoUrl={videoUrl} onClose={closeVideoModal} />
      )}
    </div>
  )
}

export default Work
