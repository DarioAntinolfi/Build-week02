const albumUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/"
const urlId = new URLSearchParams(location.search).get("id");
const searchUrl = `${albumUrl}${urlId}`;
const urlArtist = new URLSearchParams(location.search).get("art");
const riga = document.querySelector(".wrapper");
const dettagliAlbum = document.querySelector(".heroText-container");
const heroImgContainer = document.getElementById("cont-img-hero")
const titoloAlbum = document.getElementById("h2HeroAlbum")
const arrayLaterale = document.querySelector(".arrayLaterale")
const playerBar = document.querySelector(".player");



async function retrieveSingleAlbum() {
  try {
    const data = await fetch(searchUrl)

    if (!data.ok) {
      throw new Error("api non scaricato")
    }

    const jsonAlbum = await data.json();
    const tracksArray = jsonAlbum.tracks.data;

    heroImgContainer.innerHTML = "";
    dettagliAlbum.innerHTML = "";
    heroImgContainer.innerHTML = `<img
                    id="hero-img"
                    src="${jsonAlbum.cover_medium}"
                    alt="cover-picture"
                  />`

    dettagliAlbum.innerHTML = `<div class="d-flex justify-content-between">
            <p class="mt-5 d-none d-lg-block">${jsonAlbum.type.toUpperCase()}</p>
          </div>
          <h2 id="h2HeroAlbum" class="m-0">
          ${jsonAlbum.title}
          </h2>
          <div class="d-flex align-items-center mt-3">
            <div class="me-2">
              <img
                class="miniIconaHero"
                src="${jsonAlbum.artist.picture_small}"
                alt="artist-icon"
              />
            </div>
            <p class="m-0">Ascolta i nuovi singoli di ${jsonAlbum.artist.name}</p>
          </div>`


    let j = 1
    for (let i of tracksArray) {

      riga.innerHTML +=

        `<div
          class="d-flex align-items-center justify-content-between trackWrapper"
        >
          <div class="col-6 d-flex align-items-center">
            <div class="mx-4 col-1 elencoBrani d-none d-lg-block">
              <p>${j}</p>
            </div>
            <div>
              <p class="m-0">${i.title
        }</p>
              <a href="artista.html?id=${urlArtist}"><p class="text-secondary">${i.artist.name
        }</p></a>
            </div>
          </div>
          <div class="ms-5 ps-4">
            <p>${i.rank
        }</p>
          </div>
          <div>
            <p>${time(i.duration)}</p>
          </div>
        </div>`
      j++

    }
  }

  catch (error) {
    console.error("fetch non andata a buon fine")
  }
}


const time = (num) => {
  let minutes = Math.floor(num / 60)
  let seconds = num % 60;
  return minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0')
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


window.onload = () => {
  retrieveSingleAlbum()
  playlist();
  playerCheck();
}

const playerCheck = () => {
  const player = localStorage.getItem("display");
  if (player) {
    playerBar.classList.remove("d-none");
  }
}