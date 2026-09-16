import type { NextConfig } from "next";

// The site deploys as a GitHub Pages project site at
// https://targetpraks.github.io/sunscout-web/ so the static export needs the
// basePath in production builds. Next auto-prefixes _next assets, the app
// icon and metadata images with basePath; raw <img src> strings must go
// through withBasePath() from src/config/site.ts instead.
//
// A future custom domain is a one-line change: remove the basePath here and
// update SITE_URL in src/config/site.ts (BASE_PATH derives from the same
// condition and must stay in sync with it).
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/sunscout-web" : undefined;

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
};

export default nextConfig;
