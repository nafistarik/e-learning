# SkillFlow-Online Learning Platform Frontend

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://elearn-lilac.vercel.app/)
[![GitHub stars](https://img.shields.io/github/stars/nafistarik/e-learning)](https://github.com/nafistarik/e-learning/stargazers)
[![GitHub license](https://img.shields.io/github/license/nafistarik/e-learning)](https://github.com/nafistarik/e-learning/blob/main/LICENSE)

A full-featured e-Learning platform built with Next.js 14 that allows users to browse, enroll in courses, and manage their learning journey. Administrators can manage courses, users, and track platform analytics.

## ✨ Features

### 👨‍🎓 Learner Experience
- 🏠 Interactive homepage with featured courses
- 🔍 Course browsing and search functionality
- 📚 Detailed course pages with curriculum
- 💝 Add courses to favorites
- 🛒 Shopping cart functionality
- 📱 Fully responsive design

### 👨‍🏫 Admin Dashboard
- 📊 Analytics dashboard with enrollment stats
- 📝 Course management (CRUD operations)
- 👥 User management system
- 📈 Enrollment tracking
- 🏷️ Category management

### 🔐 Authentication
- ✉️ Email/password login
- 📝 User registration
- 🔑 JWT authentication
- 🛡️ Protected routes
- 👤 Profile management

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) (RTK Query)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charting**: [Recharts](https://recharts.org/)

## 📂 Project Structure

```markdown
e-learning/
├── app/                # Next.js 14 App Router
│   ├── (admin)/        # Admin routes
│   ├── (auth)/         # Authentication routes
│   ├── (common)/       # Public routes
│   ├── (user)/         # User routes
│   └── assets/         # Static assets
├── components/         # Reusable components
│   ├── motion/         # Animation components
│   ├── shared/         # Common components
│   ├── sidebar/        # Navigation
│   └── ui/            # UI primitives
├── hooks/             # Custom hooks
├── lib/               # Utilities
├── redux/             # State management
│   ├── api/           # RTK Query endpoints
│   ├── slice/         # Redux slices
│   └── store.ts       # Redux store
└── types/             # TypeScript types
```
## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nafistarik/e-learning.git
   cd e-learning
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Available Scripts

- `dev`: Starts development server
- `build`: Creates production build
- `start`: Starts production server
- `lint`: Runs ESLint
- `format`: Formats code with Prettier
- `test`: Runs tests (if configured)

## 🌐 Deployment

The project is deployed on Vercel. To deploy your own instance:

1. Fork this repository
2. Create a new project on [Vercel](https://vercel.com)
3. Connect your GitHub repository
4. Deploy!

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Md. Nafis Tarik - [nafistarik789@gmail.com](mailto:nafistarik789@gmail.com)
Project Link: [https://github.com/nafistarik/e-learning](https://github.com/nafistarik/e-learning)  
Live Demo: [https://elearn-lilac.vercel.app/](https://elearn-lilac.vercel.app/)
