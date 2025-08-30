# Vlog Vintage - Análise e Desenvolvimento de Sistemas

## Overview

Vlog Vintage is a static website designed as a digital showcase for a Systems Analysis and Development course. The site features a vintage newspaper aesthetic with a Portuguese interface, presenting course information, creator profiles, and video content in an elegant, retro-styled layout. The project emphasizes visual storytelling through a newspaper-inspired design system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a traditional multi-page website structure using vanilla HTML5, CSS3, and JavaScript:

- **Static Site Design**: Pure HTML/CSS/JS implementation without frameworks, providing fast loading times and simple deployment
- **Responsive Layout**: Mobile-first approach using CSS Grid and Flexbox for cross-device compatibility
- **Component-Based Styling**: Modular CSS organization with CSS custom properties for consistent theming
- **Progressive Enhancement**: Core content accessible without JavaScript, with enhanced interactions via JS

### Design System
- **Vintage Newspaper Theme**: Implements a cohesive visual identity inspired by classic newspaper layouts
- **Typography Hierarchy**: Uses Google Fonts (Playfair Display for headings, Crimson Text for body) to establish clear content hierarchy
- **Color Palette**: Earth-tone color scheme defined through CSS custom properties for maintainability
- **Animation System**: CSS-based animations with JavaScript triggers for smooth user interactions

### JavaScript Architecture
- **Event-Driven Interactions**: Modular function organization for navigation, animations, and user interface enhancements
- **DOM Manipulation**: Vanilla JavaScript for dynamic content updates and interactive features
- **Smooth Scrolling Navigation**: Single-page application behavior for internal navigation

### Content Structure
- **Multi-Section Layout**: Organized into distinct sections (home, about, creators, vlog, contact)
- **Responsive Typography**: Scalable text system adapting to different screen sizes
- **Interactive Elements**: Mobile-friendly navigation with hamburger menu and social media integration

## External Dependencies

### Third-Party Services
- **Google Fonts API**: Provides custom typography (Playfair Display, Crimson Text)
- **Font Awesome CDN**: Icon library for user interface elements and social media icons

### Browser APIs
- **DOM API**: Core functionality for content manipulation and event handling
- **CSS Custom Properties**: Modern browser features for dynamic styling

### Hosting Requirements
- **Static File Hosting**: Compatible with any static site hosting service (GitHub Pages, Netlify, Vercel)
- **No Backend Dependencies**: Pure frontend implementation requiring no server-side processing