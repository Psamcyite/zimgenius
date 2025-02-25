import JobList from "../components/JobList";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Job Listings</h1>
      <JobList />
    </div>
  );
}