// DEFINIZIONE 
const urlArtista = "https://striveschool-api.herokuapp.com/api/deezer/artist/"
const urlIdArtista = new URLSearchParams(location.search).get("id");
const searchUrlArtista = `${urlArtista}${urlIdArtista}`;
const parFans = document.querySelector("p")
const riga = document.querySelector(".row");
const nomeArtista = document.querySelector(".nomeArtista");


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

            riga.innerHTML += `<ul class="list-group list-group-horizontal">
                    <li class="list-group-item numero">${j} </li>
                    <li class="list-group-item image"><img src="${i.album.cover
                }"></li>
                    <li class="list-group-item title">${i.title
                }</li>
                    <li class="list-group-item rank">${i.rank
                }</li>
                    <li class="list-group-item duration">${time(i.duration)}
                        </li>
                  </ul>`
            j++


        }
    } catch (error) {
        console.error("fetch non andata a buon fine")
    }
}


// async function mostPopular() {
//     try {

//         const popularTracksUrl = artistArray[0].data[0].artist.tracklist


//         const popularTracksFetch = await fetch(popularTracksUrl)

//         if (!popularTracksFetch.ok) {
//             throw new Error("api Popular non scaricato")

//         }

//         const popularJson = await popularTracksFetch.json();
//         console.log(popularJson)

//         const artista = artistArray[0].data[0].artist.name

//         riga.innerHTML = "";

//         // Inseriamo nel documet un H1 con il nome dell'artista
//         nomeArtista.innerHTML = "";

//         nomeArtista.innerHTML = `${artista}`

//         let j = 1
//         for (let i of popularJson.data) {

//             riga.innerHTML += `<ul class="list-group list-group-horizontal">
//             <li class="list-group-item numero">${j} </li>
//             <li class="list-group-item image"><img src="${i.album.cover
//                 }"></li>
//             <li class="list-group-item title">${i.title
//                 }</li>
//             <li class="list-group-item rank">${i.rank
//                 }</li>
//             <li class="list-group-item duration">${time(i.duration)}
//                 </li>
//           </ul>`
//             j++
//         }

//     }

//     catch (error) {
//     console.error("fetch non eseguita")
// }


const time = (num) => {
    let minutes = Math.floor(num / 60)
    let seconds = num % 60;
    return minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0')
}


window.onload = async () => {
    // retrieveTracks()
    // mostPopular();
    retrieveArtist()
}

