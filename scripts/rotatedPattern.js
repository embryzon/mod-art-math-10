const rotCanvas = document.getElementById('rotatedCanvas');
const rotCtx = rotCanvas.getContext('2d');

rotCanvas.width = 600;
rotCanvas.height = 600;
rotCtx.translate(rotCanvas.width/2,0)

for (let i = 0; i < 4; i++) {
    // Draw the rotated image
    rotCtx.drawImage(canvas1, 0, 0, rotCanvas.width / 2, rotCanvas.height / 2);

    // Translate to the center of the next quadrant
    rotCtx.translate(rotCanvas.width / 2, rotCanvas.height / 2);

    // Rotate by 90 degrees for the next quadrant
    rotCtx.rotate(Math.PI / 2);
}

const downloadRotated = document.getElementById('downloadRotated');

downloadRotated.addEventListener('click', () => {
    downloadCanvasAsImage('rotatedCanvas', 'my_image.png');
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