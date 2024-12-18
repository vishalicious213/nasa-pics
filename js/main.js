const displayArea = document.querySelector("#display-area")
const button = document.querySelector("#buttons")
displayArea.innerHTML = ""

// ⬇️ EVENT LISTENERS ⬇️

button.addEventListener("click", function(e) {
    getFetch(e.target.id)
})

// ⬇️ EVENT HANDLERS ⬇️

function getFetch(imgType) {
    const choice = document.querySelector("input").value
    const url = `https://api.nasa.gov/planetary/apod?api_key=Lea6kv8YlTX0NdR7fxQaRmRUWbKp04jdw0CPZB8X&date=${choice}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.media_type === "image") {
                imgType = "sd" 
                    ? displayArea.innerHTML = `<img src=${data.url} alt=${data.title}>`
                    : displayArea.innerHTML = `<img src=${data.hdurl} alt=${data.title}>`
            } else if (data.media_type === "video") {
                displayArea.innerHTML = `<iframe src=${data.url} frameborder="0"></iframe>`
            }
            document.querySelector("h2").innerText = data.title
            document.querySelector("h3").innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}