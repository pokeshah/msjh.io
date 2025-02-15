import Head from "next/head";
import "@/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <Head>
            <link rel="icon" href="/logo.webp" />
        </Head>
        <body>{children}</body>
        </html>
    );
}
