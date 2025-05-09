# 🧩 Next.js Template with Better Auth, Prisma, and Anime.js

A clean and extensible starter template for building modern web applications with:

- 🔐 **Better Auth** – Simple and secure authentication
- 🧬 **Prisma ORM** – Type-safe database access
- 🎞️ **Anime.js** – Lightweight animation library
- ⚡ **Next.js** – Full-stack React framework
- 🎨 **Tailwind CSS** – Utility-first CSS framework
- 🧱 **shadcn/ui** – Beautiful, accessible component library built on Radix UI

## 🚀 Features

- Built-in user authentication (login, register, protected routes), oauth authentication with Github and Google
- PostgreSQL support via Prisma ORM
- Smooth and expressive UI animations using Anime.js
- Fully typed with TypeScript
- Modern UI with TailwindCSS and Shadcn
- Modular folder structure for scalability

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Authentication:** [Better Auth](https://github.com/BetterTyped/better-auth)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Animations:** [Anime.js](https://animejs.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Language:** TypeScript

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/nextjs_better-auth_prisma_animejs_template.git
cd nextjs_better-auth_prisma_animejs_template
````

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure environment variables

Create a `.env` file based on `.env.example` and set your database credentials and auth secrets.

### 4. Set up the database

```bash
npx prisma migrate dev --name init
```

### 5. Run the development server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 🧪 TODOs (Optional Enhancements)

* Implement role-based access control
* Add animations to specific route transitions
* Implement Storyboook

## 📄 License

MIT License. Feel free to use, modify, and share!

---

Built with ❤️ by Boboiboy181
