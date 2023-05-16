const albumUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/"
const urlId = new URLSearchParams(location.search).get("id");
const searchUrl = `${albumUrl}${urlId}`;
const riga = document.querySelector(".rigaAlbum");
const titoloAlbum = document.querySelector(".titoloAlbum");



console.log(searchUrl)
async function retrieveSingleAlbum() {
    try {
        const data = await fetch(searchUrl)

        if (!data.ok) {
            throw new Error("api non scaricato")
        }

        const jsonAlbum = await data.json();
        console.log(jsonAlbum);
        riga.innerHTML ="";
        titoloAlbum.innerHTML = "";
        titoloAlbum.innerHTML = `${jsonAlbum.title}`;
        
        let j = 1
        for (let i of jsonAlbum.data) {

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


// Popoliamo la sezione centrale della pagina; ce ne servono 3
/*let j = 1
        for (let i of popularJson.data) {

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
        }*/

window.onload = () => {
    retrieveSingleAlbum()
}