# Frontend Development Instructions - StockSense AI

## 🎯 Overview

This directory contains the Next.js 14 frontend application for StockSense AI. The application provides a modern, responsive interface for intelligent inventory management with AI-powered forecasting, optimization, and execution capabilities.

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Query + Context API
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React + Heroicons
- **Animations**: Framer Motion

### Key Features
- **Control Tower**: Main dashboard with KPIs and alerts
- **Forecast Studio**: Demand forecasting interface
- **Policy Lab**: Inventory policy optimization
- **MEO Planner**: Multi-echelon replenishment planning
- **Lead-Time Explorer**: Supplier performance analysis
- **Execution Queue**: Order management and approvals
- **What-If Sandbox**: Scenario analysis and simulation

## 📁 Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Dashboard pages
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── forms/            # Form components
│   ├── charts/           # Data visualization
│   └── layout/           # Layout components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── services/             # API service layer
├── store/                # State management
├── types/                # TypeScript type definitions
└── utils/                # Helper functions
```

## 🚀 Development Guidelines

### Component Development
1. **Use TypeScript**: All components must be typed
2. **Follow Atomic Design**: Build from atoms to organisms
3. **Accessibility First**: WCAG 2.1 AA compliance required
4. **Responsive Design**: Mobile-first approach
5. **Performance**: Optimize for Core Web Vitals

### Styling Guidelines
1. **Tailwind CSS**: Use utility classes and custom components
2. **Design System**: Follow established color palette and spacing
3. **Dark Mode**: Support both light and dark themes
4. **Consistency**: Use predefined component variants

### State Management
1. **Server State**: Use React Query for API data
2. **Client State**: Use Context API for global state
3. **Form State**: Use React Hook Form with Zod validation
4. **Local State**: Use useState for component-specific state

### API Integration
1. **Service Layer**: Centralize API calls in services/
2. **Error Handling**: Implement proper error boundaries
3. **Loading States**: Show appropriate loading indicators
4. **Caching**: Leverage React Query caching

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6) - Main brand color
- **Secondary**: Green (#22c55e) - Success states
- **Accent**: Orange (#f3771e) - Call-to-action
- **Neutral**: Gray scale for text and backgrounds
- **Status**: Success, warning, error, info variants

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 100-900 available
- **Scale**: Responsive text sizing
- **Hierarchy**: Clear heading levels

### Spacing
- **Base Unit**: 4px (0.25rem)
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px
- **Responsive**: Adapts to screen size

### Components
- **Buttons**: Primary, secondary, outline, ghost variants
- **Cards**: Content containers with headers and footers
- **Forms**: Inputs, selects, checkboxes, radio buttons
- **Tables**: Data display with sorting and pagination
- **Modals**: Overlays for focused interactions

## 🔧 Development Workflow

### Setup
1. Install dependencies: `npm install`
2. Set up environment variables: Copy `.env.example` to `.env.local`
3. Start development server: `npm run dev`

### Code Quality
1. **Linting**: ESLint with TypeScript rules
2. **Formatting**: Prettier with Tailwind plugin
3. **Type Checking**: TypeScript strict mode
4. **Testing**: Jest + React Testing Library
5. **E2E**: Playwright for critical user flows

### Git Workflow
1. **Branches**: Feature branches from main
2. **Commits**: Conventional commit messages
3. **PRs**: Required for all changes
4. **Reviews**: Code review required

## 📊 Performance Targets

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### Bundle Size
- **Initial Load**: < 200KB
- **Total Bundle**: < 1MB
- **Code Splitting**: Route-based and component-based

### Accessibility
- **WCAG 2.1 AA**: Full compliance
- **Keyboard Navigation**: All interactive elements
- **Screen Readers**: Proper ARIA labels
- **Color Contrast**: 4.5:1 minimum ratio

## 🧪 Testing Strategy

### Unit Tests
- **Components**: Test individual component behavior
- **Hooks**: Test custom hook logic
- **Utils**: Test utility functions
- **Coverage**: > 80% target

### Integration Tests
- **API Integration**: Test service layer
- **User Flows**: Test complete workflows
- **State Management**: Test state transitions

### E2E Tests
- **Critical Paths**: Login, dashboard, forecasting
- **Cross-browser**: Chrome, Firefox, Safari
- **Mobile**: Responsive behavior

## 🚀 Deployment

### Environments
- **Development**: Local development
- **Staging**: Preview deployments
- **Production**: Vercel deployment

### Build Process
1. **Type Check**: Validate TypeScript
2. **Lint**: Check code quality
3. **Test**: Run test suite
4. **Build**: Create production bundle
5. **Deploy**: Deploy to target environment

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Documentation](https://tanstack.com/query)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Design Resources
- [Figma Design System](https://figma.com/file/...)
- [Icon Library](https://lucide.dev)
- [Color Palette](https://coolors.co/...)

### API Documentation
- [API Specification](../docs/API_SPEC.md)
- [Swagger UI](https://api.stocksense.ai/docs)

## 🆘 Getting Help

### Common Issues
1. **Build Errors**: Check TypeScript and ESLint
2. **Styling Issues**: Verify Tailwind classes
3. **API Errors**: Check network tab and API docs
4. **Performance**: Use React DevTools and Lighthouse

### Support Channels
- **Slack**: #frontend-dev channel
- **GitHub**: Issues and discussions
- **Documentation**: Internal wiki
- **Code Reviews**: PR comments and feedback

## 🎯 Next Steps

### Immediate Tasks
1. [ ] Set up authentication flow
2. [ ] Create dashboard layout
3. [ ] Implement data fetching
4. [ ] Add error boundaries
5. [ ] Set up testing framework

### Future Enhancements
1. [ ] PWA capabilities
2. [ ] Offline support
3. [ ] Advanced analytics
4. [ ] Custom dashboards
5. [ ] Mobile app

---

**Remember**: This is a production application serving real users. Always prioritize stability, performance, and user experience over new features.
