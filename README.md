# Naval Kishor Jha - Backend Developer Portfolio

A professional, modern, and responsive personal portfolio website built with HTML, CSS, and JavaScript.

## 🌟 Features

- **Modern Dark Theme** with blue and green gradient accents
- **Fully Responsive Design** - works on all devices
- **Smooth Animations** - fade-in effects and smooth scrolling
- **Interactive Navigation** - section highlighting and mobile menu
- **Contact Form** - with validation
- **Project Showcase** - featuring 5 major backend projects
- **Professional Sections** - About, Experience, Skills, Certifications

## 📁 Project Structure

```
naval-portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactivity
├── assets/
│   └── favicon.svg     # Website favicon
└── README.md          # This file
```

## 🚀 How to Use

1. **Open the Portfolio**
   - Simply open `index.html` in any modern web browser
   - Or use a local server for best results

2. **Using VS Code Live Server (Recommended)**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"
   - The portfolio will open at `http://localhost:5500`

## ✏️ Customization Guide

### Adding Your Resume PDF

1. Place your resume PDF in the `assets/` folder (e.g., `Naval_Kishor_Jha_Resume.pdf`)
2. Open `script.js` and find the "DOWNLOAD RESUME FUNCTIONALITY" section
3. Uncomment and update the code:

```javascript
const link = document.createElement('a');
link.href = 'assets/Naval_Kishor_Jha_Resume.pdf';
link.download = 'Naval_Kishor_Jha_Resume.pdf';
link.click();
```

### Adding Your Photo

1. Add your professional photo to the `assets/` folder (e.g., `profile.jpg`)
2. In `index.html`, find the "About Section" and replace:

```html
<div class="image-placeholder">
    <i class="fas fa-user"></i>
</div>
```

with:

```html
<img src="assets/profile.jpg" alt="Naval Kishor Jha" style="width: 280px; height: 280px; border-radius: 50%; object-fit: cover; box-shadow: var(--shadow-glow);">
```

### Updating Project Links

In `index.html`, find each project card and update the GitHub links:
- Replace `https://github.com/naval-1647` with your actual project repository URLs

### Changing Colors

In `styles.css`, update the CSS variables in the `:root` section:

```css
--accent-primary: #00d4ff;    /* Change primary accent color */
--accent-secondary: #00ff88;  /* Change secondary accent color */
```

### Contact Form Backend Integration

The contact form currently shows a success message locally. To make it functional:

1. **Option 1: Use FormSpree**
   - Sign up at https://formspree.io
   - Add to your form: `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`

2. **Option 2: Use EmailJS**
   - Sign up at https://www.emailjs.com
   - Follow their integration guide for client-side email sending

3. **Option 3: Build Your Own Backend**
   - Create a backend API endpoint to handle form submissions
   - Update the JavaScript to send data to your endpoint

## 🎨 Optional Enhancements

The `script.js` file includes commented-out code for:
- Typing effect for hero subtitle
- Scroll-to-top button
- Cursor trail effect

Simply uncomment the desired features!

## 🌐 Deployment

### Deploy to GitHub Pages

1. Create a new GitHub repository
2. Push your portfolio files to the repository
3. Go to Settings → Pages
4. Select the branch to deploy (usually `main`)
5. Your portfolio will be live at `https://naval-1647.github.io/repository-name/`

### Deploy to Netlify

1. Sign up at https://www.netlify.com
2. Drag and drop your portfolio folder
3. Your site will be live instantly with a custom URL

### Deploy to Vercel

1. Sign up at https://vercel.com
2. Import your GitHub repository
3. Deploy with one click

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 968px - 1199px
- **Mobile**: Below 968px
- **Small Mobile**: Below 600px

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox & Grid
- **JavaScript (ES6+)** - Vanilla JS for interactions
- **Font Awesome 6** - Icons
- **Google Fonts** - Poppins & Inter fonts

## 📞 Contact Information

- **Email**: menavaljha@gmail.com
- **Phone**: +91 7461811903
- **LinkedIn**: [Naval Kishor Jha](https://www.linkedin.com/in/naval-kishor-jha-04858a259/)
- **GitHub**: [naval-1647](https://github.com/naval-1647)

## 📝 License

Feel free to use this portfolio template for your own personal use!

---

**Built with ❤️ for backend developers seeking opportunities**
"# Portfolio" 
