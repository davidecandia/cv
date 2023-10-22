import cocktail from "./assets/image/cocktail.png"
import dog from "./assets/image/dog.png"
import shop from "./assets/image/shop.png"
import movies from "./assets/image/movies.png"
import meteo from "./assets/image/meteo.jpg"
import sinisky from "./assets/image/sinisky.jpg"
import lista from "./assets/image/lista.jpg"
import tecnostampa from "./assets/image/tecnostampa.jpg"
import spotify_clone from "./assets/image/spotify.png"
import notes from "./assets/image/notes.png"

//img grandi
import cocktail_open from './assets/image/cocktail-open.png'
import dog_open from './assets/image/dog-open.png'
import movies_open from './assets/image/movies-open.png'
import notes_open from './assets/image/notes-open.png'
import spotify_open from './assets/image/spotify-open.png'
import shop_open from './assets/image/shop-open.png'



const data = [
  {
    id: '10',
    name: 'Notes',
    image_open: notes_open,
    mini_descrizione: 'Portale per trovare e gestire tutti i tuoi impegni',
    descrizione: 'Ho sviluppato questo progetto per esercitarmi a gestire dati e utenti connessi al database, quello che ho appreso è rendere delle route private, accessibili solo quando un utente è loggato, catturare le note create dall\'utente e quindi avere una lista privata di note.',
    tecnologie: 'Sviluppato con lo stack MERN, MongoDB: Come database, Express.js: Come framework per il server, React: Per il frontend, Node.js: Per l\'esecuzione del server. Typescript sia per frontEnd che BackEnd. Vite come bundler di react. Css con tailwind + gestione delle richieste al server con Redux query.',
    image: notes,
    url_git: 'https://github.com/Dexy98/todo_list',
    url: 'https://todo-6pnz.onrender.com/',
  },
  {
    id: '9',
    name: 'Spotify-clone',
    image_open: spotify_open,
    mini_descrizione: 'Portale clone di Spotify',
    descrizione: 'Ho sviluppato questo clone di Spotify per esercitarmi con tailwind',
    tecnologie: 'Sviluppato con vite come bundler di react. Tailwind per il css.',
    image: spotify_clone,
    url_git: 'https://github.com/Dexy98/Spotify-clone',
    url: '',
  },
  {
    id: '8',
    name: 'Cocktail',
    image_open: cocktail_open,
    mini_descrizione: 'Portale per trovare il tuo cocktail preferito',
    descrizione: 'Ho sviluppato questo progetto per esercitarmi su alcune tecnologie. L’idea è di una piattaforma che permetta di cercare il proprio cocktail preferito. È presente un campo di ricerca e in basso verrano visualizzati i risultati. Ogni singolo cocktail è cliccabile e l’utente viene spostato in una pagina dove può visionare tutti i dettagli relativi al drink.',
    tecnologie: 'Sviluppato con React e Typescript. Tailwind per il css. Dati presi da \'thecocktaildb.com/api.php\' un Api gratuita ed ho gestito le chiamate al server tramite Redux toolkit Query',
    image: cocktail,
    url_git: 'https://github.com/Dexy98/thecocktaildb',
    url: 'https://cocktailcreationshub.netlify.app/',
  },
  {
    id: '7',
    name: 'Dog',
    image_open: dog_open,
    mini_descrizione: 'Portale dove puoi visionare immagini di cani in base la razza',
    descrizione: 'Ho sviluppato questo progetto per divertimento, mi è stato utile per capire meglio redux toolkit query.',
    tecnologie: 'Sviluppato con React e Typescript. Tailwind per il css. API gestita con RTK query. ',
    image: dog,
    url_git: 'https://github.com/Dexy98/dog',
    url: 'https://dexy98.github.io/dog/',
  },
  {
    id: '6',
    name: 'E-shop',
    image_open: shop_open,
    mini_descrizione: 'Portale per trovare il prodotto adatto a te e acquistarlo!',
    descrizione: 'Ho sviluppato questo progetto per esercitarmi nella creazione di uno store, dove puoi scegliere il prodotto aggiungerlo al carrello e gestire il carrello aumentando quantità o rimuovendo il prodotto inserito.',
    tecnologie: 'Sviluppato con React e tailwind per il css. Fake Store API gestita con RTK query. Gestione degli stati con redux toolkit e typescript per migliore gestione del codice. ',
    image: shop,
    url_git: 'https://github.com/Dexy98/e-shop',
    url: 'https://dexy98.github.io/e-shop/',
  },
  {
    id: '5',
    name: 'Movies',
    image_open: movies_open,
    mini_descrizione: 'Portale per trovare film e serie tv',
    descrizione: 'Ho sviluppato questo progetto per esercitarmi nella creazione di un portale di contenuti multimediali, dati sempre aggiornati sulle nuove uscite e possibiltà di vedere il trailer se disponibile in su youtube in lingua italiana altrimenti in inglese.',
    tecnologie: 'Sviluppato con React e tailwind per il css. Fetch API TMDB',
    image: movies,
    url_git: 'https://github.com/Dexy98/movies',
    url: 'https://dexy98.github.io/movies/',
  },
  {
    id: '4',
    name: 'meteo',
    image_open: '',
    mini_descrizione: 'Portale utile solo se vuoi sapere che tempo farà',
    descrizione: 'Ho realizzato questo progetto per esercitarmi, ed è stato stimolante gestire i dati soprattuto poter modificare l\'orario in modo da visualizzare \'oggi\' al posto della data corrente e orario vicino.',
    tecnologie: 'React js, tailwind per il css. Dati presi da openweathermap API. ',
    image: meteo,
    url_git: 'https://github.com/Dexy98/meteo',
    url: 'https://dexy98.github.io/meteo/',
  },
  {
    id: '3',
    name: 'sinisky',
    image_open: '',
    mini_descrizione: 'Portale di un attività tech',
    descrizione: 'Ho sviluppato questo sito per un attività commerciale nel mondo del tech',
    tecnologie: 'Sviluppato con React',
    image: sinisky,
    url_git: 'https://github.com/Dexy98/sinisky',
    url: 'https://dexy98.github.io/sinisky/',
  },
  {
    id: '2',
    name: 'Lista',
    image_open: '',
    mini_descrizione: 'Portale per gestire le tue note salvate in locale',
    descrizione: 'Ho realizzato questo progetto come esercitazione, è stato utile per capire come gestire gli state in react',
    tecnologie: 'React js',
    image: lista,
    url_git: 'https://github.com/Dexy98/lista',
    url: 'https://dexy98.github.io/lista/'
  },
  {
    id: '1',
    name: 'tecnostampa',
    image_open: '',
    mini_descrizione: 'Portale di una tipografia',
    descrizione: 'Realizzazione di un sito web informativo per una tipografia',
    tecnologie: 'Sviluppato con react js',
    image: tecnostampa,
    url_git: 'https://github.com/Dexy98/tecnostampa',
    url: 'https://dexy98.github.io/tecnostampa/',
  },

  // Aggiungi altri progetti qui...
];

export default data