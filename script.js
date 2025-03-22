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
  allocatedRect: ClockDimension.diameter,
  get totalAllocatedRect() {
    return this.allocatedRect * 4;
  },
  get date() {
    return new Date();
  },
  get seconds() {
    return this.date.getSeconds();
  },
  get minutes() {
    return this.date.getMinutes();
  },
  get hours() {
    return this.date.getHours();
  },
  timeHands: {
    secondsHand: {
      dimension: {
        startX: ClockDimension.x,
        startY: ClockDimension.y,
        endX: ClockDimension.x + 50,
        endY: ClockDimension.y - 85,
        lineWidth: 1,
      },
      length: 80,
    },
    minuteHand: {
      dimension: {
        startX: ClockDimension.x,
        startY: ClockDimension.y,
        endX: ClockDimension.x,
        endY: ClockDimension.y,
        lineWidth: 2,
      },
      length: 65,
    },
    hourHand: {
      dimension: {
        startX: ClockDimension.x,
        startY: ClockDimension.y,
        endX: ClockDimension.x,
        endY: ClockDimension.y,
        lineWidth: 3,
      },
      length: 50,
      get HourIndex() {
        return (time.hours - 12) * 5 + Math.floor(time.minutes / 15);
      },
    },
  },
};

canvas.width = CanvasDimension.width;
canvas.height = CanvasDimension.height;

function getHandsCoordinates(length) {
  return ClockNumsDimensions({
    circleXpos: ClockDimension.x,
    circleYPos: ClockDimension.y,
    length,
    totalNumbers: 60,
  });
}

function getSecsHandCoord() {
  return getHandsCoordinates(time.timeHands.secondsHand.length);
}

function getMinsHandCoord() {
  return getHandsCoordinates(time.timeHands.minuteHand.length);
}

function getHourHandCoord() {
  return getHandsCoordinates(time.timeHands.hourHand.length);
}

function placeNumbers(ctx, { circleXpos, circleYPos, radius, totalNumbers }) {
  const dimensions = ClockNumsDimensions({
    circleXpos,
    circleYPos,
    radius,
    totalNumbers,
  });
  dimensions.forEach((dimension) => {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "15px Arial";
    ctx.fillText(
      dimension.number == 0 ? 12 : dimension.number,
      dimension.x,
      dimension.y
    );
  });
}

function drawHands(ctx) {
  const startX = ClockDimension.x;
  const startY = ClockDimension.y;
  let secondsIndex = time.seconds;
  let minutesIndex = time.minutes;
  let hourIndex = time.timeHands.hourHand.HourIndex;
  // drawing seconds hand
  drawHand(ctx, {
    startX,
    startY,
    endX: getSecsHandCoord()[secondsIndex].x,
    endY: getSecsHandCoord()[secondsIndex].y,
    lineWidth: time.timeHands.secondsHand.dimension.lineWidth,
  });
  // drawing minutes hand
  drawHand(ctx, {
    startX,
    startY,
    endX: getMinsHandCoord()[minutesIndex].x,
    endY: getMinsHandCoord()[minutesIndex].y,
    lineWidth: time.timeHands.minuteHand.dimension.lineWidth,
  });
  // drawing hours hand
  drawHand(ctx, {
    startX,
    startY,
    endX: getHourHandCoord()[hourIndex].x,
    endY: getHourHandCoord()[hourIndex].y,
    lineWidth: time.timeHands.hourHand.dimension.lineWidth,
  });
}

function drawBackground(ctx) {
  ctx.fillStyle = "whitesmoke";
  ctx.fillRect(0, 0, CanvasDimension.width, CanvasDimension.height);
}

drawBackground(ctx);

function drawClock(ctx) {
  ctx.clearRect(0, 0, CanvasDimension.width, CanvasDimension.height);
  const spacing = 20;
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
  placeNumbers(ctx, {
    circleXpos: ClockDimension.x,
    circleYPos: ClockDimension.y,
    radius: ClockDimension.radius,
    totalNumbers: 12,
  });
  drawHands(ctx);
}

function gameLoop() {
  drawClock(ctx);
  window.requestAnimationFrame(gameLoop);
}

gameLoop();
