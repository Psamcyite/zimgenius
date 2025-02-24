import { create } from "zustand";
import axios from "axios";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  requiredSkills: string[];
  matchScore: number;
}

interface JobStore {
  jobs: Job[];
  fetchJobs: () => void;
}

export const useJobStore = create<JobStore>((set) => ({
  jobs: [],
  fetchJobs: async () => {
    const response = await axios.get("/data/jobData.json");
    set({ jobs: response.data });
  }
}));