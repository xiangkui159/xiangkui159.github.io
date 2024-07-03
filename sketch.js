let lines = [];

function setup() {
    createCanvas(windowWidth, windowHeight); // 创建画布，大小为窗口宽高
    strokeWeight(2); // 设置线条的粗细
    frameRate(60); // 设置帧率为60
}

function draw() {
    background(0); // 设置背景颜色为黑色
    let newLine = {
        x1: pmouseX,
        y1: pmouseY,
        x2: mouseX,
        y2: mouseY,
        col: color(random(255), random(255), random(255), 200)
    };
    lines.push(newLine);

    if (lines.length > 100) {
        lines.splice(0, 1); // 保持线条数量最多为100条
    }

    for (let i = 0; i < lines.length; i++) {
        stroke(lines[i].col);
        line(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight); // 当窗口尺寸变化时调整画布大小
}
