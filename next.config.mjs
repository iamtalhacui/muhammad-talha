// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:true,
  images: {
    unoptimized: true // needed for GitHub Pages
  }
};

export default nextConfig;
