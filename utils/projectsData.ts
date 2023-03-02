export interface ProjectsInterface {
    id: number;
    title: string;
    description: string;
    imagesUrl: string[];
    technologies: string[];
    features: string[];
    about: string[];
    githubUrl: string;
    deploymentUrl: string;
    disclaimer: string;
}

export const projectsList: ProjectsInterface[] = [
    {
        id: 1,
        title: "Awesome Gear",
        description: "Gaming gear Ecommerce built with NextJs",
        imagesUrl: [
            "/assets/projects/awesome-gear-1.png",
            "/assets/projects/awesome-gear-2.png",
            "/assets/projects/awesome-gear-3.png",
            "/assets/projects/awesome-gear-4.png",
            "/assets/projects/awesome-gear-5.png",
        ],
        technologies: [
            "React",
            "NextJs",
            "NextAuth",
            "Sanity",
            "NodeJs",
            "MongoDb",
            "Framer Motion",
            "Stripe",
            "Vercel",
            "REST API",
        ],
        features: [
            "Registration with Credentials",
            "Input validation on forms",
            "Authentication with JWTs",
            "Protected Routes",
            "Product data managed by Sanity (Headless CMS)",
            "User and Order data stored on MongoDb cloud",
            "Checkout with Stripe",
            "Server Side Rendered homepage for better SEO",
            "Static Site Generated individual product pages for fastest response",
            "Product filtering",
            "Smooth Animations",
            "Light/Dark Theme",
            "Responsive Design",
        ],
        about: [
            "When i started this project my goal was to build a really basic ecommerce without a database just to get familiar with NextJs (that's why Im using Sanity), but after seeing so many cool ecommerce websites out there i decided to take this project above and beyond.",
            "For the frontend, i decided to rebuild most of the UI and add animations with Framer Motion.",
            "For the backend, I created my own Rest Endpoints, worked with NextAuth for authentication, and decided to go with MongoDb as database.",
            "Building this project was a really fun challenge, in the near future Im gonna rebuild this project with many more features using the T3 Stack (TypeScript, TailwindCss, tRPC, NextJs, Prisma, Postgress).",
            "Version 2.0 Coming Soon!",
        ],
        githubUrl: "https://github.com/InfVlad/Ecommerce-AwesomeGear",
        deploymentUrl: "https//awesome-gear-shop.vercel.app",
        disclaimer: "This project is deployed on Vercel using Serverless Functions, cold starts might be slow",
    },
    {
        id: 2,
        title: "Cryptoverse",
        description: "Crypto currency app built with React",
        imagesUrl: [
            "/assets/projects/cryptoverse-1.png",
            "/assets/projects/cryptoverse-2.png",
            "/assets/projects/cryptoverse-3.png",
            "/assets/projects/cryptoverse-4.png",
        ],
        technologies: ["React", "TypeScript", "Redux Toolkit Query", "Ant Design", "React Router", "Vite"],
        features: ["Responsive Design", "Third Party API consumption", "API responses cached with RTK Query"],
        about: [
            "For this project, the main goal was to create something useful for myself with React.",
            "With this app you can check the crypto currency prices, charts and news in any device",
            "Even though create-react-app is the default for a lot React Developers, it is too slow, that's why I using Vite",
            "For this project Im using free APIs, those have limited usage, that's why I felt the urge to not waste API calls, for that matter I implemented RTK Query, which caches API responses, allowing the user to navigate between pages of the app and reuse the data from previous API calls",
        ],
        githubUrl: "https://github.com/InfVlad/Crypto-App",
        deploymentUrl: "https://crypto-data-app.netlify.app/",
        disclaimer: "This project uses a Free News API with a limit of 100 calls a month",
    },
];
