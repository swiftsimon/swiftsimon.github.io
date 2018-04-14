let getMap = document.getElementById("map")
let mapBtn = document.getElementById("map-button")

showMap = () => {
    getMap.style.display = "block"
    mapBtn.style.display = "none"
}

mapBtn.addEventListener('click',showMap )

