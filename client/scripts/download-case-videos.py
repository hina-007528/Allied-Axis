"""
Download hover videos for portfolio case cards (Mixkit — free commercial license).

Each clip is unique vs hero, services, and why cards. IDs must not overlap those scripts.

Run: python client/scripts/download-case-videos.py
"""
from pathlib import Path
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "videos" / "cases"

# slug file -> Mixkit 720p (videoFree only)
VIDEOS = {
    # B2B commodities / international trade — port containers
    "global-b2b-commodities.mp4": "https://assets.mixkit.co/videos/4450/4450-720.mp4",
    # UAE tourism — tourist bay with boats
    "uae-tourism-startup.mp4": "https://assets.mixkit.co/videos/3488/3488-720.mp4",
    # HR consulting — team meeting with business graphs
    "uae-hr-consulting.mp4": "https://assets.mixkit.co/videos/42643/42643-720.mp4",
    # UK digital agency — London financial district
    "uk-digital-agency.mp4": "https://assets.mixkit.co/videos/4495/4495-720.mp4",
    # UAE contracting — building under construction at sunset
    "uae-contracting.mp4": "https://assets.mixkit.co/videos/3971/3971-720.mp4",
    # Manpower supply — workers in hard hats on site
    "manpower-supply.mp4": "https://assets.mixkit.co/videos/1436/1436-720.mp4",
    # E-commerce clothing — clothing store entrance
    "ecommerce-clothing.mp4": "https://assets.mixkit.co/videos/3494/3494-720.mp4",
    # Education enrollment — students walking to campus
    "education-enrollment.mp4": "https://assets.mixkit.co/videos/4519/4519-720.mp4",
}


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for name, url in VIDEOS.items():
        dest = OUT_DIR / name
        print(f"Downloading {name} ...")
        urllib.request.urlretrieve(url, dest)
        print(f"  -> {dest} ({dest.stat().st_size // 1024} KB)")
    print("Done.")


if __name__ == "__main__":
    main()
