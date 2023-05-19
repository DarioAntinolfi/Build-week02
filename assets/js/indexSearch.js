const valoreInput = document.querySelector("input");
const search = document.querySelector("a")

// console.log(search)

search.addEventListener("click", () => {
    const valore = valoreInput.value
    search.setAttribute("href", `indexSearchResult.html?q=${valore.toLowerCase()}`)
})


valoreInput.addEventListener("keypress", (evt) => {
    const valore = valoreInput.value
    if (evt.key === "Enter" && !valore == "") {
        search.setAttribute("href", `indexSearchResult.html?q=${valore.toLowerCase()}`)
        search.click();
    }
});


