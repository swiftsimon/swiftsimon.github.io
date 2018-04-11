let getMap = document.getElementById("map")
let mapBtn = document.getElementById("map-button")

showMap = () => {
    console.log("map")
    getMap.style.display = "block"
    mapBtn.style.display = "none"
}

// btnHover = () => {
//     console.log("hover")
//     mapBtn.style.backgroundColor = "white"
// }

mapBtn.addEventListener('click',showMap )
// mapBtn.addEventListener('mouseenter', btnHover)

