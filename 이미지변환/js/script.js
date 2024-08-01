

document.addEventListener('DOMContentLoaded', function() {
    const originalImage = document.getElementById('originalImage');
    const newImage = document.getElementById('newImage');
    const text = document.getElementById('text');
    const container = document.getElementById('container');

    originalImage.addEventListener('click', function() {
        originalImage.style.display = 'none';
        text.style.display = 'none';
        newImage.style.display = 'block';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
    });

    newImage.addEventListener('click', function() {
        newImage.style.display = 'none';
        originalImage.style.display = 'block';
        text.style.display = 'block';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
    });
});
