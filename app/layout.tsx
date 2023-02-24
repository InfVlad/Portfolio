import "../styles/globals.css"
import { Radio_Canada } from "@next/font/google"

export const metadata = {
    title: "Vladimir Infante",
    description: "Vladimir Infante's Personal Portfolio",
}
const radioCanada = Radio_Canada({
    subsets: ["latin"],
    display: "swap",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={radioCanada.className}>
            <body>{children}</body>
        </html>
    )
}
