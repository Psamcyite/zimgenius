"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import jobData from "../../../jobData.json";
import { useApplyStore } from "../../../lib/store";
import ApplyModal from "../../../components/ApplyModal";
import MatchScore from "../../../components/MatchScore";

export default function JobDetail() {
  const params = useParams();
  const job = jobData.find((job) => job.id.toString() === params.id);
  const { openModal } = useApplyStore();

  if (!job) {
    return <p className="text-center text-red-500">Job not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Back to Jobs Link - Now at the Top */}
      <Link href="/" className="inline-block mb-4 text-blue-600 hover:underline">
        ← Back to Jobs
      </Link>

      <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
      <p className="text-gray-600 text-lg">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>

      {/* Match Score Component using jobData matchScore */}
      <MatchScore score={job.matchScore} />

      <p className="mt-2 text-blue-500 font-semibold">Salary Range: {job.salary}</p>

      <h2 className="mt-6 text-xl font-semibold">Required Skills</h2>
      <ul className="list-disc list-inside text-gray-700 mt-2">
        {job.requiredSkills.map((skill, index) => (
          <li key={index} className="text-gray-600">{skill}</li>
        ))}
      </ul>

      <h2 className="mt-6 text-xl font-semibold">General Job Overview</h2>
      <p className="text-gray-600 mt-2">
        {`At ${job.company}, we value innovation, teamwork, and professional growth.
        We are seeking highly motivated individuals who are eager to contribute and excel
        in their roles. Join us and be part of an exciting journey!`}
      </p>

      {/* Apply Button */}
      <button
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={() => openModal(job.title)}
      >
        Apply Now
      </button>

      {/* Application Modal (Reusable) */}
      <ApplyModal />
    </div>
  );
}