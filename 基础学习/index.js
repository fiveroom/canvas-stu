class CanvasTest {


    constructor(selector) {
        let canvas = document.querySelector(selector);
        this.ctx = canvas.getContext('2d');

        this.fill();
        this.line();
        this.circle();
        this.circle();
        this.text();
        this.imageR();
    }

    /**
     * 矩形
     */
    fill() {
        // 填充颜色值：CSS颜色，渐变，或图案
        this.ctx.fillStyle = '#FF0000';
        this.ctx.fillRect(0, 0, 150, 75);

        // 渐变填充
        // createLinearGradient(x0, y0, x1, y1)
        var grd = this.ctx.createLinearGradient(20, 150, 220, 350);
        // 添加一个由偏移值和颜色值指定的断点到渐变
        grd.addColorStop(0, "green");
        grd.addColorStop(1, "white");
        this.ctx.fillStyle = grd;
        this.ctx.fillRect(20, 150, 200, 200);
    }

    // 图像
    imageR() {
        let img = document.querySelector('img');
        // this.ctx.drawImage(img,10,10, 100, 100);
        this.ctx.drawImage(img, 150, 150, 200, 200);
    }


    line() {
        // 开始坐标
        this.ctx.lineWidth = 1;
        // this.ctx.strokeStyle  = "rgba(0,0,0,1)";
        this.ctx.moveTo(200, 0);
        // 结束坐标
        this.ctx.lineTo(200, 100);
        // 绘制当前或已经存在的路径
        this.ctx.stroke();

        this.ctx.moveTo(220, 120);
        // 结束坐标
        this.ctx.lineTo(320, 220);
        // 绘制当前或已经存在的路径
        this.ctx.stroke();
    }

    circle() {
        // 清空子路径列表开始一个新路径
        this.ctx.beginPath();
        // 画圆
        this.ctx.arc(95, 50, 40, 0, Math.PI);
        this.ctx.stroke();
        this.ctx.strokeStyle = 'green';
        // 将笔点返回到当前子路径起始点
        this.ctx.closePath();
    }

    // 文本
    text() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'red';
        // 当前字体样式的属性
        this.ctx.font = "bold 30px serif";
        // 在 (x, y)位置填充文本
        // 绘制实心的文本
        this.ctx.fillText("Hello World", 50, 100);
        // 绘制空心的文本
        this.ctx.strokeText("Hello World", 100, 150);
        this.ctx.closePath();

    }

}

console.log(new CanvasTest('#canvas'));
const can2 = document.getElementById('canvas2');
var ctx = can2.getContext('2d');
const width2 = can2.width;
const height2 = can2.height;
// 252, 0, 255
//      |
// 0, 219, 222
const wa = width2 / 10;
const wb = height2 / 10;
const paddingW = 4;
let rgbS1 = 252;
let rgbS2 = 0;
let rgbS3 = 255;

let rgbE1 = 0;
let rgbE2 = 219;
let rgbE3 = 222;

function getColor(s, e, size) {
    return Math.floor(s - (s - e) / 99 * size)
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        ctx.beginPath();
        const locat = (i + 1) * (j + 1) - 1;
        ctx.fillStyle = `rgb(${getColor(rgbS1, rgbE1, locat)},${getColor(rgbS2, rgbE2, locat)},${getColor(rgbS3, rgbE3, locat)})`;
        ctx.fillRect(i * wa + paddingW, j * wb + paddingW, wa - paddingW * 2, wb - paddingW * 2);
    }
}

const can3 = document.getElementById('canvas3').getContext('2d');
can3.beginPath();
can3.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
can3.moveTo(110, 75);
can3.arc(75, 75, 35, 0, Math.PI, false);   // 口(顺时针)
// can3.moveTo(65, 65);
can3.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
can3.moveTo(95, 65);
can3.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
can3.stroke();

// for (var i = 0; i < 6; i++) {
//     for (var j = 0; j < 6; j++) {
//         ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' +
//             Math.floor(255 - 42.5 * j) + ')';
//         ctx.beginPath();
//         ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
//         ctx.stroke();
//     }
// }

function renderCoordinateAxis(ctx, width, height, gap = 20) {
    console.log(ctx);
    for (let x = gap; x < width; x += gap) {
        ctx.beginPath();
        ctx.setLineDash([2, 2]);
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke()
    }
    for (let y = gap; y < height; y += gap) {
        ctx.beginPath();
        ctx.setLineDash([2, 2]);
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke()
    }
    ctx.setLineDash([]);
}

const can4Ele = document.getElementById('canvas4');
const can4 = can4Ele.getContext('2d');


renderCoordinateAxis(can4, can4Ele.width, can4Ele.height)

// 二次贝塞尔曲线
can4.beginPath();
can4.fillStyle = '#e711fc';
can4.moveTo(20, 20);
can4.quadraticCurveTo(20, 40, 40, 40);
can4.quadraticCurveTo(40, 20, 20, 20);
can4.moveTo(80, 20);
can4.quadraticCurveTo(80, 40, 60, 40);
can4.quadraticCurveTo(60, 20, 80, 20);
// can4.quadraticCurveTo(25, 100, 50, 100);
// can4.quadraticCurveTo(50, 120, 30, 125);
// can4.quadraticCurveTo(60, 120, 65, 100);
// can4.quadraticCurveTo(125, 100, 125, 62.5);
// can4.quadraticCurveTo(125, 25, 75, 25);
can4.fill();
// can4.stroke();
can4.strokeStyle = '#e711fc';
can4.moveTo(20, 60);
can4.bezierCurveTo(40, 80, 60, 80, 80, 60);
can4.bezierCurveTo(70, 30, 55, 100, 20, 60);
can4.stroke();



// 创建渐变
!function () {
    const can5Ele = document.getElementById('canvas5');
    const can5 = can5Ele.getContext('2d');
    var radgrad = can5.createRadialGradient(100, 100, 10, 100, 100, 30);
    radgrad.addColorStop(0, '#A7D30C');
    radgrad.addColorStop(0.2, '#ff9632');
    radgrad.addColorStop(0.6, '#2fc8eb');
    radgrad.addColorStop(0.9, '#000000');
    radgrad.addColorStop(1, '#ffffff');

    // var radgrad2 = can5.createRadialGradient(105, 105, 20, 112, 120, 50);
    // radgrad2.addColorStop(0, '#FF5F98');
    // radgrad2.addColorStop(0.75, '#FF0188');
    // radgrad2.addColorStop(1, 'rgba(255,1,136,0)');

    // var radgrad3 = can5.createRadialGradient(95, 15, 15, 102, 20, 40);
    // radgrad3.addColorStop(0, '#00C9FF');
    // radgrad3.addColorStop(0.8, '#00B5E2');
    // radgrad3.addColorStop(1, 'rgba(0,201,255,0)');

    // var radgrad4 = can5.createRadialGradient(0, 150, 50, 0, 140, 90);
    // radgrad4.addColorStop(0, '#F4F201');
    // radgrad4.addColorStop(0.8, '#E4C700');
    // radgrad4.addColorStop(1, 'rgba(228,199,0,0)');

    // 画图形
    // can5.fillStyle = radgrad4;
    // can5.fillRect(0, 0, 150, 150);
    // can5.fillStyle = radgrad3;
    // can5.fillRect(0, 0, 150, 150);
    // can5.fillStyle = radgrad2;
    // can5.fillRect(0, 0, 150, 150);
    can5.fillStyle = radgrad;
    can5.fillRect(0, 0, 200, 200);
}();

// save restore
!function () {
    const canEle = document.getElementById('canvas6');
    const ctx = canEle.getContext('2d');
    ctx.fillRect(0, 0, 150, 150);   // 使用默认设置绘制一个矩形
    ctx.save();                  // 保存默认状态

    ctx.fillStyle = '#09F'       // 在原有配置基础上对颜色做改变
    ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形

    ctx.save();                  // 保存当前状态
    ctx.fillStyle = '#FFF'       // 再次改变颜色配置
    ctx.globalAlpha = 0.5;
    ctx.fillRect(30, 30, 90, 90);   // 使用新的配置绘制一个矩形

    ctx.restore();               // 重新加载之前的颜色状态
    ctx.fillRect(45, 45, 60, 60);   // 使用上一次的配置绘制一个矩形

    ctx.restore();               // 加载默认颜色配置
    ctx.fillRect(60, 60, 30, 30);   // 使用加载的配置绘制一个矩形
}();

// 旋转

!function () {
    const canEle = document.getElementById('canvas7');
    const ctx = canEle.getContext('2d');
    ctx.translate(100, 100);
    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -70);
    ctx.stroke()
    ctx.moveTo(100, 0);
    ctx.arc(0, 0, 100, 0, 2 * Math.PI);
    ctx.stroke()
    for (let i = 0; i < 12; i++) {
        ctx.rotate(Math.PI * 2 / 12)
        ctx.beginPath();
        ctx.moveTo(0, i % 4 === 0 ? 80 : 90);
        ctx.lineTo(0, 100);
        ctx.stroke()
    }
    // ctx.rotate(0);
    // ctx.beginPath();
    // ctx.moveTo()
    // let a =  Math.PI / 60;
    // let roate = 0;
    // setTimeout(() => {
    //     ctx.rotate(a * roate);
    //     rotate = (rotate + 1) % 60;
    // }, 1000);
}();

// 裁剪
!function () {
    const canEle = document.getElementById('canvas8');
    const ctx = canEle.getContext('2d');
    let w = 150;
    ctx.translate(canEle.width / 2, canEle.height / 2);
    ctx.fillRect(- w / 2, - w / 2, w, w)

    ctx.beginPath();
    ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
    ctx.clip()

    var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
    lingrad.addColorStop(0, '#232256');
    lingrad.addColorStop(0.3, '#30b0e4');
    lingrad.addColorStop(1, '#143778');
    ctx.fillStyle = lingrad;
    ctx.fillRect(-75, -75, 150, 150);

    for (var j = 1; j < 20; j++) {
        ctx.save();
        ctx.fillStyle = "#ffffff";
        ctx.translate(75 - Math.floor(Math.random() * 150), 75 - Math.floor(Math.random() * 150));
        drawStar(Math.floor(Math.random() * 10) + 2);
        ctx.restore();
    }

    function drawStar(r) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(r, 0);
        for (var i = 0; i < 9; i++) {
            ctx.rotate(Math.PI / 5);
            if (i % 2 === 0) {
                ctx.lineTo(r * 0.3819660112501051, 0)
            } else {
                ctx.lineTo(r, 0)
            }
        }
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}();

// 动画 地球
!function () {
    const canEle = document.getElementById('canvas9');
    const ctx = canEle.getContext('2d');
    var sun = new Image();
    var moon = new Image();
    var earth = new Image();

    function init() {
        sun.src = '/images/Canvas_sun.png';
        moon.src = '/images/Canvas_moon.png';
        earth.src = '/images/Canvas_earth.png';
    };
    init();

    function draw() {
        ctx.globalCompositeOperation = 'destination-over';
        ctx.clearRect(0, 0, 400, 400); // clear canvas
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.strokeStyle = 'rgba(0,153,255,0.4)';
        ctx.save();
        ctx.translate(canEle.width / 2, canEle.height / 2);
        var time = new Date();

        // earth
        ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
        ctx.translate(105, 0);
        ctx.fillRect(0, -12, 50, 24); // Shadow
        ctx.drawImage(earth, -12, -12);


        // moon 
        ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
        ctx.translate(0, 26);
        ctx.drawImage(moon, -3.5, -3.5);
        ctx.restore();

        ctx.beginPath();
        ctx.arc(canEle.width / 2, canEle.height / 2, 105, 0, Math.PI * 2, false); // Earth orbit
        ctx.stroke();

        ctx.drawImage(sun, 0, 0, 400, 400);

        window.requestAnimationFrame(draw);
    }

    setTimeout(() => {
        draw()
        window.requestAnimationFrame(draw);
    }, 300);
    // ctx.restore();
    // earth

}();

// 动画 时钟
!function () {
    const canEle = document.getElementById('canvas10');
    const ctx = canEle.getContext('2d');
    function draw() {
        ctx.clearRect(0, 0, canEle.width, canEle.height);
        ctx.save()
        ctx.beginPath();
        ctx.fillStyle = "#FFEA00";
        ctx.fillRect(0, 0, canEle.width, canEle.height);
        var time = new Date();
        var sc = time.getSeconds();
        var hr = time.getHours();
        var mi = time.getMinutes();


        var hrm = hr > 12 ? (hr - 12) : hr;

        ctx.translate(canEle.width / 2, canEle.height / 2);



        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = "#007F5F";
        ctx.lineWidth = 4;
        ctx.moveTo(80, 0);
        ctx.arc(0, 0, 80, 0, Math.PI * 2);
        ctx.stroke()
        ctx.restore();

        ctx.save();
        ctx.strokeStyle = "#007F5F"
        ctx.rotate(-Math.PI / 30);
        ctx.lineWidth = 1;
        for (var i = 0; i < 60; i++) {
            ctx.beginPath();
            ctx.rotate(Math.PI / 30);
            ctx.moveTo(0, -80);
            var len = -70;
            if (i % 15 == 0) {
                len = -60
            } else if (i % 5 == 0) {
                len = -65
            }
            ctx.lineTo(0, len);
            ctx.stroke();
        }
        ctx.restore();

        // 时
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#4361EE";
        ctx.rotate(Math.PI / 6 * (hrm + mi / 60 + sc / 3600))
        ctx.moveTo(0, 10);
        ctx.lineTo(0, -50);
        ctx.stroke();
        ctx.restore();

        // 分
        ctx.save();
        ctx.beginPath();
        ctx.rotate(Math.PI / 30 * mi + (Math.PI / 1800) * sc)
        ctx.moveTo(0, 20);
        ctx.lineTo(0, -50);
        ctx.stroke();
        ctx.restore();

        // 秒
        ctx.save();
        ctx.rotate(Math.PI / 30 * sc);
        ctx.beginPath();
        ctx.strokeStyle = "#073B4C"
        ctx.moveTo(0, 30);
        ctx.lineTo(0, -60);
        ctx.stroke();
        ctx.restore();


        ctx.beginPath();
        ctx.arc(0, 0, 6, 0, Math.PI * 2);
        ctx.fillStyle = "#5E60CE";
        // ctx.addHiRegion({id: ''})
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#FF7B00"
        var text = `${(hr + '').padStart(2, '0')}:${(mi + '').padStart(2, '0')}:${(sc + '').padStart(2, '0')}`;
        ctx.fillText(text, -20, 95);

        ctx.restore();
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
}();

// 动画 小球
!function () {
    const canvas = document.getElementById('canvas11');
    const ctx = canvas.getContext('2d');
    var raf;
    var ball = {
        x: 100,
        y: 100,
        vx: 5,
        vy: 2,
        radius: 25,
        color: 'blue',
        draw: function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };

    ball.draw();
    function clear() {
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    function draw() {
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        clear()
        ball.draw();
        ball.x += ball.vx;
        ball.y += ball.vy;
        if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
            ball.vy = -ball.vy;
        }
        if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
            ball.vx = -ball.vx;
        }
        raf = window.requestAnimationFrame(draw);
    }

    canvas.addEventListener('mouseover', function (e) {
        raf = window.requestAnimationFrame(draw);
    });

    canvas.addEventListener('mouseout', function (e) {
        window.cancelAnimationFrame(raf);
    });
}();



