import { render, screen } from "@testing-library/react";
import JobList from "../components/JobList";
import { useJobStore } from "../lib/jobStore";

jest.mock("@lib/jobStore", () => ({
  useJobStore: jest.fn(),
}));

describe("JobList Component", () => {
  it("renders job listings", () => {
    (useJobStore as jest.Mock).mockReturnValue({
      jobs: [
        { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote", salary: "$100k", requiredSkills: ["React"], matchScore: 85 },
      ],
      userSkills: ["React", "Next.js", "TypeScript"],
    });

    render(<JobList />);
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
  });
});