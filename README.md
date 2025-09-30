# Communication Wave - Professional Development Website

A modern, responsive React website for Communication Wave, focused on professional development training and workshops.

## 🚀 Features

- **Modern Design**: Clean, professional UI with Tailwind CSS
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth animations with Framer Motion
- **Payment Integration**: PayPal integration for workshop registration
- **SEO Optimized**: Semantic HTML and proper meta tags
- **Accessible**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **React 18** with Vite
- **Tailwind CSS** for styling
- **React Router DOM** for navigation
- **Framer Motion** for animations
- **Lucide React** for icons
- **PayPal React SDK** for payments

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Footer.jsx          # Footer component
│   └── WorkshopCard.jsx    # Workshop card component
├── pages/
│   ├── Home.jsx            # Home page
│   ├── About.jsx           # About page
│   ├── Workshops.jsx       # Workshops page
│   └── Contact.jsx         # Contact page
├── App.jsx                 # Main app component with routing
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## 🎨 Design Features

- **Color Palette**: Professional blue/indigo gradient with clean whites and grays
- **Typography**: Inter font family for modern, readable text
- **Layout**: Generous white space and clear visual hierarchy
- **Animations**: Subtle Framer Motion animations for enhanced UX
- **Cards**: Rounded corners with soft shadows and hover effects

## 💳 PayPal Integration

The website includes PayPal integration for workshop payments:

1. **Sandbox Mode**: Currently configured for testing
2. **Production**: Replace the client ID in Workshops.jsx with your live PayPal client ID
3. **Customization**: Modify payment amounts and workshop details as needed

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Responsive grid layouts
- **Desktop**: Full-featured experience with hover effects
- **Navigation**: Collapsible mobile menu

## 🚀 Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service

3. Update PayPal client ID for production

## 📞 Support

For questions or support, contact us at:
- Email: info@communicationwave.com
- Phone: +1 (555) 123-4567

## 📄 License

© 2024 Communication Wave. All rights reserved.