/*MODAL*/
/*var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
//var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}*/

/*CANVAS*/
var canvas = document.querySelector("#canvasCombate");
var context = canvas.getContext("2d");

function Char(posX, posY, img) {
    var canvas = document.querySelector("#canvasCombate");
    this.rightPressed = this.leftPressed = false;
    this.srcX = this.srcY = 0; // this ref o contexto da classe | recorte da imagem
    this.width = 47.3;
    this.height = 49;
    this.posX = posX
    this.posY = posY // armazenando a posição
    this.img = img;

    this.draw = function(context) {
        context.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width, this.height); // qual é a imagem, a origem no eixo x e y, e tamanho da imagem
    }

    this.move = function() {
        this.srcX = this.height * 1;
        this.srcY = this.height * 3;
        if(this.rightPressed) {
            this.posX += 14;
            if (this.posX + this.width > canvas.width) {
                this.posX = canvas.width - this.width;
            }
        }
        else if(this.leftPressed) {
            this.posX -= 14;
            if (this.posX < 0) {
                this.posX = 0;
            }
        }
    }
}

const kamz = new Image();
kamz.src = "char.png"

var character = new Char(130, 90, kamz)

const xande = new Image();
xande.src = "xandao.png"

var xandao = new Char(130, 0, xande)

/*desenhando o personagem*/

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //context.drawImage(kamz, x, y, width, height);
    character.draw(context); // draw do personagem
    xandao.draw(context);
}

function update() {
    character.move();
}

function loop() {
    window.requestAnimationFrame(loop, canvas)
    update();
    draw();
}

loop();


//draw();

/*mover para direita e esquerda (tentando)*/
var rightPressed = false
var leftPressed = false

var arrowLeft = 37;
var arrowRight = 39; 

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/*usar o numero da tecla*/

function keyDownHandler(e) {
    switch (e.keyCode) {
        case arrowLeft:
            character.leftPressed = true;
            character.rightPressed = false;
            break;
        case arrowRight:
            character.leftPressed = false;
            character.rightPressed = true;
            break;
    }
}

function keyUpHandler(e) {
    switch (e.keyCode) {
        case arrowLeft:
            character.leftPressed = false;
            break;
        case arrowRight:
            character.rightPressed = false;
            break;
    }
}


