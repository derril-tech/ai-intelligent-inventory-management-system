# Components Directory Instructions

This directory contains all React components for the StockSense AI frontend application.

## Directory Structure

```
src/components/
├── ui/                    # Reusable UI components (Button, Card, Input, etc.)
├── layout/                # Layout components (Header, Sidebar, Footer, etc.)
├── forms/                 # Form components and form-related utilities
├── charts/                # Chart and visualization components
├── tables/                # Data table components
├── modals/                # Modal and dialog components
├── navigation/            # Navigation components (breadcrumbs, pagination, etc.)
└── _INSTRUCTIONS.md       # This file
```

## Component Guidelines

### 1. File Naming
- Use PascalCase for component files: `Button.tsx`, `DataTable.tsx`
- Use kebab-case for directories: `data-table/`, `form-fields/`
- Index files should be named `index.tsx`

### 2. Component Structure
```tsx
// ComponentName.tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface ComponentNameProps {
  // Props interface
}

export function ComponentName({ ...props }: ComponentNameProps) {
  return (
    // JSX
  )
}
```

### 3. Styling Guidelines
- Use Tailwind CSS for styling
- Use `cn()` utility for conditional classes
- Follow the design system color palette
- Ensure responsive design
- Support dark mode with `dark:` prefixes

### 4. Props and Types
- Always define TypeScript interfaces for props
- Use descriptive prop names
- Provide default values where appropriate
- Use `React.forwardRef` for components that need ref forwarding

### 5. Accessibility
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain proper focus management
- Follow WCAG 2.1 AA guidelines

## UI Components (`ui/`)

### Purpose
Reusable, atomic UI components that form the building blocks of the application.

### Guidelines
- Keep components simple and focused
- Use `class-variance-authority` for variants
- Support all common use cases
- Include proper TypeScript types
- Add Storybook stories for documentation

### Examples
- `Button.tsx` - Button component with variants
- `Card.tsx` - Card container component
- `Input.tsx` - Form input component
- `Badge.tsx` - Status and label badges

## Layout Components (`layout/`)

### Purpose
Components that define the overall structure and layout of pages.

### Guidelines
- Handle responsive behavior
- Manage navigation state
- Include proper loading states
- Support different screen sizes

### Examples
- `Header.tsx` - Application header
- `Sidebar.tsx` - Navigation sidebar
- `Footer.tsx` - Application footer
- `PageLayout.tsx` - Page wrapper component

## Form Components (`forms/`)

### Purpose
Form-related components and utilities for data input and validation.

### Guidelines
- Use React Hook Form for form management
- Include Zod validation schemas
- Provide proper error handling
- Support field arrays and complex forms

### Examples
- `FormField.tsx` - Generic form field wrapper
- `Select.tsx` - Dropdown select component
- `DatePicker.tsx` - Date input component
- `FormBuilder.tsx` - Dynamic form builder

## Chart Components (`charts/`)

### Purpose
Data visualization components using Recharts library.

### Guidelines
- Use Recharts for all charting needs
- Support responsive design
- Include proper loading states
- Provide interactive features

### Examples
- `LineChart.tsx` - Time series charts
- `BarChart.tsx` - Categorical data charts
- `PieChart.tsx` - Proportional data charts
- `Dashboard.tsx` - Chart dashboard layouts

## Table Components (`tables/`)

### Purpose
Data table components for displaying tabular data.

### Guidelines
- Support sorting and filtering
- Include pagination
- Handle large datasets efficiently
- Provide row selection capabilities

### Examples
- `DataTable.tsx` - Main data table component
- `TableHeader.tsx` - Table header with sorting
- `TableRow.tsx` - Individual table row
- `TablePagination.tsx` - Pagination controls

## Modal Components (`modals/`)

### Purpose
Modal and dialog components for overlays and popups.

### Guidelines
- Handle focus management
- Include proper backdrop handling
- Support keyboard navigation
- Provide accessibility features

### Examples
- `Modal.tsx` - Base modal component
- `ConfirmDialog.tsx` - Confirmation dialogs
- `FormModal.tsx` - Modal with form content
- `Drawer.tsx` - Side drawer component

## Navigation Components (`navigation/`)

### Purpose
Navigation-related components for user interface navigation.

### Guidelines
- Support breadcrumb navigation
- Include proper active states
- Handle mobile navigation
- Provide keyboard shortcuts

### Examples
- `Breadcrumbs.tsx` - Breadcrumb navigation
- `Pagination.tsx` - Page navigation
- `Tabs.tsx` - Tab navigation
- `Menu.tsx` - Dropdown menu component

## Testing Guidelines

### Unit Tests
- Test component rendering
- Test prop variations
- Test user interactions
- Test accessibility features

### Integration Tests
- Test component integration
- Test form workflows
- Test data flow
- Test error handling

### Example Test Structure
```tsx
// ComponentName.test.tsx
import { render, screen } from '@testing-library/react'
import { ComponentName } from './ComponentName'

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
```

## Performance Guidelines

### Optimization
- Use React.memo for expensive components
- Implement proper key props for lists
- Lazy load components when appropriate
- Optimize bundle size with dynamic imports

### Best Practices
- Avoid inline object/function creation
- Use useCallback and useMemo appropriately
- Implement proper error boundaries
- Monitor component re-renders

## Documentation

### Component Documentation
- Include JSDoc comments for complex components
- Document prop interfaces thoroughly
- Provide usage examples
- Include accessibility notes

### Storybook Stories
- Create stories for all UI components
- Include different variants and states
- Add interactive controls
- Document component behavior

## Common Patterns

### Conditional Rendering
```tsx
{isLoading ? <Spinner /> : <Content />}
```

### Error Boundaries
```tsx
<ErrorBoundary fallback={<ErrorComponent />}>
  <Component />
</ErrorBoundary>
```

### Loading States
```tsx
{isLoading && <Skeleton />}
```

### Responsive Design
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## Next Steps

1. **Create missing components** based on the design system
2. **Add Storybook stories** for all UI components
3. **Implement accessibility features** for all components
4. **Add comprehensive tests** for all components
5. **Optimize performance** for large datasets
6. **Document component APIs** thoroughly
