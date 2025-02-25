import jobData from '../jobData.json';

export function getJobs() {
  return jobData;
}

export function getJobById(id: number) {
  return jobData.find(job => job.id === id);
}