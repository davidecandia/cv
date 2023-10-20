import cocktail from "./assets/image/cocktail.jpg"
import dog from "./assets/image/dog.jpg"
import shop from "./assets/image/shop.jpg"
import movies from "./assets/image/movies.jpg"
import meteo from "./assets/image/meteo.jpg"
import sinisky from "./assets/image/sinisky.jpg"
import lista from "./assets/image/lista.jpg"
import tecnostampa from "./assets/image/tecnostampa.jpg"
import spotify_clone from "./assets/image/clone-spotify.jpg"
import notes from "./assets/image/notes.jpg"


const data = [
  {
    id: '10',
    name: 'Notes',
    mini_descrizione: 'Portale per trovare e gestire tutti i tuoi impegni',
    descrizione: 'MERN, MongoDB: Come database,Express.js: Come framework per il server, React: Per il frontend, Node.js: Per l\'esecuzione del server. Typescript sia per frontEnd che BackEnd. Vite come bundler di react. Css con tailwind + gestione delle richieste al server con Redux query.',
    image: notes,
    url_git: 'https://github.com/Dexy98/todo_list',
    url: 'https://github.com/Dexy98/todo_list',
  },
  {
    id: '9',
    name: 'Spotify-clone',
    mini_descrizione: 'Portale clone di Spotify',
    descrizione: 'Sviluppato con Vite. Tailwind per il css. Clicca per visionare codice su GitHub. ',
    image: spotify_clone,
    url_git: 'https://github.com/Dexy98/Spotify-clone',
    url: '',
  },
  {
    id: '8',
    name: 'Cocktail',
    mini_descrizione: 'Portale per trovare il tuo cocktail preferito',
    descrizione: 'Sviluppato con React e Typescript. Tailwind per il css. API gestita con RTK query. ',
    image: cocktail,
    url_git: 'https://github.com/Dexy98/thecocktaildb',
    url: 'https://cocktailcreationshub.netlify.app/',
  },
  {
    id: '7',
    name: 'Dog',
    mini_descrizione: 'Portale dove puoi visionare immagini di cani in base la razza',
    descrizione: 'Sviluppato con React e Typescript. Tailwind per il css. API gestita con RTK query. ',
    image: dog,
    url_git: 'https://github.com/Dexy98/dog',
    url: 'https://dexy98.github.io/dog/',
  },
  {
    id: '6',
    name: 'E-shop',
    mini_descrizione: 'Portale per trovare il prodotto adatto a te e acquistarlo!',
    descrizione: 'Sviluppato con React e tailwind per il css. Fake Store API gestita con RTK query. Gestione degli stati con redux toolkit e typescript per migliore gestione del codice ',
    image: shop,
    url_git: 'https://github.com/Dexy98/e-shop',
    url: 'https://dexy98.github.io/e-shop/',
  },
  {
    id: '5',
    name: 'Movies',
    mini_descrizione: 'Portale per trovare film e serie tv',
    descrizione: 'sviluppato con React e tailwind per il css con diverse chiamate API TMDB ',
    image: movies,
    url_git: 'https://github.com/Dexy98/movies',
    url: 'https://dexy98.github.io/movies/',
  },
  {
    id: '4',
    name: 'meteo',
    mini_descrizione: 'Portale utile solo se vuoi sapere che tempo farà',
    descrizione: 'React js con API openweathermap',
    image: meteo,
    url_git: 'https://github.com/Dexy98/meteo',
    url: 'https://dexy98.github.io/meteo/',
  },
  {
    id: '3',
    name: 'sinisky',
    mini_descrizione: 'Portale di un attività tech',
    descrizione: 'React js',
    image: sinisky,
    url_git: 'https://github.com/Dexy98/sinisky',
    url: 'https://dexy98.github.io/sinisky/',
  },
  {
    id: '2',
    name: 'Lista',
    mini_descrizione: 'Portale per gestire le tue note salvate in locale',
    descrizione: 'React js',
    image: lista,
    url_git: 'https://github.com/Dexy98/lista',
    url: 'https://dexy98.github.io/lista/'
  },
  {
    id: '1',
    name: 'tecnostampa',
    mini_descrizione: 'Portale di una tipografia',
    descrizione: 'React js',
    image: tecnostampa,
    url_git: 'https://github.com/Dexy98/tecnostampa',
    url: 'https://dexy98.github.io/tecnostampa/',
  },

  // Aggiungi altri progetti qui...
];

export default data