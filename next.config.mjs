
const nextConfig = {
    /* config options here */
    images: {
      domains: ['images.unsplash.com',"via.placeholder.com"],
    },eslint: {
      ignoreDuringBuilds: true, // Disables ESLint during builds
    },
    typescript: {
      ignoreBuildErrors: true, // Skips TypeScript errors during builds
    },
  };
  
  export default nextConfig;