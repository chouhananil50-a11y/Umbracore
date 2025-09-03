# Umbracore — Cloudflare Pages Starter

Secure, fast, and professional React app ready for **one-click deploy** on Cloudflare Pages.

## Quick Start
1) Create a repo and push this folder.
2) Cloudflare Pages → Create a project → Connect to repo.
3) Build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output: `dist`
   - Node: >= 18
4) Environment Variables (Settings → Environment):
   - `VITE_ADMIN_EMAIL=chouhan.anil50@gmail.com`
5) Deploy — you'll get a free `*.pages.dev` subdomain.
6) Later attach your paid domain in Custom domains.

## Local Dev
```bash
npm i
npm run dev
```

## Security
- CSP set in `index.html`
- Security headers via `_headers`
- Permissions-Policy denies risky APIs
- HTTPS enforced by Cloudflare

## Structure
- `src/ui/App.jsx` – UI
- `_headers` – extra security headers
- `functions` – Cloudflare Pages Functions (optional API)