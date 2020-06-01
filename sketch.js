//canvas.parent('canvasContainer');
// video source: https://vimeo.com/90312869
let t = 0; // time variable

let x = [],
  y = [],
  segNum = 35,
  segLength = 25;

for (let i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup()
{
	var canvas = createCanvas(600, 600);
	canvas.parent('canvasContainer');
	fill(255, 255, 40);
}

function draw()
{
	strokeWeight(0);
	stroke(255,255,255);
	noStroke()
	background(10, 10); // translucent background (creates trails)

	// make a x and y grid of ellipses
	for (let xcoord = 0; xcoord <= width; xcoord = xcoord + 30)
	{
		for (let ycoord = 0; ycoord <= height; ycoord = ycoord + 30)
		{
			// starting point of each circle depends on mouse position
			const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
			const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
			// and also varies based on the particle's location
			const angle = xAngle * (xcoord / width) + yAngle * (ycoord / height);

			// each particle moves in a circle
			const myX = xcoord + 20 * cos(2 * PI * t + angle);
			const myY = ycoord + 20 * sin(2 * PI * t + angle);

			ellipse(myX, myY, 10); // draw particle
		}
	}
	t = t + 0.01; // update time

	// draw snake
	dragSegment(0, mouseX, mouseY);
	stroke(255, 100);
	fill(255,0,0)
	strokeWeight(10);
	for (let i = 0; i < x.length - 1; i++)
	{
		dragSegment(i + 1, x[i], y[i]);
	}
}


function dragSegment(i, xin, yin)
{
	const dx = xin - x[i];
	const dy = yin - y[i];
	const angle = atan2(dy, dx);
	x[i] = xin - cos(angle) * segLength;
	y[i] = yin - sin(angle) * segLength;
	segment(x[i], y[i], angle);
}
  
function segment(x, y, a)
{
	push();
	translate(x, y);
	rotate(a);
	line(0, 0, segLength, 0);
	pop();
}