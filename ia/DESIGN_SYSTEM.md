# Design System

This document defines the design system rules, tokens, and UI components used in the project.

All UI must follow this system.

---

# SCSS Architecture

The project uses a layered SCSS architecture.

styles/

    Main.scss
    variables.scss
    mixins.scss
    abstracts/
        index.scss
        primitives/
            colors.scss
            spacing.scss
            radius.scss
            typography.scss

Main.scss is the main entry point for styles.

All components must import styles through Main.scss.

abstracts/primitives contains the raw design tokens.

abstracts/index.scss exposes tokens and utilities to the rest of the project.

---

# Design Tokens

All design tokens are defined in:

styles/abstracts/primitives/

These tokens must always be used instead of hardcoded values.

Never hardcode:

- colors
- spacing
- border radius
- typography sizes

---

# Color Tokens

Defined in:

abstracts/primitives/colors.scss

Examples:

$c-Blue-50
$c-Blue-100
$c-Blue-200

---

# Spacing Tokens

Defined in:

abstracts/primitives/spacing.scss

Examples:

$Space-0
$Space-1
$Space-2

---

# Border Radius Tokens

Examples:

$Border-Radius-Extra-Small
$Border-Radius-Small
$Border-Radius-Medium

---

# Typography

Font family:

Inter

Headings:

H1 → 48px  
H2 → 32px  
H3 → 24px  

Body text:

16px

Typography tokens should be used whenever available.

---

# Layout

Max width:

1200px

Grid:

12 columns

Use Container and Grid components for layout structure.

---

# Styling Rules

Always use design tokens.

Never write raw values such as:

color: #000  
padding: 16px  
border-radius: 8px  

Components must import styles through Main.scss.

Each component should contain its own SCSS module.

Example:

Button/

    Button.tsx
    Button.module.scss

---

# Component Library

All UI must be built using these components.

Avoid creating new components unless absolutely necessary.

---

## Base Components

Logo
Button  
IconButton  
Text  
Heading  
Link  
Icon  
Badge  
Tag  
Avatar  
Divider  
Tooltip  
Card  

---

## Layout Components

Container  
Stack  
Grid  
PageLayout  
Header  
Sidebar  
Footer  
Section  

---

## Navigation Components

Navbar  
NavItem  
Tabs  
Breadcrumb  

---

## Form Components

Input  
Textarea  
Select  
Checkbox  
Radio  
Switch  
SearchInput  
FormField  
FormLabel  
FormError  

---

## Feedback Components

Alert  
Toast  
Modal  
Dialog  
Drawer  
Spinner  
Skeleton  
EmptyState  

---

## Data Display Components

List  
ListItem  
Table  
Pagination  
Stat  
ProgressBar  

---

## Feature Components (MVP)

SearchBar  
FilterBar  
ItemCard  
UserCard  
ResultList  
DetailPanel  
ActionMenu  

---

# Component Rules

Before creating a new component, always check if an existing component can be reused.

Prefer composition over creating new UI elements.

Avoid duplicate components with similar responsibilities.

---

# Component Naming Convention

Component names must use PascalCase.

Examples:

UserCard  
SearchBar  
FilterBar  
ResultList  
DetailPanel  

---

# AI Development Rules

When generating UI code:

- Always use components from this library
- Always use design tokens
- Never hardcode styles
- Prefer reusable components
- Follow the SCSS architecture