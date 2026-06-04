"""
Download blog cover images (Pexels — free license).
One unique, topic-matched photo per article.

Run: python client/scripts/download-blog-images.py
"""
from pathlib import Path
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "images" / "blog"

PEXELS = "https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop"


def url(photo_id):
    return PEXELS.format(id=photo_id)


# what-is-allied-axis + who-is-maryam-fatima use /images/logo.png and /images/maryam.jpeg

IMAGES = {
    "case-study-ai-lead-generation-b2b-commodities.jpg": url(906494),
    "case-study-uae-tourism-startup-digital-launch.jpg": url(2387873),
    "case-study-uae-hr-consulting-operations.jpg": url(3184298),
    "case-study-uk-digital-agency-operations.jpg": url(373912),
    "travel-tourism-marketing-uae.jpg": url(912050),
    "consulting-firm-lead-generation-uae.jpg": url(3184418),
    "hr-recruitment-marketing-uae.jpg": url(5668772),
    "visa-immigration-consulting-marketing-uae.jpg": url(4814830),
    "management-consulting-marketing-uae.jpg": url(3184465),
    "executive-search-marketing-uae.jpg": url(1181244),
    "ai-marketing-dubai-business-growth.jpg": url(8386443),
    "lead-generation-pakistan-pipelines.jpg": url(669619),
    "tour-operator-marketing-pakistan.jpg": url(2387871),
    "recruitment-agency-marketing-pakistan.jpg": url(7688338),
    "tourism-marketing-strategy-uae.jpg": url(3250612),
    "professional-services-digital-growth-uae.jpg": url(256888),
    "why-ai-marketing-agencies-fail-maryam-fatima.jpg": url(669621),
    "maryam-fatima-b2b-lead-generation-framework.jpg": url(3861969),
    "businesses-dont-have-marketing-problem.jpg": url(3184465),
    "school-website-losing-parents.jpg": url(207691),
    "education-enrolment-systems-maryam-fatima.jpg": url(267885),
}


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    headers = {"User-Agent": "Mozilla/5.0"}
    for name, img_url in IMAGES.items():
        dest = OUT_DIR / name
        print(f"Downloading {name} ...")
        req = urllib.request.Request(img_url, headers=headers)
        with urllib.request.urlopen(req, timeout=60) as resp:
            dest.write_bytes(resp.read())
        print(f"  -> {dest} ({dest.stat().st_size // 1024} KB)")
    print("Done.")


if __name__ == "__main__":
    main()
