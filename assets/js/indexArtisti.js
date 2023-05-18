// DEFINIZIONE 
const urlArtista = "https://striveschool-api.herokuapp.com/api/deezer/artist/"
const urlIdArtista = new URLSearchParams(location.search).get("id");
const searchUrlArtista = `${urlArtista}${urlIdArtista}`;
const parFans = document.querySelector("p")
const riga = document.querySelector(".row");
const nomeArtista = document.querySelector(".nomeArtista");
const elencoBrani = document.querySelector(".elencoBrani");
const contenitoreImmagineBand = document.querySelector(".contenitoreImmagineBand");
const nomeBand = document.querySelector(".nomeBand");
const arrayLaterale = document.querySelector(".arrayLaterale");
const sfondoSezioneCentrale = document.querySelector(".sfondoSezioneCentrale");


async function retrieveArtist() {
    try {
        const data = await fetch(searchUrlArtista)

        if (!data.ok) {
            throw new Error("api non scaricato")
        }


        const myJsonArtist = await data.json();
        const fans = myJsonArtist.nb_fan;
        const artista = myJsonArtist.name;

        nomeArtista.innerHTML = `${artista}`
        parFans.innerHTML = `${fans}`

        const popularTrack = await fetch(myJsonArtist.tracklist)

        if (!data.ok) {
            throw new Error("api non scaricato")
        }

        const myJsonPopuplarTrack = await popularTrack.json();

        let j = 1

        for (let i of myJsonPopuplarTrack.data) {

            elencoBrani.innerHTML += `<ul class="list-group list-group-horizontal d-flex">
            <li class="list-group-item listaBrani numero">${j}</li>
            <li class="list-group-item listaBrani image ">
              <img src="${i.album.cover}" alt="Album Cover">
            </li>
            <li class="list-group-item listaBrani title">${i.title}</li>
            <li class="list-group-item listaBrani rank">${i.rank}</li>
            <li class="list-group-item listaBrani duration">${time(i.duration)}</li>
        </ul>`
            j++;
        }
        sfondoSezioneCentrale.innerHTML = `<img src="${myJsonArtist.picture_big}" class="z-n1 w-100 object-fit-cover" alt="Album Cover">`;
        //${myJsonArtist.picture_big}
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


window.onload = () => {
    retrieveArtist()
    playlist()
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