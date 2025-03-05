document.addEventListener('DOMContentLoaded', function () 
{

    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.classList.add('modal');
    modal.innerHTML = `
        <span id="closeModal" class="close-btn">&times;</span>
        <img id="modalImage" class="modal-content">
    `;
    document.body.appendChild(modal);  // Add the modal to the body

    const modalImage = document.getElementById('modalImage');
    const closeButton = document.getElementById('closeModal');

    const imageLinks = document.querySelectorAll('a.reference.internal.image-reference');

    imageLinks.forEach(function (link) {
        const img = link.querySelector('img');
        if (img) 
        {
            const div = document.createElement('div');
            div.classList.add('reference', 'internal', 'image-reference');

            div.appendChild(img);

            div.setAttribute('href', link.getAttribute('href'));

            link.parentNode.replaceChild(div, link);

            div.addEventListener('click', function () {
                modalImage.src = img.src;
                modal.style.display = 'flex'; 
            });
        }
    });

    closeButton.addEventListener('click', function () 
    {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function (event) 
    {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
