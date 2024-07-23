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
                img.alt = image;
                img.onerror = () => {
                    img.src = 'path/to/placeholder.jpg'; // 替代图片路径
                };
                img.onclick = () => openModal(img.src, img.alt);
                container.appendChild(img);

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

const openModal = (src, alt) => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');

    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = alt;

    const close = document.getElementsByClassName('close')[0];
    close.onclick = () => { 
        modal.style.display = "none";
    };
};
