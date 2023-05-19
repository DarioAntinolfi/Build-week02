const valoreInput = document.querySelector("input");
const search = document.querySelector("a")

search.addEventListener("click", () => {
    const valore = valoreInput.value
    search.setAttribute("href", `indexSearchResult.html?q=${valore}`)
})


valoreInput.value.addEventListener("keypress", (evt){
    if (evt.key === "Enter" && !valoreInput.value == "") {
        evt.preventDefault();
        document.getElementById("myBtn").click();
    }
});

