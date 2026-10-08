# 🛍️ Shop App — Angular 22 (Zoneless, Standalone, Signals‑based, OnPush) + Material + Reactive & Signals Forms + NgRx Signals Store

## 🚀 Live Demo - [click here](https://seppsher.github.io/e-commerce-angular)

A modern e‑commerce front‑end built with **Angular 22**, using the **standalone application architecture**, **zoneless rendering**, and **signal‑driven change detection**.  
The entire application runs with **OnPush semantics by default**, ensuring predictable and highly performant UI updates.

The project demonstrates clean architecture, scalable state management, and two complementary form systems: **Reactive Forms** and **Signals Forms** (now fully stable and production‑ready).

---

## 🚀 Features

- ⚡ **Angular 22 — zoneless by default**
- 🧱 **Standalone application architecture**
- 🔔 **Signal‑driven change detection**
- 🚀 **Default OnPush change detection semantics**
- 🎨 **Angular Material UI**
- 🧩 **Two form systems included**:
  - **Reactive Forms** — mature, strongly typed, production‑ready
  - **Signals Forms** — stable, declarative, signal‑based form model
- 🧠 **NgRx Signals Store**
- 📦 Product listing with filtering
- 🛒 Shopping cart with persistent state
- 📄 Product details page
- 📬 Contact form with custom validators
- 🖼️ Base64 images served from mocked JSON
- 🧱 Clean, scalable folder structure
- 🤖 **AI‑assisted development using GitHub Copilot & Microsoft Copilot**

---

## 🛠️ Tech Stack

- **Angular 22 (Zoneless, OnPush)**
- **Standalone Components**
- **Signals‑based change detection**
- **Signals Forms**
- **Reactive Forms**
- **Angular Material**
- **NgRx Signals Store**
- **Native Federation** — host application loads the payment remote as a microfrontend
- **Private npm package** — reusable UI components and utilities from `@seppsher/ui` on GitHub Packages
- **TypeScript**
- **RxJS**
- **HTML, SCSS**
- **Mock API (assets JSON)**

---

## 🧪 Testing

The project uses **Vitest**, now officially supported in Angular 22 as a modern, fast, Vite‑powered test runner.

Current test coverage includes:

- **Unit tests for CartStore**, verifying:
  - adding, removing and updating cart items
  - quantity manipulation
  - persistence via mocked `localStorage`
  - correct computation of totals

Vitest provides a lightweight and fast workflow, fully compatible with Angular’s zoneless and signal‑based architecture.

---

## 🌍 Multi‑language Support (PL / EN)

The application includes full **internationalization**, featuring:

- dynamic language switching (PL / EN)
- persistent language preference stored in `localStorage`
- translation files loaded from `assets/i18n`
- integration with `@ngx-translate/core` and `TranslateHttpLoader`

All UI labels, buttons, messages and validation errors are fully translated.

---

## 🤖 AI‑Assisted Development

During development, the project leveraged:

- **GitHub Copilot** — code suggestions, refactors, pattern generation
- **Microsoft Copilot** — documentation drafting, architectural guidance, debugging assistance

Both tools significantly accelerated development and improved code quality.

---

## 🏗️ Production build

To generate a fully optimized production build, run:

```bash
npm run build
```

---

## Development server

Start the host in this repository:

```bash
npm start
```

The host runs on `http://localhost:4200` and uses **Native Federation** to load the payment remote from the separate payment repository at `http://localhost:4201`.

For GitHub Pages, configure the repository variable `PAYMENT_REMOTE_URL` with the public base URL of the payment repository. The deployment workflow uses it to generate the production remote URL; the local manifest remains configured for `localhost:4201`.

## Private UI package

The reusable UI library is maintained in the separate [`seppsher/seepsher-ui`](https://github.com/seppsher/seepsher-ui) repository and consumed as `@seppsher/ui` from GitHub Packages. To install dependencies locally, authenticate with a GitHub personal access token (classic) that has `read:packages`:

```bash
npm login --scope=@seppsher --auth-type=legacy --registry=https://npm.pkg.github.com
npm install
```

Use your GitHub username and enter the token as the password. Do not commit the token.

---

## 🧩 Node.js & npm versions

The Angular CLI requires a minimum Node.js version of v22.22.3 or v24.15.0
