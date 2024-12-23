import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form
      className=" items-center justify-start  py-20 grid w-full grid-cols-2 gap-2"
      onSubmit={handleSubmit}
    >
      <h2 className="mb-6 md:mb-12 text-3xl font-bold text-primary md:text-7xl col-span-2">
        Send us a message
      </h2>

      <input
        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        id="name"
        placeholder="Your name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        id="email"
        placeholder="Your email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        className="col-span-2 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        id="subject"
        placeholder="Subject"
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <textarea
        className="col-span-2 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows="5"
        required
      ></textarea>

      <button
        type="submit"
        className="col-span-2 rounded-md bg-secondary px-4 py-2 mt-4 font-medium text-white transition duration-300 hover:bg-secondary-hover"
      >
        Send A Message
      </button>
    </form>
  );
}
