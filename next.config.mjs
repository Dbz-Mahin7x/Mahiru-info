/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Optimize font loading
  optimizeFonts: true,
  // Configure transpilation for AOS if needed
  transpilePackages: ['aos'],
};

export default nextConfig;