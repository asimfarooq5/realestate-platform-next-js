# PakZameen - Real Estate Platform

A modern real estate platform built with Next.js, TypeScript, Prisma, and PostgreSQL. Similar to Zameen.com, this platform allows users to buy, sell, and rent properties across Pakistan.

## Features

- **Property Listings**: Browse, search, and filter properties by location, type, price, and more
- **User Authentication**: Secure login/signup with role-based access (Buyer, Seller, Agent, Admin)
- **Property Management**: Agents and sellers can add, edit, and manage property listings
- **Advanced Search**: Filter properties by city, area, type, price range, bedrooms, and more
- **Favorites**: Save properties to your favorites list
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Admin Dashboard**: Manage users, properties, and platform settings

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (or use Prisma Postgres)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/asimfarooq5/realestate-platform-next-js
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with:
```env
DATABASE_URL="your-postgresql-connection-string"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

4. Set up the database:
```bash
# Run database migrations
npm run db:migrate

# Generate Prisma client
npm run db:generate

# Seed the database with sample data
npm run db:seed
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Default Accounts

After seeding the database, you can use these accounts:

- **Admin**: admin@zameen.com / admin123
- **Agent**: agent@zameen.com / agent123

## Project Structure

```
my-app/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── api/               # API routes
│   │   ├── admin/             # Admin dashboard
│   │   ├── auth/              # Authentication pages
│   │   ├── dashboard/         # User dashboard
│   │   ├── properties/        # Property pages
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   └── *.tsx             # Custom components
│   ├── lib/                  # Utility functions
│   ├── types/                # TypeScript types
│   └── middleware.ts         # Next.js middleware
├── prisma/
│   ├── schema.prisma         # Database schema
│   └── seed.ts               # Seed script
├── public/                   # Static assets
└── package.json
```

## Key Features

### For Buyers/Renters
- Search properties by location, type, and price
- View detailed property information with images
- Save favorite properties
- Contact agents directly

### For Sellers/Agents
- Add new property listings
- Manage existing listings
- Track property views and inquiries
- Update profile and contact information

### For Admins
- Manage all users and properties
- Approve/reject property listings
- View platform statistics
- Configure platform settings

## API Routes

- `GET /api/properties` - List properties with filters
- `POST /api/properties` - Create new property
- `GET /api/properties/[id]` - Get property details
- `PUT /api/properties/[id]` - Update property
- `DELETE /api/properties/[id]` - Delete property
- `GET /api/cities` - List all cities
- `GET /api/cities/[id]/areas` - List areas for a city
- `POST /api/auth/register` - Register new user

## Database Schema

The database includes models for:
- **User**: Buyers, sellers, agents, and admins
- **Property**: Property listings with details
- **City/Area**: Location data
- **PropertyImage**: Property photos
- **Favorite**: User's saved properties
- **Inquiry**: Contact requests
- **AgentProfile**: Agent-specific information

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
