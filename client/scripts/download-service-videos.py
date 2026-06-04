"""
Download hover videos for all service cards (Mixkit — free commercial license).

Run: python client/scripts/download-service-videos.py
"""
from pathlib import Path
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "videos" / "services"

VIDEOS = {
    "branding.mp4": "https://assets.mixkit.co/videos/50602/50602-720.mp4",
    "ai-automation.mp4": "https://assets.mixkit.co/videos/51214/51214-720.mp4",
    "website.mp4": "https://assets.mixkit.co/videos/4830/4830-720.mp4",
    "marketing.mp4": "https://assets.mixkit.co/videos/42648/42648-720.mp4",
    # Hands posting on smartphone — social media management
    "social-media.mp4": "https://assets.mixkit.co/videos/4915/4915-720.mp4",
    "crm-leads.mp4": "https://assets.mixkit.co/videos/4547/4547-720.mp4",
    "outreach.mp4": "https://assets.mixkit.co/videos/4872/4872-720.mp4",
    "seo.mp4": "https://assets.mixkit.co/videos/308/308-720.mp4",
    # Designer writing in notebook — authority content (blogs, copy, case studies)
    "content.mp4": "https://assets.mixkit.co/videos/29982/29982-720.mp4",
    "email.mp4": "https://assets.mixkit.co/videos/4907/4907-720.mp4",
    "video-production.mp4": "https://assets.mixkit.co/videos/41289/41289-720.mp4",
    "strategy.mp4": "https://assets.mixkit.co/videos/4809/4809-720.mp4",
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
