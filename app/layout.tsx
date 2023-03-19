import "../styles/globals.css";
import { Radio_Canada } from "next/font/google";

export const metadata = {
    title: "Vladimir Infante - Portfolio",
    description: "Vladimir Infante's Personal Portfolio",
    keywords: ["Frontend", "Fullstack", "Developer", "Next.js"],
    openGraph: {
        title: "Vladimir Infante - Portfolio",
        description: "Vladimir Infante's Developer Portfolio built with NextJs 13.2",
        images: [
            {
                url: "https://vlad-infante-portfolio.vercel.app/assets/portfolio-home-preview.png",
                width: 752,
                height: 400,
                alt: "portfolio thumbnail",
            },
        ],
    },
};
const radioCanada = Radio_Canada({
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={radioCanada.className}>
            <body>{children}</body>
        </html>
    );
}
