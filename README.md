# GitHub Pages Static Website Deployment

A step-by-step guide to deploy a beautiful static website using GitHub Pages.

## Quick Steps

1. **Create HTML/CSS/JS files**

2. **Create a new GitHub repository**

3. **Upload files**

4. **Enable GitHub Pages**

5. **View live site**

## 📝 Detailed Instructions

### Step 1: Create Project Files

Create these files in your project folder:

- `index.html` (main HTML file)
- `inline.css` (for styling)
- `inline.js` (for animations)

### Step 2: Create GitHub Repository

1. Go to github.com/new
2. Name it username.github.io (replace 'username' with yours)
3. Set to Public
4. Click "Create Repository"

### Step 3: Upload Files Using Git

```bash
$ git init
```

```bash
$ git add .
```

```bash
$ git commit -m "First commit"
```

```bash
$ git branch -M main
```

```bash
$ git remote add origin https://github.com/username/username.github.io.git
```

```bash
$ git push -u origin main
``` 

### Step 4: Enable GitHub Pages

1. Go to Repo --> Settings --> Pages

2. Under "Branch" select *main* and under "Folder" select */(root)*

3. Click "Save"

### Step 5: View Your Site

Your site will be live at: *https://username.github.io*

(Wait 1-2 minutes after enabling)

Congratulations! You’ve successfully deployed a free, production-ready website. 🚀

