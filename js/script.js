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
const postCard = document.querySelector('.post');
const postIcon = document.querySelector('.post-meta__icon');
const profilePic = document.querySelector('.profile-pic');
const authorName = document.querySelector('.post-meta__author');
const postDate = document.querySelector('.post-meta__time');
const postText = document.querySelector('.post__text');
const postImage = document.querySelector('.post__image');
const likeButton = document.querySelector('.js-like-button');
const likesCounter = document.querySelector('.js-likes-counter');

//* Creo l'array con gli oggetti 

const postStructure = [
    {
        id: 1,
        author: 'Phil Mangione',
        profilePhoto: 'https://unsplash.it/300/300?image=15',
        date: '07-06-2022',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=171',
        likes: 80,
    },
    {
        id: 1,
        author: 'Phil Mangione',
        profilePhoto: 'https://unsplash.it/300/300?image=15',
        date: '07-06-2022',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=171',
        likes: 80,
    },
]
