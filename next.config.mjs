// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // tells Next.js to generate static HTML
  basePath: "/my-portfolio", // your repo name
  images: {
    unoptimized: true // needed for GitHub Pages
  }
};

export default nextConfig;
