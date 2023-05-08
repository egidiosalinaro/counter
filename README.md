<a name="readme-top"></a>

## counter - esercitazione JavaScript Basics di Egidio Salinaro

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#implementation">Implementation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img width="400" alt="counter-egidio-salinaro" src="https://user-images.githubusercontent.com/129901135/236956535-3daee979-a717-4cde-ab81-029e8879aa40.png">

La commessa richiede la creazione di un'app che funga da contatore, abbastanza semplice nel suo sviluppo: in virtù di questo ho deciso di optare per un design minimal ed elegante, utilizzando sfumature del nero e del beige/ocra ed eliminando l'utilizzo di bordi netti.

Il design è intrinsecamente responsive, gli elementi della UI sono mantenuti al centro.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

Come da richiesta, per la realizzazione di questa app non è stato utilizzato nessun framework, né Jquery. La funzionalità principale viene implementata attraverso un unico file JavaScript interamente ideato e compilato da me.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Per cominciare, ho creato tre semplici file .html, .css e .js

Nel file .html ho creato le aree del contatore, con i <div> e i <button> necessari per il contatore, e le rispettive classi/id da utilizzare per stile e script. Ho lasciato, tuttavia, le sezioni prive di contenuto, per poterlo poi implementare attraverso l'utilizzo di JavaScript, come da richiesta.
  * numero mostrato in display
  ```sh
    <div id="number"></div>
  ```
  
  
  * pulsanti
  ```sh
    <div id="buttons">
      <button id="minus"></button>
      <button id="plus"></button>
    </div>  ```

### Prerequisites

Una volta configurate le sezioni in .html e lo stile in .css utile a testare più facilmente le funzioni man mano che venivano implementate, ho cominciato ad inserire gli elementi numero e pulsanti all'interno del documento, tramite JavaScript, a scopo di esercitazione e come da richiesta.

### Implementation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Il gradiente dei colori e gli angoli smussati dei pulsanti concentrano l'attenzione dell'utente sull'unica funzione dell'app: utilizzare i pulsanti -/+ per diminuire/aumentare il numero mostrato sul display.

L'intero codice sorgente HTML, CSS e JAVASCRIPT dell'app è contenuto in questa repository: l'app può essere utilizzata all'indirizzo https://counter-egidiosalinaro.netlify.app/

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

<p align="right">(<a href="#readme-top">back to top</a>)</p>

