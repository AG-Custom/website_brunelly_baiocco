import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1360, 1600, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 600, 650, 800, 1000],
    
    minimumCacheTTL: 31536000,
    
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
};

export default nextConfig;
