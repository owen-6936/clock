function drawCircle(
  ctx,
  {
    x = 60,
    y = 60,
    radius = 50,
    startAngle = 0,
    endAngle = 2 * Math.PI,
    counterclockwise = false,
    fillStyle = "none",
    strokeStyle = "black",
    lineWidth = 1,
  } = {}
) {
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  ctx.fillStyle = fillStyle;
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.fill();
  ctx.stroke();
}

function drawLine(
  ctx,
  {
    startX = 0,
    startY = 0,
    endX = 0,
    endY = 0,
    strokeStyle = "black",
    lineWidth = 1,
  } = {}
) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}
