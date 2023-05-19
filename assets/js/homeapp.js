// organizzo una fetch get per prendere tutto il database dal mio API

const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
const arrayData = []
const search = document.getElementById("search");
const searchValue = document.querySelector(".search");

async function retrieveDatabase() {
    try {
        const data = await fetch(url)



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


search.addEventListener('click', () => {
    search.setAttribute('href', `indexResult.html?q=${searchValue.value.toLowerCase()}`)

})

window.onload = () => {
    retrieveDatabase()
}