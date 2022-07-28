// make the img ivisible

// document.getElementById("county").innerText = count
let county = document.getElementById("county")
let savey = document.getElementById("savy")
let savery = document.getElementById("sabah")

let count = 0


function increment() {
 count += 1
 county.textContent = count
 
}


function save() {
    county.textContent = 0
    console.log(count)
    let saby = count + "-"
    count = 0
    savery.textContent += saby
}

