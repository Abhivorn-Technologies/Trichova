# Trichova Hair Studio

Official web application for **Trichova Hair Studio** — a premier hair transplant and restoration clinic located in Hyderabad, India. The platform delivers a luxury digital experience with detailed treatment guides, interactive booking workflows, patient before/after galleries, and an administrative portal for managing medical insights and blog articles.

---

## 🌟 Key Features

### 👤 Patient & Public Experience
- **Doctor-Led Treatment Guides**: Dedicated pages for BIO Integrated FUE, DHT Hair Transplant, Traditional FUE, Female Hair Restoration, and Beard Transplants.
- **Interactive Consultation Booking**: Dynamic modal and dedicated booking flows accessible across the site with quick concern selection and patient detail collection.
- **Before & After Results Showcase**: Interactive visual comparison sliders and case studies demonstrating real patient transformations.
- **Direct Telephony & WhatsApp Integration**: One-click WhatsApp chat (`wa.me`) with animated pulse indicators and direct phone line dialing (`tel:`).
- **SEO & Social Sharing Ready**: Dynamic OpenGraph tags, Twitter cards, automated XML sitemap (`/sitemap.xml`), and search crawler directives (`/robots.txt`).
- **Educational Medical Blog**: Filterable knowledge hub categorized by hair loss types, treatments, and scalp care, with dynamic search and estimated reading times.

### 🔐 Admin Portal & CMS
- **Secured Admin Dashboard**: Route-guarded administrative area (`/admin/*`) utilizing HTTP-only cookie session authentication.
- **Article Publishing Engine**: Full authoring interface (`/admin/blogs/new` and `/admin/blogs/edit/[id]`) with live preview data, custom tag inputs, author attributes, and direct Google Drive image integration.
- **Instant Cache Invalidation**: Uses Next.js `revalidatePath` to immediately update static and cached pages upon publishing or modifying articles.

---

## 🛠️ Technology Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) | React Server Components (RSC), Server Actions, and dynamic routing |
| **UI Library** | [React 19](https://react.dev/) | Core UI component model |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict type safety and maintainable developer experience |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) | Custom luxury theme (deep navy, champagne gold, ivory accents) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Smooth entrance reveals, sticky transitions, and modal animations |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, accessible vector icons |
| **Database** | [MongoDB Atlas](https://www.mongodb.com/atlas) | Cloud NoSQL document database for articles and authors |
| **ODM** | [Mongoose](https://mongoosejs.com/) | Schema definition, validation, and cached connection pooling |

---

## 🔌 Third-Party Integrations

1. **MongoDB Atlas**: Cloud database storing blog articles, author profiles, and categories.
2. **WhatsApp Click-to-Chat**: Instant messaging connectivity via Meta's `https://wa.me/917093376414`.
3. **Google Fonts CDN**: `Playfair Display` (editorial serif) and `Inter` (sans-serif) for luxury aesthetic typography.
4. **Google Drive Image Converter**: Built-in URL transformer converting Google Drive sharing links into embeddable direct image URLs (`lh3.googleusercontent.com/d/{id}`).
5. **Unsplash CDN**: Configured image proxy fallback for doctor avatars and placeholder photography.

---

## 📁 Project Directory Structure

```text
Trichova/
├── public/                     # Static media, clinic photos, favicons & logos
│   └── images/                 # High-resolution clinic and staff assets
├── src/
│   ├── app/                    # Next.js App Router (Pages, Layouts & Metadata)
│   │   ├── layout.tsx          # Root layout with fonts, layout wrapper & SEO
│   │   ├── page.tsx            # Main homepage
│   │   ├── about/              # About Trichova clinic & surgical philosophy
│   │   ├── admin/              # Secured administrative management routes
│   │   │   ├── login/          # Admin authentication screen
│   │   │   └── blogs/          # Article dashboard, creation & editing
│   │   ├── blogs/              # Public article index & [slug] post readers
│   │   ├── book-consultation/  # Consultation scheduling page
│   │   ├── contact/            # Clinic address, map information & direct lines
│   │   ├── faqs/               # Patient FAQs
│   │   ├── results/            # Case studies & transformations
│   │   ├── treatments/         # Specialized procedure landing pages
│   │   │   ├── beard-transplant/
│   │   │   ├── bio-fue/
│   │   │   ├── dht-hair-transplant/
│   │   │   ├── female-hair-transplant/
│   │   │   └── fue-hair-transplant/
│   │   ├── why-trichova/       # Guarantees, technology breakdown & comparisons
│   │   ├── sitemap.ts          # Programmatic XML sitemap generator
│   │   └── robots.ts           # Crawler directives
│   ├── components/
│   │   ├── BookingModal.tsx    # Interactive consultation booking popup
│   │   ├── layout/             # Navbar, Footer & ConditionalLayoutWrapper
│   │   ├── sections/           # Modular homepage and landing sections
│   │   └── ui/                 # Reusable UI primitives (Logo, Hero, Buttons)
│   ├── lib/
│   │   ├── actions/            # Next.js Server Actions (Auth, Blog CRUD)
│   │   ├── db/                 # Mongoose connection client & Post model
│   │   └── utils.ts            # Formatting utilities and class merging (cn)
│   └── middleware.ts           # Route protection guard for /admin/*
├── .env.local                  # Environment configuration secrets
├── next.config.ts              # Next.js configuration & image remote patterns
├── tailwind.config.ts          # Tailwind design tokens and custom palette
└── tsconfig.json               # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/) / [bun](https://bun.sh/)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster connection URI

### 1. Clone the Repository
```bash
git clone https://github.com/Abhivorn-Technologies/Trichova.git
cd Trichova
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory:

```env
# MongoDB Atlas Connection String
MONGODB_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/trichova"

# Admin Dashboard Credentials
ADMIN_USERNAME="admin@trichovahair.com"
ADMIN_PASSWORD="YourSecurePasswordHere"
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Starts Next.js development server on port `3000` |
| **Build** | `npm run build` | Compiles optimized production bundle |
| **Start** | `npm run start` | Runs the production build locally |
| **Lint** | `npm run lint` | Runs ESLint to check for code quality and errors |

---

## 🔐 Admin Dashboard Access

1. Navigate to `/admin/login`.
2. Provide the credentials defined in your `.env.local` file (`ADMIN_USERNAME` and `ADMIN_PASSWORD`).
3. Upon successful login, you will be redirected to `/admin/blogs` where you can:
   - Create new articles with titles, excerpts, tags, reading times, and rich HTML content.
   - Edit existing articles.
   - Toggle publish/draft status.
   - Delete obsolete posts.

---

## 🏥 Clinic Information

* **Clinic Name**: Trichova Hair Studio
* **Address**: 3rd Floor, Boppana’s Annapurna Arcade, Metro pillar C, 1729, Phase 2, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081
* **Phone / WhatsApp**: +91 70933 76414
* **Email**: info@trichovahair.com
* **Website**: [https://trichovahair.com](https://trichovahair.com)

---

## 👨‍💻 Developed By

Designed and developed by **[Abhivorn Technologies Pvt. Ltd.](https://www.abhivorn.com/)**
