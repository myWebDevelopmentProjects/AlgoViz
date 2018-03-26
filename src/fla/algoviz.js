(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 406,
	height: 511,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.ball_grey_00 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{init:0,in_tree:1,active:2,red:3,black:4});

	// timeline functions:
	this.frame_0 = function() {
		stop();
	}
	this.frame_1 = function() {
		stop();
	}
	this.frame_2 = function() {
		stop();
	}
	this.frame_3 = function() {
		stop();
	}
	this.frame_4 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1));

	// txt
	this.field_txt = new cjs.Text("0", "18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({color:NaN},0).wait(2));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(204,204,204,0.098)"],[0,1],0,0,0,0,0,8.9).s().p("Ag7AhQgZgOAAgTQAAgSAZgOQAZgOAiABQAjgBAZAOQAZAOAAASQAAATgZAOQgZANgjAAQgiAAgZgNg");
	this.shape.setTransform(12.7,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4D4D4D").p("ACCAAQAAA1gmAnQgnAmg1AAQg1AAgmgmQgmgnAAg1QAAg0AmgnQAmgmA1AAQA1AAAnAmQAmAnAAA0g");
	this.shape_1.setTransform(13,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#B3B3B3","#9D9D9D","#808080"],[0.043,0.29,0.631,1],0,0,0,0,0,13.4).s().p("AhaBcQgmgnAAg1QAAg0AmgnQAmgmA0AAQA1AAAmAmQAmAnAAA0QAAA1gmAnQgmAmg1AAQg0AAgmgmg");
	this.shape_2.setTransform(13,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#29ABE2","#29ABE2","#1995D3","#0071BC"],[0.043,0.29,0.596,1],0,0,0,0,0,13.4).s().p("AhaBcQgmgnAAg1QAAg0AmgnQAmgmA0AAQA1AAAmAmQAmAnAAA0QAAA1gmAnQgmAmg1AAQg0AAgmgmg");
	this.shape_3.setTransform(13,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#E6E6E6","#FBB03B","#F89A35","#F26126","#F15A24"],[0.043,0.29,0.506,0.953,1],0,0,0,0,0,13.4).s().p("AhaBcQgmgnAAg1QAAg0AmgnQAmgmA0AAQA1AAAmAmQAmAnAAA0QAAA1gmAnQgmAmg1AAQg0AAgmgmg");
	this.shape_4.setTransform(13,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#666666","rgba(204,204,204,0.098)"],[0,1],0,0,0,0,0,8.9).s().p("Ag7AcQgZgMAAgQQAAgPAZgMQAZgMAiAAQAjAAAZAMQAZAMAAAPQAAAQgZAMQgZAMgjAAQgiAAgZgMg");
	this.shape_5.setTransform(12.7,5.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#999999","#C1272D","#D72128","#ED1C24"],[0.043,0.29,0.678,1],0,0,0,0,0,13.4).s().p("AhaBcQgmgnAAg1QAAg0AmgnQAmgmA0AAQA1AAAmAmQAmAnAAA0QAAA1gmAnQgmAmg1AAQg0AAgmgmg");
	this.shape_6.setTransform(13,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#999999","#333333","#1D1D1D","#000000"],[0.043,0.29,0.631,1],0,0,0,0,0,13.4).s().p("AhaBcQgmgnAAg1QAAg0AmgnQAmgmA0AAQA1AAAmAmQAmAnAAA0QAAA1gmAnQgmAmg1AAQg0AAgmgmg");
	this.shape_7.setTransform(13,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_1}]},1).to({state:[{t:this.shape_6},{t:this.shape_1},{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.3,28.1);

(lib.balck_connection = function() {
	this.initialize();

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4).p("AFokTIrPIn");
	this.shape.setTransform(275,200.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();

// stage content:



(lib.algoviz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{initBST:0});

	// timeline functions:
	this.frame_0 = function() {
		// init app
		console.log();
		stage.children["0"].grey_ball_00.gotoAndStop("in_tree");
		stage.children["0"].grey_ball_00.field_txt.text = '2';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// fields_txt
	this.root_title_txt = new cjs.Text("Корень", "12px 'Myriad Pro'");
	this.root_title_txt.name = "root_title_txt";
	this.root_title_txt.lineHeight = 14;
	this.root_title_txt.setTransform(181.7,136.3);

	this.elements_title_txt = new cjs.Text("Элементы", "12px 'Myriad Pro'");
	this.elements_title_txt.name = "elements_title_txt";
	this.elements_title_txt.lineHeight = 14;
	this.elements_title_txt.setTransform(174.9,49);

	this.title_txt = new cjs.Text("ДЕРЕВО ДВОИЧНОГО ПОИСКА\n(BST)", "18px 'Century Gothic'", "#383838");
	this.title_txt.name = "title_txt";
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 22;
	this.title_txt.setTransform(201,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title_txt},{t:this.elements_title_txt},{t:this.root_title_txt}]}).wait(1));

	// elements
	this.grey_ball_00 = new lib.ball_grey_00();
	this.grey_ball_00.setTransform(24.5,88,1,1,0,0,0,17.5,17.5);
	
	
	this.balck_connection = new lib.balck_connection();
	this.balck_connection.setTransform(24.5,88,1,1,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.grey_ball_00).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.balck_connection).wait(1));
	

	// content
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").p("AfuB9QAABTAAACQgIAjgqAAMg9jAAAQgxAAgLgKQgKgLAAgxIAAlJQAAg2AKgQQANgUAvAAMA9jAAAQAqAAAIAjQAAACAABTg");
	this.shape.setTransform(203,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D9E021","#8CC63F"],[0.012,1],0.1,-24.5,0.1,24.5).s().p("A+nD1QgxgBgLgJQgJgLgBgxIAAlJQABg2AJgPQAOgVAuAAMA9jAAAQArABAGAiIAABWIAAD3IAABWQgGAigrABg");
	this.shape_1.setTransform(203,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(200.9,254.5,409.1,155.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;