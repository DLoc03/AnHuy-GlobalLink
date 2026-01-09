An Huy Global Link – Landing Page

1. Project Overview

An Huy Global Link is a landing page project used to introduce the company’s services and brand information.
The website focuses on a clean UI, responsive design, and smooth animations to enhance user experience.

Project type: Company Landing Page
Target users: Public visitors / potential customers

2. Tech Stack

- React 19
- Vite 7 (build tool)
- Tailwind CSS 4
- Framer Motion (animations)
- Lucide React / React Icons (icons)
- Tooling
- ESLint
- Prettier + Tailwind plugin

3. Features

- Company service introduction sections
- Responsive layout for desktop and mobile
- Smooth animations and transitions
- Reusable UI components
- Static content optimized for fast loading

5. Prerequisites

- Make sure the following are installed:
- Node.js: v18 or later (recommended)
- npm / yarn / pnpm
- Git

6. Installation

- Clone the repository and install dependencies:
- git clone https://github.com/DLoc03/AnHuy-GlobalLink.git
- cd xnk
- npm install

Or using yarn:
yarn install

Or using pnpm:
pnpm install

7. Run Development Server
   npm run dev

The application will be available at:
http://localhost:5173

8. Build for Production
   npm run build

9. Deployment Guide
   This is a static React (Vite) project and can be deployed on any static hosting service.
   - Pull latest code from repository
   - Install dependencies
   - Run npm run build
   - Upload dist/ folder to hosting service

10. Code Quality & Formatting
    - ESLint is configured for basic React rules
    - Prettier is used for code formatting
    - Tailwind CSS class sorting is handled via Prettier plugin

11. Known Limitations / Notes
    - This project is a static landing page (no backend integration).
    - Content updates require code changes and redeployment.
    - Animations rely on Framer Motion; excessive usage may affect performance on low-end devices.
