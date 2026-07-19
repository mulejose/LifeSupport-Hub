# Contributing to LifeSupport Hub

Thank you for your interest in contributing to LifeSupport Hub! We're excited to have you help us create a supportive platform for people facing life challenges.

## Code of Conduct

Our community is built on respect, kindness, and support. We expect all contributors to:
- Be respectful and inclusive
- Support and encourage others
- Focus on what's best for the community
- Report issues constructively

## How to Contribute

### 1. Report Issues
If you find a bug or have a suggestion:
1. Check existing issues first
2. Create a detailed issue with:
   - Clear description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots if applicable

### 2. Submit Pull Requests

#### Setup
```bash
# Fork the repository
git clone https://github.com/YOUR_USERNAME/LifeSupport-Hub.git
cd LifeSupport-Hub

# Create a feature branch
git checkout -b feature/your-feature-name
```

#### Make Changes
- Keep changes focused and modular
- Test thoroughly in all browsers
- Follow the existing code style
- Update README if needed

#### Commit & Push
```bash
git add .
git commit -m "feat: add awesome feature"
git push origin feature/your-feature-name
```

#### Create Pull Request
1. Go to GitHub and click "Compare & pull request"
2. Write a clear PR description
3. Link related issues
4. Wait for review

### 3. Content Contributions

Help us improve resources:
- Add new quotes or affirmations
- Write success stories
- Improve resource guides
- Translate content
- Create tutorials

## Development Guidelines

### HTML
- Use semantic HTML5 elements
- Maintain proper structure
- Include proper accessibility attributes
- Keep code readable with comments

### CSS
- Use CSS custom properties for colors
- Follow mobile-first approach
- Test on multiple screen sizes
- Keep selectors simple
- Comment complex styles

### JavaScript
- Use vanilla JS (no heavy dependencies)
- Write clean, readable code
- Add error handling
- Test interactive features
- Comment complex logic
- Use meaningful variable names

## File Structure

```
LifeSupport-Hub/
├── index.html          # Main page structure
├── styles.css          # Styling and animations
├── script.js           # Interactive features
├── README.md           # Documentation
├── LICENSE             # MIT License
├── .gitignore          # Git ignore rules
└── CONTRIBUTING.md     # This file
```

## Style Guide

### Naming Conventions
- Variables: camelCase (`myVariable`)
- Functions: camelCase (`generateQuote()`)
- Classes: kebab-case (`.resource-card`)
- IDs: kebab-case (`#daily-quote`)

### Code Format
```javascript
// Good: Clear and documented
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    if (quoteElement) {
        quoteElement.textContent = quote.text;
    }
}
```

### Comments
- Use comments for complex logic
- Keep comments up-to-date
- Be descriptive but concise

## Testing Checklist

Before submitting:
- [ ] Tested on Chrome, Firefox, Safari, Edge
- [ ] Mobile responsive (320px - 4K)
- [ ] No console errors
- [ ] Accessibility tested (keyboard navigation)
- [ ] Links work correctly
- [ ] Forms validate properly

## Performance Guidelines

- Keep bundle size small
- Optimize images
- Minimize render-blocking resources
- Use efficient algorithms
- Test on slower connections

## Areas We Need Help With

### High Priority
- [ ] Add user authentication
- [ ] Create discussion forum
- [ ] Build progress dashboard
- [ ] Add meditation library
- [ ] Multi-language support

### Medium Priority
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] Premium features
- [ ] Email notifications
- [ ] Social sharing

### Nice to Have
- [ ] AI chatbot
- [ ] Video tutorials
- [ ] Gamification
- [ ] API integration
- [ ] Mobile app (iOS/Android)

## Questions?

- Open an issue with your question
- Join our community discussions
- Email: support@lifesupporthub.com

---

**Thank you for helping make LifeSupport Hub better! Your contributions mean the world to us.** 💙