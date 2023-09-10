import React from "react"

function VideoModal({ videoUrl, onClose }) {
  console.log(videoUrl)
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-60">
      <div className="relative p-4 bg-white rounded-lg shadow-md w-160 md:w-192">
        <video controls autoPlay muted>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          className="absolute p-2 text-lg font-bold text-white bg-gray-800 rounded-lg top-2 right-2"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default VideoModal
