(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 700,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.ball_grey_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{init:0,in_tree:1,active:2,red:3,black:4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


(lib.ball_grey_00 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"init":0,"in_tree":1,"active":2,"red":3,"black":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
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
	this.field_txt = new cjs.Text("0", "bold 18px 'Century Gothic'");
	this.field_txt.name = "field_txt";
	this.field_txt.textAlign = "center";
	this.field_txt.lineHeight = 20;
	this.field_txt.lineWidth = 23;
	this.field_txt.setTransform(11.6,0);

	this.timeline.addTween(cjs.Tween.get(this.field_txt).wait(3).to({font:NaN,color:NaN},0).wait(2));

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


// stage content:



(lib.algoviz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// init app
		stage.dataArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
		var item_00 = stage.children[0].item_00;
		var item_01 = stage.children[0].item_01;
		var item_02 = stage.children[0].item_02;
		var item_03 = stage.children[0].item_03;
		var item_04 = stage.children[0].item_04;
		var item_05 = stage.children[0].item_05;
		var item_06 = stage.children[0].item_06;
		var item_07 = stage.children[0].item_07;
		var item_08 = stage.children[0].item_08;
		var item_09 = stage.children[0].item_09;
		var item_10 = stage.children[0].item_10;
		var item_11 = stage.children[0].item_11;
		var item_12 = stage.children[0].item_12;
		var item_13 = stage.children[0].item_13;
		var item_14 = stage.children[0].item_14;
		var item_15 = stage.children[0].item_15;
		var item_16 = stage.children[0].item_16;
		var item_17 = stage.children[0].item_17;
		var item_18 = stage.children[0].item_18;
		var item_19 = stage.children[0].item_19;
		var item_20 = stage.children[0].item_20;
		
		item_00.field_txt.text = stage.dataArray[0];
		item_01.field_txt.text = stage.dataArray[1];
		item_02.field_txt.text = stage.dataArray[2];
		item_03.field_txt.text = stage.dataArray[3];
		item_04.field_txt.text = stage.dataArray[4];
		item_05.field_txt.text = stage.dataArray[5];
		item_06.field_txt.text = stage.dataArray[6];
		item_07.field_txt.text = stage.dataArray[7];
		item_08.field_txt.text = stage.dataArray[8];
		item_09.field_txt.text = stage.dataArray[9];
		item_10.field_txt.text = stage.dataArray[10];
		item_11.field_txt.text = stage.dataArray[11];
		item_12.field_txt.text = stage.dataArray[12];
		item_13.field_txt.text = stage.dataArray[13];
		item_14.field_txt.text = stage.dataArray[14];
		item_15.field_txt.text = stage.dataArray[15];
		item_16.field_txt.text = stage.dataArray[16];
		item_17.field_txt.text = stage.dataArray[17];
		item_18.field_txt.text = stage.dataArray[18];
		item_19.field_txt.text = stage.dataArray[19];
		item_20.field_txt.text = stage.dataArray[12];
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// js
	this.item_20 = new lib.ball_grey_20();
	this.item_20.setTransform(670,20.3,1,1,0,0,0,13.4,13.3);

	this.item_19 = new lib.ball_grey_19();
	this.item_19.setTransform(637,20.3,1,1,0,0,0,13.4,13.3);

	this.item_18 = new lib.ball_grey_18();
	this.item_18.setTransform(604.5,20.3,1,1,0,0,0,13.4,13.3);

	this.item_17 = new lib.ball_grey_17();
	this.item_17.setTransform(572.1,20.3,1,1,0,0,0,13.4,13.3);

	this.item_16 = new lib.ball_grey_16();
	this.item_16.setTransform(539.6,20.3,1,1,0,0,0,13.4,13.3);

	this.item_15 = new lib.ball_grey_15();
	this.item_15.setTransform(507.2,20.3,1,1,0,0,0,13.4,13.3);

	this.item_14 = new lib.ball_grey_14();
	this.item_14.setTransform(474.7,20.3,1,1,0,0,0,13.4,13.3);

	this.item_13 = new lib.ball_grey_13();
	this.item_13.setTransform(442.3,20.3,1,1,0,0,0,13.4,13.3);

	this.item_12 = new lib.ball_grey_12();
	this.item_12.setTransform(409.8,20.3,1,1,0,0,0,13.4,13.3);

	this.item_11 = new lib.ball_grey_11();
	this.item_11.setTransform(377.4,20.3,1,1,0,0,0,13.4,13.3);

	this.item_10 = new lib.ball_grey_10();
	this.item_10.setTransform(344.9,20.3,1,1,0,0,0,13.4,13.3);

	this.item_09 = new lib.ball_grey_09();
	this.item_09.setTransform(312.5,20.3,1,1,0,0,0,13.4,13.3);

	this.item_08 = new lib.ball_grey_08();
	this.item_08.setTransform(280,20.3,1,1,0,0,0,13.4,13.3);

	this.item_07 = new lib.ball_grey_07();
	this.item_07.setTransform(247.6,20.3,1,1,0,0,0,13.4,13.3);

	this.item_06 = new lib.ball_grey_06();
	this.item_06.setTransform(215.1,20.3,1,1,0,0,0,13.4,13.3);

	this.item_05 = new lib.ball_grey_05();
	this.item_05.setTransform(182.7,20.3,1,1,0,0,0,13.4,13.3);

	this.item_04 = new lib.ball_grey_04();
	this.item_04.setTransform(150.2,20.3,1,1,0,0,0,13.4,13.3);

	this.item_03 = new lib.ball_grey_03();
	this.item_03.setTransform(117.8,20.3,1,1,0,0,0,13.4,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item_03},{t:this.item_04},{t:this.item_05},{t:this.item_06},{t:this.item_07},{t:this.item_08},{t:this.item_09},{t:this.item_10},{t:this.item_11},{t:this.item_12},{t:this.item_13},{t:this.item_14},{t:this.item_15},{t:this.item_16},{t:this.item_17},{t:this.item_18},{t:this.item_19},{t:this.item_20}]}).wait(1));

	// elements
	this.item_02 = new lib.ball_grey_02();
	this.item_02.setTransform(85.3,20.3,1,1,0,0,0,13.4,13.3);

	this.item_01 = new lib.ball_grey_01();
	this.item_01.setTransform(52.9,20.3,1,1,0,0,0,13.4,13.3);

	this.item_00 = new lib.ball_grey_00();
	this.item_00.setTransform(24.5,24.5,1,1,0,0,0,17.5,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item_00},{t:this.item_01},{t:this.item_02}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(356.5,156.5,677.3,27.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;