console.log("reflected Loaded")

const refCanvas = document.getElementById('reflectedCanvas');
const refCtx = refCanvas.getContext('2d');

refCanvas.width = 600;
refCanvas.height = 600;
refCtx.translate(refCanvas.width/2,0)

refCtx.translate(-refCanvas.width/2,0)
refCtx.drawImage(canvas1, 0, 0, refCanvas.width / 2, refCanvas.height / 2);

refCtx.drawImage(canvas1, 0, 300, refCanvas.width / 2, refCanvas.height / 2);

refCtx.scale(-1,1);
refCtx.drawImage(canvas1, -600, 0, refCanvas.width / 2, refCanvas.height / 2);

refCtx.drawImage(canvas1, -600, 300, refCanvas.width / 2, refCanvas.height / 2);

refCtx.restore()

const downloadReflected = document.getElementById('downloadReflected');

downloadReflected.addEventListener('click', () => {
    downloadCanvasAsImage('reflectedCanvas', 'my_image.png');
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
