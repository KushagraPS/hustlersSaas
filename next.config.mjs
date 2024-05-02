/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pedalstart.com', 'images.unsplash.com', 'onlinemediacafe.com','encrypted-tbn0.gstatic.com','media.licdn.com','images.yourstory.com','img-cdn.thepublive.com','s3.ap-south-1.amazonaws.com','viestories.com'], // Add 'pedalstart.com' to the list of domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Add metadata configuration here
  
};

export default nextConfig;
