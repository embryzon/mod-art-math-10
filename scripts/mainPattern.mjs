import truncatedTable from "../modules/TruncatedTable.mjs";

        const canvas = document.getElementById('canvas1')
        const ctx = canvas.getContext('2d')

        let imgSize = 100

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
                    ctx.drawImage(image,x,y,imgSize,imgSize)
                    // ctx.fillStyle = `rgb(${(truncatedTable[i][j]*60)%255},${(truncatedTable[i][j]*60)%255},0)`
                    // ctx.fillRect(x,y,imgSize,imgSize)
                }
            }
            
        }

        const downloadButton = document.getElementById('downloadButton');
        downloadButton.addEventListener('click', () => {
            downloadCanvasAsImage('canvas1', 'my_image.png');
        });

        function downloadCanvasAsImage(canvasId, fileName) {
            const canvas = document.getElementById(canvasId);
            const url = canvas.toDataURL('image/png');

            // Create a temporary anchor element to trigger the download
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;

            // Simulate a click on the anchor element to initiate the download
            link.click();
        }
        alert("MainPattern Has been loaded");