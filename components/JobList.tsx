"use client";

import { useEffect } from "react";
import { useJobStore } from "@lib/jobStore";
import Link from "next/link";

const JobList = () => {
  const { jobs, setJobs } = useJobStore();

  useEffect(() => {
    fetch("/jobData.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Job Recommendations</h2>
      {jobs.map((job) => (
        <div key={job.id} className="p-4 mb-3 bg-white shadow-md rounded-lg">
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-gray-500">{job.company} - {job.location}</p>
          <p className="font-semibold text-blue-600">{job.salary}</p>
          <Link href={`/job/${job.id}`}>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobList;