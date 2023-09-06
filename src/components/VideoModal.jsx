import React from "react"

function VideoModal({ videoUrl, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-60 bg-black flex items-center justify-center z-50">
      <div className="relative w-160 md:w-192 bg-white rounded-lg p-4 shadow-md">
        <video controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          className="absolute top-2 right-2 p-2 text-lg font-bold text-white bg-gray-800 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default VideoModal
