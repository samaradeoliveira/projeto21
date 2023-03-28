//importação de módulos
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variáveis necessárias
var ball, groundObj, leftSide, rightSide;
var world;

//raio
var radius = 40;

function setup() {
	createCanvas(windowWidth, windowHeight);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//CRIAR A PROPRIEDADE DA BOLA baseado no pdf do projeto






	//corpo da bola
	ball = Bodies.circle(260, 100, radius / 2, ball_options);
	World.add(world, ball);

	//criar o groundObj baseado no pdf do projeto
	
	//adicionar no mundo
	

	//criar o leftSide baseado no pdf do projeto
	
	//adicionar no mundo

	//grade da direita
	rightSide = new Ground(1350, height - 80, 20, 120);
	
	//adicionar no mundo

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);

	background("black");

	//descomente para exibir a bola
	//ellipse(ball.position.x, ball.position.y, radius, radius);

	//exiba o groundObj e o leftSide com o método de exibição da classe ground


	rightSide.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		//descomente o código correto para aplicar a força:

		//Matter.Body.applyForce(ball, ball.position, { x: 85, y: -85 });
		//Matter.Body.Force(ball, ball.position, { x: 85, y: -85 });
		//Matter.Body.apply(ball, ball.position, { x: 85, y: -85 });
	}
}
