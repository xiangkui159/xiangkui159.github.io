let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight, P2D); // 使用P2D模式以支持透明度
    background(50, 50); // 设置透明背景
}

function draw() {
    background(0, 25); // 为了创建拖尾效果，可以调整这里的透明度
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
    if (mouseIsPressed) {
        let p = new Particle(mouseX, mouseY);
        particles.push(p);
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);
        this.alpha = 255;
    }

    finished() {
        return this.alpha < 0;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    show() {
        noStroke();
        fill(255, this.alpha);
        ellipse(this.x, this.y, 16);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
