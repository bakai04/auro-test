/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    publicRuntimeConfig: {
        baseApiUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    },
};

module.exports = nextConfig;
