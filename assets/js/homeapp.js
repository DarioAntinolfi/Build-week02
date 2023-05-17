// organizzo una fetch get per prendere tutto il database dal mio API

const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
const arrayData = []
const search = document.getElementById("search");
const searchValue = document.querySelector(".search");
const arrayLaterale = document.querySelector(".arrayLaterale");
const rigaSelection1 = document.getElementById("rigaSelection1");
const rigaSelection2 = document.getElementById("rigaSelection2");
const rigaSelection3 = document.getElementById("rigaSelection3");

console.log(rigaSelection2)


// LINK CON URL A QUERY DINAMICO
// search.addEventListener('click', () => {
//     search.setAttribute('href', `indexSearchResult.html?q=${searchValue.value.toLowerCase()}`)

// })

// CREAZIONE RANDOM ARRAY PER SELEZIONE CASUALE ALBUM

function myRandomFunction(param) {
    let i = 0;
    let counterArray = [];
    while (i < 5) {
        randomNumber = Math.floor(Math.random() * param) + 1
        if (!counterArray.includes(randomNumber)) {
            counterArray.push(randomNumber)
            i++
        }
    } return counterArray
}


// PRIMA FUNZIONE ASINCRONA PER CREAZIONE 5 ALBUM RANDOM 

async function firstSelection() {
    const urlSelection = "https://striveschool-api.herokuapp.com/api/deezer/search?q=love"

    try {
        const data = await fetch(urlSelection)

        const myJson = await data.json();


        if (!data.ok) {
            throw new Error("api non scaricato")
        }

        const jsonArray = myJson.data
        const myOggetto = myJson.data.length
        const randomArray = myRandomFunction(myOggetto);


        // POPOLAZIONE CARD ALBUM
        rigaSelection1.innerHTML = "";
        for (let i of randomArray) {

            rigaSelection1.innerHTML += `<div class="cardFlex mb-4">
                        <a href="indexAlbum.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}"><img src="${jsonArray[i].album.cover}" alt="album cover" class="card-img"></a>
                        <div class="p-1 divP">
                          <a href="indexArtisti.html?id=${jsonArray[i].artist.id}"> <h5 class="titoloCard">${jsonArray[i].artist.name}</h5> </a>
                          <a href="indexAlbum.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}"> <p class="testoCard">${jsonArray[i].album.title}</p></a> 
                        </div>
                        <div
                    class="d-flex justify-content-between w-100 align-items-center"
                  >
                    <div class="d-lg-none">

                 <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-suit-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                        />
                      </svg>
              
                 <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-three-dots-vertical"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                        />
                      </svg> 
              
                </div>
                
                 <div class="d-lg-none play">
                      <p class="align-self-center">Placeholder</p>
                      <svg
                        id="bottonePlay"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-play-circle"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        />
                        <path
                          d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
                        />
                      </svg>
                    </div>
                  </div>
                    
                        </div>`


        }

    } catch (error) {
        console.error("fetch non eseguita")
    }
}

// // SECONDA FUNZIONE ASINCRONA PER CREAZIONE ALTRI 5 TITOLI CASUALI DI ALBUM DI UN AUTORE

async function secondSelection() {
    const urlSelection = "https://striveschool-api.herokuapp.com/api/deezer/search?q=life"

    try {
        const data = await fetch(urlSelection)

        const myJson = await data.json();

        if (!data.ok) {
            throw new Error("api non scaricato")
        }

        const jsonArray = myJson.data
        const myOggetto = myJson.data.length
        const randomArray = myRandomFunction(myOggetto);
        console.log(myJson)

        // POPOLAZIONE CARD ALBUM
        rigaSelection2.innerHTML = "";
        for (let i of randomArray) {

            rigaSelection2.innerHTML += `<div class="cardFlex mb-4">
        <a href="indexAlbum.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}"><img src="${jsonArray[i].album.cover}" alt="album cover"></a>
        <div class="p-1 divP">
          <a href="indexArtisti.html?id=${jsonArray[i].artist.id}"> <h5 class="titoloCard">${jsonArray[i].artist.name}</h5> </a>
          <a href="indexAlbum.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}"> <p class="testoCard">${jsonArray[i].album.title}</p></a> 
        </div>
        <div
    class="d-flex justify-content-between w-100 align-items-center"
  >
    <div class="d-lg-none">

 <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-suit-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
        />
      </svg>

 <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-three-dots-vertical"
        viewBox="0 0 16 16"
      >
        <path
          d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
        />
      </svg> 

</div>

 <div class="d-lg-none play">
      <p class="align-self-center">Placeholder</p>
      <svg
        id="bottonePlay"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-play-circle"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
        />
      </svg>
    </div>
  </div>
    
        </div>`

        }

    } catch (error) {
        console.error("fetch non eseguita")
    }
}


// // TERZA FUNZIONE ASINCRONA PER CREAZIONE ALTRI 5 TITOLI CASUALI DI ALBUM DI UN AUTORE
async function thirdSelection() {
    const urlSelection = "https://striveschool-api.herokuapp.com/api/deezer/search?q=woman"

    try {
        const data = await fetch(urlSelection)
        const myJson = await data.json();

        if (!data.ok) {
            throw new Error("api non scaricato")
        }

        const jsonArray = myJson.data
        const myOggetto = myJson.data.length
        const randomArray = myRandomFunction(myOggetto);

        rigaSelection3.innerHTML = "";
        for (let i of randomArray) {

            rigaSelection3.innerHTML += `<div class="cardFlex mb-4">
                        <a href="indexAlbum.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}"><img src="${jsonArray[i].album.cover}" alt="album cover"></a>
                        <div class="p-1 divP">
                          <a href="indexArtisti.html?id=${jsonArray[i].artist.id}"> <h5 class="titoloCard">${jsonArray[i].artist.name}</h5> </a>
                          <a href="indexAlbum.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}"> <p class="testoCard">${jsonArray[i].album.title}</p></a> 
                        </div>
                        <div
                    class="d-flex justify-content-between w-100 align-items-center"
                  >
                    <div class="d-lg-none">

                 <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-suit-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                        />
                      </svg>
              
                 <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-three-dots-vertical"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                        />
                      </svg> 
              
                </div>
                
                 <div class="d-lg-none play">
                      <p class="align-self-center">Placeholder</p>
                      <svg
                        id="bottonePlay"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        fill="currentColor"
                        class="bi bi-play-circle"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        />
                        <path
                          d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
                        />
                      </svg>
                    </div>
                  </div>
                    
                        </div>`

        }

    } catch (error) {
        console.error("fetch non eseguita")
    }
}

window.onload = () => {
    playlist();
    firstSelection();
    secondSelection();
    thirdSelection();
}

const playlistNames = [
    "Be The Young Seasons 1-5",
    "Be The Young Seasons 6-8",
    "persona di m*rda (gen-feb 2023)",
    "Musical 2022",
    "pippo, pluto e paperino (nov-dec 2022)",
    "early stage emily syndrome (sett-ott 2022)",
    "Be the young",
    "'...' cit. Kimiko (lug-ago 2022)",
    "saggio vibes 💃🩰",
    "main character energy (mag-giu 2022)",
    "that fucking mood 🔪☠️",
    "VEE, CARLOTTA E GIACOMO VANNO A BOSIO",
    "An Emily Winchester kind of mood 🔪🖕",
    "landing page (mar-apr 2022)",
    "2021 lol",
    "cosa cazzo vuol dire questa affermazione (gen-feb 2022)",
    "honey and glass (nov-dic 2021)",
    "(Revenge) Training Arc 🦍",
    "Lidia 🤝 Emily",
    "minecraft e nintendo switch (sep-oct 2021)",
    "silvano d'orba? I hardly know her (lug - ago 2021)",
    "Culo 2021",
    "Frah Quintale Mix",
    "Francesco Guccini Mix",
    "Lo Stato Sociale Mix",
    "chapter 4/? (mag-giu 2021)",
    "Strive School <> The Hunt Motivation",
    "mi stavo dimenticando (mar-apr 2021)",
    "high school musical 1,2,3",
    "quanto trash cazzo",
    "The 2020 Playlist",
    "ma(ncanza) che cazzo ne so io (gen-feb 2021)",
];

const playlist = () => {
    arrayLaterale.innerHTML = ""
    for (let i of playlistNames) {
        arrayLaterale.innerHTML += `<div class="playList-wrapper">${i}</div>`
    }
}








