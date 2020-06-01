
function setup()
{
	var canvas = createCanvas(window.innerWidth,window.innerHeight);
	canvas.parent('canvasContainer');
}

function draw()
{
	if (mouseIsPressed)
	{
		fill(0);
	}
	else
	{
		fill(255);
	}

	ellipse(mouseX, mouseY, 20, 20);
}


function windowResized()
{
	resizeCanvas(windowWidth, windowHeight);
}
 