const albumUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/"
const urlId = new URLSearchParams(location.search).get("id");
const searchUrl = `${albumUrl}${urlId}`;
const riga = document.querySelector(".rigaAlbum");
const dettagliAlbum = document.querySelector(".dettagliAlbum");
const titoloAlbum = document.querySelector(".titoloAlbum");



async function retrieveSingleAlbum() {
    try {
        const data = await fetch(searchUrl)

        if (!data.ok) {
            throw new Error("api non scaricato")
        }

        const jsonAlbum = await data.json();
        const tracksArray = jsonAlbum.tracks.data;
        console.log(tracksArray)

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
            console.log(i)

            riga.innerHTML += `<ul class="list-group list-group-horizontal" >
                <li class="list-group-item numero">${j} </li>
                <li class="list-group-item image"><img src="${i.album.cover
                }"></li><li class="list-group-item title">${i.title
                }</li>
                <li class="list-group-item artist"><a href="indexArtisti.html">${i.artist.name
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
}