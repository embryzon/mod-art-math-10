import truncatedTable from "../modules/TruncatedTable.mjs";

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

let imgSize = 150

canvas.height = imgSize * truncatedTable.length
canvas.width = canvas.height

for (let i = 0; i < truncatedTable.length; i++){
    for (let j = 0; j < truncatedTable[i].length; j++){
        const image = new Image()
        const imgPath = `../imgs/${truncatedTable[i][j]}.png`
        image.src = imgPath

        image.onload = ()=>{
            const x = (canvas.width/6) * j
            const y = (canvas.height/6) * i
            // ctx.drawImage(image,x,y,imgSize,imgSize)/
            ctx.fillStyle = `rgb(${(truncatedTable[i][j]*60)%255},${(truncatedTable[i][j]*60)%255},0)`
            ctx.fillRect(x,y,imgSize,imgSize)
        }
    }
    
}
