// Write your code here

document.getElementById("main").remove()

const newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
const text = document.createTextNode("Sneb is the champion")
newHeader.appendChild(text)
