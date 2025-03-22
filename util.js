function drawCircle(
  ctx,
  {
    x = 60,
    y = 60,
    radius = 50,
    startAngle = 0,
    endAngle = 2 * Math.PI,
    counterclockwise = false,
    fillStyle = null,
    strokeStyle = "black",
    lineWidth = 1,
  } = {}
) {
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  if (fillStyle) {
    ctx.fillStyle = fillStyle;
    ctx.fill();
  }
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

const drawHand = drawLine;

function ClockNumsDimensions({
  circleXpos,
  circleYPos,
  radius,
  totalNumbers,
  length = radius,
  offsetAngle = -Math.PI / 2,
} = {}) {
  radius = length;
  const dimensions = [];
  for (let i = 0; i < totalNumbers; i++) {
    const angle = (2 * Math.PI * i) / totalNumbers + offsetAngle; // Adjust angle for "12" at top
    const x = circleXpos + radius * Math.cos(angle);
    const y = circleYPos + radius * Math.sin(angle);
    dimensions.push({ number: i, x, y });
  }
  return dimensions;
}
