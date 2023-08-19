const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576


// Static background renders once
c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

let y = 100;
const height = 100;
let bottom = y + height;
function animate() {
    // Dynamic function calls itself on 1st line to render indefinitely
    window.requestAnimationFrame(animate);
    console.log('animation running');

    // Remember to clear the render at the start of each frame
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    // 1st object
    c.fillStyle = 'red';
    c.fillRect(100, y, 100, height);

    if (bottom < canvas.height) {
        y++;
        bottom = y + 100;
    }
}

// Call dynamic function once, then it calls itself
animate();
