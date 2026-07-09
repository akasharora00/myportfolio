# VS Code-Inspired Developer Portfolio

A production-quality developer portfolio built using **React (functional components + hooks)**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **React Icons**.

The design is visually inspired by the Visual Studio Code dark/light themes. The application is structured as a high-fidelity single-page experience: clicking folders or files inside the sidebar explorer or swapping editor tabs navigates between content panels dynamically without altering the URL or refreshing the page.

---

## Features

- **Single-page Workspace Layout**: True-to-life replication of VS Code layout with Activity Bar, Explorer File Panel, Tab Headers, Code gutter line numbers, and Status Bar.
- **Dynamic Tab Control**: Swapping active files in the Explorer tree synchronizes active tabs and shifts editor content instantly.
- **Framer Motion Transitions**: Fluid slide-and-fade motions when switching files, tab animations, and hover lift effects for action buttons and card components.
- **Dark / Light+ Modes**: Header toggle switches between VS Code Dark Theme and classic VS Code Light+ theme.
- **Tailwind CSS v4 CSS Themes**: Configured inline styling parameters using theme variables and native CSS custom properties.
- **Interactive Forms & Notifications**: Fully interactive contact form that triggers a custom slide-in VS Code-style extension notification Toast.

---

## Folder Structure

```
src/
  components/
    WindowHeader.jsx      # Top title bar containing window decorations, socials, and theme toggler
    Explorer.jsx          # Left Activity Bar and folding File Explorer Panel
    EditorTabs.jsx        # Horizontal tab ribbon showing open files
    EditorContent.jsx     # Section mounting controller using AnimatePresence transitions
    ProjectCard.jsx       # Custom showcase card designed like a code panel
    StatusBar.jsx         # Bottom bar containing branch and language details
    sections/
      About.jsx           # Markdown-themed bio layout with line number gutter
      Projects.jsx        # Project showcases displaying ProjectCards
      Skills.jsx          # Read-only syntax-highlighted skills JSON page
      Resume.jsx          # Center file preview pane with download and browser preview buttons
      Contact.jsx         # Contact grid and form with VS Code toast notification trigger
  data/
    profile.js            # Edit this file to change your bio, title, and social links
    projects.js           # Edit this file to add/remove projects
    skills.js             # Edit this file to update your language and tools matrices
  App.jsx                 # Core state (active file, visible panes, dark/light theme toggle)
  main.jsx                # Vite React app bootstrap entry point
  index.css               # Tailwind CSS v4 directives, custom theme variables, and scrollbar layouts
```

---

## Local Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

---

## Customizing Content

To customize the portfolio with your own developer details, modify the mock profiles inside `src/data/`:

### 1. Update Profile & Contacts (`src/data/profile.js`)
Replace the details in this file with your name, job title, stack descriptor, bio summary, and social links:
```javascript
export const profile = {
  name: "Your Name",
  role: "Your Role (e.g. Frontend Engineer)",
  stack: "Language | Framework | Database",
  currentProject: "the current project you are building",
  bio: "A short professional summary about you...",
  contact: {
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "City, State",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
  }
};
```

### 2. Update Projects List (`src/data/projects.js`)
Add details for up to 4 software engineering projects to show in the projects section:
```javascript
export const projects = [
  {
    id: 1,
    name: "Project Name",
    description: "Brief summary of project objectives...",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/your-username/repo-name",
    liveLink: "https://your-deployment-link.com",
  },
  // Add up to 4 projects
];
```

### 3. Update Skills JSON (`src/data/skills.js`)
Edit the lists of languages, frameworks, backend tech, and tools to automatically format and syntax-highlight inside the read-only JSON editor:
```javascript
export const skills = {
  languages: ["JavaScript", "TypeScript", ...],
  frontend: ["React.js", "Tailwind CSS", ...],
  backend: ["Node.js", "Express.js", ...],
  tools: ["Git", "GitHub", "Docker", ...]
};
```

### 4. Replace Resume PDF
Put your actual resume PDF inside the `public/` directory and name it `resume.pdf` to make the View and Download resume buttons work.
