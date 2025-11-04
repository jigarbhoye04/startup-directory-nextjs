# Pitch Perfect - Startup Pitch Platform

## Description

**Pitch Perfect** is a platform that allows entrepreneurs to pitch their startups, connect with other entrepreneurs, submit ideas, vote on pitches, and participate in virtual competitions. It provides a space for startups to gain visibility and for investors to discover new opportunities.

The application is built with **Next.js** using the App Router and integrates with **Sanity.io** for content management. It uses **TypeScript** for type safety and **Tailwind CSS** for styling.

## Features

- **User Authentication**: Secure login via GitHub OAuth.
- **Startup Submission**: Submit startup pitches with markdown support.
- **Search and Filter**: Search for startups by name or category.
- **Live Updates**: Real-time content updates using Sanity's live content API.
- **Responsive Design**: Optimized for various screen sizes.

## Technologies Used

- [Next.js](https://nextjs.org/) 15.5.6
- [React](https://reactjs.org/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- [Sanity.io](https://www.sanity.io/) v3 for CMS
- [Tailwind CSS](https://tailwindcss.com/) v4 for styling
- [NextAuth.js](https://next-auth.js.org/) v5 for authentication
- [Sentry](https://sentry.io/) for error tracking
- [Lucide React](https://lucide.dev/) for icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) >= 11

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/startup-directory-nextjs.git
   cd startup-directory-nextjs
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Setup Environment Variables**:

   Create a `.env.local` file in the root directory based on `.env.example`:

   ```bash
   cp .env.example .env.local
   ```

   Then update the values in `.env.local`:

   ```bash
   # Authentication
   AUTH_SECRET="your-secret-here" 
   AUTH_GITHUB_ID="your-github-oauth-app-id"
   AUTH_GITHUB_SECRET="your-github-oauth-app-secret"
   
   # Sanity CMS
   NEXT_PUBLIC_SANITY_PROJECT_ID="your-sanity-project-id"
   NEXT_PUBLIC_SANITY_DATASET="production"
   NEXT_PUBLIC_SANITY_API_VERSION="2024-01-01"
   SANITY_WRITE_TOKEN="your-sanity-write-token"
   
   # Sentry (Optional)
   SENTRY_AUTH_TOKEN="your-sentry-auth-token"
   ```

4. **Running the Application:**

   - **Development Mode:**

     ```bash
     npm run dev
     ```

     Open [http://localhost:3000](http://localhost:3000) to view the application.

   - **Production Mode:**
     - Build the application:

       ```bash
       npm run build
       ```

     - Start the production server:

       ```bash
       npm start
       ```

5. **Project Structure:**

   - `app/`: Next.js App Router pages and layouts.
   - `components/`: Reusable UI components.
   - `sanity/`: Sanity schema definitions and configuration.
   - `lib/`: Utility functions and server actions.
   - `public/`: Static assets.
   - `hooks/`: Custom React hooks.

6. **Scripts:**

   - `dev`: Starts the development server.
   - `build`: Builds the application for production.
   - `start`: Runs the production server.
   - `lint`: Runs ESLint checks.
   - `typegen`: Generates TypeScript types from Sanity schemas.

7. **Dependencies:**

   Key dependencies used in this project:

   - **Next.js**: Framework for server-rendered React applications.
   - **Sanity.io**: Headless CMS for content management.
   - **NextAuth.js**: Authentication library for Next.js.
   - **Tailwind CSS**: Utility-first CSS framework.
   - **Zod**: TypeScript-first schema validation.
   - **Lucide React**: Icon library.
   - **Sentry**: Error tracking and performance monitoring.
   - **ESLint**: Linting utility for JavaScript and TypeScript.
   - **TypeScript**: Superset of JavaScript for static type checking.

8. **Contributing:**

   Contributions are welcome! Please follow these steps:

   1. Fork the repository.
   2. Create a new branch:

      ```bash
      git checkout -b feature/your-feature-name
      ```

   3. Make your changes and commit them:

      ```bash
      git commit -m 'Add some feature'
      ```

   4. Push to the branch:

      ```bash
      git push origin feature/your-feature-name
      ```

   5. Open a pull request.

9. **License:**

   This project is licensed under the MIT License.

10. **References:**

    - [Next.js Documentation](https://nextjs.org/docs)
    - [Sanity.io Documentation](https://www.sanity.io/docs)
    - [Tailwind CSS Documentation](https://tailwindcss.com/docs)
    - [NextAuth.js Documentation](https://next-auth.js.org/)

