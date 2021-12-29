## 图形绘制
只支持：`矩形`和`路径`
所有其他类型的图形都是通过一条或者多条路径组合而成的
### 绘制矩形
#### fillRect(x, y, width, height)
绘制一个填充的矩形
#### strokeRect(x, y, width, height)
绘制一个矩形的边框
#### clearRect(x, y, width, height)
清除指定矩形区域，让清除部分完全透明。

### 绘制路径
- 图形的基本元素是`路径`。
- 一个路径，甚至一个子路径，都是闭合的
#### 步骤
- 创建路径起始点。
- 使用画图命令去画出路径。
- 路径封闭。
- 路径生成，通过描边或填充路径区域来渲染图形。

#### 函数
##### beginPath()
 - 新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。
 - 路径列表被清空重置
##### closePath()
 - 闭合路径之后图形绘制命令又重新指向到上下文中。
 - 绘制一条从当前点到开始点的直线来闭合图形
##### stroke()
 - 通过线条来绘制图形轮廓。
 - 闭合的形状不会自动闭合
##### fill()
 - 通过填充路径的内容区域生成实心的图形。
 - 所有没有闭合的形状都会自动闭合
### 移动笔触
在纸上作业，一支钢笔或者铅笔的笔尖从一个点到另一个点的移动过程。

    moveTo(x, y)
canvas初始化或beginPath()调用后，下笔即为起点
```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
    ctx.moveTo(110, 75);  //移动画笔位置
    ctx.arc(75, 75, 35, 0, Math.PI, false);   // 口(顺时针)
    ctx.moveTo(65, 65); 
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左眼
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右眼
    ctx.stroke();
  }
}
```
### 绘制直线

    lineTo(x, y)
- 绘制的起点为`之前的路径的结束点`
- 起点可通过`moveTo()`改变
### 圆弧
`arc()`或`arcTo()`，推荐`arc()`

#### `arc(x, y, radius, startAngle, endAngle, anticlockwise)`
- （x,y) 圆心
- radius 半径
- startAngle, endAngle 弧度范围
`0, Math.PI*2`
- anticlockwise 生成方向
默认顺时针，true：逆时针绘制圆弧
### 贝赛尔曲线
#### quadraticCurveTo(cp1x, cp1y, x, y)
cp1x,cp1y为一个控制点，x,y为结束点
#### bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。
### 状态的保存和恢复
Canvas 的状态就是当前画面应用的所有`样式`和`变形`的一个快照
绘画状态包括
- 当前应用的变形（移动、旋转、缩放）
- strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled
- 当前裁剪路径
#### save()
保存画布(canvas)的所有状态，压入栈中
#### restore()
恢复上一个保存的canvas状态
### 移动Translating
移动canvas和它原点到一个不同的位置

    translate(x, y)

### 旋转
旋转的中心点始终是 canvas 的原点

    rotate(angle)
- angle: 它是顺时针方向的，以弧度为单位的值。
  

### 缩放

    scale(x, y)
x、y可以为负数
- x：水平缩放因子
- y：垂直缩放因子
### 变形
变形：同css中矩阵

    transform(a, b, c, d, e, f)
- 如果任意一个参数是Infinity，变形矩阵也必须被标记为无限大，否则会抛出异常

重置变形矩阵重置为单位矩阵

    setTransform(a, b, c, d, e, f)
重置当前变形为单位矩阵

    resetTransform()

### 合成与裁剪
裁切路径同canvas普通图形
- 作用是遮罩，用来隐藏不需要的部分
- 裁切路径不会在 canvas 上绘制，不受新图形的影响

绘制图形API

    clip()

- 将当前正在构建的路径转换为当前的裁剪路径。
- 默认情况下，canvas 有一个与它自身一样大的裁切路径


### 动画的基本步骤
- 清空 canvas
除非接下来要画的内容会完全充满 canvas （例如背景图），否则你需要清空所有。最简单的做法就是用 clearRect 方法。
- 保存 canvas 状态
如果你要改变一些会改变 canvas 状态的设置（样式，变形之类的），又要在每画一帧之时都是原始状态的话，你需要先保存一下。
- 绘制动画图形（animated shapes）
这一步才是重绘动画帧。
- 恢复 canvas 状态
如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧。