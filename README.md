# AI Lead Qualification

A responsive web application built as part of the Frontend AI Engineering course. This project provides a foundation for an AI-powered lead qualification experience.

## Live Demo

https://capstone-app-jet.vercel.app/

## Features

- Home page introducing the application
- Chat page for the lead qualification experience
- Results page for qualification results
- Health page displaying service health information
- Health API endpoint returning JSON status data
- Responsive layout for mobile and desktop screens

## Tech Stack

- Next.js with the App Router
- React
- TypeScript
- Tailwind CSS
- Vercel for deployment

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Installation

Clone the repository and open its directory:

```bash
git clone https://github.com/aarslaidrees-sketch/capstone-app.git
cd capstone-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Application Routes

| Route | Purpose |
|---|---|
| `/` | Home page |
| `/chat` | Lead qualification chat |
| `/results` | Qualification results |
| `/health` | Health status page |
| `/api/health` | JSON health endpoint |

## Validation

Run the available lint check:

```bash
npm run lint
```

Build the application for production:

```bash
npm run build
```

## Deployment

The application is deployed on Vercel:

https://capstone-app-jet.vercel.app/

Pushes to the connected GitHub repository can trigger a new deployment.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.