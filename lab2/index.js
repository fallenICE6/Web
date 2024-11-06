import { data } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('cont');

    data.forEach(news => {
        const item = document.createElement('article');
        item.setAttribute('class', 'new_Item');
        item.setAttribute('id', news.id);
        item.innerHTML = `
            <h2 class="new_Item__title">
                <a href="news.html?id=${news.id}" onclick="saveId(this)">${news.title}</a>
            </h2>
            <figure class="new_Item__img">
                <img src="${news.img}" alt="${news.title}">
            </figure>
            <p class="new_Item__p">
                ${news.shortDesc}
            </p>
        `;
        content.appendChild(item);
    });
});