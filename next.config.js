const withNextra = require('nextra')
    ('nextra-theme-blog', './theme.config.js')
const withPWA = require("next-pwa");

module.exports = withNextra()

module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development",
    },
});
