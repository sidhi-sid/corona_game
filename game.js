function init(){
	//Dom tree traversal to find an element
	canvas=document.getElementById("mycanvas");
	console.log(canvas);

	//change height and weight
	W=1300
	H=660

	canvas.width=W
	canvas.height=H

	//try to work with canvas
	pen=canvas.getContext('2d');
	console.log(pen);

//we want to create a box
//JSON Objects

	virus1={
		x:200,
		y:50,
		w:150,
		h:150,
		speed:10,
	};
	virus2={
		x:500,
		y:300,
		w:150,
		h:150,
		speed:15,	
	};
	virus3={
		x:800,
		y:400,
		w:200,
		h:200,	
		speed:20,

	};
	hoo={
		x:10,
		y:250,
		w:120,
		h:150,
		speed:10,
	};
	gem={
		x:1200,
		y:250,
		w:200,
		h:200,
		
	};
}
function load_images(){
	virus_image=new Image;
	virus_image.src="virus.png"
	virus2_image=new Image;
	virus2_image.src="virus2.png"
	virus3_image=new Image;
	virus3_image.src="virus.png"
	hoo_image=new Image;
	hoo_image.src="hooman.png"
	gem_image=new Image;
	gem_image.src="gem.png"

}

//add movement to the bird

//game loop
function draw(){
	//clear old scren
	pen.clearRect(0,0,W,H);
	//draw this brd on the screen
	pen.fillStyle="red";
	pen.drawImage(virus_image,virus1.x,virus1.y,virus1.w,virus1.h);
    pen.drawImage(virus2_image,virus2.x,virus2.y,virus2.w,virus2.h);
    pen.drawImage(virus3_image,virus3.x,virus3.y,virus3.w,virus3.h);
    pen.drawImage(hoo_image,hoo.x,hoo.y,hoo.w,hoo.h);
    pen.drawImage(gem_image,gem.x,gem.y,gem.w,gem.h);
}
function update(){
	virus1.y+=virus1.speed;
	if(virus1.y>H||virus1.y<0){
		virus1.speed*=-1}

	virus2.y+=virus2.speed;
	if(virus2.y>H||virus2.y<0){
		virus2.speed*=-1
	}
	virus3.y+=virus3.speed;
	if(virus3.y>H||virus3.y<0){
		virus3.speed*=-1}

}
function gameloop(){
	 console.log("In game loop");
 	draw();
 	update();
}

//start of the game
load_images(); 
init();

//repeated call game loop
setInterval(gameloop,100);