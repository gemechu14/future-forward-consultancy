# Quick Start Guide

Get your Future Forward Consultancy website up and running in minutes!

## Prerequisites

- **Node.js**: Version 18 or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js
- **Git**: For version control ([Download](https://git-scm.com/))
- **Code Editor**: VS Code recommended ([Download](https://code.visualstudio.com/))

## 🚀 Installation (3 Steps)

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14+
- React 18
- TypeScript
- Tailwind CSS
- Redux Toolkit
- Framer Motion
- And more...

### Step 2: Run Development Server

```bash
npm run dev
```

### Step 3: Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000)

**That's it! Your website is now running! 🎉**

---

## 📂 Project Overview

### File Structure
```
future-forward-consultancy/
├── src/
│   ├── app/              # Pages and routing
│   ├── components/       # Reusable UI components
│   ├── sections/         # Page sections
│   ├── redux/           # State management
│   ├── utils/           # Helper functions
│   └── styles/          # Global styles
├── public/              # Static assets
└── [config files]       # Configuration
```

### Key Pages

1. **Home** (`/`) - Hero, services preview, achievements
2. **About** (`/about`) - Mission, vision, team, timeline
3. **Services** (`/services`) - All consulting services
4. **Industries** (`/industries`) - Industries served
5. **Contact** (`/contact`) - Contact form + map
6. **Admin** (`/admin`) - Dashboard (mocked)

---

## 🎨 Customization Quick Guide

### 1. Update Company Information

Edit `src/utils/constants.ts`:

```typescript
export const COMPANY_INFO = {
  name: 'Your Company Name',
  email: 'your@email.com',
  phone: 'your-phone',
  address: { /* your address */ },
  // ...
};
```

### 2. Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#004aad', // Change this
  },
  secondary: {
    DEFAULT: '#00b050', // Change this
  },
}
```

### 3. Add/Edit Services

Services are fetched from API. Edit `src/app/api/services/route.ts`:

```typescript
const services = [
  {
    id: 1,
    title: 'Your Service',
    description: 'Service description',
    // ...
  },
  // Add more services
];
```

### 4. Update Team Members

Edit `src/utils/constants.ts`:

```typescript
export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Team Member Name',
    role: 'Position',
    bio: 'Bio text',
  },
  // Add more team members
];
```

---

## 🌓 Dark Mode

Dark mode is built-in! Users can toggle it using the button in the navbar.

To set default theme, edit `src/app/providers.tsx`:

```typescript
<ThemeProvider 
  attribute="class" 
  defaultTheme="light" // or "dark"
  enableSystem
>
```

---

## 📱 Testing Responsive Design

### Desktop
- Open [http://localhost:3000](http://localhost:3000)

### Mobile
- Press `F12` in browser
- Click device toolbar icon
- Select device (iPhone, iPad, etc.)

Or test on actual devices:
```bash
# Find your local IP
ipconfig (Windows) or ifconfig (Mac/Linux)

# Access from mobile device
http://YOUR_IP:3000
```

---

## 🔧 Common Tasks

### Add a New Page

1. Create file: `src/app/yourpage/page.tsx`
2. Add to navigation: `src/utils/constants.ts`
3. Add metadata for SEO

```typescript
// src/app/yourpage/page.tsx
export const metadata = {
  title: 'Your Page - Future Forward',
  description: 'Page description',
};

export default function YourPage() {
  return <div>Your content</div>;
}
```

### Add a New Component

```typescript
// src/components/YourComponent.tsx
'use client';

import { motion } from 'framer-motion';

export default function YourComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Your component
    </motion.div>
  );
}
```

### Add Animation

```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated content
</motion.div>
```

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clean build
rm -rf .next
npm run build
```

### Dark Mode Not Working

- Check if `next-themes` is properly installed
- Verify `ThemeProvider` wraps the app
- Clear browser cache

---

## 📦 Building for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

---

## 🚀 Deployment

### Quick Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

**Your site will be live in ~2 minutes!**

See `DEPLOYMENT.md` for more deployment options.

---

## 📚 Learn More

### Documentation
- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Redux Toolkit**: https://redux-toolkit.js.org/

### Video Tutorials
- Next.js 14 App Router
- Tailwind CSS Crash Course
- Framer Motion Animations
- TypeScript Basics

---

## 💡 Tips for Beginners

1. **Start Small**: Focus on one page at a time
2. **Use Components**: Reuse components instead of duplicating code
3. **Check Console**: Open browser DevTools (F12) for errors
4. **Hot Reload**: Changes appear instantly in dev mode
5. **Backup Often**: Commit to Git regularly

---

## 🆘 Getting Help

### Check These First
1. Browser console (F12) for errors
2. Terminal output for build errors
3. README.md for detailed documentation
4. DEPLOYMENT.md for deployment issues

### Still Stuck?
- GitHub Issues: Report bugs
- Email: support@futureforwardconsultancy.com
- Documentation: Read the full README.md

---

## ✅ Next Steps

After getting started:

1. ✅ Customize company information
2. ✅ Update team members
3. ✅ Add your logo and images
4. ✅ Configure Google Maps location
5. ✅ Test all pages
6. ✅ Deploy to production
7. ✅ Set up analytics
8. ✅ Add authentication to admin

---

## 🎯 Key Features to Explore

- **Dark/Light Mode**: Toggle in navbar
- **Animations**: Scroll to see fade-in effects
- **Contact Form**: Try submitting the form
- **Responsive Design**: Resize browser window
- **Admin Dashboard**: Visit `/admin`
- **API Integration**: Check Network tab in DevTools

---

## 📊 Performance Tips

- Images are auto-optimized by Next.js
- Code is automatically split by route
- CSS is purged in production
- Components lazy-load when needed

---

## 🔐 Security Notes

- Admin dashboard has NO authentication (add before production!)
- Contact form has basic validation (add CAPTCHA for production)
- Use HTTPS in production
- Keep dependencies updated

See `SECURITY.md` for complete security guidelines.

---

## 🎉 You're All Set!

Your Future Forward Consultancy website is ready to customize and deploy!

**Happy coding! 🚀**

---

**Need more details?** Check out:
- `README.md` - Complete documentation
- `DEPLOYMENT.md` - Deployment guides
- `CONTRIBUTING.md` - Contribution guidelines
- `SECURITY.md` - Security best practices


