#!/usr/bin/env python3
"""Generate OG share cards (1200x630 PNG) for SunScout.

cairosvg is broken on this host, so the cards are drawn directly with PIL:
brand tokens, beach name, region, tagline. Run from the repo root:
    python3 scripts/generate_og.py
"""

import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
SAND = (250, 246, 240)
MARINE = (15, 30, 46)
TEAL = (10, 110, 120)
CORAL = (255, 107, 92)
SEAGREEN = (46, 139, 107)

FONT_CANDIDATES = [
    ("/System/Library/Fonts/Helvetica.ttc", 1),  # Bold
    ("/System/Library/Fonts/Helvetica.ttc", 0),
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/System/Library/Fonts/Supplemental/Arial.ttf",
]


def load_font(size):
    for candidate in FONT_CANDIDATES:
        try:
            if isinstance(candidate, tuple):
                return ImageFont.truetype(candidate[0], size, index=candidate[1])
            return ImageFont.truetype(candidate, size)
        except Exception:
            continue
    raise RuntimeError("No usable TTF font found")


def draw_card(title, subtitle, tagline, path):
    img = Image.new("RGB", (W, H), MARINE)
    d = ImageDraw.Draw(img)

    # Sun disc, upper right.
    d.ellipse([W - 320, -120, W + 120, 220], fill=CORAL)

    # Wave bands, lower half.
    for i, (y, amp, color) in enumerate(
        [(430, 18, TEAL), (490, 22, SEAGREEN), (550, 26, TEAL)]
    ):
        points = []
        for x in range(0, W + 20, 20):
            points.append((x, y + amp * __import__("math").sin(x / 90 + i)))
        d.line(points, fill=color, width=10)

    title_font = load_font(84 if len(title) <= 22 else 64)
    sub_font = load_font(34)
    tag_font = load_font(26)

    d.text((80, 150), title, font=title_font, fill=SAND)
    d.text((80, 150 + title_font.size + 28), subtitle, font=sub_font, fill=(160, 180, 195))

    # Wordmark strip.
    d.ellipse([80, H - 130, 116, H - 94], fill=CORAL)
    d.text((130, H - 138), tagline, font=tag_font, fill=SAND)

    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path, "PNG", optimize=True)
    print("wrote", path)


BEACHES = [
    ("praia-da-coelha", "Praia da Coelha", "Algarve, Portugal"),
    ("praia-do-camilo", "Praia do Camilo", "Lagos, Portugal"),
    ("praia-da-marinha", "Praia da Marinha", "Lagoa, Portugal"),
    ("meia-praia", "Meia Praia", "Lagos, Portugal"),
    ("praia-do-carvalho", "Praia do Carvalho", "Lagoa, Portugal"),
    ("praia-da-rocha", "Praia da Rocha", "Portimao, Portugal"),
    ("praia-da-falesia", "Praia da Falesia", "Albufeira, Portugal"),
    ("praia-do-vau", "Praia do Vau", "Portimao, Portugal"),
    ("praia-da-batata", "Praia da Batata", "Lagos, Portugal"),
    ("ilha-deserta-barreta", "Ilha Deserta", "Faro, Portugal"),
    ("praia-do-castelo", "Praia do Castelo", "Albufeira, Portugal"),
    ("praia-da-benagil", "Praia de Benagil", "Lagoa, Portugal"),
]

TAGLINE = "SunScout - The beach app, on the data side."

root = os.path.join(os.path.dirname(__file__), "..", "public", "og")
draw_card("SunScout", "Which beach is worth your day, right now?", TAGLINE,
          os.path.join(root, "home.png"))
for slug, name, region in BEACHES:
    draw_card(name, region, TAGLINE, os.path.join(root, f"beach-{slug}.png"))
print("done")