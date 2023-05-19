const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const urlId = new URLSearchParams(location.search).get("q");
const searchUrl = `${url}${urlId}`;
const riga = document.querySelector(".row");
const nomeArtista = document.querySelector(".nomeArtista");

async function retrievetracks() {
    try {
        const data = await fetch(searchUrl)

        if (!data.ok) {
            throw new Error("api non scaricato")
        }

        const myJsonArtist = await data.json();
        console.log(myJsonArtist)

        let j = 1
        for (let i of myJsonArtist.data) {
            console.log(i)

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

window.onload = () => {

    retrievetracks()

}


const time = (num) => {
    let minutes = Math.floor(num / 60)
    let seconds = num % 60;
    return minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0')
}