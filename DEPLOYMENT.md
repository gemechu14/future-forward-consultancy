# Deployment Guide

## Prerequisites

Before deploying, ensure you have:
- Node.js 18+ installed
- All environment variables configured
- Git repository set up

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest deployment option for Next.js applications.

#### Steps:

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Set Environment Variables**:
   - Go to your project on Vercel dashboard
   - Navigate to Settings → Environment Variables
   - Add all variables from `.env.example`

5. **Deploy to Production**:
```bash
vercel --prod
```

#### Custom Domain:
- Go to Vercel dashboard → Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

### 2. Netlify

#### Steps:

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Build the project**:
```bash
npm run build
```

3. **Deploy**:
```bash
netlify deploy --prod
```

4. **Set Environment Variables**:
   - Go to Site settings → Build & deploy → Environment
   - Add all environment variables

---

### 3. AWS Amplify

#### Steps:

1. **Install Amplify CLI**:
```bash
npm install -g @aws-amplify/cli
```

2. **Initialize Amplify**:
```bash
amplify init
```

3. **Add hosting**:
```bash
amplify add hosting
```

4. **Publish**:
```bash
amplify publish
```

---

### 4. Docker Deployment

#### Dockerfile:

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

#### Build and Run:

```bash
# Build image
docker build -t future-forward-consultancy .

# Run container
docker run -p 3000:3000 future-forward-consultancy
```

---

### 5. Traditional VPS (DigitalOcean, Linode, etc.)

#### Steps:

1. **SSH into your server**:
```bash
ssh user@your-server-ip
```

2. **Install Node.js**:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Clone repository**:
```bash
git clone https://github.com/yourusername/future-forward-consultancy.git
cd future-forward-consultancy
```

4. **Install dependencies**:
```bash
npm install
```

5. **Build**:
```bash
npm run build
```

6. **Install PM2** (Process Manager):
```bash
sudo npm install -g pm2
```

7. **Start application**:
```bash
pm2 start npm --name "future-forward" -- start
pm2 save
pm2 startup
```

8. **Set up Nginx as reverse proxy**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

9. **Install SSL with Let's Encrypt**:
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## Post-Deployment Checklist

### Essential Tasks:

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Check API endpoints functionality
- [ ] Verify dark/light mode toggle
- [ ] Test responsive design on mobile devices
- [ ] Check SEO meta tags
- [ ] Verify Google Maps location
- [ ] Test navigation and all links
- [ ] Check console for errors
- [ ] Run Lighthouse audit
- [ ] Set up monitoring (Sentry, LogRocket, etc.)
- [ ] Configure analytics (Google Analytics, Plausible, etc.)

### Performance Optimization:

- [ ] Enable CDN for static assets
- [ ] Configure caching headers
- [ ] Optimize images (WebP format)
- [ ] Enable compression (gzip/brotli)
- [ ] Set up Redis for API caching (optional)

### Security:

- [ ] Add authentication to admin dashboard
- [ ] Enable HTTPS
- [ ] Configure CORS properly
- [ ] Add rate limiting to API routes
- [ ] Set up security headers
- [ ] Implement CSRF protection
- [ ] Regular dependency updates

### Monitoring:

```bash
# Install monitoring tools
npm install @sentry/nextjs
npm install @vercel/analytics
```

Add to `next.config.js`:
```javascript
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig({
  // ... your config
});
```

---

## Environment Variables Setup

### Required Variables:

```bash
NEXT_PUBLIC_API_URL=https://yourdomain.com/api
```

### Optional but Recommended:

```bash
# Email Service
EMAIL_SERVICE_API_KEY=your_sendgrid_or_mailgun_key
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=info@yourdomain.com

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key

# Database
DATABASE_URL=postgresql://user:password@host:port/database

# Analytics
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX-X
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com

# Error Tracking
SENTRY_DSN=your_sentry_dsn
```

---

## Continuous Deployment (CI/CD)

### GitHub Actions Example:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_API_URL: ${{ secrets.NEXT_PUBLIC_API_URL }}
          
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## Troubleshooting

### Common Issues:

1. **Build fails**: Check Node.js version (18+)
2. **API routes 404**: Verify API route file structure
3. **Environment variables not working**: Prefix with `NEXT_PUBLIC_` for client-side
4. **Images not loading**: Check `next.config.js` image domains
5. **Dark mode not working**: Verify `next-themes` provider setup

### Getting Help:

- Check Next.js documentation: https://nextjs.org/docs
- Check deployment platform docs
- Review build logs
- Contact support

---

## Rollback Strategy

### Vercel:
- Go to Deployments
- Click on previous successful deployment
- Click "Promote to Production"

### Docker:
```bash
docker pull your-registry/future-forward:previous-tag
docker stop current-container
docker run -d your-registry/future-forward:previous-tag
```

### PM2:
```bash
pm2 list
pm2 reload future-forward --update-env
```

---

## Monitoring & Analytics

### Recommended Tools:

- **Error Tracking**: Sentry
- **Analytics**: Google Analytics, Plausible, or Vercel Analytics
- **Uptime**: UptimeRobot, Pingdom
- **Performance**: Lighthouse CI, WebPageTest
- **Logs**: Logtail, Papertrail

---

## Backup Strategy

### Database Backups:
```bash
# Daily automated backups
0 2 * * * pg_dump -U user database > backup-$(date +\%Y\%m\%d).sql
```

### Code Backups:
- Use Git tags for releases
- Keep production branch protected
- Regular repository backups

---

## Cost Considerations

### Vercel:
- Hobby: Free for personal projects
- Pro: $20/month per user
- Enterprise: Custom pricing

### Netlify:
- Starter: Free
- Pro: $19/month
- Business: $99/month

### AWS/VPS:
- $5-50/month depending on traffic
- Additional costs for databases, storage

---

**Need Help?** Contact the development team or refer to the main README.md for more information.


