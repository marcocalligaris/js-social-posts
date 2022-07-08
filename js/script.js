//* Funzioni

const increaseProperty = (arr, key) => {
  let number = 0;
  for (item of arr) {
    number += item.key++;
  }
}

//* Recupero dal DOM gli elemnti che mi servono

let postsList = document.querySelector('.posts-list');
let likeLabel = document.querySelector('.like-button__label');
const likeButtons = document.querySelectorAll('.js-like-button');
const likesCounter = document.querySelector('.js-likes-counter');

//* Creo l'array con gli oggetti 

const postStructure = [
    {
        id: 1,
        authorName: 'Phil Mangione',
        profilePhoto: 'https://unsplash.it/300/300?image=15',
        date: '07-06-2022',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=171',
        likes: 0,
    },
    {
        id: 2,
        authorName: 'Marco Calligaris',
        profilePhoto: 'https://unsplash.it/300/300?image=40',
        date: '10-05-2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=80',
        likes: 5,
    },
]

console.table(postStructure)

let postCards = '';
for (let i = 0; i < postStructure.length; i++) {
    const label = postStructure[i];
    postCards += `
    <div class="post">
    <div class="post__header">
      <div class="post-meta">
      <div class="post-meta__icon">
      <img class="profile-pic" src="${label.profilePhoto}" alt="${label.authorName}" />
      </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${label.authorName}</div>
          <div class="post-meta__time">${label.date}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
    ${label.text}
    </div>
    <div class="post__image">
    <img src="${label.image}" alt="${label.id}" />
    </div>
    <div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" href="#" data-postid="${label.id}">
          <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-${label.id}" class="js-likes-counter">${label.likes}</b> persone</div>
      </div>
      </div>
      </div>
    `;
}

postsList.innerHTML = postCards;


for(const button of likeButtons) {
  button.addEventListener ('click', () => {
    event.preventDefault();
    button.classList.add('like-button--liked');

    const postId = button.dataset.postid;
    const likesCounter = document.getElementById(`like-counter-${postId}`);
    let likes = parseInt(likesCounter.innerText);
    likesCounter.innerText = ++likes;
  })
}

