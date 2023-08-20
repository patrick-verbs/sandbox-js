const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

const card = new Card();

// Static background renders once
c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

function animate() {
    // Dynamic function calls itself on 1st line to render indefinitely
    window.requestAnimationFrame(animate);
    console.log('animation running');

    // Remember to clear the render at the start of each frame
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    card.draw();
    card.update();
}

// Call dynamic function once, then it calls itself
animate();
