"use client";
import { useState } from "react";
import Link from "next/link";
import jobData from "../jobData.json";

export default function JobList() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <input
        type="text"
        placeholder="Search Jobs..."
        className="w-full p-2 border rounded-md mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <li key={job.id} className="p-4 bg-gray-50 rounded-md shadow">
              <Link href={`/job/${job.id}`} className="text-blue-600 hover:underline font-semibold">
                {job.title}
              </Link>
              <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No jobs found.</p>
        )}
      </ul>
    </div>
  );
}