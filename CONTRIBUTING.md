# Contributing to Future Forward Consultancy Website

Thank you for considering contributing to this project! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and collaborative environment.

## Getting Started

1. **Fork the repository**
2. **Clone your fork**:
   ```bash
   git clone https://github.com/yourusername/future-forward-consultancy.git
   cd future-forward-consultancy
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your changes.

### Making Changes

1. **Write clean, readable code**
2. **Follow existing code style**
3. **Add comments for complex logic**
4. **Test your changes thoroughly**

### Code Style Guidelines

- Use TypeScript for all new files
- Follow ESLint rules
- Use meaningful variable and function names
- Keep components small and focused
- Use Tailwind CSS for styling (avoid inline styles)
- Follow the existing folder structure

### Component Guidelines

```typescript
// Good: Clear component with proper typing
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`btn-${variant}`}
    >
      {label}
    </button>
  );
}
```

### Commit Message Format

Use clear, descriptive commit messages:

```
feat: Add new contact form validation
fix: Resolve mobile menu closing issue
docs: Update README with deployment instructions
style: Improve button hover animations
refactor: Simplify service card component
```

### Pull Request Process

1. **Update documentation** if needed
2. **Ensure all tests pass** (when tests are added)
3. **Update the README.md** with details of changes if applicable
4. **Request review** from maintainers
5. **Address feedback** promptly

## Areas for Contribution

### High Priority
- Add comprehensive testing (Jest, React Testing Library)
- Implement authentication for admin dashboard
- Add blog functionality
- Create case studies section
- Implement email notifications

### Medium Priority
- Add more animations and transitions
- Improve accessibility features
- Add internationalization (i18n)
- Create more reusable components
- Performance optimizations

### Low Priority
- Add more themes/color schemes
- Create additional admin features
- Add analytics dashboard
- Implement A/B testing

## Bug Reports

When reporting bugs, please include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: How to reproduce the bug
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Screenshots**: If applicable
6. **Environment**: Browser, OS, Node version

## Feature Requests

When suggesting features:

1. **Use Case**: Why is this feature needed?
2. **Proposed Solution**: How should it work?
3. **Alternatives**: Any alternative solutions?
4. **Additional Context**: Screenshots, mockups, etc.

## Testing

Currently, the project doesn't have automated tests. Contributors are encouraged to add them!

### Recommended Testing Setup

```bash
# Install testing dependencies
npm install -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom

# Run tests (once implemented)
npm test
```

## Documentation

- Update README.md for significant changes
- Add JSDoc comments to functions
- Update DEPLOYMENT.md for infrastructure changes
- Keep code comments up to date

## Questions?

Feel free to open an issue for questions or clarifications.

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

**Thank you for contributing to Future Forward Consultancy!** 🚀


