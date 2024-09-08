/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
   
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      },
    ],
  },
  env: {
    PRODUCT_KEY_URL: process.env.PRODUCT_KEY,
  },
  
};

export default nextConfig;
