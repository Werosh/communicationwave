# 📘 Communication Wave - Developer Deployment Guide

A comprehensive guide for deploying and managing the Communication Wave business consulting website.

---

## 1. 📋 Project Overview

### What is this application?

**Communication Wave** is a modern, professional business consulting website that showcases services in:

- Professional development training
- Diversity, equity, and inclusion programs
- Communication services
- Business consulting
- Training workshops

The site includes a fully functional contact form, service pages, workshop listings with PayPal payment integration, and a capability statement section.

### Tech Stack

This project is built with modern web technologies:

| Technology        | Version  | Purpose                           |
| ----------------- | -------- | --------------------------------- |
| **React**         | 19.1.1   | Frontend UI framework             |
| **Vite**          | 7.1.7    | Build tool and development server |
| **Tailwind CSS**  | 4.1.13   | Styling and responsive design     |
| **React Router**  | 7.9.3    | Page navigation and routing       |
| **EmailJS**       | 4.4.1    | Contact form email functionality  |
| **PayPal SDK**    | 8.9.1    | Workshop payment processing       |
| **Framer Motion** | 12.23.22 | Smooth animations and transitions |
| **Lucide React**  | 0.544.0  | Icon library                      |

---

## 2. ✅ Prerequisites

### Required Software

Before you begin, ensure you have the following installed on your computer:

#### Node.js (Required)

- **Minimum Version**: Node.js 18.x or higher
- **Recommended**: Node.js 20.x LTS (Long Term Support)
- **Check if installed**: Open a terminal/command prompt and run:
  ```bash
  node --version
  ```
- **Download**: [nodejs.org](https://nodejs.org/) (Choose the LTS version)

#### npm (Included with Node.js)

- npm comes automatically with Node.js installation
- **Check version**:
  ```bash
  npm --version
  ```

#### Git (Optional but Recommended)

- For cloning the repository and version control
- **Download**: [git-scm.com](https://git-scm.com/)

### System Requirements

- **Operating System**: Windows 10/11, macOS 10.15+, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: At least 500MB free space for project and dependencies
- **Internet Connection**: Required for downloading dependencies and deployment

---

## 3. 🚀 Initial Setup (From Zero)

Follow these steps to get the project running on your local computer.

### Step 1: Get the Project Files

**Option A: Using Git (Recommended)**

Open your terminal/command prompt and run:

```bash
# Navigate to where you want to store the project
cd Documents

# Clone the repository (replace with actual repository URL)
git clone https://github.com/your-username/com-wave.git

# Navigate into the project folder
cd com-wave
```

**Option B: Manual Download**

1. Download the project ZIP file from GitHub or your file source
2. Extract the ZIP file to your desired location
3. Open terminal/command prompt
4. Navigate to the project folder:
   ```bash
   cd path/to/com-wave
   ```

### Step 2: Install Dependencies

Once you're in the project folder, install all required packages:

```bash
npm install
```

**What this does**: Downloads and installs all the libraries and tools the project needs (React, Vite, Tailwind CSS, etc.)

**Expected output**: You'll see a progress bar and many package names scrolling. This may take 2-5 minutes depending on your internet speed.

✅ **Success**: You should see a message like "added XXX packages" with no errors.

---

## 4. ⚙️ Configuration

### EmailJS Setup (Contact Form)

The contact form requires EmailJS configuration to send emails. Without this, the contact form will not work.

📄 **Detailed Instructions**: See the complete setup guide in the `EMAILJS_SETUP.md` file included with this project.

**Quick Overview:**

1. Create a free account at [EmailJS.com](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Update `src/pages/Contact.jsx` with your credentials (lines 24-26):

```javascript
const serviceId = "YOUR_SERVICE_ID"; // Replace with your Service ID
const templateId = "YOUR_TEMPLATE_ID"; // Replace with your Template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your Public Key
```

**Free Tier Limits**: 200 emails per month

### PayPal Integration (Optional)

If you want to enable PayPal payments for workshops:

1. Create a PayPal Business account at [paypal.com](https://www.paypal.com/)
2. Get your PayPal Client ID from the Developer Dashboard
3. Update the PayPal configuration in your workshop-related pages

> **Note**: The project currently uses a sandbox/test mode. For production, you'll need to replace test credentials with live credentials.

### Environment Variables

This project does not currently use a `.env` file. All configuration is done directly in the source code files mentioned above.

---

## 5. 💻 Development

### Running the Development Server

Start the local development server to preview your site:

```bash
npm run dev
```

**What to expect:**

- The terminal will display a message like:

  ```
  VITE v7.1.7  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ```

- Open your web browser and navigate to: `http://localhost:5173/`
- You should see the Communication Wave website homepage

### Development Features

- **Hot Reload**: Changes to your code automatically refresh the browser
- **Fast**: Vite provides instant updates when you save files
- **Error Display**: Errors show up both in the terminal and in the browser

### Verifying Everything Works

✅ **Checklist**:

- [ ] Homepage loads correctly
- [ ] Navigation menu works (click different links)
- [ ] All pages are accessible (Home, About, Services, Contact, etc.)
- [ ] Contact form displays (functionality requires EmailJS setup)
- [ ] No errors in the browser console (press F12 to open developer tools)

### Stopping the Server

To stop the development server:

- Press `Ctrl + C` in the terminal
- Type `y` if prompted to confirm

---

## 6. 🏗️ Building for Production

Before deploying your website, you need to create an optimized production build.

### Build Command

```bash
npm run build
```

**What this does**:

- Optimizes all your code for faster loading
- Minifies JavaScript and CSS files
- Compresses images and assets
- Creates a `dist` folder with all production-ready files

**Expected output**:

```
vite v7.1.7 building for production...
✓ 1234 modules transformed.
dist/index.html                    1.23 kB
dist/assets/index-a1b2c3d4.js      145.67 kB │ gzip: 45.23 kB
dist/assets/index-e5f6g7h8.css     23.45 kB │ gzip: 6.78 kB
✓ built in 5.42s
```

### Testing the Production Build Locally

Before deploying, test that the production build works correctly:

```bash
npm run preview
```

This starts a local server serving your production build (usually at `http://localhost:4173/`).

**Verify**:

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images and styles appear correctly
- [ ] No console errors

---

## 7. 🚀 Deployment Options

Here are detailed instructions for deploying your website to popular hosting platforms.

---

### Option 1: Netlify (Recommended) ⭐

Netlify is recommended because the project includes a `_redirects` file configured for Netlify's routing.

#### Method A: Drag and Drop (Easiest)

**Step 1: Create Netlify Account**

1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up for a free account (can use GitHub, GitLab, or email)

**Step 2: Build Your Project**

```bash
npm run build
```

**Step 3: Deploy**

1. Log in to Netlify
2. Click "Sites" in the top navigation
3. Drag and drop the entire `dist` folder onto the Netlify dashboard
4. Wait for deployment (usually 10-30 seconds)
5. Your site is live! Netlify provides a random URL like `random-name-123.netlify.app`

**Step 4: Custom Domain (Optional)**

1. In your site settings, go to "Domain Settings"
2. Click "Add custom domain"
3. Follow instructions to connect your domain

#### Method B: Git Integration (Recommended for Updates)

**Step 1: Push Code to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

**Step 2: Connect to Netlify**

1. In Netlify dashboard, click "Add new site" → "Import an existing project"
2. Choose GitHub (authorize if needed)
3. Select your repository

**Step 3: Configure Build Settings**

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- Click "Deploy site"

**Step 4: Automatic Deployments**

- Every time you push to GitHub, Netlify automatically rebuilds and deploys
- Perfect for ongoing updates

#### Method C: Netlify CLI

**Step 1: Install Netlify CLI**

```bash
npm install -g netlify-cli
```

**Step 2: Build Your Project**

```bash
npm run build
```

**Step 3: Deploy**

```bash
netlify deploy --prod --dir=dist
```

Follow the prompts to authorize and configure your site.

#### Netlify Configuration Notes

✅ The `public/_redirects` file is automatically included in your build and handles SPA routing.

**Contents of \_redirects**:

```
/* /index.html 200
```

This ensures all routes (like `/about`, `/contact`) work correctly on Netlify.

---

### Option 2: Vercel

Vercel offers excellent performance and is very developer-friendly.

#### Method A: Vercel CLI (Recommended)

**Step 1: Install Vercel CLI**

```bash
npm install -g vercel
```

**Step 2: Deploy**

```bash
vercel
```

**Step 3: Follow Prompts**

- Login with your email or GitHub
- Confirm project settings
- Choose "Yes" to deploy

**Step 4: Production Deployment**

```bash
vercel --prod
```

#### Method B: Git Integration

**Step 1: Push to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

**Step 2: Import to Vercel**

1. Go to [vercel.com](https://vercel.com/)
2. Sign up/Login (use GitHub for easy integration)
3. Click "Add New" → "Project"
4. Import your repository

**Step 3: Configure**

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- Click "Deploy"

#### Vercel Configuration Notes

Vercel automatically handles SPA routing for Vite projects. No additional configuration needed.

---

### Option 3: GitHub Pages

GitHub Pages is free but requires a few extra configuration steps for React apps.

#### Step 1: Update Vite Configuration

Edit `vite.config.js` and add a base path:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/com-wave/", // Replace 'com-wave' with your repository name
});
```

#### Step 2: Install gh-pages Package

```bash
npm install --save-dev gh-pages
```

#### Step 3: Update package.json

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### Step 4: Deploy

```bash
npm run deploy
```

#### Step 5: Enable GitHub Pages

1. Go to your GitHub repository
2. Click "Settings" → "Pages"
3. Source: Select `gh-pages` branch
4. Click "Save"

Your site will be available at: `https://your-username.github.io/com-wave/`

#### GitHub Pages Limitations

⚠️ **Note**: GitHub Pages has some limitations:

- URLs include the repository name (e.g., `/com-wave/`)
- Takes longer to propagate changes
- Limited to public repositories on free tier

---

### Option 4: Other Platforms

#### Render

1. Go to [render.com](https://render.com/)
2. Sign up and connect your GitHub repository
3. Create a "Static Site"
4. **Build Command**: `npm run build`
5. **Publish Directory**: `dist`
6. Deploy

#### Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com/)
2. Connect your GitHub repository
3. **Build Command**: `npm run build`
4. **Build Output Directory**: `dist`
5. Deploy

#### AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Connect your repository
3. Amplify auto-detects Vite configuration
4. Review and deploy

---

## 8. ✅ Post-Deployment

### Verify Your Live Site

After deployment, thoroughly test your live website:

#### Checklist:

- [ ] **Homepage loads**: Visit your domain and check the homepage
- [ ] **All pages accessible**: Click through all navigation links
  - Home
  - About
  - Services (and all service sub-pages)
  - Capability Statement
  - Trainings
  - Contact
- [ ] **Responsive design**: Test on mobile, tablet, and desktop (or resize browser)
- [ ] **Contact form**: Submit a test message (if EmailJS is configured)
- [ ] **Images load**: All images and assets display correctly
- [ ] **No console errors**: Press F12 and check the console for errors
- [ ] **Links work**: All internal and external links function properly

### Test Contact Form

If you configured EmailJS:

1. Navigate to the Contact page
2. Fill out the form with test information
3. Submit
4. Check your configured email for the test message
5. Verify the success message displays on the website

### Common Issues and Solutions

#### Issue: "404 Not Found" on Refresh

**Problem**: Direct URLs or page refreshes show 404 errors

**Solution**:

- **Netlify**: Ensure `_redirects` file is in the `public` folder
- **Vercel**: Should work automatically; check project settings
- **GitHub Pages**: This is a known limitation; consider using hash router or another platform

#### Issue: Blank White Page

**Problem**: Site loads but shows blank page

**Solutions**:

1. Check browser console (F12) for JavaScript errors
2. Verify the base URL in `vite.config.js` matches your deployment path
3. Clear browser cache and hard refresh (Ctrl+F5 or Cmd+Shift+R)

#### Issue: Styles Don't Load

**Problem**: Site loads but looks unstyled

**Solutions**:

1. Check that the build completed successfully
2. Verify all files in the `dist` folder were uploaded
3. Check browser console for CSS loading errors
4. Clear CDN cache if using a platform with caching

#### Issue: Contact Form Not Sending

**Problem**: Form submits but no email received

**Solutions**:

1. Verify EmailJS credentials in `src/pages/Contact.jsx`
2. Check EmailJS dashboard for errors
3. Ensure email service is connected and verified
4. Check spam folder for test emails

---

### Updating Your Deployed Site

After making changes to your website:

#### For Git-Based Deployments (Netlify, Vercel, etc.)

```bash
# Make your changes to the code
# Then:

git add .
git commit -m "Description of your changes"
git push origin main
```

The site will automatically rebuild and redeploy (usually takes 1-3 minutes).

#### For Manual Deployments (Drag & Drop)

```bash
# Build the updated project
npm run build

# Upload the new dist folder to your hosting platform
# (drag and drop or use CLI)
```

---

## 9. 🔧 Troubleshooting

### Common Build Errors

#### Error: "node: command not found"

**Solution**: Node.js is not installed or not in your PATH

- Install Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal after installation

#### Error: "npm: command not found"

**Solution**: npm is not installed (should come with Node.js)

- Reinstall Node.js
- Verify installation: `node --version` and `npm --version`

#### Error: "Module not found" or "Cannot find module"

**Solution**: Dependencies not installed

```bash
npm install
```

#### Error: "Port 5173 is already in use"

**Solution**: Another process is using the default port

- Stop the other process, or
- Use a different port: `npm run dev -- --port 3000`

### Development Server Issues

#### Site Not Loading at localhost:5173

**Solutions**:

1. Check if the dev server is actually running (look for errors in terminal)
2. Try a different port: `npm run dev -- --port 3001`
3. Check firewall settings
4. Try accessing `127.0.0.1:5173` instead of `localhost:5173`

#### Changes Not Reflecting in Browser

**Solutions**:

1. Hard refresh: `Ctrl+F5` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. Check terminal for errors that stopped the server
3. Clear browser cache
4. Restart the dev server (`Ctrl+C` then `npm run dev`)

### Deployment Issues

#### Build Fails on Hosting Platform

**Solutions**:

1. Check build logs for specific errors
2. Ensure Node.js version matches (use `.nvmrc` file or platform settings)
3. Verify `package.json` has correct scripts
4. Test build locally first: `npm run build`

#### Environment Variables Not Working

**Solution**: This project doesn't use environment variables by default. Configuration is in source files (like `Contact.jsx` for EmailJS). If you need environment variables:

1. Create a `.env` file in project root
2. Add variables with `VITE_` prefix:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   ```
3. Access in code: `import.meta.env.VITE_EMAILJS_SERVICE_ID`
4. Configure variables in your hosting platform's settings

### Finding Logs and Error Messages

#### Local Development

- **Terminal**: Errors appear in the terminal where you ran `npm run dev`
- **Browser Console**: Press `F12` → Console tab

#### Production (Deployed)

- **Netlify**: Site dashboard → Deploys → Click on deployment → View logs
- **Vercel**: Project dashboard → Deployments → Click deployment → View logs
- **Browser**: Always check browser console (F12) on the live site

### Getting Help

If you encounter issues not covered here:

1. **Check Browser Console**: Press F12 and look for red error messages
2. **Check Terminal Output**: Look for error messages in your terminal
3. **Search Error Messages**: Copy exact error message and search online
4. **GitHub Issues**: Check if others have reported similar issues
5. **Platform Documentation**:
   - [Vite Troubleshooting](https://vite.dev/guide/troubleshooting.html)
   - [React Documentation](https://react.dev/)
   - [Netlify Support](https://www.netlify.com/support/)
   - [Vercel Documentation](https://vercel.com/docs)

---

## 📚 Additional Resources

### Project Documentation

- `EMAILJS_SETUP.md` - Complete EmailJS configuration guide
- `IMPLEMENTATION_SUMMARY.md` - Overview of features and architecture

### Technology Documentation

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vite.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)

### Deployment Guides

- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Guide](https://pages.github.com/)

---

## 📝 Project Scripts Reference

Quick reference for all available npm scripts:

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm install`     | Install all project dependencies                 |
| `npm run dev`     | Start development server (http://localhost:5173) |
| `npm run build`   | Create production build in `dist` folder         |
| `npm run preview` | Preview production build locally                 |
| `npm run lint`    | Check code for linting errors                    |

---

## 🎯 Quick Start Checklist

For a fast deployment, follow this checklist:

- [ ] Install Node.js (v18 or higher)
- [ ] Download/clone project files
- [ ] Run `npm install`
- [ ] Configure EmailJS (update `src/pages/Contact.jsx`)
- [ ] Test locally with `npm run dev`
- [ ] Build for production with `npm run build`
- [ ] Deploy to Netlify (drag & drop the `dist` folder)
- [ ] Test live site thoroughly
- [ ] Set up custom domain (optional)

---

## ⚖️ License & Support

© 2024 Communication Wave. All rights reserved.

This deployment guide is provided as-is for the purpose of deploying and maintaining the Communication Wave website.

For technical support or questions about this guide, please consult the project documentation or contact your web developer.

---

**Last Updated**: October 2, 2025  
**Guide Version**: 1.0.0  
**Project Version**: 0.0.0
