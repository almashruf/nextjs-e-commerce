/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.dummyjson.com",
        },
        {
            protocol: "https",
            hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "dummyjson.com",
        },
        
      ],
    },
  };

export default nextConfig;
