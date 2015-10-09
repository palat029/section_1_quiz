background(50, 60, 80);

function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {

	//draw background

	if (mouseIsPressed) {
		background(random(300), random(300), random(300));
		fill(70, 90, 50);
		noStroke();
		rect(0, 260, 640, 90);

		fill(0, 90, 0);
		noStroke();
		rect(0, 290, 640, 90);

	} else {
		background(50, 60, 80);
		fill(70, 90, 50);
		noStroke();
		rect(0, 260, 640, 90);

		fill(0, 90, 0);
		noStroke();
		rect(0, 290, 640, 90);


	}
	// draw UFO
	fill(0, 0, 40);
	ellipse(mouseX, mouseY, 60, 20);
	fill(0, 0, 40);
	ellipse(mouseX - 20, mouseY - 10, 40, 15);

}
