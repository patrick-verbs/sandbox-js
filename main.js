const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 64 * 16; // 1024
canvas.height = 64 * 9; // 576

const card = new Card();
const circle = new Circle();

// Static background renders once
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function animate() {
    // Dynamic function calls itself on 1st line to render indefinitely
    window.requestAnimationFrame(animate);
    console.log('animation running');

    // Remember to clear the render at the start of each frame
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    card.draw();
    card.update();
    circle.draw();
    // circle.update();
}

// Call dynamic function once, then it calls itself
animate();

canvas.addEventListener('mousedown', circle.handleMouseDown);
canvas.addEventListener('mousemove', circle.handleMouseMove);
canvas.addEventListener('mouseup', circle.handleMouseUp);
canvas.addEventListener('touchstart', circle.handleTouchStart);
canvas.addEventListener('touchmove', circle.handleTouchMove);
canvas.addEventListener('touchend', circle.handleTouchEnd);
