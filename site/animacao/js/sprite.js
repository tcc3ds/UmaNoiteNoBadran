function Sprite(img) {
    //atributos
    var cnv = document.querySelector("#myCanvas");
    this.mvRight = this.mvLeft = this.mvUp = this.mvDown = false;
    this.srcX = this.srcY = 0; // this ref o contexto da classe | recorte da imagem
    this.width = 50;
    this.height = 50;
    this.posX = this.posY = 0; // armazenando a posição
    this.img = img;
    this.speed = 3; // 60frames/seg
    this.countAnim = 0;
    //métodos
    //desenho
    this.draw = function(ctx) {
            ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width, this.height); // qual é a imagem, a origem no eixo x e y, e tamanho da imagem
            this.animation();
        }
        //movement
    this.move = function() {
            if (this.mvRight) {
                this.posX += this.speed;
                this.srcY = this.height * 2;
                if (this.posX + this.width > cnv.width) {
                    this.posX = cnv.width - this.width;
                }
            }
            if (this.mvLeft) {
                this.posX -= this.speed;
                this.srcY = this.height * 1;
                if (this.posX < 0) {
                    this.posX = 0;
                }
            }
            if (this.mvUp) {
                this.posY -= this.speed;
                this.srcY = this.height * 3;
                if (this.posY < 0) {
                    this.posY = 0
                }
            }
            if (this.mvDown) {
                this.posY += this.speed;
                this.srcY = this.height * 0;
                if (this.posY + this.height > cnv.height) {
                    this.posY = cnv.height - this.height;
                }
            }
        }
        //animation
    this.animation = function() {
        if (this.mvLeft || this.mvRight || this.mvUp || this.mvDown) {
            this.countAnim++; // se não houver contador fica mt rápido a animação
            if (this.countAnim >= 9) {
                this.countAnim = 0;
            }
            this.srcX = Math.floor(this.countAnim / 6) * this.width; // origem muda a cada 5 atualizações até a 4 atualização ele captura posX = 0
        } else {
            this.srcX = this.width * 1;
            this.countAnim = 0;
        }
    }

    //colisoes
    this.halfWidth = function() {
        return this.width / 2;
    }

    this.halfHeight = function() {
        return this.height / 2;
    }

    this.centerX = function() {
        return this.posX + this.halfWidth();
    }

    this.centerY = function() {
        return this.posY + this.halfHeight();
    }

}

function Scene(img) {
    //atributos
    this.srcX = this.srcY = 0; // this ref o contexto da classe | recorte da imagem
    this.width = 368;
    this.height = 288;
    this.posX = this.posY = 100; // armazenando a posição
    this.img = img;
    this.real = true;
    //métodos
    //desenho
    this.draw = function(ctx) {
            ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width, this.height);
        }
        //colisoes
    this.centerX = function() {
        return this.posX + this.halfWidth();
    }
    this.centerY = function() {
        return this.posY + this.halfHeight();
    }
    this.halfWidth = function() {
        return this.width / 2;
    }
    this.halfHeight = function() {
        return this.height / 2;
    }
}

function Scene2(img) {
    //atributos
    this.srcX = this.srcY = 0; // this ref o contexto da classe | recorte da imagem
    this.width = 253;
    this.height = 255;
    this.posX = 500;
    this.posY = 200; // armazenando a posição
    this.img = img;
    this.real = true;
    //métodos
    //desenho
    this.draw = function(ctx) {
            ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width, this.height);
        }
        //colisoes
    this.centerX = function() {
        return this.posX + this.halfWidth();
    }
    this.centerY = function() {
        return this.posY + this.halfHeight();
    }
    this.halfWidth = function() {
        return this.width / 2;
    }
    this.halfHeight = function() {
        return this.height / 2;
    }
}

function Scene3(img) {
    //atributos
    this.srcX = this.srcY = 0; // this ref o contexto da classe | recorte da imagem
    this.width = 198;
    this.height = 117;
    this.posX = 700;
    this.posY = 200; // armazenando a posição
    this.img = img;
    this.real = true;
    //métodos
    //desenho
    this.draw = function(ctx) {
            ctx.drawImage(this.img, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width, this.height);
        }
        //colisoes
    this.centerX = function() {
        return this.posX + this.halfWidth();
    }
    this.centerY = function() {
        return this.posY + this.halfHeight();
    }
    this.halfWidth = function() {
        return this.width / 2;
    }
    this.halfHeight = function() {
        return this.height / 2;
    }
}

function Scene4(ctx) {
    //atributos
    this.srcX = this.srcY = 0; // this ref o contexto da classe | recorte da imagem
    this.ctx = ctx;
    this.real = true;

    this.draw = function(ctx) {
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(200, 75);
        ctx.lineTo(200, 25);
        ctx.fill();
    }

    //colisoes
    this.centerX = function() {
        return this.posX + this.halfWidth();
    }
    this.centerY = function() {
        return this.posY + this.halfHeight();
    }
    this.halfWidth = function() {
        return this.width / 2;
    }
    this.halfHeight = function() {
        return this.height / 2;
    }
}