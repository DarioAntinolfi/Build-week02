const albumUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/"
const urlId = new URLSearchParams(location.search).get("id");
const searchUrl = `${albumUrl}${urlId}`;
const urlArtist = new URLSearchParams(location.search).get("art");
const riga = document.querySelector(".rigaAlbum");
const dettagliAlbum = document.querySelector(".dettagliAlbum");
const titoloAlbum = document.querySelector(".titoloAlbum");
const playerBar = document.querySelector(".player");
/* Info dei brani*/
const numeroBrano = document.querySelector(".elementoBranoAlbum1");
const titoloBrano = document.querySelector(".elementoBranoAlbum2");
const riproduzioniBrano = document.querySelector(".elementoBranoAlbum3");
const durataBrano = document.querySelector(".elementoBranoAlbum4");
/* E' la sezione in cui si inseriscono con innerHTML tutti le info dei brani */
const branoAlbum = document.querySelector(".branoAlbum");
/* Variabili in cui andare ad inserire il innerHTML per il Hero */
const imgAlbumHero = document.querySelector(".imgAlbumHero");
const albumTitleHero = document.querySelector(".albumTitleHero");
const infoAlbumHero = document.querySelector(".infoAlbumHero");

async function retrieveSingleAlbum() {
    try {
        const data = await fetch(searchUrl)

        if (!data.ok) {
            throw new Error("api non scaricato")
        }

        const jsonAlbum = await data.json();
        const tracksArray = jsonAlbum.tracks.data;

        riga.innerHTML = "";
        titoloAlbum.innerHTML = "";
        dettagliAlbum.innerHTML = "";


        titoloAlbum.innerHTML = `${jsonAlbum.title}`;
        dettagliAlbum.innerHTML = `<ul class="list-group list-group-horizontal" >
        <li class="list-group-item immagine"> <img src="${jsonAlbum.contributors[0].picture_small
            }"></li>
            <li class="list-group-item aritstName">${jsonAlbum.artist.name}</li>
            <li class="list-group-item releaseDate">${jsonAlbum.release_date}</li>
            <li class="list-group-item nTracks">${jsonAlbum.nb_tracks}</li>
            <li class="list-group-item duration">${time(jsonAlbum.duration)}</li>
            </ul>`



        let j = 1
        for (let i of tracksArray) {

            riga.innerHTML += `<ul class="list-group list-group-horizontal" >
                <li class="list-group-item numero">${j} </li>
                <li class="list-group-item image"><img src="${i.album.cover
                }"></li><li class="list-group-item title">${i.title
                }</li>
                <li class="list-group-item artist"><a href="indexArtisti.html?id=${urlArtist}">${i.artist.name
                }</a></li>
                <li class="list-group-item rank">${i.rank
                }</li>
                <li class="list-group-item duration">${time(i.duration)}
                    </li>
              </ul> `
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


window.onload = () => {
    retrieveSingleAlbum()
    playerCheck();
}

const playerCheck = () => {
    const player = localStorage.getItem("display");
    if (player) {
        playerBar.classList.remove("d-none");
        playerBar.classList.add("d-block");

    }
}