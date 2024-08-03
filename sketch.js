function setup() {
  createCanvas(710, 400);
  angleMode(DEGREES);

  // Set diameter for the clock based on canvas dimensions
  let radius = min(width, height) / 2;
  clockDiameter = radius * 1.7;
}

function draw() {
  background(30);

  // Move origin to center of canvas
  translate(width / 2, height / 2);

  // Get current time
  let s = second();
  let m = minute();
  let h = hour();

  // Draw the clock background
  noStroke();
  fill(50);
  ellipse(0, 0, clockDiameter, clockDiameter);

  // Calculate the radii for each circle
  let secondsRadius = clockDiameter * 0.3;
  let minutesRadius = clockDiameter * 0.5;
  let hoursRadius = clockDiameter * 0.7;

  // Draw circles representing seconds, minutes, and hours
  noFill();
  strokeWeight(9);

  // Seconds circle
  stroke(255, 100, 100);
  let secondsAngle = map(s, 0, 60, 0, 360);
  arc(0, 0, secondsRadius, secondsRadius, 0, secondsAngle);

  // Minutes circle
  stroke(100, 255, 100);
  let minutesAngle = map(m, 0, 60, 0, 360);
  arc(0, 0, minutesRadius, minutesRadius, 0, minutesAngle);

  // Hours circle
  stroke(100, 100, 255);
  let hoursAngle = map(h % 12, 0, 12, 0, 360);
  arc(0, 0, hoursRadius, hoursRadius, 0, hoursAngle);

  // Draw digital time in the center
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(32);
  let timeString = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2);
  text(timeString, 0, 0);
}