/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Tells Next.js to generate static HTML files
  basePath: "/28-next-basics-starting-project", // Adjusts internal asset paths to match your sub-folder
  images: {
    unoptimized: true, // Disables server-dependent image optimization features
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
