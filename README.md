# Alice Artisanal Soap — Website (Next.js + Tailwind)

Multi-page site using your brand colors, images, and animated GIF backgrounds.
Pages: Home, Shop (Soaps & Soap Base), About, Gallery, Contact.

## Run
npm install
npm run dev

## Build
npm run build
npm start

Edit product data in `data/products.json`. Buy buttons open your Amazon collection.

## Integrations
- Google Analytics: set `window.GA_ID='G-XXXX'` in a small inline script tag (or edit pages/_app.js).
- Razorpay: Replace test key `rzp_test_xxxxxxxxxxxx` with your live key and implement order API for production.
- WhatsApp: Phone number is editable in ProductCard.js.
