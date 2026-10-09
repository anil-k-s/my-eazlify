# Anil Sisodia — Solution Architect Portfolio

A responsive, static HTML/CSS/JavaScript portfolio inspired by the screenshots provided.

## Files
- `index.html` — page structure and portfolio content
- `styles.css` — responsive styling
- `script.js` — mobile navigation and active navigation state
- `assets/profile.jpg` — add your professional photo here (optional)

## Personalise before publishing
1. Replace the photo placeholder in `index.html` with your image. See instructions below.
2. Verify your email and LinkedIn URL.
3. Review the experience descriptions and only publish details you are comfortable sharing publicly.
4. Update the experience-years claim if needed.

### Add your photo
Place your photo at `assets/profile.jpg`, then replace this block in `index.html`:
```html
<div class="portrait-placeholder"><span>AS</span><small>Add your photo</small></div>
```
with:
```html
<img class="profile-photo" src="assets/profile.jpg" alt="Anil Sisodia, Solution Architect">
```
Add the following to `styles.css`:
```css
.profile-photo { width: 100%; height: 100%; object-fit: cover; border-radius: 160px 160px 10px 10px; }
```
You can also replace the monogram in the About section with an image.

## Publish free with GitHub Pages
1. Create/sign in to a GitHub account at https://github.com/
2. Create a public repository named `YOURUSERNAME.github.io`.
3. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and the `assets` folder.
4. In repository Settings → Pages, select the main branch as the deployment source if GitHub Pages isn't automatically enabled.
5. Wait for deployment, then open `https://YOURUSERNAME.github.io/`.

No paid domain or hosting plan is required. A custom domain is optional and normally costs money.
