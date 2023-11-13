/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        port: "1337",
        protocol: "http"
      }
    ]
  }
}

export default nextConfig
