// Site-wide config constants. The product name and hosting are open decisions
// (PRD section 10, decided 16 Sep 2026: domain deferred, GitHub Pages for now),
// so everything name- or URL-shaped lives here. A rename or domain move is a
// change to this file plus the wordmark, not a copy rewrite.

export const SITE_NAME = "SunScout";

export const SITE_TAGLINE = "The beach app, on the data side.";

export const SITE_DESCRIPTION =
  "SunScout turns live sea, weather and crowd data into a simple answer: which beach is worth your day. Conditions, amenities and booking in one place.";

// Live URL. Update when a custom domain is secured.
export const SITE_URL = "https://targetpraks.github.io/sunscout-web";

// Must mirror `basePath` in next.config.ts. Used for raw asset references
// (img src strings, OG images) which Next does not auto-prefix.
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/sunscout-web" : "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}

// Enquiry routing for v1 preview. Swap for a form endpoint or CRM when the
// platform build ships.
export const CONTACT_EMAIL = "rickymaio@gmail.com";

// Analytics: self-hosted (Plausible or Umami on the mini) per the 16 Sep 2026
// decision. Leave empty to omit the script entirely; no third-party trackers.
export const ANALYTICS_DOMAIN = "";

// The public website renders a build-time snapshot of the seeded dataset. The
// app API is LAN-only today, so every number on this site is labelled with
// this note until the public read-only endpoint ships (platform PRD 6.4).
export const DATA_NOTE = "Sample dataset";
export const DATA_NOTE_LONG =
  "Sample dataset. These are seeded demonstration values, not live readings. The app refreshes conditions from its data providers.";
