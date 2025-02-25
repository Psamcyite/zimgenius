"use client";

import { useApplyStore } from "@/lib/store";

export default function ApplyModal() {
  const { isOpen, jobTitle, formData, closeModal, updateForm } = useApplyStore();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application Submitted:", formData);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Apply for {jobTitle}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => updateForm("name", e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => updateForm("email", e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-3"
          />
          <textarea
            name="coverLetter"
            placeholder="Cover Letter"
            value={formData.coverLetter}
            onChange={(e) => updateForm("coverLetter", e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded mb-3"
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            Submit Application
          </button>
        </form>
        <button className="mt-3 w-full text-gray-500" onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
}