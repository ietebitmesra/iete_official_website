# Contributing to IETE BIT Mesra Website

Thank you for considering contributing to the official IETE Student's Chapter BIT Mesra website! This document outlines the guidelines for contributing to this project.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Code Style Guidelines](#code-style-guidelines)
5. [Commit Message Guidelines](#commit-message-guidelines)
6. [Pull Request Process](#pull-request-process)
7. [Adding New Features](#adding-new-features)
8. [Working with Spline 3D](#working-with-spline-3d)

## Project Structure

```
iete_official_website/
├── frontend/               # React frontend
│   ├── public/             # Static assets
│   │   ├── images/         # Image assets (logos, etc.)
│   │   └── ...
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── App.jsx         # Main application component
│   │   └── ...
│   └── ...
└── ...
```

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ietebitmesra/iete_official_website.git
   cd iete_official_website
   ```

2. **Install dependencies**:
   ```bash
   cd frontend
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Access the website**:
   Open your browser and navigate to `http://localhost:5173`

## Development Workflow

1. **Create a new branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-you-are-fixing
   ```

2. **Make your changes** and test them locally

3. **Commit your changes** (see [commit guidelines](#commit-message-guidelines))

4. **Push your branch** to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** and wait for review

## Code Style Guidelines

### React / JSX

- Use functional components with hooks instead of class components
- Use Tailwind CSS for styling
- Keep components small and focused
- Use proper semantic HTML elements
- Follow proper indentation (2 spaces)
- Use camelCase for variables and functions, PascalCase for components

### CSS / Tailwind

- Use Tailwind CSS utility classes when possible
- For custom CSS, add it to the appropriate CSS file with meaningful class names
- Maintain the current design system (colors, spacing, typography)

### JavaScript

- Use modern ES6+ syntax
- Prefer const over let, avoid var
- Use destructuring when appropriate
- Add comments for complex logic

## Commit Message Guidelines

Follow this format for commit messages:

```
type(scope): short description

longer description if necessary
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style/formatting changes
- `refactor`: Code refactoring (no functional changes)
- `test`: Adding/modifying tests
- `chore`: Build process or auxiliary tool changes

Examples:
- `feat(navbar): add dropdown menu for mobile`
- `fix(homepage): correct Spline background loading issue`
- `docs: update README with setup instructions`

## Pull Request Process

1. Ensure your PR addresses a specific issue or implements a specific feature
2. Update documentation if necessary
3. Test your changes thoroughly before submitting
4. Request a review from at least one team member
5. Make any requested changes from code review
6. Once approved, your PR will be merged

## Adding New Features

When adding new features:

1. Discuss with the team first to ensure alignment with the website's goals
2. Create a new component in `src/components` if it's reusable
3. For page-specific components, add them to the relevant page file
4. Maintain visual consistency with the existing design
5. Ensure the feature is responsive and works on mobile devices

## Working with Spline 3D

The website uses Spline for 3D backgrounds. When modifying Spline content:

1. Export your Spline scene and get the public URL
2. Replace the URL in the iframe src in `src/pages/homepage.jsx`
3. Ensure any changes to the Spline scene maintain good performance
4. Test on both desktop and mobile to ensure proper rendering
5. Consider adding a loading state for the Spline background

---

Thank you for contributing to the IETE Student's Chapter BIT Mesra website! If you have any questions, please reach out to the project maintainers.
