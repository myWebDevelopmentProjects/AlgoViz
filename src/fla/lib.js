(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



// stage content:
(lib._lib = function() {
	this.initialize();

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4).p("AFokTIrPIn");
	this.shape.setTransform(275,200.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(512,370.9,76.1,59.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;