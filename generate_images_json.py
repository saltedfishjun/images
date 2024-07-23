import os
import json

image_folder = 'images'
image_list = [f for f in os.listdir(image_folder) if os.path.isfile(os.path.join(image_folder, f))]
with open('images.json', 'w') as f:
    json.dump(image_list, f, indent=4)
