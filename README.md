# 📝 Template Editor

[Live Demo 🚀](https://template-editor-five.vercel.app/)

Template Editor is a lightweight, browser-based tool for editing and previewing dynamic HTML templates using templating engines like Handlebars or Liquid. Perfect for crafting email layouts, documentation components, or dynamic page blocks — all in real-time.

---

## ✨ Features

- 🔁 **Live Preview**: See rendered HTML output instantly as you type.
- 🧠 **Templating Support**: Works with [Handlebars.js](https://handlebarsjs.com/) and [Liquid](https://shopify.github.io/liquid/).
- 💾 **Auto Save**: Stores your editing session using `localStorage` so you never lose progress.
- 📦 **Preloaded Templates**: Start from pre-built examples to speed up development.
- 🖨️ **Copy/Export**: One-click to copy or download your compiled HTML.
- 📱 **Responsive**: Clean, minimal UI that works across all modern devices.

---

## 🖥️ Live Preview

Check out the live hosted version here:  
🔗 **[https://template-editor-five.vercel.app/](https://template-editor-five.vercel.app/)**

---

## 📂 Project Structure

```bash
Template-Editor/
├── public/               # Static HTML & assets
├── src/                  # Main application source
│   ├── components/       # Editor UI, Preview frame, Buttons
│   ├── templates/        # Sample templates (Handlebars, Liquid)
│   └── utils/            # Helpers for compiling & parsing
├── .gitignore
├── package.json
└── README.md

## Getting Started
Prerequisites
Node.js (v16+)
npm or yarn

## Installation
git clone https://github.com/BHOGESH4I9/Template-Editor.git
cd Template-Editor
npm install
npm run dev
Then open http://localhost:3000 in your browser.

## Build for Production
npm run build

## How It Works
Type your template code using supported syntax (Handlebars or Liquid).
A sample data context is injected automatically.
The app compiles your code and updates the output in real-time.
You can export or copy the result when you're done.
