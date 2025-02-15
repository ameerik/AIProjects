const net = new brain.NeuralNetwork()

/* you could do this which would allow the algorithm to perform better but training would be slower
const net = new brain.NeuralNetwork({
    hiddenLayers: [4, 5, 6]
})
*/

const data = [

    {
        input:{r:0, g:0, b:0}, //CSS operates between 0 and 255 but for AI and neural networks we use between 0 and 1 (0 is black and 1 is white)
        output:[1] // White
    },
    {
        input:{r:1, g:1, b:1}, //input node
        output:[0] // Black
    },

]

net.train(data)

const colorE1 = document.getElementById('color')
const guessE1 = document.getElementById('guess')
const whiteButton = document.getElementById('white-button')
const blackButton = document.getElementById('black-button')
const printButton = document.getElementById('print-button')
let color
setRandomColor() 

whiteButton.addEventListener('click' , ()=>{
    chooseColor(1)
})

blackButton.addEventListener('click' , ()=>{
    chooseColor(0)
})

printButton.addEventListener('click', print)

function chooseColor(value) {
    data.push({
        input: color,
        output: [value]
    })
    setRandomColor()
}


function print() {
    console.log(JSON.stringify(data))
}


function setRandomColor() {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    }

    const guess = net.run(color)[0]

    guessE1.style.color = guess > .5 ? '#FFF' : '#000'

    colorE1.style.background =
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}