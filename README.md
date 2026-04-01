# ⚡ GITFOLIO

A beginner-friendly developer portfolio template with a retro-futuristic cyberpunk aesthetic. Fork it, customize it, deploy it - no design skills required, (promise!)

![Gitfolio Preview](https://img.shields.io/badge/Next.js-16.0.10-black?style=flat-square&logo=next.js) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)

---

## 🚀 Quick Start

### Option 1: Use This Template (Recommended)

1. Click the **"Use this template"** button at the top of this repo
2. Name your new repository (e.g., `my-portfolio`)
3. Clone your new repo and start customizing!

### Option 2: Fork & Clone

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

---

## ✏️ Customize Your Portfolio

All your content lives in **one file**: `app/page.tsx`

### 1. Update Your Name/Brand
Find the navigation section and change `GITFOLIO` to your name:
```tsx
<Link href="/">
  YOUR_NAME
</Link>
```

### 2. Add Your Projects
Look for the `ProjectCard` components and update them:
```tsx
<ProjectCard 
  title="MY_PROJECT"
  description="What this project does and why it's awesome."
  tags={["REACT", "TYPESCRIPT", "API"]}
  color="cyan"  // Options: cyan, fuchsia, purple, yellow
  href="https://github.com/you/project"
/>
```

### 3. Write Your Bio
Find the `// ABOUT_ME` section and tell your story:
```tsx
<p>
  Your developer journey goes here. What drives you? 
  What are you passionate about building?
</p>
```

### 4. Update Your Skills
Customize the `STACK_TRACE` and `PROTOCOLS` lists with your actual tech stack and values.

### 5. Add Your Photo
Drop your photo in the `/public` folder as `me.png` (or update the filename in `page.tsx`).

### 6. Update Social Links
Find the footer section and add your actual social media URLs:
```tsx
<SocialLink href="https://github.com/YOUR_USERNAME" label="GITHUB" />
<SocialLink href="https://linkedin.com/in/YOUR_USERNAME" label="LINKEDIN" />
<SocialLink href="https://twitter.com/YOUR_USERNAME" label="TWITTER" />
```

---

## 🌐 Deploy to GitHub Pages

This template is pre-configured for GitHub Pages deployment.

### Step 1: Update the Base Path

In `app/page.tsx`, update the `basePath` variable with your repository name:
```tsx
const basePath = process.env.NODE_ENV === "production" ? "/YOUR_REPO_NAME" : "";
```

### Step 2: Enable GitHub Pages

1. Go to your repo's **Settings** → **Pages**
2. Under "Build and deployment", select **GitHub Actions**
3. Push to `main` branch—the included workflow will build and deploy automatically

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## 📁 Project Structure

```
├── app/
│   ├── page.tsx        # 👈 Main content (edit this!)
│   ├── layout.tsx      # Root layout & metadata
│   └── globals.css     # Global styles
├── public/
│   └── me.png          # 👈 Your profile photo
├── .github/
│   └── workflows/      # GitHub Pages deployment
└── next.config.ts      # Next.js configuration
```

---

## 🎨 Design Features

- **Cyberpunk Aesthetic**: Neon cyan, fuchsia, and yellow accents on deep space background
- **Terminal Typography**: Monospaced fonts for that coder vibe
- **Interactive Elements**: Glowing hover effects, pulsing status indicator, smooth animations
- **Responsive**: Looks great on mobile, tablet, and desktop
- **Accessible**: Semantic HTML and proper contrast ratios

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16 | React framework with App Router |
| [React](https://react.dev/) | 19 | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first styling |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety |

---

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🤝 Contributing

Found a bug or have an improvement idea? Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📄 License

This project is open source under the [MIT License](LICENSE). Feel free to use it for your own portfolio!

---

## 💜 Credits

Made with ❤️ by [GitHub for Beginners](https://gh.io/gfb) and [GitHub Copilot](https://gh.io/gfb-copilot).

## Change for demo!

