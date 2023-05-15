const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const urlId = new URLSearchParams(location.search).get("q");
const searchUrl = `${url}${urlId}`;
const artistArray = [];
const riga = document.querySelector(".row");



async function retrieveSingleArtist() {
    try {
        const data = await fetch(searchUrl)

        if (!data.ok) {
            throw new Error("api non scaricato")
        }

        const myJson = await data.json();

        console.log(myJson)

        artistArray.push(myJson);

        console.log(artistArray)

        const popularTracksUrl = artistArray[0].data[0].artist.tracklist

        const popularTracksFetch = await fetch(popularTracksUrl)

        if (!popularTracksFetch.ok) {
            throw new Error("api Popular non scaricato")

        }

        const popularJson = await popularTracksFetch.json();

        console.log(popularJson)

        riga.innerHTML = "";
        let j = 1
        for (let i of popularJson.data) {

            riga.innerHTML += `<ul class="list-group list-group-horizontal">
            <li class="list-group-item numero">${j} </li>
            <li class="list-group-item image"><img src="${i.album.cover
                }"></li>
            <li class="list-group-item title">${i.title
                }</li>
            <li class="list-group-item rank">${i.rank
                }</li>
            <li class="list-group-item duration">${i.duration}
                </li>
          </ul>`
            j++
        }

    }

    catch (error) {
        console.error("fetch non eseguita")
    }
}

// async function popularTracks() {
//     try {
//         const data = await fetch(searchUrl)



//         if (!data.ok) {
//             throw new Error("api non scaricato")
//         }

//         const myJson = await data.json();

//         artistArray.push(myJson)

//         console.log(artistArray)


//     }

//     catch (error) {
//         console.error("fetch non eseguita")
//     }
// }

window.onload = async () => {
    await retrieveSingleArtist()
}