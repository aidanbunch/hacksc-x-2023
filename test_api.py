import requests
import json
import base64

# Define data
raw_text = "YOUR_RAW_TEXT_HERE"
audio_path = "hacksctest.wav"

# Encode content of the audio file as base64
with open(audio_path, 'rb') as f:
    audio_base64 = base64.b64encode(f.read()).decode('utf-8')

# URL
url = 'http://127.0.0.1:5000' + '/predict'

# Create JSON payload
payload = {
    'raw_text': raw_text,
    'audio': audio_base64  # Send audio as base64
}

res = requests.post(url, json=payload)

print(res.json())