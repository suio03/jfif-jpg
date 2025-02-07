/** @type {import('next').NextConfig} */

const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    webpack: (config, { dev, isServer }) => {
        // Disable webpack cache in development
        config.cache = false;
        return config;
    },
};

module.exports = withNextIntl(nextConfig);