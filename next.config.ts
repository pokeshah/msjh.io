import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/google',
                destination: 'https://www.google.com',
                permanent: true,
            },
            {
                source: '/github',
                destination: 'https://github.com',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
