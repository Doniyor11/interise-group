/** @type {import('next').NextConfig} */
const path = require("path")
const nextTranslate = require("next-translate-plugin")
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
  },
  experimental: {
    esmExternals: "loose",
  },
  transpilePackages: ["@uiw/react-markdown-preview", "react-markdown"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yfcxgyholyjtwudzsbbf.supabase.co",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname, "src", "app")
    config.module.rules.push({
      loader: "@svgr/webpack",
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      options: {
        prettier: true,
        svgo: false,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: { removeViewBox: false },
              },
            },
          ],
        },
        titleProp: false,
      },
    })
    return config
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/main",
      },
    ]
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
}

module.exports = nextTranslate(nextConfig)
