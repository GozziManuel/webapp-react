# Revisione Compito React -- Manuel Gozzi

## Impressione Generale

Ciao Manuel! Hai costruito un'applicazione React funzionante con una buona struttura di base: il routing funziona, le chiamate API ci sono, le card si visualizzano e il form delle recensioni invia i dati. Si vede che hai compreso il flusso fondamentale di React -- componenti, stato, effetti, contesto -- e che sai metterli insieme. Ci sono alcune aree dove potresti rafforzare il lavoro, in particolare la validazione del form, il loader come componente visuale globale, e la separazione delle responsabilita tra componenti e pagine, ma le fondamenta sono solide. Bravo!

## Checklist del Corso

| # | Criterio | Esito | Note |
|---|----------|-------|------|
| 1 | Setup Vite + React | Fatto | Progetto Vite configurato correttamente con `vite.config.js` e struttura standard. |
| 2 | Dipendenze (axios, react-router, bootstrap) | Fatto | Tutte le dipendenze principali presenti in `package.json`: axios, react-router, bootstrap, bootstrap-icons. |
| 3 | Import Bootstrap (CSS, JS, Icons) | ⚠️ Parziale | Hai importato `bootstrap/dist/css/bootstrap.min.css` e `bootstrap-icons/font/bootstrap-icons.css` in `main.jsx`, ma manca l'import del **JavaScript di Bootstrap** (`bootstrap/dist/js/bootstrap.min.js`). Senza quello, il toggler della navbar non funzionera su mobile. |
| 4 | Layout con Navbar + Outlet | Fatto | `defaultLayout.jsx` con navbar Bootstrap (dark theme, toggler responsive) e `<Outlet />`. Usa `NavLink` per la navigazione. Ben fatto! |
| 5 | Configurazione Router | Fatto | `BrowserRouter` con `Routes` annidate dentro il layout in `App.jsx`. Route index per Homepage, route per lista film e dettaglio con parametro `:id`. Struttura chiara. |
| 6 | Navigazione con Router (Link/NavLink) | ⚠️ Parziale | Usi `NavLink` nella navbar e `Link` nelle card per navigare al dettaglio, ed e corretto. Pero nella navbar hai `className="nav-link active"` hardcoded: la classe `active` dovrebbe essere gestita automaticamente da `NavLink` (che la aggiunge da solo quando la rotta corrisponde). Cosi com'e, il link "Movies" appare sempre attivo anche quando sei sulla Homepage. |
| 7 | Pagina Lista (Movies) | Fatto | `Filmpage.jsx` renderizza `FilmcardContainer` che mostra la griglia di film con layout Bootstrap a colonne. |
| 8 | Pagina Dettaglio | Fatto | `DetailedFilm.jsx` mostra titolo, immagine, abstract, genere, anno, regista e lista recensioni con form. Completa e ricca di informazioni. |
| 9 | AJAX GET lista | Fatto | Chiamata axios GET in `FilmcardContainer` con `useEffect` per caricare la lista film dall'API. |
| 10 | AJAX GET dettaglio | Fatto | Chiamata axios GET in `DetailedFilm` con `useParams` per ottenere l'id e caricare il singolo film. |
| 11 | Componenti riutilizzabili + Props | ⚠️ Parziale | Hai creato `Filmcard` (con props title, image, abstract, rlsyear) e `Starcreator` (con props vote, maxvote) -- entrambi buoni. Pero le singole recensioni sono renderizzate inline nella pagina dettaglio invece che in un componente `ReviewCard` separato, e il form e incorporato nella pagina. |
| 12 | Componente Form Recensione | ⚠️ Parziale | Il form c'e e funziona, ma e integrato direttamente dentro `DetailedFilm.jsx` (righe 88-138) anziche essere un componente separato. Questo lo rende non riutilizzabile e appesantisce la pagina. |
| 13 | POST recensione | Fatto | La funzione `postRequest` invia i dati con `axios.post` e poi ricarica il dettaglio con `GetIdProduct()`. Ottimo il refresh automatico dopo l'invio! |
| 14 | Validazione form | ⚠️ Parziale | Usi attributi HTML nativi (`required`, `min`, `max`) sugli input, che e un buon inizio. Pero manca la validazione lato React: niente stato `invalidFields`, niente classi `is-invalid` di Bootstrap, niente messaggi di errore personalizzati sotto i campi. |
| 15 | Componente Loader | ⚠️ Parziale | Hai un testo "Loading....." con classe `.loader` e CSS per centrarlo a schermo (`DetailedFilm.jsx:49`), ma non e un componente separato e non e un overlay globale. Nella pagina lista film non c'e alcun indicatore di caricamento. |
| 16 | Loader Context | ⚠️ Parziale | Hai creato `MainContext` con `isLoading`/`setIsLoading` e un custom hook `useMainContext` -- buona struttura! Pero: lo stato iniziale e `true` (dovrebbe essere `false`), il contesto espone `setIsLoading` direttamente invece di funzioni `startLoading`/`endLoading`, e soprattutto il valore `isLoading` non viene mai letto nel layout per mostrare un overlay globale. Il contesto esiste ma non pilota nessun componente visuale nel template. |
| 17 | CSS personalizzato | Fatto | `index.css` con stili per card hover (`transform: scale(1.1)`), layout dettaglio, stelline gialle, divisori per le recensioni, stile form e loader. Bel tocco personale! |
| **B1** | **Pagina Creazione** | ❌ Mancante | Non c'e una pagina per creare un nuovo film (niente form con POST multipart, niente route `/create`). |
| **B2** | **Notification Context** | ❌ Mancante | Non c'e un contesto per le notifiche (messaggi di successo/errore dopo le operazioni). |

## Scelte Tecniche Interessanti

Ho notato un paio di scelte che vale la pena commentare:

- **Effetto hover con `transform: scale(1.1)` e `transition`**: un dettaglio di UX carino che mostra attenzione all'esperienza utente. Semplice ma efficace, e va oltre il minimo richiesto.
- **Componente `Starcreator` con logica a ciclo**: hai implementato la generazione delle stelline con un ciclo `for` e logica condizionale per piene/vuote, passando `maxvote` come prop per renderlo flessibile. Questa e una buona scelta di design.
- **Refresh automatico dopo POST**: dopo l'invio della recensione, richiami `GetIdProduct()` per aggiornare i dati. Questo garantisce che l'utente veda subito la nuova recensione senza ricaricare la pagina.

**Una nota**: in `DetailedFilm.jsx` (righe 89, 90, 133) hai usato `class=` invece di `className=` in alcuni punti del JSX. In React devi sempre usare `className` perche `class` e una parola riservata di JavaScript. React probabilmente ti mostra un warning in console per questo.

## Le 3 Cose Fatte Meglio

1. **Componente Starcreator** (`Starcreator.jsx`): pulito, conciso e riutilizzabile. Riceve `vote` e `maxvote` come props e genera le stelle dinamicamente con logica chiara. E il componente piu maturo del progetto.

2. **Struttura del routing** (`App.jsx`): hai organizzato le route con un layout wrapper, route annidate, `MainContextProvider` che avvolge tutto, e parametri dinamici. La gerarchia e chiara e leggibile.

3. **Gestione dello stato nel form**: il `handleFormChange` generico con `[name]: value` e il reset con `setFormData(InitialFormNames)` dopo il submit sono un pattern corretto e pulito. Hai capito bene il meccanismo del controlled component.

## Le 3 Cose da Migliorare

### 1. Estrai il form recensione in un componente separato

Il form dentro `DetailedFilm.jsx` contiene circa 50 righe di JSX, stato e logica. Estrarlo in un componente dedicato migliora la leggibilita e lo rende riutilizzabile.

**Prima** (tutto dentro `DetailedFilm.jsx`):
```jsx
// Stato, handler, post request e 50 righe di JSX del form
// tutti mischiati con la logica della pagina dettaglio
const [formData, setFormData] = useState(InitialFormNames);
const handleFormChange = (e) => { ... };
const handleFormSubmit = (e) => { ... };
const postRequest = () => { ... };
```

**Dopo** (componente separato `ReviewForm.jsx`):
```jsx
// components/ReviewForm.jsx
export default function ReviewForm({ movieId, afterSubmit }) {
  const [formData, setFormData] = useState({ name: "", vote: "", abstract: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/movies/${movieId}/review`, formData)
      .then(() => {
        afterSubmit();
        setFormData({ name: "", vote: "", abstract: "" });
      });
  };
  // return il form JSX...
}

// In DetailedFilm.jsx diventa una riga sola:
<ReviewForm movieId={id} afterSubmit={GetIdProduct} />
```

### 2. Collega il LoaderContext al layout per un overlay globale

Hai creato il contesto ma non lo colleghi al template. Il risultato e che `isLoading` viene settato ma nessuno lo legge nel layout per mostrare qualcosa a schermo.

**Prima** (in `defaultLayout.jsx`):
```jsx
<main>
  <Outlet />
</main>
```

**Dopo**:
```jsx
import { useMainContext } from "../context/MainContext";

export default function DefaultLayout() {
  const { isLoading } = useMainContext();
  return (
    <>
      <nav>...</nav>
      {isLoading && (
        <div className="loader-overlay">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <main><Outlet /></main>
    </>
  );
}
```

### 3. Aggiungi validazione React con feedback visuale Bootstrap

L'attributo `required` di HTML e un buon inizio, ma non ti da controllo sullo stile o sui messaggi. La validazione lato React con le classi `is-invalid` di Bootstrap rende l'esperienza molto migliore.

**Prima**:
```jsx
<input type="text" className="formText" name="name" required />
```

**Dopo**:
```jsx
const [invalidFields, setInvalidFields] = useState([]);

const validate = () => {
  const errors = [];
  if (!formData.name.trim()) errors.push("name");
  if (!formData.vote || formData.vote < 1 || formData.vote > 5) errors.push("vote");
  setInvalidFields(errors);
  return errors.length === 0;
};

// Nel JSX:
<input
  type="text"
  className={`form-control ${invalidFields.includes("name") ? "is-invalid" : ""}`}
  name="name"
  value={formData.name}
  onChange={handleFormChange}
/>
{invalidFields.includes("name") && (
  <div className="invalid-feedback">Il nome e obbligatorio</div>
)}
```

## Una Cosa da Provare

Ti consiglio di provare a gestire gli **errori delle chiamate API** con `.catch()` e `.finally()`. Al momento, se il server non risponde o restituisce un errore, l'app resta bloccata senza feedback e il loader potrebbe restare attivo per sempre:

```jsx
const GetIdProduct = () => {
  setIsLoading(true);
  axios.get(`http://localhost:3000/movies/${id}`)
    .then((res) => {
      SetDetailedProduct(res.data.result);
    })
    .catch((err) => {
      console.error("Errore nel caricamento:", err);
      // Qui potresti settare un messaggio di errore nello stato
      // oppure usare un futuro NotificationContext!
    })
    .finally(() => {
      setIsLoading(false);
    });
};
```

Il `.finally()` e particolarmente utile: garantisce che il loader si disattivi **sempre**, sia in caso di successo che di errore. Prova ad aggiungerlo sia nella GET della lista che nella POST della recensione -- vedrai subito la differenza quando provi a far partire l'app senza il server acceso!
