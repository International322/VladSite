/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
        return {
            '/': { page: '/' },
            // Добавьте другие маршруты, если они есть в вашем проекте
        };
    },
}

module.exports = nextConfig
