# Modern E-commerce Platform

A full-featured e-commerce platform built with React, TypeScript, Tailwind CSS, and Supabase.

## Features

- 🛍️ Product catalog with search and filtering
- 🛒 Shopping cart functionality
- 💳 Secure checkout process
- 👤 User authentication
- 📱 Responsive design
- 🔒 Row Level Security (RLS)
- 🚀 Modern tech stack

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **Routing**: React Router
- **Build Tool**: Vite
- **Deployment**: Netlify (via GitHub Actions)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd modern-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your Supabase credentials in `.env.local`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Run the development server:
```bash
npm run dev
```

## Database Setup

The project includes Supabase migrations in the `supabase/migrations` directory. These will create:

- Products table
- Orders table
- Order items table
- Row Level Security policies

## Deployment

The project is configured for automatic deployment to Netlify via GitHub Actions.

### Setup Deployment

1. Create a Netlify account and site
2. Add the following secrets to your GitHub repository:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

3. Push to the `main` branch to trigger deployment

## CI/CD Pipeline

The project includes comprehensive GitHub Actions workflows:

- **CI Pipeline**: Runs on every push and PR
  - Linting
  - Type checking
  - Building
  - Testing

- **Security Scanning**: Weekly security audits
  - npm audit
  - CodeQL analysis

- **Automated Releases**: Creates releases when tags are pushed
  - Builds production assets
  - Generates changelog
  - Creates GitHub release with artifacts

- **Dependency Updates**: Automated via Dependabot

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/your-username/modern-ecommerce/issues).