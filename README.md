# ZimGenius

ZimGenius is an AI-powered job match dashboard that provides personalized job recommendations based on user skills. Built with Next.js 15, TypeScript, and Tailwind CSS, it dynamically fetches job data, calculates match scores, and offers a seamless job application experience.

## Features

- **Job Listings:** Displays job recommendations with company details, location, salary, and match score.
- **Match Score Visualization:** Progress bar indicating job match percentage (Green: 80%+, Yellow: 50-79%, Red: <50%).
- **Job Details:** Clickable job cards open a modal with full job descriptions and required skills.
- **Apply Now:** Users can "apply" for jobs (mock action), with skill gap suggestions.
- **User Authentication:** Secure login and signup using Clerk authentication or AuthO Custom (for future expansion)
- **User Dashboard:** Personalized dashboard displaying saved jobs and application history.
- **Filters & Search:** Advanced filtering options based on job type, location, and salary.
- **Dark Mode Support:** Toggle between light and dark themes for better accessibility.
- **Notifications:** Get alerts for new job matches and application status. (for future expansion)
- **Responsive UI:** Fully optimized for mobile, tablet, and desktop.
- **API Integration:** Fetches job data dynamically.
- **State Management:** Uses Zustand for efficient state handling.
- **CI/CD & Testing:** GitHub Actions for automated deployment, Dependabot for security updates, and Playwright/Jest for testing.
- **Docker Support:** Easy deployment via Docker. (for future update)
- **Vercel Deployment:** Live demo hosted on Vercel.

## Tech Stack

- **Frontend:** Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion 
- **Backend:** Node.js (for future API expansion)
- **Database:** Mock JSON API (for demo purposes)
- **Authentication:** Clerk or AuthO Custom (for future AUTH expansion)
- **State Management:** Zustand, Context API
- **Testing:** Jest, Playwright
- **CI/CD:** GitHub Actions, Dependabot
- **Deployment:** Vercel, Docker

## Installation
```bash
git clone https://github.com/Psamcyite/zimgenius.git
cd zimgenius
pnpm install
```

### Running the Project
```bash
pnpm dev  # Start the development server
pnpm test # Run Jest & Playwright tests
```

### Running with Docker
```bash
docker build -t zimgenius .
docker run -p 3000:3000 zimgenius
```

## Deployment
The project is automatically deployed to Vercel via GitHub Actions.

## Contributing

We welcome contributions! Feel free to fork the repo and submit a pull request with improvements. Please follow the existing code style and write meaningful commit messages.

## License

MIT License

