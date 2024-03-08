const widthRange = document.querySelector("#width-input")
const heightRange = document.querySelector("#height-input")

function startGame(){
    const startBtn = document.querySelector("#start")
    const body = document.body
    const board = document.querySelector("#board")
    
    startBtn.onclick = () => {
        document.querySelector("#start span").classList.add("end")
        
        setTimeout(() => {
            body.classList.add("start")
            board.className = ""
            startBtn.remove()
            createGrid(parseInt(widthRange.value), parseInt(heightRange.value))
        }, 500); 
    }

}
startGame()

function createGrid(width, height){
    const blocksWrapper = document.querySelector(".blocks-wrapper")
    const blocks = document.querySelectorAll(".block")
    const colorInput = document.querySelector("#color")

    console.log(height, width)


    if(blocks){
        blocks.forEach(block => {
            block.remove()
        });
    }
    
    console.log(colorInput.value)
    
    for(i = 0; i < width * height; i++){
        const block = document.createElement("div")
        block.className = "block"
        
        block.addEventListener("dragenter", () =>{
            block.style.backgroundColor = colorInput.value
        })

        blocksWrapper.appendChild(block)
    }
    
    blocksWrapper.style.gridTemplateColumns = `repeat(${width}, 1fr)`
    blocksWrapper.style.gridTemplateRows = `repeat(${height}, 1fr)`
}

widthRange.addEventListener("change", () => {
    const widthScreen = document.querySelector(".width span")

    widthScreen.textContent = widthRange.value
    createGrid(parseInt(widthRange.value), parseInt(heightRange.value))
})

heightRange.addEventListener("change", () => {
    const heightScreen = document.querySelector(".height span")

    heightScreen.textContent = heightRange.value
    createGrid(parseInt(widthRange.value), parseInt(heightRange.value))
})