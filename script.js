const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const CanvasDimension = {
  width: 600,
  height: 550,
};

canvas.width = CanvasDimension.width;
canvas.height = CanvasDimension.height;

function drawBackground(ctx) {
  ctx.fillStyle = "whitesmoke";
  ctx.fillRect(0, 0, CanvasDimension.width, CanvasDimension.height);
}

drawBackground(ctx);

function drawCircle({
  x = 60,
  y = 60,
  radius = 50,
  startAngle = 0,
  endAngle = 2 * Math.PI,
  counterclockwise = false,
  fillStyle = "none",
  strokeStyle = "black",
  lineWidth = 1,
} = {}) {
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  ctx.fillStyle = fillStyle;
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.fill();
  ctx.stroke();
}

function drawLine({
  startX = 0,
  startY = 0,
  endX = 0,
  endY = 0,
  strokeStyle = "black",
  lineWidth = 1,
} = {}) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

function drawClock(ctx) {
  drawCircle({ x: 300, y: 110, radius: 100 });
  drawCircle({ x: 300, y: 110, radius: 3, fillStyle: "black" });
  drawLine({ startX: 300, startY: 110, endX: 350, endY: 110, lineWidth: 2 });
  drawLine({ startX: 300, startY: 110, endX: 300, endY: 30, lineWidth: 2 });
}

drawClock(ctx);
