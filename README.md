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

To start a local development server, run:

```bash
ng serve
```

---

## 🧩 Node.js & npm versions

The Angular CLI requires a minimum Node.js version of v22.22.3 or v24.15.0
