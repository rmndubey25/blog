# Personal Blog - X (Twitter) Clone

A static personal blog website that looks like a Twitter/X profile page. Perfect for hosting on GitHub Pages!

## 🚀 Quick Start

1. **View your blog**: Open `index.html` or visit the root URL
2. **Edit content**: Open `editor.html` for easy editing, or edit `blog-data.js` directly

## 📝 Two Ways to Manage Content

### Method 1: Visual Editor (Recommended)
- Open `local-editor.html` in your browser (LOCALLY ONLY)
- Edit your profile information and manage posts visually
- Click "Generate Code" and copy the output
- Replace the content in `blog-data.js` with the generated code
- Upload only the main blog files to GitHub (NOT the editor)

### Method 2: Direct Editing
- Edit `blog-data.js` directly in a code editor
- Update the profile section for your information
- Add new posts to the `posts` array
- Use the `addNewPost()` function for quick additions

### 🔒 Security Note
The `.gitignore` file prevents accidental upload of editor files to GitHub. Keep editors on your local computer only!

## 📁 File Structure

```
├── index.html          # Main blog page
├── styles.css          # Styling (Twitter-like theme)
├── script.js          # Blog functionality
├── blog-data.js       # Your content data
└── editor.html        # Visual content editor
```

## ✏️ Adding New Posts

### Using the editor:
1. Go to `/editor.html`
2. Fill in the "Add New Blog Post" section
3. Click "Add This Post"
4. Generate and copy the new code
5. Update `blog-data.js`

### Using code:
Add this to the bottom of `blog-data.js`:
```javascript
// Add a text-only post
addNewPost("Your blog post content here!");

// Add a post with an image
addNewPost("Your content with photo!", "https://your-image-url.jpg");

// Add a post with custom engagement numbers
addNewPost("Your content!", "image-url", likes, reposts, replies);
```

## 🎨 Customizing Your Profile

Edit the `profile` section in `blog-data.js`:
- `name`: Your display name
- `username`: Your handle (without @)
- `bio`: Your description
- `avatar`: Profile picture URL
- `coverPhoto`: Banner image URL
- `website`: Your website
- `followingCount` & `followersCount`: Numbers to display

## 🌐 Deployment

This is a static website perfect for:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload all files and your blog is live!

## 🔧 Features

- ✅ Twitter/X-like interface
- ✅ Responsive design (mobile-friendly)
- ✅ Posts with text and images
- ✅ Profile customization
- ✅ Clean, modern design
- ✅ Easy content management
- ✅ Static hosting ready

## 💡 Tips

- Use high-quality images (500x300px recommended for posts)
- Keep posts engaging with emojis and hashtags
- Update regularly to keep your blog fresh
- Use the Media tab to showcase your photo posts

---

Happy blogging! 🎉