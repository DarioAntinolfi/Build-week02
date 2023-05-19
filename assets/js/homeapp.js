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

const playerCheck = () => {
  const player = localStorage.getItem("display");
  if (player == "true") {
    playerBar.classList.remove("d-none");
    playerBar.classList.add("d-block");
    const immagine = localStorage.getItem("image")
    const nomeAlbum = localStorage.getItem("album")
    const nomeArtista = localStorage.getItem("artista")
  }
}

function closePlayer() {
  playerBar.classList.remove("d-block");
  playerBar.classList.add("d-none");
  displayOn = false
  localStorage.setItem("display", displayOn)
}


function player(image, album, artista) {

  playerBar.classList.remove("d-none");
  playerBar.classList.add("d-block");
  displayOn = true
  localStorage.setItem("display", displayOn);
  localStorage.setItem("image", image)
  localStorage.setItem("album", album)
  localStorage.setItem("artista", artista)



  playerBar.innerHTML = `<div class="croce d-flex flex-row-reverse">
  <svg
    onclick="closePlayer()"
    class="croce"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    class="bi bi-x btn"
    viewBox="0 0 16 16"
  >
    <path
      d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
  
</div>
<div class="col-4 coloreBodyCentrale d-flex justify-content-center">
  <div class="imgFooter-wrapper d-flex align-items-center">
    <img id="immagineFooter" src="${image}" alt="" />
  </div>
  <div class="align-self-center ms-2 footerText-wrapper">
    <p class="m-0 text-white">${album}</p>
    <p class="text-white" id="pTestFooter">${artista}</p>
  </div>

  <div class="align-self-center ms-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-heart"
      viewBox="0 0 16 16"
    >
      <path
        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
      />
    </svg>
  </div>
</div>

<!--/Canzone in riproduzione

<!--Barra play-->
<div class="justify-content-center align-content-center col-4">
  <!--icona shuffle-->
  <div
    class="d-flex justify-content-center align-items-center mt-1 mb-1 bottoniBarraPlay"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="green"
      class="bi bi-shuffle"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
      />
      <path
        d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"
      />
    </svg>
    <!--/icona shuffle-->
    <!--icona skip sinistra-->
    <svg
      class="mx-2"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      class="bi bi-skip-start-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0V4z"
      />
    </svg>
    <!--/icona skip sinistra-->
    <!--icona play-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="currentColor"
      class="bi bi-play-circle-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
      />
    </svg>
    <!--/icona play-->
    <!--icona skip destra-->
    <svg
      class="mx-2"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      class="bi bi-skip-end-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0V4z"
      />
    </svg>
    <!--/icona skip destra-->
    <!--icona repeat-->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="green"
      class="bi bi-repeat"
      viewBox="0 0 16 16"
    >
      <path
        d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z"
      />
    </svg>
  </div>
  <!--progress bar-->
  <div class="progress-bar d-block my-3">
    <div class="progress-fill"></div>
  </div>
  <!--/progres bar-->
  <!--/icona repeat-->
</div>
<!--/Barra play-->

<!--Volume-->
<div
  class="col-4 coloreBodyCentrale d-flex justify-content-center align-items-center"
>
  <div class="d-flex align-items-center barraVolumeFooter">
    <!--icona microfono-->
    &nbsp;
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-mic"
      viewBox="0 0 16 16"
    >
      <path
        d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"
      />
      <path
        d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z"
      />
    </svg>
    <!--/icona microfono-->

    <!--icona menu-->
    &nbsp;
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
    <!--/icona menu-->

    <!--icona pc-->
    &nbsp;
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-pc-display"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z"
      />
    </svg>
    <!--/icona pc-->

    <!--icona volume-->
    &nbsp;
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      class="bi bi-volume-down"
      viewBox="0 0 16 16"
    >
      <path
        d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11zM12.025 8a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"
      />
    </svg>
    <!--/icona volume-->

    <!--barra volume-->
    <div id="divBarraVolume">
      <input
        id="barraVolume"
        type="range"
        id="vol"
        name="vol"
        min="0"
        max="50"
      />
    </div>
    <!--/barra volume-->

    <!--frecce-->
    &nbsp;&nbsp;&nbsp;
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-arrows-angle-expand"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
      />
    </svg>
    <!--/frecce-->
  </div>
</div>`


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
      <button class="btn btn-success text-dark adapt-btn" type="button" onclick="player('${heroUrlJson.data[i].album.cover_big}','${heroUrlJson.data[i].album.title}','${heroUrlJson.data[i].artist.name}' )">Play</button>
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
    let j = 1

    for (let i of randomArray) {

      rigaSelection1.innerHTML += `<div class="cardFlex mb-4 card${j}"><div class="image-wrapper">
                        <img src="${jsonArray[i].album.cover_big}" alt="album cover" class="card-img object-fit-cover img-fluid" onclick="location.assign ('album.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}')">
                        </div>
                        <div class="p-1 divP">
                          <a href="artista.html?id=${jsonArray[i].artist.id}"> <h5 class="titoloCard">${jsonArray[i].artist.name}</h5> </a>
                          <a href="album.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}"> <p class="testoCard">${jsonArray[i].album.title}</p></a> 
                        </div>
                        <div
                    class="d-flex justify-content-between w-100 align-items-center"
                  >
                    <div class="d-md-none">

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
                
                 <div class="d-md-none play">
                      <p class="align-self-center"><span>${Math.floor(Math.random()*11)+5}brani</span></p>
                      <svg
                        id="bottonePlay"
                        xmlns="http://www.w3.org/2000/svg"
                        width="75"
                        height="75"
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
      j++

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
    j = 1
    for (let i of randomArray) {

      rigaSelection2.innerHTML += `<div class="cardFlex mb-4 card${j}"><div class="image-wrapper">
      <img src="${jsonArray[i].album.cover_big}" alt="album cover" class="card-img object-fit-cover img-fluid" onclick="location.assign ('album.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}')">
        </div><div class="p-1 divP">
          <a href="artista.html?id=${jsonArray[i].artist.id}"> <h5 class="titoloCard">${jsonArray[i].artist.name}</h5> </a>
          <a href="album.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}"> <p class="testoCard">${jsonArray[i].album.title}</p></a> 
        </div>
        <div
    class="d-flex justify-content-between w-100 align-items-center"
  >
    <div class="d-md-none">

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

 <div class="d-md-none play">
      <p class="align-self-center"><span>${Math.floor(Math.random()*11)+5}brani</span></p>
      <svg
        id="bottonePlay"
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
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

      j++

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
    j = 1
    for (let i of randomArray) {

      rigaSelection3.innerHTML += `<div class="cardFlex mb-4 card${j}"><div class="image-wrapper">
      <img src="${jsonArray[i].album.cover_big}" alt="album cover" class="card-img object-fit-cover img-fluid" onclick="location.assign ('album.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}')">
                        </div><div class="p-1 divP">
                          <a href="artista.html?id=${jsonArray[i].artist.id}"> <h5 class="titoloCard">${jsonArray[i].artist.name}</h5> </a>
                          <a href="album.html?id=${jsonArray[i].album.id}&art=${jsonArray[i].artist.id}"> <p class="testoCard">${jsonArray[i].album.title}</p></a> 
                        </div>
                        <div
                    class="d-flex justify-content-between w-100 align-items-center"
                  >
                    <div class="d-md-none">

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
                
                 <div class="d-md-none play">
                      <p class="align-self-center"><span>${Math.floor(Math.random()*11)+5}brani</span></p>
                      <svg
                        id="bottonePlay"
                        xmlns="http://www.w3.org/2000/svg"
                        width="75"
                        height="75"
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
      j++

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
  playerCheck();
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








