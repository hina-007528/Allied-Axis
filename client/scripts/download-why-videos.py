"""
Download hover videos for Why Allied Axis cards.
Mixkit Stock Video Free License — commercial use.

Run: python client/scripts/download-why-videos.py
"""
from pathlib import Path
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "videos" / "why"

VIDEOS = {
    # Watch hands moving — speed & fast delivery
    "speed.mp4": "https://assets.mixkit.co/videos/3653/3653-720.mp4",
    # Coworkers collaborating in corporate room — partnership
    "partner.mp4": "https://assets.mixkit.co/videos/4872/4872-720.mp4",
    # Futuristic devices — AI-hybrid approach
    "ai-hybrid.mp4": "https://assets.mixkit.co/videos/99786/99786-720.mp4",
    # Screen reflection in glasses — metrics & accountability
    "accountability.mp4": "https://assets.mixkit.co/videos/221/221-720.mp4",
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
