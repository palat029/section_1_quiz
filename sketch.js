function setup() {
	// create a place to draw
	createCanvas(640, 360);
}

function draw() {

	//draw changing background
	if (mouseIsPressed) {
		background(random(255), random(255), random(255));

	} else {
		background(50, 60, 80);

	}
	// draw grass
	fill(70, 90, 50);
	noStroke();
	rect(0, 260, 640, 90);

	fill(0, 90, 0);
	noStroke();
	rect(0, 290, 640, 90);
	// draw trees
	triangle(10, 260, 75, 260, 44, 200);

	// draw UFO
	fill(127, 127, 123);
	ellipse(mouseX - 40, mouseY - 40, 105, 60);
	ellipse(mouseX - 40, mouseY - 60, 60, 80);

	if (mouseIsPressed) {
		fill(random(300), random(300), random(300));
		ellipse(mouseX - 40, mouseY - 20, 50, 8);
		ellipse(mouseX - 40, 320, 60, 20);
	} else {
		fill(255, 255, 255);
	}
	for (var y = 0; y < 1; y++) {
		for (var x = 0; x < 6; x++)
			ellipse(mouseX + x * 20 - 90, mouseY + y * 20 - 40, 10, 10);


	}


}
