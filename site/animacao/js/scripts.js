window.onload = function() {
    var left = 37,
        up = 38,
        right = 39;
    down = 40;
    var cnv = document.querySelector("#myCanvas");
    var ctx = cnv.getContext("2d");
    var spriteSheet = new Image();
    var sceneSheet = new Image();
    var casinhaSheet = new Image();
    var dinoSheet = new Image();
    var triSheet = new Image();
    spriteSheet.src = "img/Malu.png"; // origem da imagem
    sceneSheet.src = "img/obs.png";
    casinhaSheet.src = "img/casinha.png";
    dinoSheet.src = "img/dino.png";
    //alert(ctx);
    var zezim = new Sprite(spriteSheet);

    scenes = [];
    var pedra = new Scene(sceneSheet);
    scenes.push(pedra);

    var casinha = new Scene2(casinhaSheet); // objeto da classe Scene(cenário)
    scenes.push(casinha); // colocando o objeto criado no array

    var dino = new Scene3(dinoSheet);
    scenes.push(dino);

    var triangulo = new Scene4(triSheet);
    scenes.push(triangulo);


    window.addEventListener("keydown", keydownHandler, false)
    window.addEventListener("keyup", keyupHandler, false)

    function keydownHandler(e) {
        switch (e.keyCode) {
            case right:
                zezim.mvRight = true;
                zezim.mvLeft = false;
                zezim.mvUp = false;
                zezim.mvDown = false;
                break;
            case left:
                zezim.mvRight = false;
                zezim.mvLeft = true;
                zezim.mvUp = false;
                zezim.mvDown = false;
                break;
            case up:
                zezim.mvRight = false;
                zezim.mvLeft = false;
                zezim.mvUp = true;
                zezim.mvDown = false;
                break;
            case down:
                zezim.mvRight = false;
                zezim.mvLeft = false;
                zezim.mvUp = false;
                zezim.mvDown = true;
                break;
        }
    }

    function keyupHandler(e) {
        switch (e.keyCode) {
            case right:
                zezim.mvRight = false
                break;
            case left:
                zezim.mvLeft = false
                break;
            case up:
                zezim.mvUp = false
                break;
            case down:
                zezim.mvDown = false
                break;
        }
    }

    spriteSheet.onload = function() {
            init();
        } // funcao disparada quando a imagem for carregada para o objeto spriteSheet

    function draw() {
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        zezim.draw(ctx); // draw do personagem
        pedra.draw(ctx);
        casinha.draw(ctx);
        dino.draw(ctx);
        triangulo.draw(ctx);
    }

    function loop() {
        window.requestAnimationFrame(loop, cnv)
        update();
        draw();
    }

    function init() {
        zezim.posX = zezim.posY = 0;
        pedra.posX = pedra.posY = 100;
        casinha.posX = 500;
        casinha.posY = 200;
        loop();
    }

    function update() {
        zezim.move();

        for (var i in scenes) {
            var scn = scenes[i];
            if (scn.real) {
                blockMove(zezim, scn);
            }
        }
    }
}