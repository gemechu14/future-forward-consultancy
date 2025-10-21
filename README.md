# Future Forward Research & Business Consultancy

A modern, production-ready business consultancy website built with Next.js 14+, TypeScript, Tailwind CSS, and Redux Toolkit.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **State Management**: Redux Toolkit with RTK Query for API integration
- **Beautiful UI/UX**: Framer Motion animations, dark/light mode support
- **Fully Responsive**: Mobile-first design optimized for all devices
- **SEO Optimized**: Meta tags, structured data, semantic HTML
- **Performance**: Lazy loading, optimized images, efficient rendering
- **Accessible**: ARIA labels, keyboard navigation, screen reader friendly

## 📦 Tech Stack

- **Framework**: Next.js 14+ (App Router, Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **State Management**: Redux Toolkit + RTK Query
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Charts**: Recharts
- **Maps**: Google Maps iframe (can switch to react-leaflet)
- **Theme**: next-themes (dark/light mode)
- **Icons**: Lucide React

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── services/page.tsx  # Services page
│   ├── industries/page.tsx # Industries page
│   ├── contact/page.tsx   # Contact page
│   ├── admin/page.tsx     # Admin dashboard (mocked)
│   └── api/               # API routes
│       ├── services/route.ts
│       ├── industries/route.ts
│       └── contact/route.ts
├── components/            # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ServiceCard.tsx
│   ├── IndustryCard.tsx
│   ├── SectionHeader.tsx
│   ├── FormInput.tsx
│   └── MapSection.tsx
├── sections/              # Page-specific sections
│   ├── Home/
│   ├── About/
│   ├── Services/
│   ├── Industries/
│   └── Contact/
├── redux/                 # Redux store and API
│   ├── store.ts
│   └── servicesApi.ts
├── utils/                 # Utility functions
│   ├── constants.ts
│   └── helpers.ts
└── styles/
    └── globals.css        # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: `#004aad` (Blue) - Trust, professionalism
- **Secondary**: `#00b050` (Green) - Growth, success
- **Neutral**: Black & White with gray scales

### Typography
- **Headings**: Poppins / Inter
- **Body**: Lato / Roboto

### Components
- Rounded corners (`rounded-2xl`)
- Consistent shadows and padding
- Hover animations and transitions
- Interactive cursor effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages Overview

### Home Page (`/`)
- Hero section with CTA
- Services preview (3 featured services)
- Achievements section with animated counters and charts
- Stats: 250+ Clients, 500+ Projects, 15+ Years, 98% Success Rate

### About Page (`/about`)
- Hero section
- Mission, Vision, and Values cards
- Team section with 4 team members
- Company timeline with 6 major milestones

### Services Page (`/services`)
- 6 comprehensive services with RTK Query integration
- Interactive service cards with hover effects
- Modal for detailed service information
- Features and pricing display

### Industries Page (`/industries`)
- 6 industry sectors served
- Expandable modals with solutions and case studies
- RTK Query for data fetching
- Industry-specific insights

### Contact Page (`/contact`)
- Form with React Hook Form validation
- Real-time error messages
- RTK Query mutation for form submission
- Google Maps integration with company location
- NAP (Name, Address, Phone) data for local SEO

### Admin Dashboard (`/admin`)
- Overview with key statistics
- Services management interface
- Industries management interface
- Contact inquiries viewer
- **Note**: Mock implementation - add authentication in production

## 🔌 API Routes

### GET `/api/services`
Returns list of all services with features and pricing.

### GET `/api/industries`
Returns list of industries with solutions and case studies.

### POST `/api/contact`
Handles contact form submissions.

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Your message here"
}
```

## 🎯 Key Features Implemented

### Performance Optimization
- ✅ Lazy loading for non-critical components
- ✅ Image optimization with `next/image`
- ✅ Server Components for improved performance
- ✅ API caching with Cache-Control headers
- ✅ Smooth animations without blocking rendering

### SEO Best Practices
- ✅ Meta tags for each page
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Structured data (JSON-LD) for local business
- ✅ Proper heading hierarchy
- ✅ Alt text for images

### Accessibility
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Screen reader friendly
- ✅ Color contrast compliance
- ✅ Form error announcements

### User Experience
- ✅ Dark/Light mode toggle
- ✅ Smooth page transitions
- ✅ Loading states for async operations
- ✅ Error handling and user feedback
- ✅ Responsive design (mobile-first)
- ✅ Interactive animations

## 🔧 Customization

### Update Company Information
Edit `src/utils/constants.ts` to update:
- Company name and contact details
- Navigation links
- Team members
- Milestones
- Achievements

### Add New Services/Industries
1. Update API routes in `src/app/api/`
2. Data will automatically populate via RTK Query

### Modify Theme Colors
Edit `tailwind.config.ts` to change primary and secondary colors.

### Add Authentication to Admin
The admin dashboard is currently mocked. To add authentication:
1. Install authentication library (NextAuth.js, Clerk, etc.)
2. Protect admin routes with middleware
3. Add role-based access control

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
- **Netlify**: Compatible with Next.js
- **AWS Amplify**: Supports SSR
- **Docker**: Containerize the application

## 📝 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Google Maps (if using Google Maps API)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here

# Email Service (for contact form)
EMAIL_SERVICE_API_KEY=your_email_service_key

# Database (when implementing)
DATABASE_URL=your_database_url
```

## 🧪 Testing Recommendations

Add testing with:
- **Unit Tests**: Jest + React Testing Library
- **E2E Tests**: Playwright or Cypress
- **Performance**: Lighthouse CI

## 🐛 Known Issues & Future Enhancements

### Future Enhancements
- [ ] Add blog section
- [ ] Implement case studies page
- [ ] Add testimonials/reviews
- [ ] Integrate CRM system
- [ ] Add multi-language support (i18n)
- [ ] Implement real authentication
- [ ] Add email notifications
- [ ] Create dashboard analytics

## 📄 License

This project is proprietary software for Future Forward Research and Business Consultancy.

## 👥 Team

Built with ❤️ by the Future Forward team.

## 📞 Support

For questions or support, contact us at:
- Email: info@futureforwardconsultancy.com
- Phone: +1 (555) 123-4567

---

**Ready to transform your business?** Visit us at [futureforwardconsultancy.com](https://futureforwardconsultancy.com)


