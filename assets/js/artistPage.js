const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const urlId = new URLSearchParams(location.search).get("q");
const searchUrl = `${url}${urlId}`
console.log(urlId)
console.log(searchUrl)

async function retrieveSingleArtist() {
    try {
        const data = await fetch(searchUrl)



        if (!data.ok) {
            throw new Error("api non scaricato")
        }

        const myJson = await data.json();

        // arrayData.push(myJson)

        // console.log(arrayData)

        console.log(myJson)

    }

    catch (error) {
        console.error("fetch non eseguita")
    }
}

window.onload = () => {
    retrieveSingleArtist()
}