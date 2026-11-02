# AutoFiller AI Showcase & Download Website

Showcase and distribution website for **AutoFiller AI**, deployed at [autofiller.ayushdubey.studio](https://autofiller.ayushdubey.studio).

## 🚀 Architecture & Tech Stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Plain CSS with design tokens mirroring the desktop application (`var(--bg-app)`, `var(--accent-primary)`, etc.).
- **Icons:** `lucide-react`
- **Dynamic Release Syncing:** Automated ISR (`revalidate: 300`) fetching the latest release assets, sizes, and SHA-256 hashes directly from GitHub Releases (`/api/v3/repos/Aayush-Dubey123/autofiller/releases/latest`) with offline fallback defaults.
- **Hosting:** Vercel (Edge network, custom domain `autofiller.ayushdubey.studio`).
- **Binary Downloads:** Hosted on GitHub Releases (never committed to git).

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
# Open http://localhost:3000
```

---

## 🛠️ Production Build

```bash
# Compile production build
npm run build

# Start local production preview
npm run start
```

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub: `git remote add origin https://github.com/Aayush-Dubey123/autofiller-site.git && git push -u origin main`.
2. In your [Vercel Dashboard](https://vercel.com/dashboard), click **Add New Project** and import `autofiller-site`.
3. Under **Settings > Domains**, add:
   `autofiller.ayushdubey.studio`
4. In your DNS provider (e.g. Name.com for `ayushdubey.studio`), add a **CNAME** record:
   - Host: `autofiller`
   - Type: `CNAME`
   - Value: `cname.vercel-dns.com`
5. Vercel automatically provisions free SSL/TLS certificates and activates the subdomain.

---

## 🔄 Automatic Update Workflow

When you publish a new release in `Aayush-Dubey123/autofiller`:
1. The GitHub Release workflow builds the Windows executables and attaches them to the release.
2. The website on Vercel automatically detects the new release, updates the version number, download links, file sizes, and SHA-256 hashes within 5 minutes.
3. No manual website code changes or redeployments are required.

omp --resume 01a197f2-c513-758d-aac5-d8cf853af2a0