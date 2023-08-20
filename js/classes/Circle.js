class Circle {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.radius = 20;
        this.color = 'green';
        this.isDragging = false;
        this.offsetX = 0;
        this.offsetY = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // update() {
    //     if (this.sides.bottom < canvas.height) {
    //         this.position.y++;
    //         this.sides.bottom = this.position.y + 100;
    //     }
    // }

    isInside(x, y) {
        return Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2) <= this.radius;
    }

    move(newX, newY) {
        circle.x = newX + circle.offsetX;
        circle.y = newY + circle.offsetY;
        circle.draw();
    }

    // Mouse control, next 3 functions
    handleMouseDown(e) {
        const mouseX = e.clientX - canvas.getBoundingClientRect().left;
        const mouseY = e.clientY - canvas.getBoundingClientRect().top;

        if (circle.isInside(mouseX, mouseY)) {
            this.isDragging = true;
            this.offsetX = this.x - mouseX;
            this.offsetY = this.y - mouseY;
        }
    }
    handleMouseMove(e) {
        if (this.isDragging) {
            const mouseX = e.clientX - canvas.getBoundingClientRect().left;
            const mouseY = e.clientY - canvas.getBoundingClientRect().top;
            circle.move(mouseX, mouseY);
        }
    }
    handleMouseUp() {
        this.isDragging = false;
    }

    // Touch control, next 3 functions
    handleTouchStart(e) {
        const touch = e.touches[0];
        const touchX = touch.clientX - canvas.getBoundingClientRect().left;
        const touchY = touch.clientY - canvas.getBoundingClientRect().top;

        if (circle.isInside(touchX, touchY)) {
            e.preventDefault(); // Prevent default touch behavior
            this.isDragging = true;
            this.offsetX = this.x - touchX;
            this.offsetY = this.y - touchY;
        }
    }

    handleTouchMove(e) {
        if (this.isDragging) {
            const touch = e.touches[0];
            const touchX = touch.clientX - canvas.getBoundingClientRect().left;
            const touchY = touch.clientY - canvas.getBoundingClientRect().top;
            circle.move(touchX, touchY);
        }
    }

    handleTouchEnd() {
        this.isDragging = false;
    }
}
