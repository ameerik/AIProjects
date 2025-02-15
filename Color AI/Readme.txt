- The aim of this AI is to show you what color the text should be on top of another colored object based off what it has learnt.

- I used the Brain.js library [https://brain.js.org/#/examples]










-------------------- CODE --------------------


----- CODE IMAGE 1 FOR script.js -----

const net = new brain.NeuralNetwork()

/* you could do this which would allow the algorithm to perform better but training would be slower
const net = new brain.NeuralNetwork({
    hiddenLayers: [4, 5, 6]
})
*/

// This will perform (X or) exclusive or operations, this also trains the ai using this data
net.train([

    {
        input:[0,0],
        output:[0]
    },
    {
        input:[1,0], // one and not the other
        output:[1]
    },
    {
        input:[0,1],
        output:[1]
    },
    {
        input:[1,1], // one and one
        output:[0]
    }

])

const diagram = document.getElementById('diagram')

diagram.innerHTML = brain.utilities.toSVG(net)

//console.log(net.run([0,0])) // if we give it 0,0 it should give us a value close to 0

//console.log(net.run([1,0])) // if we give it 1,0 it should give us a value close to 1


----- CODE IMAGE 1 FOR index.html: -----

<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,
    initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Document</title>

    <script src="//unpkg.com/brain.js" defer></script> 

    <script src="script.js" defer></script> 
</head>

<body>
    <div id="diagram"></div>
</body>

</html>



----- CODE IMAGE 2 FOR script.js -----

const net = new brain.NeuralNetwork()

/* you could do this which would allow the algorithm to perform better but training would be slower
const net = new brain.NeuralNetwork({
    hiddenLayers: [4, 5, 6]
})
*/

const data = [

    {
        input:{r:0, g:0, b:0}, //CSS operates between 0 and 255 but for AI and neural networks its best if we use between 0 and 1 (0 is black and 1 is white)
        output:[1] // White
    },
    {
        input:{r:1, g:1, b:1}, //input node
        output:[0] // Black
    },

]

net.train(data)

const diagram = document.getElementById('diagram')

diagram.innerHTML = brain.utilities.toSVG(net)

console.log(net.run({r:1, g:1, b:0})) // if we give it 0,0 it should give us a value close to 0









-------------------- STEPS TO TRAIN --------------------


----- 1.RUN THE WEB APP A FEW TIMES WITH THIS script.js CODE ----- 

const net = new brain.NeuralNetwork()

/* you could do this which would allow the algorithm to perform better but training would be slower
const net = new brain.NeuralNetwork({
    hiddenLayers: [4, 5, 6]
})
*/

const data = [

    {
        input:{r:0, g:0, b:0}, //CSS operates between 0 and 255 but for AI and neural networks its best if we use between 0 and 1 (0 is black and 1 is white)
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



----- 2.PRINT THE RESULTS AND TAKE THAT AND USE IT AS YOUR TRAINING DATA LIKE SO -----

const data = [{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},
{"input":{"r":0.7957522680481812,"g":0.25856738244355604,"b":0.11500281302008097},"output":[0]},
{"input":{"r":0.26457938887998156,"g":0.6694982463428248,"b":0.5667725059204073},"output":[0]},
{"input":{"r":0.8076880078453027,"g":0.6166313441633069,"b":0.705301055311595},"output":[1]},
{"input":{"r":0.9772686132510536,"g":0.20154635785958552,"b":0.5341315079044119},"output":[1]},
{"input":{"r":0.8847734543284972,"g":0.7562388053548428,"b":0.18978986902795159},"output":[0]},
{"input":{"r":0.04157752282542537,"g":0.6698595168830277,"b":0.9185079713345015},"output":[1]},
{"input":{"r":0.14892762329222187,"g":0.7923941636595638,"b":0.090210500519736},"output":[0]},
{"input":{"r":0.3217053658761625,"g":0.8316525018228629,"b":0.7067496955168675},"output":[0]},
{"input":{"r":0.946010719440435,"g":0.968420525360559,"b":0.861171684718348},"output":[0]},
{"input":{"r":0.9895888682013113,"g":0.4482105848557171,"b":0.4897481007436577},"output":[0]},
{"input":{"r":0.1939947560814672,"g":0.49062571204142524,"b":0.33885178803182725},"output":[1]},
{"input":{"r":0.13327241079199514,"g":0.47605950770477123,"b":0.33952847479931625},"output":[1]},
{"input":{"r":0.46328929914627526,"g":0.9118363970349239,"b":0.12407887828783981},"output":[0]},
{"input":{"r":0.3774410991853189,"g":0.9408680414891233,"b":0.8874770033577822},"output":[0]},
{"input":{"r":0.6188927066314738,"g":0.5490360912304169,"b":0.61823176655463},"output":[0]},
{"input":{"r":0.6122765291772225,"g":0.18664014021193376,"b":0.917734700159544},"output":[1]},
{"input":{"r":0.7613407384888247,"g":0.6045682086284655,"b":0.8442504844488259},"output":[0]},
{"input":{"r":0.2850194654470516,"g":0.7712812691695852,"b":0.560960327160138},"output":[0]},
{"input":{"r":0.940558282866164,"g":0.1013216202360594,"b":0.4010940718514855},"output":[0]},
{"input":{"r":0.6851629334624795,"g":0.723548519585336,"b":0.7859500984663884},"output":[0]},
{"input":{"r":0.228776379751366,"g":0.7282865701972244,"b":0.6193935599173289},"output":[0]},
{"input":{"r":0.3224145674429424,"g":0.9833782467282436,"b":0.2051104713300984},"output":[0]},
{"input":{"r":0.3512189282166137,"g":0.49175342287674784,"b":0.5708513432967938},"output":[1]},
{"input":{"r":0.38627470843828937,"g":0.1703202484389199,"b":0.8992791532514856},"output":[1]}]