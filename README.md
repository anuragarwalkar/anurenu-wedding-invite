# 🪔 Anurag & Renuka's Wedding Invitation

A beautiful, highly responsive wedding invitation built with React, Framer Motion, and TailwindCSS.

## ✨ Features

- **Elegant Hero Section** — Beautiful typography with animated decorative elements
- **Live Countdown Timer** — Real-time countdown to May 8, 2026, 11:18 AM IST
- **Responsive Design** — Perfect on mobile, tablet, and desktop (320px to 4K)
- **Smooth Animations** — Framer Motion scroll-triggered animations
- **Photo Gallery** — Placeholder slots for couple photos (4 slots)
- **Event Timeline** — Wedding ceremony details with elegant vertical timeline
- **WhatsApp Integration** — Direct chat buttons for bride & groom
- **Background Music** — Optional music toggle (FAB button)
- **White + Lavender Theme** — Clean, elegant color palette with gold accents

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

   The site will open at `http://localhost:5173`

3. **Build for Production**

   ```bash
   npm run build
   ```

   Static files will be in the `/dist` folder — deploy to any static host (Vercel, Netlify, GitHub Pages, etc.)

## 📁 Project Structure

```
my-invite/
├── public/
│   ├── rings.svg              # Favicon
│   ├── music.mp3              # Background music (add your own)
│   └── README-MUSIC.md        # Music instructions
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with beautiful typography
│   │   ├── Countdown.jsx      # Live countdown timer
│   │   ├── WeddingDetails.jsx # Date, time, venue details
│   │   ├── PhotoGallery.jsx   # Photo placeholder grid
│   │   ├── Timeline.jsx       # Event timeline
│   │   ├── WhatsAppButtons.jsx # Contact buttons
│   │   ├── MusicToggle.jsx    # Music play/pause FAB
│   │   └── Footer.jsx         # Footer section
│   ├── App.jsx                # Main app layout
│   ├── main.jsx               # React entry point
│   └── index.css              # TailwindCSS + custom styles
├── index.html                 # HTML template
├── vite.config.js             # Vite config
├── tailwind.config.js         # TailwindCSS config
├── postcss.config.js          # PostCSS config
└── package.json               # Dependencies
```

## 🎨 Customization

### Add Background Music

1. Prepare an MP3 file (2-3 minutes, instrumental recommended)
2. Rename it to `music.mp3`
3. Place it in `/public/` folder
4. The music toggle button will automatically appear on the site

### Add Couple Photos

1. Replace placeholders in `PhotoGallery.jsx`
2. Add your photos to `/public/photos/`
3. Update the `photos` array with image paths:

   ```jsx
   const photos = [
     { id: 1, src: '/photos/photo1.jpg', alt: 'Description' },
     // ... add more
   ]
   ```

4. Update the `<div>` to render `<img>` tags:

   ```jsx
   <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
   ```

### Add More Events to Timeline

Edit `Timeline.jsx` and change the `event` object to an array:

```jsx
const events = [
  {
    time: '4:00 PM',
    title: 'Haldi Ceremony',
    date: 'May 6, 2026',
    description: 'Traditional turmeric ceremony',
    icon: '💛'
  },
  {
    time: '6:00 PM',
    title: 'Mehendi',
    date: 'May 7, 2026',
    description: 'Henna art celebration',
    icon: '🎨'
  },
  {
    time: '11:18 AM',
    title: 'Wedding Ceremony',
    date: 'May 8, 2026',
    description: 'Join us as we exchange vows',
    icon: '💍'
  }
]
```

Then map through the array to render multiple timeline cards.

### Customize Colors

Edit `/src/index.css` and modify the `@theme` section:

```css
@theme {
  --color-lavender-400: #your-color;
  --color-gold-400: #your-color;
}
```

### Update Wedding Details

Edit `WeddingDetails.jsx` and `Hero.jsx` to change:
- Names
- Date
- Time
- Venue
- Location link

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy
5. Done! Share your custom URL 🎉

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `/dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Get your live URL instantly

### Deploy to GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Update `vite.config.js` with your repo name:
   ```js
   export default defineConfig({
     base: '/my-invite/', // your repo name
     // ... rest of config
   })
   ```
4. Run: `npm run deploy`
5. Enable GitHub Pages in repo settings → Pages → gh-pages branch

## 📱 Browser Compatibility

- Chrome/Edge 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Mobile Safari (iOS 14+) ✅
- Chrome Android ✅

## 🔧 Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool & dev server
- **TailwindCSS v3** — Utility-first CSS
- **Framer Motion** — Animation library
- **PostCSS** — CSS processing

## 📄 License

This is a personal wedding invitation. Feel free to use it as a template for your own wedding! 💝

## 🎉 Wedding Details

**Bride:** Renuka Ganesh Rajguru  
**Groom:** Anurag Rajendra Arwalkar  
**Date:** May 8, 2026  
**Time:** 11:18 AM  
**Venue:** Maharaja Banquet  

---

Made with ♥ for a beautiful beginning
