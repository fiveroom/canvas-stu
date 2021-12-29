!function () {
    const canEle = document.getElementById('myLogo');
    const ctx = canEle.getContext('2d');
    let cW = canEle.width / 2;
    let aW = canEle.width;
    let circleW = (canEle.width - 20) / 2;
    ctx.translate(canEle.width/ 2, canEle.width/ 2);
    ctx.arc(0, 0, circleW, 0,  Math.PI * 2);
    ctx.shadowColor = "#014F86";
    ctx.shadowOffsetX = 0;
    ctx.shadowBlur = 10;
    // ctx.rect(0, 0, aW, aW);
    let rgb = ctx.createLinearGradient(-circleW, -circleW, circleW, circleW);
    rgb.addColorStop(0, '#2D00F7');
    rgb.addColorStop(1, '#F20089');
    ctx.fillStyle = rgb;
    ctx.fill();
    ctx.closePath();
    ctx.shadowColor = ''
    ctx.shadowOffsetX = 0;
    ctx.shadowBlur = 0;
    ctx.font = "100px Balsamiq Sans";
    ctx.fillStyle = '#ffffff'
    ctx.textBaseline = 'middle';
    let textB = ctx.measureText("S")
    ctx.fillText('B', -cW + 20, 10);
    let text = ctx.measureText("S")
    ctx.fillText('S', cW - text.width - 20, 10);
    ctx.closePath();
    ctx.beginPath()
    ctx.lineCap = 'round';
    ctx.moveTo(-circleW * Math.cos(Math.PI / 2.5), circleW * Math.sin(Math.PI / 2.5));

    ctx.lineTo(circleW * Math.cos(Math.PI / 2.5), -circleW * Math.sin(Math.PI / 2.5));
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke()

    // ctx.fillText('S', -cW, 0);
    // ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.arc(0, 0, canEle.width / 2, - Math.PI / 4,  Math.PI / 4  + Math.PI / 2, true)
    // ctx.fillStyle  = '#2D00F7'
    // ctx.fill();

}();