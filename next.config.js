/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SITE_URL: 'http://localhost:3000',
        EMAIL_SERVER: 'mailserver3.vhosting-it.com',
        EMAIL_PORT: 465,
        EMAIL_SECURE: true,
        EMAIL_AUTH: 'postmaster@cisasater.org',
        EMAIL_PASS: 'MakaPumo#1976!',
        EMAIL_FROM: 'commissione@cisasater.org',
        EMAIL_TO: 'm.fontanili@gmail.com',
    },
    reactStrictMode: false,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    webpack(config) {
        return {
            ...config,
            module: {
                ...config.module,
                rules: [
                    ...config.module.rules,
                    {
                        test: /\.svg$/i,
                        issuer: /\.[jt]sx?$/,
                        use: ['@svgr/webpack'],
                    },
                    {
                        test: /\.html$/i,
                        loader: 'html-loader',
                    }
                ],
            },
        };
    },
}

module.exports = nextConfig
