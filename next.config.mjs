/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['static.vecteezy.com', 'lh3.googleusercontent.com'],
      remotePatterns: [
        {
          hostname: "a0.muscache.com",
          protocol: "https",
          port: "",
        },
        {
          hostname: "ludjngqskkpsyapwtrcd.supabase.co",
          protocol: "https",
          port: "",
        },
      ],
    },
  };
  
export default nextConfig;