// organizzo una fetch get per prendere tutto il database dal mio API

const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
const arrayData = []
const search = document.getElementById("search");
const searchValue = document.querySelector(".search");
const riga = document.querySelector(".row");
const rigaSelection1 = document.getElementById("rigaSelection1");
const rigaSelection2 = document.getElementById("rigaSelection2");
const rigaSelection3 = document.getElementById("rigaSelection3");

// async function retrieveDatabase() {
//     try {
//         const data = await fetch(url)

//         if (!data.ok) {
//             throw new Error("api non scaricato")
//         }

//         const myJson = await data.json();

//         console.log(myJson.data)
//     }

//     catch (error) {
//         console.error("fetch non eseguita")
//     }

// }


// LINK CON URL A QUERY DINAMICO
search.addEventListener('click', () => {
    search.setAttribute('href', `indexResult.html?q=${searchValue.value.toLowerCase()}`)

})

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
    const urlSelection = "https://striveschool-api.herokuapp.com/api/deezer/search?q=zucchero"

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
            console.log(jsonArray[i].album.cover)
            rigaSelection1.innerHTML += `<div class="card-container col-2"><div class="card h-100">
            <img src="${jsonArray[i].album.cover}" class="card-img-top" alt="album cover">
            <div class="card-body">
              <h5 class="card-title">${jsonArray[i].artist.name}</h5>
              <p class="card-text">${jsonArray[i].album.title}</p>
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
    const urlSelection = "https://striveschool-api.herokuapp.com/api/deezer/search?q=maroon5"

    try {
        const data = await fetch(urlSelection)

        const myJson = await data.json();

        if (!data.ok) {
            throw new Error("api non scaricato")
        }

        const jsonArray = myJson.data
        const myOggetto = myJson.data.length
        const randomArray = myRandomFunction(myOggetto);

        rigaSelection2.innerHTML = "";
        for (let i of randomArray) {
            console.log(jsonArray[i].album.cover)
            rigaSelection2.innerHTML += `<div class="card-container col-2"><div class="card h-100">
            <img src="${jsonArray[i].album.cover}" class="card-img-top" alt="album cover">
            <div class="card-body">
              <h5 class="card-title">${jsonArray[i].artist.name}</h5>
              <p class="card-text">${jsonArray[i].album.title}</p>
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
    const urlSelection = "https://striveschool-api.herokuapp.com/api/deezer/search?q=,muse"

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
            console.log(jsonArray[i].album.cover)
            rigaSelection3.innerHTML += `<div class="card-container col-2"><div class="card h-100">
            <img src="${jsonArray[i].album.cover}" class="card-img-top" alt="album cover">
            <div class="card-body">
              <h5 class="card-title">${jsonArray[i].artist.name}</h5>
              <p class="card-text">${jsonArray[i].album.title}</p>
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
    // secondSelection();
    // thirdSelection();
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
    riga.innerHTML = ""
    for (let i of playlistNames) {
        riga.innerHTML += `<div class="playList-wrapper col-4">${i}</div>`
    }
}








