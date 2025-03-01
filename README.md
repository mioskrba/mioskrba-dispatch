# Mioskrba Dispatch

A web application for managing delivery driver tasks and dispatching operations.

## Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js**: Install Node.js version 22 or later

   - Using [nvm](https://github.com/nvm-sh/nvm) (recommended):
     ```bash
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
     nvm install 22
     nvm use 22
     ```
   - Or download directly from [nodejs.org](https://nodejs.org/)

2. **Git**: Install the latest version
   ```bash
   # On macOS with Homebrew
   brew install git
   ```

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/mioskrba/mioskrba-dispatch.git
   cd mioskrba-dispatch
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## Development Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint:check` - Check code style
- `npm run lint:fix` - Fix code style issues
- `npm run format:check` - Check code formatting
- `npm run format:fix` - Fix code formatting
- `npm run types:check` - Check TypeScript types

## Project Structure

```
mioskrba-dispatch/
├── src/              # Source code
├── public/           # Static assets
├── .github/          # GitHub workflows
└── vite.config.ts    # Vite configuration
```

## Contributing

1. Create a new branch for your feature

   ```bash
   git checkout -b your-feature-name
   ```

2. Make your changes and ensure all checks pass

   ```bash
   npm run lint:check
   npm run format:check
   npm run types:check
   ```

3. Submit a pull request

## Technologies

- React 19 with TypeScript
- Vite for build tooling
- PWA support for offline capabilities
- ESLint and Prettier for code quality
- GitHub Actions for CI/CD

## License

Private repository - All rights reserved
