# Dubai Premier Hotel Management System

The Dubai Premier Hotel management system is a professional internal dashboard designed for hotel staff to manage bookings, cabins, guests, and settings.

## Project Description

This is a modern Single Page Application (SPA) that provides real-time data synchronization and a seamless user experience for administrative tasks. The system serves as a centralized hub for hotel operations.

## Application Structure

Main pages and components:

- **Dashboard** — main panel with statistics and analytics
- **Bookings** — booking management and details
- **Cabins** — cabin inventory management
- **Users** — staff account administration
- **Settings** — global hotel settings
- **Account** — user personal cabinet
- **Login** — authorization page
- **Checkin** — guest registration process

## Key Features

- **Real-time Dashboard** — statistics and visual analytics of hotel performance
- **Complete Booking Management** — check-in, check-out, filtering, and pagination
- **Cabin Inventory Management** — CRUD operations and image uploads
- **Staff Administration** — employee account management
- **Global Settings** — hotel parameter configuration (breakfast prices, booking constraints)
- **Dark Theme** — dark mode support via context

## Tech Stack

| Category               | Technology                           |
| ---------------------- | ------------------------------------ |
| **Frontend Framework** | React 18                             |
| **Build Tool**         | Vite                                 |
| **Backend / BaaS**     | Supabase (PostgreSQL, Auth, Storage) |
| **State Management**   | TanStack React Query                 |
| **Styling**            | Styled Components                    |
| **Routing**            | React Router                         |
| **Forms**              | React Hook Form                      |
| **Charts**             | Recharts                             |
| **Notifications**      | React Hot Toast                      |
| **Date Handling**      | date-fns                             |

## Architecture

The system uses a layered architecture where the frontend interacts with Supabase through specialized service modules. React Query acts as an intermediary layer, handling asynchronous data fetching, caching, and synchronization.

## Documentation

For detailed architecture, data flow diagrams, and module descriptions, see the [Overview](https://github.com/LeonidYezerskyi/dubai-premier-hotel/wiki/Overview) wiki page.

---

## Notes

The project is configured with `staleTime: 0` in React Query to ensure fresh data from Supabase.

Wiki pages you might want to explore:

- [Overview (LeonidYezerskyi/dubai-premier-hotel)](/wiki/LeonidYezerskyi/dubai-premier-hotel#1)
- [Glossary (LeonidYezerskyi/dubai-premier-hotel)](/wiki/LeonidYezerskyi/dubai-premier-hotel#11)
