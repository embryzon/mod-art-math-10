const repCanvas = document.getElementById('repeatedCanvas');
const repCtx = repCanvas.getContext('2d');

const canvas1 = document.getElementById('canvas1'); // Assuming #canvas1 is your source canvas
const canvas1Ctx = canvas1.getContext('2d');

repCanvas.width = 600;
repCanvas.height = 600;

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        let x = repCanvas.width / 2 * i;
        let y = repCanvas.height / 2 * j;

        repCtx.drawImage(canvas1, x, y, repCanvas.width / 2, repCanvas.height / 2);
    }
}
const downloadRepeated = document.getElementById('downloadRepeated');
downloadRepeated.addEventListener('click', () => {
    downloadCanvasAsImage('repeatedCanvas', 'my_image.png');
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