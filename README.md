# Ivan Shishkin - Developer Portfolio

A modern, animated portfolio website showcasing my work as a software engineer. Built with React, featuring smooth animations, interactive components, and a responsive design.

## 🚀 Features

- **Modern UI/UX**: Sleek, dark-themed interface with smooth animations and transitions
- **Interactive Components**:
  - Carousel-based experience section with navigation controls
  - Flowing menu for projects
  - Animated text effects (blur, shiny, glitch)
  - Glass morphism effects
  - Electric borders with animated effects
- **Responsive Design**: Fully responsive layout that adapts to all screen sizes
- **Performance Optimized**:
  - Lazy loading for pages
  - Code splitting
  - Optimized animations
- **Multi-page Navigation**:
  - Home
  - About
  - Experience
  - Education
  - Projects

## 🛠️ Tech Stack

### Core

- **React** (v19.2.3) - UI framework
- **React Router DOM** (v7.12.0) - Routing
- **Vite** (v7.3.1) - Build tool and dev server

### Animation & Effects

- **Motion** (v12.26.2) - Animation library (formerly Framer Motion)
- **GSAP** (v3.14.2) - Advanced animation library
- **Three.js** (v0.182.0) - 3D graphics
- **OGL** (v1.0.11) - WebGL library
- **Postprocessing** (v6.38.2) - Post-processing effects

### Styling

- CSS3 with custom animations
- Inline styles for dynamic styling
- Custom CSS modules for component-specific styles

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ivan-Shishkin-Dev/Ivan-Shishkin-Dev.github.io.git
   cd Ivan-Shishkin-Dev.github.io
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🎯 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## 📁 Project Structure

```
src/
├── assets/                 # Static assets (images, etc.)
│   └── Ivan Shishkin Headshot.JPG
├── components/             # Reusable React components
│   ├── BlurText.jsx       # Text blur animation effect
│   ├── ElectricBorder.jsx # Animated electric border effect
│   ├── FadeIn/            # Fade-in animation component
│   ├── FlowingMenu.jsx    # Interactive flowing menu
│   ├── Galaxy.jsx         # Galaxy background effect
│   ├── GlassIcons.jsx     # Glass morphism icon buttons
│   ├── Icons.jsx          # Icon components (React, Node, etc.)
│   ├── Layout.jsx         # Main layout wrapper with navigation
│   ├── LetterGlitch.jsx   # Text glitch effect
│   ├── LogoLoop/          # Animated logo loop
│   ├── Navbar.jsx         # Navigation bar component
│   ├── PillNav.jsx        # Pill-shaped navigation
│   ├── PixelBlast.jsx     # Pixel blast background effect
│   ├── ScrollFloat/       # Scroll-based float animation
│   ├── Section.jsx        # Section wrapper component
│   ├── ShinyText.jsx      # Shiny text animation
│   ├── SpotlightCard.jsx  # Spotlight effect card
│   ├── Squares/           # Animated squares background
│   ├── StaggeredMenu.jsx  # Staggered menu animation
│   └── Threads.jsx        # Threads background effect
├── pages/                  # Page components
│   ├── About.jsx          # About page
│   ├── Education.jsx      # Education page
│   ├── Experience.jsx     # Experience page (carousel)
│   ├── Home.jsx           # Home/Landing page
│   └── Projects.jsx       # Projects showcase page
├── App.jsx                 # Main app component with routing
├── App.css                 # Global app styles
├── index.css               # Global CSS styles
└── main.jsx                # Entry point
```

## 🎨 Key Components

### Animation Components

- **BlurText**: Text with blur-in animation effect
- **ShinyText**: Text with shiny gradient animation
- **LetterGlitch**: Glitch effect on text letters
- **ScrollFloat**: Float animation triggered by scroll
- **FadeIn**: Fade-in animation component

### Interactive Components

- **FlowingMenu**: Interactive menu with flowing animations
- **PillNav**: Pill-shaped navigation buttons with hover effects
- **GlassIcons**: Glass morphism styled icon buttons
- **SpotlightCard**: Card with spotlight hover effect
- **ElectricBorder**: Animated electric border effect

### Background Components

- **Threads**: Thread-like animated background
- **PixelBlast**: Pixelated background effect
- **Galaxy**: Galaxy-themed background
- **Squares**: Animated squares pattern
- **LogoLoop**: Animated logo loop background

### Page Components

- **Experience**: Carousel-based experience showcase with navigation
- **Projects**: Interactive project showcase with flowing menu
- **Home**: Landing page with intro, skills, and social links
- **About**: About page with personal information
- **Education**: Education and qualifications page

## 🎯 Features by Page

### Home Page

- Animated introduction with headshot
- Skill showcase with technology icons
- Social media links (Email, GitHub, LinkedIn)
- Spotlight card effects
- Letter glitch background

### Experience Page

- **Carousel Navigation**: Scroll through work experiences
- **Navigation Controls**: Previous/Next buttons
- **Page Indicators**: Visual indicators showing current position
- **Responsive Design**: Adapts to screen width
- **Smooth Animations**: Spring-based animations using Motion
- **Threads Background**: Animated thread background effect

### Projects Page

- Flowing menu interface
- Interactive project cards
- Pixel blast background effect
- Hover animations

### About & Education Pages

- Personal information display
- Animated backgrounds
- Smooth transitions

## 🔧 Customization

### Updating Content

#### Experience Section

Edit `src/pages/Experience.jsx` and modify the `EXPERIENCE_ITEMS` array:

```javascript
const EXPERIENCE_ITEMS = [
  {
    id: 1,
    title: "Your Title",
    company: "Company Name",
    location: "Location",
    period: "Date Range",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      // ...
    ],
  },
  // ...
];
```

#### Projects

Edit `src/pages/Projects.jsx` and modify the `projectItems` array:

```javascript
const projectItems = [
  {
    link: "#",
    text: "Project Name",
    image: "image-url",
  },
  // ...
];
```

#### Skills & Social Links

Edit `src/pages/Home.jsx` to update skills and social links.

### Styling

- **Global Styles**: Edit `src/index.css` and `src/App.css`
- **Component Styles**: Each component may have its own CSS file (e.g., `ElectricBorder.css`)
- **Colors**: Primary colors can be adjusted in component files (look for color values like `#809fff`, `#0a0a0a`, etc.)

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to GitHub Pages

Since this is a `.github.io` repository, you can deploy directly to GitHub Pages:

1. **Push your code to GitHub**

   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Enable GitHub Pages**

   - Go to repository Settings
   - Navigate to Pages
   - Select source branch (typically `main` or `gh-pages`)
   - Select `/root` or `/docs` folder if using a separate build folder

3. **If using a separate build folder**, update your build process to output to `docs/` and configure accordingly.

### Alternative Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect via Git
- **Cloudflare Pages**: Connect repository for automatic builds and deployments

## 🎨 Design Philosophy

- **Dark Theme**: Consistent dark color scheme throughout
- **Smooth Animations**: Spring-based physics for natural feel
- **Minimalist**: Clean, uncluttered design
- **Interactive**: Engaging hover effects and transitions
- **Performance**: Optimized animations and lazy loading

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- The project uses React 19, which is the latest version
- All animations are optimized for performance
- The carousel in the Experience section is fully responsive
- Images should be optimized before adding to the project
- Consider using environment variables for sensitive data

## 🤝 Contributing

This is a personal portfolio project. If you'd like to suggest improvements or report bugs, please open an issue.

## 📄 License

This project is private and personal. All rights reserved.

## 👤 Author

**Ivan Shishkin**

- GitHub: [@Ivan-Shishkin-Dev](https://github.com/Ivan-Shishkin-Dev)
- LinkedIn: [Ivan Shishkin](https://www.linkedin.com/in/ivan-shishkin-dev)
- Email: shishkinivan2006@gmail.com

## 🙏 Acknowledgments

- React team for the amazing framework
- GSAP for powerful animation tools
- Motion (Framer Motion) team for React animations
- Three.js for WebGL capabilities
- All the open-source libraries that made this project possible

---

**Built with ❤️ using React and modern web technologies**
