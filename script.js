window.onload = function() {
    const gallery = document.getElementById('gallery');
    const imageFolder = 'images/';

    fetch('images.json')
        .then(response => response.json())
        .then(images => {
            // 预加载图片
            preloadImages(images.map(image => `${imageFolder}${image}`));

            images.forEach(image => {
                const container = document.createElement('div');
                container.className = 'image-container';

                const img = document.createElement('img');
                img.src = `${imageFolder}${image}`;
                img.onerror = () => {
                    img.src = 'path/to/placeholder.jpg'; // 替代图片路径
                };
                container.appendChild(img);

                const overlay = document.createElement('div');
                overlay.className = 'overlay';
                container.appendChild(overlay);

                gallery.appendChild(container);
            });
        })
        .catch(error => console.error('Error loading images:', error));
};

const preloadImages = (imageUrls) => {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};
