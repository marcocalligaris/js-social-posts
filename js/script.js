// # Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// # Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali, inventatele*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*

// #Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// #Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

//* Recupero dal DOM gli elemnti che mi servono

let postsList = document.querySelector('.posts-list');
const likeButton = document.querySelector('.js-like-button');
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
        likes: 80,
    },
    {
        id: 2,
        authorName: 'Marco Calligaris',
        profilePhoto: 'https://unsplash.it/300/300?image=40',
        date: '10-05-2021',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=80',
        likes: 80,
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
      <img src="${label.image}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <a class="like-button js-like-button" href="#" data-postid="1">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </a>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${label.likes}</b> persone</div>
      </div>
    </div>
  </div>
    `;
}

postsList.innerHTML = postCards;

