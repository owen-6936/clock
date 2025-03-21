const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const CanvasDimension = {
  width: 600,
  height: 550,
};

const ClockDimension = {
  x: 300,
  y: 150,
  radius: 105,
  get diameter() {
    return this.radius * 2;
  },
};

const time = {
  totalNumbers: 12,
  allocatedRect: ClockDimension.diameter,
  get totalAllocatedRect() {
    return this.allocatedRect * 4;
  },

  positon: {
    topPosition: {},
    rightPosition: {},
    bottomPosition: {},
    leftPosition: {},
  },
};

canvas.width = CanvasDimension.width;
canvas.height = CanvasDimension.height;

function placeNumbers() {
  const totalNumbers = 12;
  for (let i = 1; i <= totalNumbers; i++) {
    const angle = (2 * Math.PI * i) / totalNumbers - Math.PI / 2; // Adjust angle for "12" at top
    const x = ClockDimension.x + ClockDimension.radius * Math.cos(angle);
    const y = ClockDimension.y + ClockDimension.radius * Math.sin(angle);
    // Draw the number
    ctx.textAlign = "center"; // Horizontal alignment
    ctx.textBaseline = "middle"; // Vertical alignment
    ctx.font = "17px monospace";
    ctx.fillText(i, x, y);
  }
}

function drawBackground(ctx) {
  ctx.fillStyle = "whitesmoke";
  ctx.fillRect(0, 0, CanvasDimension.width, CanvasDimension.height);
}

drawBackground(ctx);

function drawClock(ctx) {
  const spacing = 20;
  const shortHandLength = 50;
  const longHandLength = 70;
  drawCircle(ctx, {
    x: ClockDimension.x,
    y: ClockDimension.y,
    radius: ClockDimension.radius + spacing,
  });
  drawCircle(ctx, {
    x: ClockDimension.x,
    y: ClockDimension.y,
    radius: 3,
    fillStyle: "black",
  });
  drawLine(ctx, {
    startX: ClockDimension.x,
    startY: ClockDimension.y,
    endX: ClockDimension.x,
    endY: ClockDimension.y - longHandLength,
    lineWidth: 1.5,
  });
  drawLine(ctx, {
    startX: ClockDimension.x,
    startY: ClockDimension.y,
    endX: ClockDimension.x + shortHandLength,
    endY: ClockDimension.y,
    lineWidth: 2,
  });
  placeNumbers();
}

drawClock(ctx);
