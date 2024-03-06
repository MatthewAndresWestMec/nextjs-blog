/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // swcMinifyMode: true, 
    images:{
        remotePatterns: [
            {
              hostname: 'upload.wikimedia.org'
            },
            {
                hostname: 'res.cloudinary.com'
              }
          ]
    }
};

export default nextConfig;
