// SunScout beach dataset, transcribed from the production seed
// (app repo: server/scripts/seed.ts, 12 Algarve beaches). This is the
// source of truth for every beach page on the website. The seed is
// demonstration data; pages carry the sample-data label accordingly.

export type Hazard = {
  severity: "advisory" | "warning";
  title: string;
  detail: string;
};

export type Suitability = {
  audience: "families" | "solo" | "couples" | "party" | "clubs";
  label: string;
  score: number | null;
};

export type Beach = {
  slug: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
  description: string;
  decision: string;
  match: number;
  seaTempC: number;
  waveHeightM: number;
  uvIndex: number;
  crowdPercent: number;
  waterQuality: "Good" | "Excellent";
  blueFlag: boolean;
  spotter: boolean;
  lightScore: number;
  goldenDirection: string;
  vibes: string[];
  hazards: Hazard[];
  suitability: Suitability[];
  amenities: string[];
  sunbeds: number;
  umbrellas: number;
  clubsOpen: number;
  airTempC: number;
  windKmh: number;
  cloudPct: number;
  activities: string[];
  clothingOptional: boolean;
};

// Golden hour block shared by the seeded Algarve dataset (Europe/Lisbon).
export const GOLDEN_HOUR = {
  sunrise: "06:12",
  sunset: "20:24",
  goldenHour: "19:42-20:24",
  blueHourMorning: "05:42-06:09",
  blueHourEvening: "20:27-20:54",
};

export const beaches: Beach[] = [
  {
    slug: "praia-da-coelha",
    name: "Praia da Coelha",
    region: "Algarve",
    lat: 37.073841,
    lng: -8.274119,
    description:
      "A compact golden-cliff cove with calm water and two nearby beach clubs.",
    decision: "A strong beach day after 10:30",
    match: 94,
    seaTempC: 19,
    waveHeightM: 0.4,
    uvIndex: 6,
    crowdPercent: 35,
    waterQuality: "Good",
    blueFlag: true,
    spotter: true,
    lightScore: 82,
    goldenDirection: "West-facing cliffs",
    vibes: ["Quiet", "White sand", "Calm water", "Scenic"],
    hazards: [
      {
        severity: "advisory",
        title: "Low-tide rocks at the east end",
        detail:
          "Submerged rocks appear below 0.6 m tide. Swim toward the centre of the cove.",
      },
    ],
    suitability: [
      { audience: "families", label: "Excellent", score: 3 },
      { audience: "solo", label: "Good", score: 2 },
      { audience: "couples", label: "Excellent", score: 3 },
      { audience: "party", label: "Quiet today", score: 1 },
      { audience: "clubs", label: "2 open", score: null },
    ],
    amenities: ["Lifeguard", "Parking", "Restrooms", "Food", "Sandy entry"],
    sunbeds: 18,
    umbrellas: 9,
    clubsOpen: 2,
    airTempC: 24,
    windKmh: 12,
    cloudPct: 18,
    activities: ["Snorkeling", "Beach park", "Chill"],
    clothingOptional: false,
  },
  {
    slug: "praia-do-camilo",
    name: "Praia do Camilo",
    region: "Lagos",
    lat: 37.087493,
    lng: -8.669134,
    description: "A small stair-access cove with dramatic rock formations.",
    decision: "Best for couples before the stairs get busy",
    match: 88,
    seaTempC: 18,
    waveHeightM: 0.5,
    uvIndex: 6,
    crowdPercent: 52,
    waterQuality: "Good",
    blueFlag: false,
    spotter: false,
    lightScore: 79,
    goldenDirection: "South-west exposure",
    vibes: ["Romantic", "Scenic", "Small cove"],
    hazards: [
      {
        severity: "warning",
        title: "Steep staircase access",
        detail:
          "A long wooden staircase descends to the beach. Not suitable for strollers or limited mobility.",
      },
    ],
    suitability: [
      { audience: "families", label: "Fair", score: 1 },
      { audience: "solo", label: "Good", score: 2 },
      { audience: "couples", label: "Excellent", score: 3 },
      { audience: "party", label: "Not suited", score: 0 },
      { audience: "clubs", label: "None", score: null },
    ],
    amenities: ["Parking", "Restrooms", "Sandy entry"],
    sunbeds: 0,
    umbrellas: 0,
    clubsOpen: 0,
    airTempC: 23,
    windKmh: 16,
    cloudPct: 25,
    activities: ["Snorkeling", "Chill", "Photography"],
    clothingOptional: true,
  },
  {
    slug: "praia-da-marinha",
    name: "Praia da Marinha",
    region: "Lagoa",
    lat: 37.090891,
    lng: -8.412762,
    description: "An iconic Algarve beach for swimming, snorkeling and photography.",
    decision: "The clearest water nearby, with a busier shore",
    match: 84,
    seaTempC: 19,
    waveHeightM: 0.6,
    uvIndex: 7,
    crowdPercent: 67,
    waterQuality: "Excellent",
    blueFlag: true,
    spotter: true,
    lightScore: 84,
    goldenDirection: "South-facing arches",
    vibes: ["Iconic", "Snorkeling", "Photography"],
    hazards: [
      {
        severity: "advisory",
        title: "Currents near the east arch",
        detail:
          "A lateral current runs along the eastern rock arch on a falling tide. Stay inside the buoyed swim zone.",
      },
    ],
    suitability: [
      { audience: "families", label: "Good", score: 2 },
      { audience: "solo", label: "Good", score: 2 },
      { audience: "couples", label: "Excellent", score: 3 },
      { audience: "party", label: "Social", score: 2 },
      { audience: "clubs", label: "1 open", score: null },
    ],
    amenities: ["Lifeguard", "Parking", "Food", "Snorkeling"],
    sunbeds: 8,
    umbrellas: 4,
    clubsOpen: 1,
    airTempC: 24,
    windKmh: 14,
    cloudPct: 10,
    activities: ["Snorkeling", "Water sports", "Photography"],
    clothingOptional: false,
  },
  {
    slug: "meia-praia",
    name: "Meia Praia",
    region: "Lagos",
    lat: 37.117842,
    lng: -8.635332,
    description: "A long open beach with accessible facilities and abundant inventory.",
    decision: "Best family space and easiest access today",
    match: 81,
    seaTempC: 18,
    waveHeightM: 0.7,
    uvIndex: 6,
    crowdPercent: 43,
    waterQuality: "Good",
    blueFlag: true,
    spotter: false,
    lightScore: 76,
    goldenDirection: "South-west open bay",
    vibes: ["Family", "Long walks", "Accessible"],
    hazards: [],
    suitability: [
      { audience: "families", label: "Excellent", score: 3 },
      { audience: "solo", label: "Good", score: 2 },
      { audience: "couples", label: "Good", score: 2 },
      { audience: "party", label: "Lively later", score: 2 },
      { audience: "clubs", label: "4 open", score: null },
    ],
    amenities: [
      "Lifeguard",
      "Accessible",
      "Pet-friendly",
      "Parking",
      "Restrooms",
      "Food",
    ],
    sunbeds: 42,
    umbrellas: 21,
    clubsOpen: 4,
    airTempC: 23,
    windKmh: 18,
    cloudPct: 30,
    activities: ["Beach park", "Water sports", "Walking", "Accessible"],
    clothingOptional: false,
  },
  {
    slug: "praia-do-carvalho",
    name: "Praia do Carvalho",
    region: "Lagoa",
    lat: 37.086338,
    lng: -8.431895,
    description: "A hidden cliff cove reached through a rock tunnel.",
    decision: "Quiet and dramatic, but less practical for families",
    match: 77,
    seaTempC: 19,
    waveHeightM: 0.5,
    uvIndex: 6,
    crowdPercent: 29,
    waterQuality: "Good",
    blueFlag: false,
    spotter: false,
    lightScore: 80,
    goldenDirection: "East-facing cove",
    vibes: ["Hidden gem", "Quiet", "Cliff cove"],
    hazards: [
      {
        severity: "warning",
        title: "Tunnel access flooded at high tide",
        detail:
          "The hand-carved tunnel to the beach becomes waist-deep above 1.2 m tide. Time your visit around low tide.",
      },
    ],
    suitability: [
      { audience: "families", label: "Fair", score: 1 },
      { audience: "solo", label: "Excellent", score: 3 },
      { audience: "couples", label: "Excellent", score: 3 },
      { audience: "party", label: "Quiet", score: 0 },
      { audience: "clubs", label: "None", score: null },
    ],
    amenities: ["Parking", "Sandy entry"],
    sunbeds: 0,
    umbrellas: 0,
    clubsOpen: 0,
    airTempC: 24,
    windKmh: 10,
    cloudPct: 15,
    activities: ["Chill", "Hidden", "Naturist"],
    clothingOptional: true,
  },
  {
    slug: "praia-da-rocha",
    name: "Praia da Rocha",
    region: "Portimão",
    lat: 37.117577,
    lng: -8.536623,
    description: "A broad urban beach with high inventory and a strong social scene.",
    decision: "Best for beach clubs and a social afternoon",
    match: 73,
    seaTempC: 19,
    waveHeightM: 0.8,
    uvIndex: 7,
    crowdPercent: 76,
    waterQuality: "Good",
    blueFlag: true,
    spotter: false,
    lightScore: 74,
    goldenDirection: "South-facing broad bay",
    vibes: ["Party", "Beach clubs", "Social"],
    hazards: [
      {
        severity: "advisory",
        title: "High crowd density after 14:00",
        detail:
          "Crowd forecasts exceed 85% through late afternoon. Reserve sunbeds ahead or arrive before 11:00.",
      },
    ],
    suitability: [
      { audience: "families", label: "Good", score: 2 },
      { audience: "solo", label: "Excellent", score: 3 },
      { audience: "couples", label: "Good", score: 2 },
      { audience: "party", label: "Excellent", score: 3 },
      { audience: "clubs", label: "7 open", score: null },
    ],
    amenities: [
      "Lifeguard",
      "Pet-friendly",
      "Parking",
      "Restrooms",
      "Food",
      "Nightlife",
    ],
    sunbeds: 68,
    umbrellas: 34,
    clubsOpen: 7,
    airTempC: 25,
    windKmh: 20,
    cloudPct: 35,
    activities: ["Beach club", "Water sports", "Nightlife"],
    clothingOptional: false,
  },
  {
    slug: "praia-da-falesia",
    name: "Praia da Falésia",
    region: "Albufeira",
    lat: 37.089,
    lng: -8.184,
    description: "A six-kilometre beach with golden sand and towering ochre cliffs.",
    decision: "Long sandy stretch backed by dramatic red cliffs",
    match: 79,
    seaTempC: 19,
    waveHeightM: 0.6,
    uvIndex: 7,
    crowdPercent: 48,
    waterQuality: "Excellent",
    blueFlag: true,
    spotter: false,
    lightScore: 78,
    goldenDirection: "South-facing cliffs",
    vibes: ["Long walks", "Scenic", "Family"],
    hazards: [],
    suitability: [
      { audience: "families", label: "Excellent", score: 3 },
      { audience: "solo", label: "Good", score: 2 },
      { audience: "couples", label: "Good", score: 2 },
      { audience: "party", label: "Fair", score: 1 },
      { audience: "clubs", label: "1 open", score: null },
    ],
    amenities: ["Lifeguard", "Accessible", "Parking", "Restrooms", "Food"],
    sunbeds: 30,
    umbrellas: 15,
    clubsOpen: 1,
    airTempC: 24,
    windKmh: 16,
    cloudPct: 22,
    activities: ["Walking", "Beach park", "Chill"],
    clothingOptional: false,
  },
  {
    slug: "praia-do-vau",
    name: "Praia do Vau",
    region: "Portimão",
    lat: 37.123,
    lng: -8.548,
    description: "A sheltered cove between Praia da Rocha and Alvor, great for kids.",
    decision: "Sheltered cove, calm and family-friendly",
    match: 76,
    seaTempC: 19,
    waveHeightM: 0.4,
    uvIndex: 6,
    crowdPercent: 44,
    waterQuality: "Good",
    blueFlag: true,
    spotter: false,
    lightScore: 77,
    goldenDirection: "West-facing cove",
    vibes: ["Family", "Calm water", "Accessible"],
    hazards: [],
    suitability: [
      { audience: "families", label: "Excellent", score: 3 },
      { audience: "solo", label: "Good", score: 2 },
      { audience: "couples", label: "Good", score: 2 },
      { audience: "party", label: "Not suited", score: 0 },
      { audience: "clubs", label: "None", score: null },
    ],
    amenities: ["Lifeguard", "Accessible", "Parking", "Restrooms", "Food"],
    sunbeds: 22,
    umbrellas: 11,
    clubsOpen: 0,
    airTempC: 23,
    windKmh: 12,
    cloudPct: 18,
    activities: ["Beach park", "Water sports", "Accessible"],
    clothingOptional: false,
  },
  {
    slug: "praia-da-batata",
    name: "Praia da Batata",
    region: "Lagos",
    lat: 37.103,
    lng: -8.671,
    description:
      "Lagos' closest town beach, popular with younger crowds and surf schools.",
    decision: "Town beach with a lively social scene",
    match: 72,
    seaTempC: 18,
    waveHeightM: 0.7,
    uvIndex: 7,
    crowdPercent: 65,
    waterQuality: "Good",
    blueFlag: false,
    spotter: false,
    lightScore: 75,
    goldenDirection: "South-west open bay",
    vibes: ["Social", "Surf school", "Town"],
    hazards: [
      {
        severity: "advisory",
        title: "Occasional shore break",
        detail:
          "Small waves can dump on the sandbar at low tide. Swim near the lifeguard tower.",
      },
    ],
    suitability: [
      { audience: "families", label: "Good", score: 2 },
      { audience: "solo", label: "Good", score: 2 },
      { audience: "couples", label: "Good", score: 2 },
      { audience: "party", label: "Social", score: 2 },
      { audience: "clubs", label: "2 open", score: null },
    ],
    amenities: ["Lifeguard", "Parking", "Restrooms", "Food", "Surf school"],
    sunbeds: 16,
    umbrellas: 8,
    clubsOpen: 2,
    airTempC: 24,
    windKmh: 18,
    cloudPct: 28,
    activities: ["Beach club", "Water sports", "Nightlife"],
    clothingOptional: false,
  },
  {
    slug: "ilha-deserta-barreta",
    name: "Ilha Deserta (Barreta)",
    region: "Faro",
    lat: 36.967,
    lng: -7.963,
    description:
      "A pristine barrier island reachable by boat; the eastern end is clothing-optional.",
    decision: "Wild, clothing-optional island escape",
    match: 70,
    seaTempC: 19,
    waveHeightM: 0.5,
    uvIndex: 7,
    crowdPercent: 18,
    waterQuality: "Excellent",
    blueFlag: false,
    spotter: false,
    lightScore: 81,
    goldenDirection: "South-facing island",
    vibes: ["Hidden gem", "Wild", "Clothing-optional"],
    hazards: [
      {
        severity: "advisory",
        title: "No lifeguard on the eastern end",
        detail:
          "The clothing-optional stretch has no lifeguard. Swim where others are present.",
      },
    ],
    suitability: [
      { audience: "families", label: "Fair", score: 1 },
      { audience: "solo", label: "Excellent", score: 3 },
      { audience: "couples", label: "Excellent", score: 3 },
      { audience: "party", label: "Quiet", score: 0 },
      { audience: "clubs", label: "None", score: null },
    ],
    amenities: ["Parking", "Boat access"],
    sunbeds: 0,
    umbrellas: 0,
    clubsOpen: 0,
    airTempC: 25,
    windKmh: 22,
    cloudPct: 12,
    activities: ["Chill", "Hidden", "Naturist", "Walking"],
    clothingOptional: true,
  },
  {
    slug: "praia-do-castelo",
    name: "Praia do Castelo",
    region: "Albufeira",
    lat: 37.027,
    lng: -8.272,
    description: "A scenic cove beneath a clifftop castle viewpoint.",
    decision: "Dramatic rock formations and a quiet shore",
    match: 68,
    seaTempC: 19,
    waveHeightM: 0.5,
    uvIndex: 6,
    crowdPercent: 33,
    waterQuality: "Good",
    blueFlag: true,
    spotter: false,
    lightScore: 80,
    goldenDirection: "South-facing cove",
    vibes: ["Scenic", "Quiet", "Photography"],
    hazards: [],
    suitability: [
      { audience: "families", label: "Fair", score: 1 },
      { audience: "solo", label: "Good", score: 2 },
      { audience: "couples", label: "Excellent", score: 3 },
      { audience: "party", label: "Quiet", score: 0 },
      { audience: "clubs", label: "None", score: null },
    ],
    amenities: ["Lifeguard", "Parking", "Restrooms", "Food"],
    sunbeds: 10,
    umbrellas: 5,
    clubsOpen: 0,
    airTempC: 24,
    windKmh: 14,
    cloudPct: 16,
    activities: ["Chill", "Photography", "Hidden"],
    clothingOptional: false,
  },
  {
    slug: "praia-da-benagil",
    name: "Praia de Benagil",
    region: "Lagoa",
    lat: 37.087,
    lng: -8.428,
    description:
      "A small fishing beach and the departure point for the Benagil cave tours.",
    decision: "Gateway to the famous Benagil sea cave",
    match: 66,
    seaTempC: 19,
    waveHeightM: 0.6,
    uvIndex: 7,
    crowdPercent: 58,
    waterQuality: "Good",
    blueFlag: false,
    spotter: true,
    lightScore: 79,
    goldenDirection: "South-facing cove",
    vibes: ["Iconic", "Sea cave", "Boat tours"],
    hazards: [
      {
        severity: "warning",
        title: "Sea cave tours only with a guide",
        detail:
          "Swimming into the Benagil cave is dangerous due to swell and boat traffic. Take a licensed boat or kayak tour.",
      },
    ],
    suitability: [
      { audience: "families", label: "Good", score: 2 },
      { audience: "solo", label: "Good", score: 2 },
      { audience: "couples", label: "Excellent", score: 3 },
      { audience: "party", label: "Social", score: 2 },
      { audience: "clubs", label: "1 open", score: null },
    ],
    amenities: ["Lifeguard", "Parking", "Food", "Boat tours"],
    sunbeds: 12,
    umbrellas: 6,
    clubsOpen: 1,
    airTempC: 24,
    windKmh: 15,
    cloudPct: 14,
    activities: ["Water sports", "Photography", "Hidden"],
    clothingOptional: false,
  },
];

export function getBeach(slug: string): Beach | undefined {
  return beaches.find((b) => b.slug === slug);
}

export const regions: string[] = [...new Set(beaches.map((b) => b.region))].sort();

export function beachesByRegion(): Array<{ region: string; beaches: Beach[] }> {
  return regions.map((region) => ({
    region,
    beaches: beaches.filter((b) => b.region === region),
  }));
}

// Two nearest beaches by great-circle distance, for the "nearby" section.
export function nearbyBeaches(slug: string, count = 2): Beach[] {
  const origin = getBeach(slug);
  if (!origin) return [];
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dist = (b: Beach) => {
    const dLat = toRad(b.lat - origin.lat);
    const dLng = toRad(b.lng - origin.lng);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(origin.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(a));
  };
  return beaches
    .filter((b) => b.slug !== slug)
    .map((b) => ({ b, d: dist(b) }))
    .sort((x, y) => x.d - y.d)
    .slice(0, count)
    .map((x) => x.b);
}

export const audienceLabels: Record<Suitability["audience"], string> = {
  families: "Families",
  solo: "Solo",
  couples: "Couples",
  party: "Party and clubs",
  clubs: "Beach clubs open",
};
