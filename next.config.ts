// @ts-check

import {NextConfig} from "next";

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig: NextConfig = {
    output: "export",
    async redirects() {
        return [
            {
                source: '/ac',
                destination: 'https://discord.gg/FUrNf89H2Y',
                permanent: true,
            },
            {
                source: '/aeries',
                destination: 'https://fremontusd.aeries.net/student/LoginParent.aspx?page=Dashboard.aspx',
                permanent: true,
            },
            {
                source: '/asb',
                destination: 'https://www.msjasb.org/',
                permanent: true,
            },
            {
                source: '/ai',
                destination: 'https://discord.gg/BgKd44yUv2',
                permanent: true,
            },
            {
                source: '/bell',
                destination: 'https://docs.google.com/document/d/1bdQk0SWY1B8fEOGbj-qjuWjSbT7jLLHS0FX-OSB85qw/edit?usp=sharing',
                permanent: true,
            },
            {
                source: '/bio',
                destination: 'https://discord.gg/dqyzBUA6M9',
                permanent: true,
            },
            {
                source: '/cs',
                destination: 'https://msjcs.vercel.app/',
                permanent: true,
            },
            {
                source: '/cs/signup',
                destination: 'https://forms.gle/DFrqfP9txb4xJrfP9',
                permanent: true,
            },
            {
                source: '/dates',
                destination: 'https://docs.google.com/spreadsheets/d/1TJIwJY9RzaXoLgS5uM225Xa65npnfzE2ucH_BNp07Dc/edit?usp=sharing',
                permanent: true,
            },
            {
                source: '/esports',
                destination: 'https://discord.gg/w8BCfPBxWC',
                permanent: true,
            },
            {
                source: '/jp',
                destination: 'https://discord.gg/bZjZW6QpvB',
                permanent: true,
            },
            {
                source: '/jp/signup',
                destination: 'https://forms.gle/7Yhi25VX4NwoYmpq7',
                permanent: true,
            },
            {
                source: '/math',
                destination: 'https://discord.gg/mKBfEAGJga',
                permanent: true,
            },
            {
                source: '/school',
                destination: 'https://fremontunified.org/msjhs/',
                permanent: true,
            },
            {
                source: '/warriors',
                destination: 'https://instagram.com/msjwarriors',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
