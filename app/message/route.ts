import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// eslint-disable-next-line import/prefer-default-export
export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVICE,
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                ciphers: "SSLv3",
                rejectUnauthorized: false,
            },
        });

        const info = await transporter.sendMail({
            from: process.env.EMAIL_SENDER,
            to: process.env.EMAIL_DESTINY,
            subject: "Hello! someone sent you a message from your Portfolio!",
            text: `${name} \nemail: ${email}\nSays: ${message}`,
        });
        console.log("Message sent: %s", info.messageId);
        return NextResponse.json({ message: `${name} thank you for your message!` });
    } catch (error) {
        console.log(error);
    }
}
