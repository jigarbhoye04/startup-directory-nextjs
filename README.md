# Pitch Perfect - Startup Pitch Platform

## Description

**Pitch Perfect** is a platform that allows entrepreneurs to pitch their startups, connect with other entrepreneurs, submit ideas, vote on pitches, and participate in virtual competitions. It provides a space for startups to gain visibility and for investors to discover new opportunities.

The application is built with **Next.js** using the App Router and integrates with **Sanity.io** for content management. It uses **TypeScript** for type safety and **Tailwind CSS** for styling.

## Features

- **User Authentication**: Secure login and profile management.
- **Startup Submission**: Submit startup pitches with markdown support.
- **Search and Filter**: Search for startups by name or category.
- **Live Updates**: Real-time content updates using Sanity's live content API.
- **Responsive Design**: Optimized for various screen sizes.

## Technologies Used

- [Next.js](https://nextjs.org/) 15.1.0
- [React](https://reactjs.org/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- [Sanity.io](https://www.sanity.io/) for CMS
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [EasyMDE](https://github.com/Ionaru/easy-markdown-editor) for markdown editing
- [Lucide React](https://lucide.dev/) for icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) >= 8

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/pitch-perfect.git
   cd pitch-perfect

2. **Install dependencies**:

   ```bash
   npm install

3. **Setup Environment Variables**:

   Create a `.env.local` file in the root directory and add the following:

   ```bash
    AUTH_SECRET="" 
    AUTH_GITHUB_ID=""
    AUTH_GITHUB_SECRET=""
    NEXT_PUBLIC_SANITY_PROJECT_ID=""
    NEXT_PUBLIC_SANITY_DATASET=""
    NEXT_PUBLIC_SANITY_API_VERSION=""
   ```
    Replace `env variable` with your actual Data.


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
   - `public/`: Static assets.
   - `styles/`: Global CSS files.
   - `utils/`: Utility functions and helpers.

6. **Scripts:**

   - `dev`: Starts the development server.
   - `build`: Builds the application for production.
   - `start`: Runs the production server.
   - `lint`: Runs ESLint checks.
   - `sanity`: Starts the Sanity Studio.
   - `typegen`: Generates TypeScript types from Sanity schemas.

7. **Dependencies:**

   Key dependencies used in this project:

   - **Next.js**: Framework for server-rendered React applications.
   - **Sanity.io**: Headless CMS for content management.
   - **Tailwind CSS**: Utility-first CSS framework.
   - **EasyMDE**: Markdown editor component.
   - **Lucide React**: Icon library.
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

10. **Ref:**

    - [Next.js Documentation](https://nextjs.org/docs)
    - [Sanity.io Documentation](https://www.sanity.io/docs)
    - [Tailwind CSS Documentation](https://tailwindcss.com/docs)
    - [EasyMDE Documentation](https://github.com/Ionaru/easy-markdown-editor)
