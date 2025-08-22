# StockSense AI - Frontend

The Next.js 14 frontend application for the StockSense AI Intelligent Inventory Management System.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   cd apps/web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:3000`

## 📚 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Testing
```bash
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run end-to-end tests
npm run test:coverage # Run tests with coverage
```

### Storybook
```bash
npm run storybook    # Start Storybook development server
npm run build-storybook # Build Storybook for production
```

## 🏗️ Architecture

### Core Technologies

- **Next.js 14**: React framework with App Router
- **React 18**: UI library with concurrent features
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Query**: Server state management
- **React Hook Form**: Form management with validation
- **Zod**: Schema validation
- **Recharts**: Data visualization
- **Framer Motion**: Animation library

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication routes
│   ├── dashboard/          # Dashboard pages
│   ├── forecast/           # Forecasting module
│   ├── policy/             # Policy optimization
│   ├── replenishment/      # Replenishment planning
│   ├── execution/          # Order execution
│   ├── analytics/          # Analytics and KPIs
│   ├── exceptions/         # Exception management
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Layout components
│   ├── forms/              # Form components
│   ├── charts/             # Chart components
│   ├── tables/             # Table components
│   └── modals/             # Modal components
├── lib/                    # Utility libraries
│   ├── utils.ts            # General utilities
│   ├── api.ts              # API client
│   ├── auth.ts             # Authentication utilities
│   └── constants.ts        # Application constants
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript type definitions
├── data/                   # Mock data and fixtures
└── styles/                 # Additional styles
```

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--primary-50: #eff6ff;
--primary-500: #3b82f6;
--primary-900: #1e3a8a;

/* Secondary Colors */
--secondary-50: #f8fafc;
--secondary-500: #64748b;
--secondary-900: #0f172a;

/* Status Colors */
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
--info: #3b82f6;
```

### Typography

- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: JetBrains Mono
- **Base Font Size**: 16px
- **Line Height**: 1.5

### Spacing

- **Base Unit**: 4px
- **Spacing Scale**: 0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64

### Components

#### Button Variants
- `default`: Primary button with blue background
- `secondary`: Secondary button with gray background
- `outline`: Outlined button with transparent background
- `ghost`: Ghost button with hover effects
- `destructive`: Destructive action button with red styling
- `link`: Link-style button

#### Button Sizes
- `default`: 40px height
- `sm`: 32px height
- `lg`: 48px height
- `icon`: Square button for icons

## 🔧 Configuration

### Environment Variables

Key environment variables (see `.env.example` for complete list):

```bash
# Application
NEXT_PUBLIC_APP_NAME=StockSense AI
NEXT_PUBLIC_APP_VERSION=1.0.0

# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
NEXT_PUBLIC_API_VERSION=v1

# Authentication
NEXT_PUBLIC_AUTH_CLIENT_ID=your-client-id
NEXT_PUBLIC_AUTH_DOMAIN=your-auth-domain

# External Services
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_SENTRY=true
```

### Tailwind Configuration

The Tailwind configuration includes:
- Custom color palette
- Extended spacing and typography
- Custom animations and keyframes
- Responsive breakpoints
- Dark mode support

### TypeScript Configuration

- Strict type checking enabled
- Path aliases for clean imports
- Next.js specific configurations
- ESLint integration

## 🧪 Testing

### Testing Strategy

#### Unit Tests
- **Framework**: Jest + React Testing Library
- **Coverage**: Components, hooks, utilities
- **Location**: `__tests__/` directories or `.test.tsx` files

#### Integration Tests
- **Framework**: Playwright
- **Coverage**: User workflows, API integration
- **Location**: `tests/e2e/`

#### Component Tests
- **Framework**: Storybook
- **Coverage**: Component variations and states
- **Location**: `.stories.tsx` files

### Running Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:coverage

# Storybook
npm run storybook
```

### Test Examples

#### Component Test
```tsx
// Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })
})
```

#### Hook Test
```tsx
// useApi.test.ts
import { renderHook } from '@testing-library/react'
import { useApi } from './useApi'

describe('useApi', () => {
  it('fetches data successfully', async () => {
    const { result } = renderHook(() => useApi('/items'))
    // Test implementation
  })
})
```

## 🚀 Performance

### Optimization Strategies

#### Bundle Optimization
- **Code Splitting**: Automatic with Next.js App Router
- **Tree Shaking**: Remove unused code
- **Dynamic Imports**: Lazy load components
- **Image Optimization**: Next.js Image component

#### Runtime Optimization
- **React.memo**: Prevent unnecessary re-renders
- **useMemo/useCallback**: Memoize expensive calculations
- **Virtual Scrolling**: For large lists
- **Debouncing**: For search and filters

#### Caching Strategy
- **React Query**: Server state caching
- **SWR**: Alternative caching solution
- **Browser Cache**: Static assets
- **CDN**: Global content delivery

### Performance Monitoring

#### Core Web Vitals
- **LCP**: Largest Contentful Paint < 2.5s
- **FID**: First Input Delay < 100ms
- **CLS**: Cumulative Layout Shift < 0.1

#### Bundle Analysis
```bash
npm run build
npm run analyze
```

## 🔐 Security

### Security Measures

#### Input Validation
- **Zod Schemas**: Runtime validation
- **TypeScript**: Compile-time type checking
- **Sanitization**: XSS prevention

#### Authentication
- **JWT Tokens**: Secure token storage
- **HTTP-only Cookies**: CSRF protection
- **Token Refresh**: Automatic renewal

#### Data Protection
- **HTTPS**: Encrypted communication
- **CSP**: Content Security Policy
- **CORS**: Cross-origin restrictions

### Security Headers

```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  }
]
```

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Responsive Patterns

#### Grid Layouts
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Responsive grid items */}
</div>
```

#### Navigation
```tsx
{/* Mobile: Hamburger menu */}
{/* Desktop: Horizontal navigation */}
```

#### Typography
```tsx
<h1 className="text-2xl md:text-4xl lg:text-6xl">
  Responsive heading
</h1>
```

## 🌙 Dark Mode

### Implementation

#### CSS Variables
```css
:root {
  --background: #ffffff;
  --foreground: #0f172a;
}

[data-theme="dark"] {
  --background: #0f172a;
  --foreground: #f8fafc;
}
```

#### Theme Toggle
```tsx
const ThemeToggle = () => {
  const [theme, setTheme] = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </button>
  )
}
```

## 🔄 State Management

### Client State
- **React Context**: Global application state
- **useState**: Local component state
- **useReducer**: Complex state logic

### Server State
- **React Query**: API data caching and synchronization
- **SWR**: Alternative data fetching

### Example Implementation

```tsx
// Context for global state
const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState('light')
  
  return (
    <AppContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  )
}

// React Query for server state
const { data: items, isLoading, error } = useQuery({
  queryKey: ['items'],
  queryFn: () => api.getItems()
})
```

## 📊 Analytics

### Implementation

#### Google Analytics
```tsx
// _app.tsx
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  )
}
```

#### Custom Events
```tsx
const trackEvent = (eventName, properties) => {
  gtag('event', eventName, properties)
}
```

## 🚀 Deployment

### Vercel Deployment

1. **Connect Repository**
   ```bash
   vercel --prod
   ```

2. **Environment Variables**
   - Set in Vercel dashboard
   - Use production values

3. **Build Configuration**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".next"
   }
   ```

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM base AS builder
COPY . .
RUN npm run build

FROM base AS runner
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔄 Development Workflow

### Code Quality

#### Pre-commit Hooks
```bash
# Install husky
npm install husky --save-dev

# Install lint-staged
npm install lint-staged --save-dev

# Configure pre-commit
npx husky add .husky/pre-commit "npx lint-staged"
```

#### Linting Configuration
```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

### Git Workflow

1. **Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Development**
   - Write code
   - Add tests
   - Update documentation

3. **Quality Checks**
   ```bash
   npm run lint
   npm run type-check
   npm run test
   ```

4. **Commit**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

5. **Pull Request**
   - Create PR
   - Code review
   - Merge to main

## 📞 Support

### Documentation
- **Component Library**: Storybook
- **API Documentation**: Swagger/OpenAPI
- **Code Documentation**: JSDoc comments

### Community
- **GitHub Issues**: Bug reports and feature requests
- **Discussions**: General questions and ideas
- **Discord**: Real-time chat and support

### Resources
- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Make changes and test**: `npm run test`
4. **Commit changes**: `git commit -m 'feat: add amazing feature'`
5. **Push to branch**: `git push origin feature/amazing-feature`
6. **Create Pull Request**

### Code Standards

- Follow ESLint configuration
- Use Prettier for formatting
- Write comprehensive tests
- Update documentation
- Follow conventional commits
