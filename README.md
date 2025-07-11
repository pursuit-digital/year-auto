## 📅 Auto-Updating Year Script

This lightweight JavaScript snippet automatically updates any element's text content to the current year. It's perfect for keeping your website's footer or copyright date always up to date.

### ✅ How It Works

The script:
- Finds all elements with the attribute `[pd-year-auto]`
- Replaces their text content with the current year (e.g. `2025`)

### 🛠️ How to Use

1. **Include the script on your website**  
   Add the following `<script>` tag to your HTML file inside of the `<head>` tag:

   ```html
   <script src="https://cdn.jsdelivr.net/gh/pursuit-digital/year-auto@main/main.js" defer></script>

2. **Add the custom attribute to any element**  
   Add `pd-year-auto` to the HTML element where you want the year to appear:

   ```html
   <p>&copy; <span pd-year-auto></span> Your Company Name</p>
   ```

   This will render as:

   ```html
   © 2025 Your Company Name
   ```

### 📌 Example

```html
<footer>
  <p>&copy; <span pd-year-auto></span> My Website</p>
</footer>
```

---
