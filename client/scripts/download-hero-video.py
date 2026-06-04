"""
Download royalty-free hero background video.
Mixkit Stock Video Free License — commercial use.

Run: python client/scripts/download-hero-video.py
Output: client/public/videos/allied-axis-services.mp4
"""
from pathlib import Path
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "videos" / "allied-axis-services.mp4"

# Businessman at laptop with graphs, city window — professional agency feel
DOWNLOAD_URL = "https://assets.mixkit.co/videos/308/308-720.mp4"
SOURCE_PAGE = "https://mixkit.co/free-stock-video/person-working-on-the-laptop-with-graphs-in-the-background-308/"


def main():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    print(f"Downloading hero video -> {OUT}")
    urllib.request.urlretrieve(DOWNLOAD_URL, OUT)
    size_kb = OUT.stat().st_size // 1024
    print(f"Done: {OUT} ({size_kb} KB)")
    print(f"Source: {SOURCE_PAGE}")


if __name__ == "__main__":
    main()
