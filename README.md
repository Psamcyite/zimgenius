# ZimGenius

ZimGenius is an AI-powered job match dashboard that provides personalized job recommendations based on user skills. Built with Next.js 15, TypeScript, and Tailwind CSS, it dynamically fetches job data, calculates match scores, and offers a seamless job application experience.

## Features

**Job Listings:** Displays job recommendations with company details, location, salary, and match score.

**Match Score Visualization:** – Progress bar indicating job match percentage (Green: 80%+, Yellow: 50-79%, Red: <50%).

**Job Details:** – Clickable job cards open a modal with full job descriptions and required skills.

**Apply Now:** – Users can "apply" for jobs (mock action), with skill gap suggestions.

**Responsive UI:** – Fully optimized for mobile and desktop.

**API Integration:** – Fetches job data dynamically.

**State Management:** – Uses Zustand for efficient state handling.

**CI/CD & Testing:** – GitHub Actions for automated deployment, Dependabot for security updates, and Playwright/Jest for testing.

**Docker Support:** – Easy deployment via Docker.

**Vercel Deployment:** – Live demo hosted on Vercel.


## Tech Stack

**Frontend:** Next.js 15, React, TypeScript, Tailwind CSS

**Backend:** Node.js, Express.js (if needed for API mockups)

**Database:** PostgreSQL (or Mock JSON API for demo)

**State Management:** Zustand

**Testing:** Jest, Playwright

**CI/CD:** GitHub Actions, Dependabot

**Deployment:** Vercel, Docker


## Installation
```bash
git clone https://github.com/Psamcyite/zimgenius.git
cd zimgenius
pnpm install
```
### Running the Project
```
pnpm dev  # Start the development server
pnpm test # Run Jest & Playwright tests
docker-compose up # Start using Docker (optional)
```
## Deployment

The project is automatically deployed to Vercel via GitHub Actions.

## Contributing

Feel free to fork the repo and submit a pull request with improvements!

## License

MIT License
