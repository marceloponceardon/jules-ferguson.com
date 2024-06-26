# jules-ferguson.com
Portfolio website for Jules Ferguson

## Overview
This project is a collaborative effort to build a portfolio website for Jules Ferguson.

## Project Goals
- Create a visually appealing and user-friendly website that can be shown off to colleagues.
- Implement responsive design to ensure compatibility across various devices.
- Use GitHub Projects to manage tasks, issues, and milestones.
- Use GitHub Actions to auto deploy site on upgrades, maintenance, etc.

## Technology Stack
- **Front-End:** React
- **Back-End:** Express
- **Hosting:** Vercel (Front-End),

## Project Structure
- `frontend/`: Contains the React.js front-end application.
- `backend/`: Contains the Node.js and Express.js back-end application.

## Setup Instructions
1. Clone the repository:
2. `frontend/`:
    - Run `npm install` to install dependencies.
    - Run `npm start` to start the application in development mode.
    - Run `npm build` to build the application.

3. `backend/`:
    - Run `npm install` to install dependencies.
    - Run `npm start` to start the application.
    - Run `npm run dev` to start the application in development mode.

## `.env` Configuration
- `frontend/.env`:
    - `REACT_APP_API_URL`: The URL of the back-end API.
- `backend/.env`:
   - `PORT`: The port on which the server will run.
   - `ENV`: The environment in which the server is running (development, production).
   - `FRONTEND_URL`: The URL of the front-end application.
   - `BACKEND_URL`: The URL of the back-end application.
   - `EMAIL_USER`: The email address from which emails will be sent.
   - `EMAIL_PASS`: The password of the email address from which emails will be sent.
   - `EMAIL_TO`: The email address to which emails will be sent.

   Since we are using `nodemailer` to send emails, you will need to enable less secure apps on your email account.
   We are using gmail, so you can enable less secure apps (and generate `EMAIL_PASS`) [here](https://myaccount.google.com/lesssecureapps).
