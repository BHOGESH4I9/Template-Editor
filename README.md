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
