import os
import json

image_folder = 'images'
image_list = [f for f in os.listdir(image_folder) if os.path.isfile(os.path.join(image_folder, f))]

print(f"Found images: {image_list}")  # Debug line

with open('images.json', 'w') as f:
    json.dump(image_list, f, indent=4)

print("images.json has been written")  # Debug line
