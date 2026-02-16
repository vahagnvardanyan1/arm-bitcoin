Prompt Title:
Build a Modern Crypto Exchange Web Application – ArmBitcoin

🎯 Objective

Create a modern, production-ready crypto exchange web application called ArmBitcoin focused on cryptocurrency transfers and real-time exchange rates.

The Telegram contact link must be:
👉 https://t.me/armbitcoin

🎨 Design System

Brand Colors

Primary: rgb(227, 171, 41) (Gold Accent)

Secondary: rgb(66, 2, 112) (Deep Purple)

Use smooth gradients combining both colors where appropriate.

Clean fintech style, minimal, premium feeling.

UI Requirements

Modern glassmorphism or soft fintech style

Rounded corners (12–16px)

Smooth shadows

Micro-interactions on hover and click

Skeleton loaders before data loads

Fully responsive (mobile-first)

Dark & Light mode support

Dark background: #0E131B

Light background: #F5F5F5

Animations

Smooth page transitions

Button hover animations

Number counter animation for exchange rates

Subtle fade-in + slide-up for components

Loading shimmer skeletons

🌍 Localization

Support 3 languages:

English (default)

Armenian (Հայերեն)

Russian (Русский)

Requirements:

Use proper i18n structure (nested JSON keys)

Language switcher in header

Store selected language in localStorage

All UI texts must be translatable

💰 Core Features
1️⃣ Live Exchange Rates Dashboard

Display:

Current Bitcoin (BTC) price (USD)

USD → AMD

RUB → AMD

USD → RUB (if possible)

Use:

Central Bank of Armenia for fiat rates:
https://cb.am/

Open-source crypto API for BTC price (example options):

CoinGecko API (free)

Binance public API

Blockchain.info API

Auto-refresh every 30–60 seconds.

2️⃣ Crypto Transfer Interface

Allow users to:

Select cryptocurrency (BTC initially)

Enter wallet address

Enter amount

View estimated conversion in AMD / USD

Submit transfer request

Include:

Validation

Success / error states

Animated confirmation modal

3️⃣ Exchange Calculator

Interactive calculator:

Input:

Amount

From currency

To currency

Output:

Real-time conversion

Fee estimation

Animated number updates

4️⃣ Contact Section

Telegram link button (large primary CTA)

Copy-to-clipboard wallet support

FAQ accordion with smooth animation

🏗 Technical Requirements

Use modern framework (Next.js / React recommended)

Clean component architecture

Reusable components

API layer separated

Environment variables for API keys

Proper loading + error states

SEO optimized

Performance optimized (lazy loading)

📊 Suggested Page Structure

Hero Section (BTC live price animated)

Exchange Dashboard

Transfer Form

Calculator

Why Choose Us Section

FAQ

Footer (Telegram link, localization switch)

✨ UX Best Practices

Avoid clutter

Strong CTA visibility

High contrast accessibility

Smooth onboarding flow

Clear trust signals

Responsive spacing grid (8px system)

also use logo.jpeg and logo.gif
