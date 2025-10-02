# 📘 Communication Wave Website - Complete Setup Guide

Welcome! This guide will walk you through every step needed to set up, run, and deploy your Communication Wave website. No technical experience required - just follow along step by step.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Initial Setup](#initial-setup)
3. [Configuration](#configuration)
4. [Running Locally](#running-locally)
5. [Building for Production](#building-for-production)
6. [Deployment Options](#deployment-options)
7. [Troubleshooting](#troubleshooting)
8. [Project Structure](#project-structure)

---

## 🔧 Prerequisites

Before you begin, you need to install Node.js on your computer.

### Step 1: Install Node.js

1. **Visit the Node.js website**: Go to [https://nodejs.org](https://nodejs.org)
2. **Download the LTS version**: Click the button that says "LTS" (Long Term Support) - this is the stable version
3. **Run the installer**:

   - **Windows**: Double-click the downloaded `.msi` file and follow the installation wizard
   - **Mac**: Double-click the downloaded `.pkg` file and follow the installation wizard
   - **Linux**: Follow instructions on the Node.js website for your distribution

4. **Verify installation**: Open your terminal/command prompt and type:

   ```bash
   node --version
   ```

   You should see a version number (e.g., `v20.11.0`)

   Then type:

   ```bash
   npm --version
   ```

   You should see a version number (e.g., `10.2.4`)

---

## 🚀 Initial Setup

### Step 1: Extract the Project Files

1. Extract the project zip file to a location on your computer
2. Remember the folder location (e.g., `C:\Projects\com-wave` or `/Users/YourName/Projects/com-wave`)

### Step 2: Open Terminal/Command Prompt

**Windows:**

- Press `Windows + R`
- Type `cmd` and press Enter
- OR right-click in the project folder while holding Shift and select "Open PowerShell window here"

**Mac:**

- Press `Command + Space`
- Type `Terminal` and press Enter
- Navigate to the project folder using: `cd /path/to/project`

**Linux:**

- Open your terminal application
- Navigate to the project folder using: `cd /path/to/project`

### Step 3: Navigate to Project Folder

In your terminal, type:

```bash
cd path/to/com-wave
```

Replace `path/to/com-wave` with the actual path where you extracted the files.

**Example:**

- Windows: `cd C:\Projects\com-wave`
- Mac/Linux: `cd /Users/YourName/Projects/com-wave`

### Step 4: Install Dependencies

This is the most important step! Type the following command and press Enter:

```bash
npm install
```

**What's happening?**

- This command downloads and installs all the necessary libraries and tools the website needs
- It will create a `node_modules` folder in your project
- This might take 2-5 minutes depending on your internet speed
- You'll see a lot of text scrolling - this is normal!

**Wait until you see:**

```
added XXX packages in XXs
```

---

## ⚙️ Configuration

Your website has two main features that need configuration:

### 1. Contact Form (EmailJS Setup)

The contact form needs to be connected to an email service so you can receive messages from visitors.

#### Step-by-Step EmailJS Configuration:

1. **Create an EmailJS account**:

   - Go to [https://www.emailjs.com](https://www.emailjs.com)
   - Click "Sign Up" and create a free account
   - Verify your email address

2. **Add an Email Service**:

   - Log in to your EmailJS dashboard
   - Click on "Email Services" in the left menu
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, Yahoo, etc.)
   - Follow the connection wizard for your provider
   - **Save your Service ID** (looks like `service_abc123`)

3. **Create an Email Template**:

   - Click on "Email Templates" in the left menu
   - Click "Create New Template"
   - Copy and paste this template:

   **Subject:**

   ```
   New Contact Form - {{from_name}}
   ```

   **Content:**

   ```
   Hello,

   You have received a new message from your website:

   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Service: {{service_required}}

   Message:
   {{message}}

   ---
   Sent from Communication Wave website
   ```

   - Click "Save"
   - **Save your Template ID** (looks like `template_xyz789`)

4. **Get Your Public Key**:

   - Click on "Account" in the left menu
   - Click "General"
   - Find and **copy your Public Key** (looks like `abcdefg1234567`)

5. **Update the Contact Page**:
   - Open the file: `src/pages/Contact.jsx`
   - Find these lines (around line 24-26):
   ```javascript
   const serviceId = "YOUR_SERVICE_ID";
   const templateId = "YOUR_TEMPLATE_ID";
   const publicKey = "YOUR_PUBLIC_KEY";
   ```
   - Replace with your actual IDs:
   ```javascript
   const serviceId = "service_abc123";
   const templateId = "template_xyz789";
   const publicKey = "abcdefg1234567";
   ```
   - Save the file

### 2. PayPal Integration (Optional)

If you want to accept payments for workshops:

1. **Get PayPal Client ID**:

   - Go to [https://developer.paypal.com](https://developer.paypal.com)
   - Log in or create a developer account
   - Go to "My Apps & Credentials"
   - Under "REST API apps", create a new app
   - Copy your **Client ID**

2. **Update Workshops Page**:
   - Open the file: `src/pages/Workshops.jsx`
   - Find this line (around line 14):
   ```javascript
   initialOptions={{ clientId: "YOUR_PAYPAL_CLIENT_ID" }}
   ```
   - Replace with your Client ID:
   ```javascript
   initialOptions={{ clientId: "YOUR_ACTUAL_CLIENT_ID" }}
   ```
   - Save the file

**Note:** For testing, you can use PayPal's sandbox client ID.

---

## 💻 Running Locally

Now that everything is set up, let's run your website!

### Start the Development Server

In your terminal (make sure you're in the project folder), type:

```bash
npm run dev
```

**You should see:**

```
  VITE v7.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### View Your Website

1. Open your web browser (Chrome, Firefox, Safari, etc.)
2. Go to: `http://localhost:5173`
3. Your website should now be running! 🎉

### Making Changes

- Any changes you make to the code will automatically update in the browser
- No need to refresh manually!

### Stopping the Server

- Press `Ctrl + C` in the terminal
- Type `Y` if asked to confirm

---

## 🏗️ Building for Production

Before deploying your website, you need to create a production-ready build.

### Create Production Build

In your terminal, type:

```bash
npm run build
```

**What's happening?**

- Your website is being optimized for production
- Files are being compressed and minified
- A new `dist` folder is created with your production files

**You should see:**

```
✓ built in XXXs
```

The `dist` folder now contains your complete website ready for deployment!

---

## 🌐 Deployment Options

Choose one of these popular hosting platforms. All offer free hosting for static websites!

### Option 1: Netlify (Recommended - Easiest)

**Why Netlify?**

- Free hosting
- Automatic HTTPS
- Easy drag-and-drop deployment
- Custom domain support

**Steps:**

1. **Create an account**:

   - Go to [https://www.netlify.com](https://www.netlify.com)
   - Click "Sign Up" - you can sign up with GitHub, GitLab, or email

2. **Deploy using drag-and-drop**:

   - Log in to your Netlify dashboard
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your entire `dist` folder
   - Wait for deployment (usually 1-2 minutes)
   - Your site is live! 🎉

3. **Get your URL**:

   - Netlify will give you a URL like: `https://random-name-12345.netlify.app`
   - You can customize this in Site settings

4. **Custom Domain (Optional)**:
   - Click "Domain settings"
   - Add your custom domain
   - Follow the instructions to update your domain's DNS settings

**Updating your site:**

- Make changes to your code
- Run `npm run build` again
- Drag and drop the new `dist` folder to Netlify

### Option 2: Vercel

**Why Vercel?**

- Free hosting
- Excellent performance
- Automatic deployments from Git
- Great for React projects

**Steps:**

1. **Create an account**:

   - Go to [https://vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or email

2. **Deploy manually**:

   - Install Vercel CLI: `npm install -g vercel`
   - In your project folder, type: `vercel`
   - Follow the prompts
   - Your site will be deployed!

3. **Deploy via drag-and-drop**:
   - Log in to [https://vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Drag your `dist` folder
   - Click "Deploy"

### Option 3: GitHub Pages

**Why GitHub Pages?**

- Free hosting
- Integrated with GitHub
- Great for portfolios

**Steps:**

1. **Prerequisites**:

   - You need a GitHub account
   - Your project should be in a GitHub repository

2. **Install gh-pages package**:

   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update `package.json`**:
   Add these lines to your `package.json`:

   ```json
   "homepage": "https://yourusername.github.io/com-wave",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

   Replace `yourusername` with your GitHub username

4. **Deploy**:

   ```bash
   npm run deploy
   ```

5. **Access your site**:
   - Go to your repository settings
   - Click "Pages"
   - Your site will be live at the URL shown

### Option 4: Traditional Web Hosting (cPanel, FTP)

If you have a traditional web host with cPanel or FTP access:

1. **Build your project**:

   ```bash
   npm run build
   ```

2. **Upload files**:

   - Use an FTP client (like FileZilla)
   - Connect to your hosting server
   - Upload ALL files from the `dist` folder to your `public_html` or `www` directory

3. **Configure redirects**:
   - Create a `.htaccess` file in the same directory
   - Add these lines:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 🔍 Troubleshooting

### Common Issues and Solutions

#### 1. `npm install` not working

**Error**: `npm: command not found`

- **Solution**: Node.js is not installed. Go back to [Prerequisites](#prerequisites)

**Error**: `permission denied` or `EACCES`

- **Solution**:
  - **Mac/Linux**: Try `sudo npm install`
  - **Windows**: Run command prompt as Administrator

#### 2. Website not loading at localhost:5173

**Issue**: Port already in use

- **Solution**:
  - Close any other programs using that port
  - OR use a different port: `npm run dev -- --port 3000`

#### 3. Contact form not sending emails

**Check these:**

- Are your EmailJS Service ID, Template ID, and Public Key correct?
- Did you verify your email in EmailJS?
- Check the browser console (press F12) for error messages

#### 4. PayPal button not showing

**Check these:**

- Is your PayPal Client ID correct?
- Are you using the right client ID (sandbox vs production)?

#### 5. Build fails with errors

**Solution**:

- Delete `node_modules` folder
- Delete `package-lock.json` file
- Run `npm install` again
- Run `npm run build` again

#### 6. Website works locally but not after deployment

**Check these:**

- Did you upload the files from the `dist` folder (not the entire project)?
- Did you configure redirects properly (for single-page apps)?
- Check your hosting platform's documentation for React apps

#### 7. Changes not showing up

**Solution**:

- Clear your browser cache (Ctrl + Shift + Delete)
- Hard refresh (Ctrl + Shift + R or Cmd + Shift + R)
- Try in an incognito/private window

---

## 📁 Project Structure

Understanding your project's structure:

```
com-wave/
├── public/                 # Static files
│   ├── _redirects         # Netlify redirect rules
│   └── vite.svg           # Favicon
├── src/                   # Source code
│   ├── assets/            # Images, fonts, etc.
│   ├── components/        # Reusable components
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Hero.jsx       # Hero section
│   │   ├── ContactForm.jsx # Contact form
│   │   └── WorkshopCard.jsx # Workshop card
│   ├── pages/             # Website pages
│   │   ├── Home.jsx       # Homepage
│   │   ├── About.jsx      # About page
│   │   ├── Contact.jsx    # Contact page
│   │   ├── Workshops.jsx  # Workshops page
│   │   ├── Services.jsx   # Services page
│   │   └── services/      # Individual service pages
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── dist/                  # Production build (created after npm run build)
├── node_modules/          # Dependencies (created after npm install)
├── package.json           # Project configuration
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md              # This file!
```

### Important Files:

- **package.json**: Lists all dependencies and scripts
- **vite.config.js**: Build tool configuration
- **tailwind.config.js**: Styling configuration
- **src/App.jsx**: Main application logic and routing
- **src/pages/Contact.jsx**: Contact form (needs EmailJS config)
- **src/pages/Workshops.jsx**: Workshop page (needs PayPal config)

---

## 🎨 Customization Guide

### Changing Colors

Colors are defined in `tailwind.config.js`. To change the primary color scheme:

1. Open `tailwind.config.js`
2. Look for the color definitions
3. Update the hex values to your preferred colors

### Changing Content

Each page's content is in the `src/pages/` folder:

- **Home page**: `src/pages/Home.jsx`
- **About page**: `src/pages/About.jsx`
- **Contact page**: `src/pages/Contact.jsx`
- **Workshops**: `src/pages/Workshops.jsx`

Just open the file in any text editor and modify the text!

### Changing Images

1. Add your images to `src/assets/`
2. Import them in your component:
   ```javascript
   import myImage from "./assets/myImage.jpg";
   ```
3. Use them:
   ```javascript
   <img src={myImage} alt="Description" />
   ```

### Adding New Pages

1. Create a new file in `src/pages/` (e.g., `NewPage.jsx`)
2. Copy the structure from an existing page
3. Add the route in `src/App.jsx`:
   ```javascript
   <Route path="/new-page" element={<NewPage />} />
   ```

---

## 📊 Tech Stack Overview

Your website is built with modern technologies:

- **React**: JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: For navigation between pages
- **Framer Motion**: For smooth animations
- **EmailJS**: For contact form email functionality
- **PayPal SDK**: For payment processing

All these are installed automatically when you run `npm install`!

---

## 📞 Support and Resources

### Official Documentation:

- **React**: [https://react.dev](https://react.dev)
- **Vite**: [https://vite.dev](https://vite.dev)
- **Tailwind CSS**: [https://tailwindcss.com](https://tailwindcss.com)
- **EmailJS**: [https://www.emailjs.com/docs](https://www.emailjs.com/docs)

### Hosting Platform Documentation:

- **Netlify**: [https://docs.netlify.com](https://docs.netlify.com)
- **Vercel**: [https://vercel.com/docs](https://vercel.com/docs)
- **GitHub Pages**: [https://pages.github.com](https://pages.github.com)

### Video Tutorials:

Search YouTube for:

- "How to deploy React app to Netlify"
- "How to use EmailJS with React"
- "React website deployment tutorial"

---

## ✅ Quick Start Checklist

Use this checklist to make sure you've completed all steps:

- [ ] Node.js installed and verified
- [ ] Project files extracted
- [ ] Opened terminal/command prompt
- [ ] Navigated to project folder
- [ ] Ran `npm install` successfully
- [ ] Configured EmailJS (Service ID, Template ID, Public Key)
- [ ] Configured PayPal (if using payments)
- [ ] Tested locally with `npm run dev`
- [ ] Created production build with `npm run build`
- [ ] Deployed to hosting platform
- [ ] Tested contact form on live site
- [ ] Tested all pages and links

---

## 🎉 Congratulations!

You've successfully set up your Communication Wave website!

If you followed all the steps above, your website should now be:

- ✅ Running locally on your computer
- ✅ Built and ready for production
- ✅ Deployed to a hosting platform
- ✅ Accessible to anyone on the internet

### Next Steps:

1. **Test everything**: Click through all pages, test the contact form, try the navigation
2. **Customize content**: Update text, images, and information to match your needs
3. **Set up custom domain**: If you have one, connect it to your hosting platform
4. **Monitor emails**: Make sure contact form submissions are coming through
5. **Share your site**: Send the URL to friends, clients, or customers!

---

## 📝 Important Notes

1. **Never commit your API keys**: If you use Git, make sure sensitive information is not shared
2. **Keep dependencies updated**: Run `npm update` occasionally to get security updates
3. **Backup your work**: Keep a copy of the project folder in a safe place
4. **Free tier limits**:
   - EmailJS: 200 emails/month (free tier)
   - Netlify: 100GB bandwidth/month (free tier)
   - Vercel: Similar generous free tier

---

## 🙏 Thank You!

Thank you for choosing this website solution. If you have any questions or need assistance, don't hesitate to reach out!

**Built with ❤️ for Communication Wave**

---

### Version Information

- **Project Version**: 1.0.0
- **Last Updated**: October 2025
- **React Version**: 19.1.1
- **Node.js Required**: 18.x or higher

---

**Happy launching! 🚀**
