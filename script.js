window.onload = function() {
    const gallery = document.getElementById('gallery');
    const imageFolder = 'images/';

    fetch('images.json')
        .then(response => response.json())
        .then(images => {
            images.forEach(image => {
                const container = document.createElement('div');
                container.className = 'image-container';

                const img = document.createElement('img');
                img.src = `${imageFolder}${image}`;
                container.appendChild(img);

                const overlay = document.createElement('div');
                overlay.className = 'overlay';
                container.appendChild(overlay);

                gallery.appendChild(container);
            });
        })
        .catch(error => console.error('Error loading images:', error));
};

