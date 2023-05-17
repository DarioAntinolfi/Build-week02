// organizzo una fetch get per prendere tutto il database dal mio API

const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
const arrayData = []
const search = document.getElementById("search");
const searchValue = document.querySelector(".search");
const heroContainer = document.querySelector(".heroContainer");
const arrayLaterale = document.querySelector(".arrayLaterale");
const rigaSelection1 = document.getElementById("rigaSelection1");
const rigaSelection2 = document.getElementById("rigaSelection2");
const rigaSelection3 = document.getElementById("rigaSelection3");
const playerBar = document.querySelector(".player");


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
// ${heroUrlJson.data[i].album.cover_big},${heroUrlJson.data[i].album.title},${heroUrlJson.data[i].artist.name}
function player() {
  // evt.preventDefault();

  playerBar.classList.remove("d-none");
  playerBar.classList.add("d-block");

  // playerBar.innerHTML = `<div class="col-4 d-flex coloreBodyCentrale m-3 me-0">
  //   <img id="immagineFooter" src="${image}" alt="" />
  //   <div class="align-self-center ms-2">
  //     <h6 class="m-0 text-white">${album}</h6>
  //     <p class="text-white" id="pTestFooter">${artist}</p>
  //   </div>
  //   <div class="align-self-center ms-2">
  //     &nbsp;&nbsp;&nbsp;&nbsp;
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="16"
  //       height="16"
  //       fill="currentColor"
  //       class="bi bi-heart"
  //       viewBox="0 0 16 16"
  //     >
  //       <path
  //         d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
  //       />
  //     </svg>
  //   </div>
  // </div>`
}

async function heroSelection() {
  try {
    const heroURL = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=motivaational")

    if (!heroURL.ok) {
      throw new Error(" tech non andata a buon fine")
    }

    const heroUrlJson = await heroURL.json();
    let i = Math.floor(Math.random() * heroUrlJson.data.length)

    heroContainer.innerHTML = "";
    heroContainer.innerHTML = `<div
    id="cont-img-hero"
    class="d-flex align-items-center py-2 col-3 me-4"
  >
    <img
      id="hero-img"
      src="${heroUrlJson.data[i].album.cover_big}"
      alt="cover-picture"
    />
  </div>
  <span
    class="text-secondary position-absolute end-0 top-0 nascondi-annunci"
    >NASCONDI ANNUNCI</span
  >
  <div class="py-1 d-flex flex-column justify-content-between heroText-container">
    <div class="d-flex justify-content-between">
      <p>${heroUrlJson.data[i].album.type.toUpperCase()}</p>
    </div>
    <h2>${heroUrlJson.data[i].album.title}</h2>
    <p>${heroUrlJson.data[i].artist.name}</p>
    <p>Ascolta i nuovi singoli di ${heroUrlJson.data[i].artist.name}</p>
    <div>
      <button class="btn btn-success text-dark adapt-btn" type="button" onclick="player()">Play</button>
      <span class="btn btn-secondary bg-black adapt-btn">Salva</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-three-dots"
        viewBox="0 0 16 16"
      >
        <path
          d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        />
      </svg>
    </div>
  </div>`



  }
  catch (error) {
    console.error(error)
  }
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

      rigaSelection1.innerHTML += `<div class="cardFlex mb-4"><div class="image-wrapper">
                        <img src="${jsonArray[i].album.cover_big}" alt="album cover" class="card-img object-fit-cover img-fluid" onclick="location.assign ('indexAlbum.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}')">
                        </div>
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

    // POPOLAZIONE CARD ALBUM
    rigaSelection2.innerHTML = "";
    for (let i of randomArray) {

      rigaSelection2.innerHTML += `<div class="cardFlex mb-4"><div class="image-wrapper">
      <img src="${jsonArray[i].album.cover_big}" alt="album cover" class="card-img object-fit-cover img-fluid" onclick="location.assign ('indexAlbum.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}')">
        </div><div class="p-1 divP">
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

      rigaSelection3.innerHTML += `<div class="cardFlex mb-4"><div class="image-wrapper">
      <img src="${jsonArray[i].album.cover_big}" alt="album cover" class="card-img object-fit-cover img-fluid" onclick="location.assign ('indexAlbum.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}')">
                        </div><div class="p-1 divP">
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
  heroSelection();
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








