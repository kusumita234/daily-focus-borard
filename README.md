# Daily Focus Board

A Next.js application for managing your daily focus and big rocks (important tasks).

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher recommended)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

You can check if you have Node.js installed by running:
```bash
node --version
npm --version
```

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd daily-focus-board
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   
   Or if you prefer using yarn or pnpm:
   ```bash
   yarn install
   # or
   pnpm install
   ```

## Running the Application

### Development Mode

To start the development server:

```bash
npm run dev
```

Or with yarn/pnpm:
```bash
yarn dev
# or
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

Open your browser and navigate to this URL to view the app. The page will automatically reload when you make changes to the code.

### Production Build

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server (requires `build` to be run first)
- `npm run lint` - Runs ESLint to check for code quality issues

## Project Structure

The main application code is located in the `daily-focus-board` directory:
- `app/` - Next.js app router pages and layouts
- `components/` - React components including UI components and form components
- `lib/` - Utility functions
- `public/` - Static assets

## Technology Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible component primitives

## Troubleshooting

If you encounter any issues:

1. **Clear node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node.js version:**
   Ensure you're using Node.js version 18 or higher.

3. **Port already in use:**
   If port 3000 is already in use, Next.js will automatically try the next available port (3001, 3002, etc.).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)

