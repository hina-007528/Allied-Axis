"""Deprecated alias — use download-hero-video.py instead."""
import subprocess
import sys
from pathlib import Path

if __name__ == "__main__":
    script = Path(__file__).resolve().parent / "download-hero-video.py"
    subprocess.run([sys.executable, str(script)], check=True)
