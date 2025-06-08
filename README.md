# EV-olution ⚡🚗

A modern, interactive web application built with React that showcases the evolution of electric vehicles. Features dynamic hero sections with rotating content, smooth video/image background transitions, and an intuitive navigation experience.

## 🚀 Features

- **Dynamic Background Switching** - Seamless transitions between video and image backgrounds
- **Interactive Hero Content** - Rotating hero sections with engaging messaging
- **Responsive Navigation** - Clean, modern navigation bar with smooth interactions
- **Smooth Animations** - CSS animations and transitions for enhanced user experience
- **Component-Based Architecture** - Modular React components for maintainability
- **Modern Design** - Contemporary UI with electric vehicle theme

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: CSS3 with Flexbox and Grid
- **Animations**: CSS Keyframes and Transitions
- **Build Tool**: Vite
- **Language**: Modern ES6+ JavaScript

## 📂 Project Structure

```
src/
├── Components/
│   ├── Background/
│   │   ├── Background.jsx
│   │   └── Background.css
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   └── Hero/
│       ├── Hero.jsx
│       └── Hero.css
├── assets/
│   ├── video1.mp4
│   ├── image1.png
│   ├── image2.png
│   ├── image3.png
│   ├── arrow_btn.png
│   ├── play_icon.png
│   └── pause_icon.png
├── App.jsx
├── index.css
└── main.jsx
```

## 🎯 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ev-evolution.git
   cd ev-evolution
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Component Overview

### Background Component
- Handles dynamic switching between video and static images
- Responsive full-screen backgrounds with proper aspect ratios
- Smooth transitions between different background states

### Navbar Component
- Fixed navigation with electric vehicle branding
- Responsive design with proper z-index layering
- Clean, modern styling with white text overlay

### Hero Component
- Dynamic text content rotation
- Interactive dot navigation for content switching
- Explore button with hover effects
- Play/pause functionality integration

## 🔧 Key Features Explained

### Dynamic Content Switching
The application uses React state management to switch between different hero content and backgrounds:
- `heroCount` state controls which content set is displayed
- `playStatus` state toggles between video and static backgrounds
- Smooth transitions enhance user experience

### Responsive Design
- Mobile-first approach with flexible layouts
- Proper viewport units (vw, vh) for full-screen elements
- Responsive typography and spacing

### Performance Optimizations
- Efficient state management with minimal re-renders
- Optimized media loading and caching
- Component-based architecture for code reusability

## 🎮 Usage

1. **Navigation**: Use the navigation bar to explore different sections
2. **Hero Content**: Click the dots below the hero text to switch between different messages
3. **Background Toggle**: Interactive elements allow switching between video and image backgrounds
4. **Explore**: Use the "Explore the features" button to dive deeper into content

## 🚀 Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🌐 Deployment

This project can be deployed to various platforms:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package
- **Heroku**: Deploy with buildpack support

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔮 Future Enhancements

- [ ] Add more interactive animations
- [ ] Implement dark/light theme toggle
- [ ] Add more electric vehicle content sections
- [ ] Integrate with electric vehicle APIs
- [ ] Add contact form functionality
- [ ] Implement mobile touch gestures
- [ ] Add loading states and error handling

## 📞 Contact

Name - [Vishnu Vardhan Velpula] vishnuvardhanvelpula369@gmail.com

Project Link: https://github.com/VishnuVardhanVelpula/evWebsite

## 🙏 Acknowledgments

- Electric vehicle industry inspiration
- React community for excellent documentation
- Modern web design trends and best practices

---

⚡ **Built with passion for electric vehicles and modern web development!** ⚡
