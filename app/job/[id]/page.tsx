"use client";

import { useParams } from "next/navigation";
import { useJobStore } from "@lib/jobStore";
import MatchScore from "@components/MatchScore";

const JobDetails = () => {
  const { id } = useParams();
  const { jobs, userSkills } = useJobStore();
  const job = jobs.find((job) => job.id === Number(id));

  if (!job) return <p className="text-center">Loading...</p>;

  const missingSkills = job.requiredSkills.filter((skill) => !userSkills.includes(skill));

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold">{job.title}</h2>
      <p className="text-gray-600">{job.company} - {job.location}</p>
      <p className="text-blue-600 font-semibold">{job.salary}</p>
      <MatchScore score={job.matchScore} />

      <h3 className="text-lg font-semibold mt-4">Required Skills:</h3>
      <ul className="list-disc ml-6">
        {job.requiredSkills.map((skill) => (
          <li key={skill} className={missingSkills.includes(skill) ? "text-red-500" : "text-green-600"}>
            {skill}
          </li>
        ))}
      </ul>

      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        onClick={() => {
          if (missingSkills.length > 0) {
            alert(`You need to upskill in: ${missingSkills.join(", ")}`);
          } else {
            alert("Application submitted!");
          }
        }}
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;