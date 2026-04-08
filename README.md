# Matka Biryani - Restaurant Management System

A comprehensive restaurant management system built with Next.js, TypeScript, and Supabase. This application handles menu management, order processing, table reservations, and inventory tracking.

## Features

- **Menu Management**: Add, edit, and delete menu items with images and pricing.
- **Order Management**: Create and manage customer orders with real-time updates.
- **Table Reservations**: Book tables with date, time, and guest count.
- **Inventory Tracking**: Monitor ingredient stock levels.
- **User Authentication**: Secure login for staff members.
- **Dashboard Analytics**: Visual overview of sales, orders, and reservations.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14 (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [Supabase](https://supabase.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: React Context API
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- [Supabase Account](https://supabase.com/)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd matka-biryani
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory with the following variables:

   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

   # App Configuration
   NEXT_PUBLIC_APP_NAME=Matka Biryani
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open the app**
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```
matka-biryani/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── (auth)/       # Authentication pages
│   │   ├── (dashboard)/  # Dashboard and protected routes
│   │   ├── api/          # API routes
│   │   └── layout.tsx    # Root layout
│   ├── components/       # Reusable React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── auth/         # Authentication components
│   │   ├── dashboard/    # Dashboard components
│   │   ├── menu/         # Menu components
│   │   ├── orders/       # Order components
│   │   ├── reservations/ # Reservation components
│   │   └── inventory/    # Inventory components
│   ├── lib/              # Utility functions and helpers
│   │   ├── supabase.ts   # Supabase client
│   │   ├── auth.ts       # Authentication helpers
│   │   ├── utils.ts      # General utilities
│   │   └── validation.ts # Validation schemas
│   ├── types/            # TypeScript type definitions
│   └── store/            # State management
├── public/               # Static assets
├── .env.local            # Environment variables (not in git)
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Usage

### Authentication

- **Email**: [EMAIL_ADDRESS]`
- **Password**: `password123`

### Navigation

- **Dashboard**: Overview of key metrics
- **Menu**: Manage menu items
- **Orders**: View and manage orders
- **Reservations**: Handle table bookings
- **Inventory**: Track stock levels
- **Settings**: Configure restaurant settings

## Development

### Running in Development Mode

```bash
# Start development server
pnpm dev

# Open browser
# http://localhost:3000
```

### Building for Production

```bash
# Build the application
pnpm build

# Run the production build
pnpm start
```

### Running Tests

```bash
# Run tests
pnpm test

# Run tests with watch mode
pnpm test:watch
```

## Environment Variables

The following environment variables are required:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | `https://your-project.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | `sb_publishable_key` |
| `NEXT_PUBLIC_APP_NAME` | Application name | `Matka Biryani` |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue in the repository.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Backend services by [Supabase](https://supabase.com/)

---

**Built with ❤️ using Next.js and Supabase**
