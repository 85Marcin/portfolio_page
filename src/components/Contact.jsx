import React, { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Serialize form data to send to the external service
    const formBody = new URLSearchParams(formData)

    try {
      // Send a POST request to the external service
      const response = await fetch(
        "https://getform.io/f/9f86d99d-638d-4224-b22d-5beba051cb14",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        }
      )

      if (response.ok) {
        // Clear the input fields on successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        console.error("Form submission failed.")
      }
    } catch (error) {
      console.error("Error submitting the form:", error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#ecf0f3] flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#bfd0e6] text-[#5651e5]">
            Contact
          </p>
        </div>
        <input
          className="bg-[#ffffff] p-2"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          className="my-4 p-2 bg-[#ffffff]"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <textarea
          className="bg-[#ffffff] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <button
          type="submit"
          className="border-2 border-[#cfd2d6] p-2 my-3 flex items-center bg-[#bfd0e6]   hover:bg-[#e5e8eb] hover:border-[#bfd0e6] duration-200 mx-auto"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
