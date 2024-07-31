function highlight(element) {
    element.style.backgroundColor = '#e8f5e9';
}

function unhighlight(element) {
    element.style.backgroundColor = 'white';
}

function showMore(event, button) {
    event.stopPropagation();
    const moreInfo = button.nextElementSibling;
    moreInfo.style.display = moreInfo.style.display === 'none' ? 'block' : 'none';
}

function showModal(element) {
    const title = element.querySelector('h2').innerText;
    const image = element.querySelector('img').src;
    const description = element.querySelector('p').innerText;
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-description').innerText = description;
    modal.style.display = 'block';
}
