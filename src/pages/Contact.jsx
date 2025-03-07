import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-8">Contact & Suggestions</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              className="w-full bg-gray-800 p-3 rounded"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-gray-800 p-3 rounded"
              required
            />
          </div>
          
          <div>
            <label className="block mb-2">Suggestions</label>
            <textarea
              rows="5"
              className="w-full bg-gray-800 p-3 rounded"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}