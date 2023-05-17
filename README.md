<a name="readme-top"></a>

## counter - progetto JavaScript Basics di Egidio Salinaro

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

Nel file .html ho creato le aree del contatore, con i _div_ e i _button_ necessari per il contatore, e le rispettive classi/id da utilizzare per stile e script. Ho lasciato, tuttavia, le sezioni prive di contenuto, per poterlo poi implementare attraverso l'utilizzo di JavaScript, come da richiesta.
  * numero mostrato in display
  ```sh
    <div id="number"></div>
  ```
  
  
  * pulsanti
  ```sh
    <div id="buttons">
      <button id="minus"></button>
      <button id="plus"></button>
    </div> 
  ```

### Prerequisites

Una volta configurate le sezioni in HTML e lo stile in CSS, utile a testare più facilmente le funzioni man mano che venivano implementate, ho cominciato ad inserire gli elementi _numero_ e _pulsanti_ all'interno del documento, tramite JavaScript, a scopo di esercitazione e come da richiesta.
  * numero
  ```sh
    let numbers = [
    {
      starting: 0
    },
  ];

  let zero = numbers.map(function(item) {
    return (
        item.starting
      );
  })

  numberZero.innerHTML = zero.join('\n');
```
* pulsanti
```sh
  let buttons = [
  {
    plus: '+',
    minus: '-'
  },
];

  let minor = buttons.map(function(item) {
    return (
      item.minus
    )
  })

  let major = buttons.map(function(item) {
    return (
      item.plus
    );
  })

  minusButton.innerHTML = minor.join('\n');
  plusButton.innerHTML = major.join('\n');
```

### Implementation

Per l'implementazione della funzionalità counter, ho utilizzato due semplici funzioni. A scopo di esercitazione, ho ipotizzato di impedire all'utente di contare numeri negativi: per farlo avevo bisogno di bloccare la funzionalità del tasto - (meno) se il contatore fosse a zero, con un semplice operatore condizionale _if_.
  
```sh
  var counter = 0;

  plusButton.onclick = function add(){
    counter++;
    document.querySelector('#number').innerHTML = counter
  }

  minusButton.onclick = function subtract(){
    if (counter != 0) {
      counter--;
    }
    document.querySelector('#number').innerHTML = counter
  }
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Il gradiente dei colori e gli angoli smussati dei pulsanti concentrano l'attenzione dell'utente sull'unica funzione dell'app: utilizzare i pulsanti -/+ per diminuire/aumentare il numero mostrato sul display.

L'intero codice sorgente HTML, CSS e JAVASCRIPT dell'app è contenuto in questa repository: l'app può essere utilizzata all'indirizzo https://counter-egidiosalinaro.netlify.app/

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] .html file
- [x] .css file
- [x] targeting DOM elements in .js
- [x] displaying numbers and buttons in .html via .js
- [x] calculator function
    - [x] add
    - [x] subtract
      - [x] only if (counter =! 0)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

