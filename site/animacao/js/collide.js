function blockMove(zezim, pedra) {
    // a distancia como triangulo retangulo
    catX = zezim.centerX() - pedra.centerX();
    catY = zezim.centerY() - pedra.centerY();

    //metades
    var sumHalfWidth = zezim.halfWidth() + pedra.halfWidth();
    var sumHalfHeight = zezim.halfHeight() + pedra.halfHeight();

    if (Math.abs(catX) < sumHalfWidth &&
        Math.abs(catY) < sumHalfHeight) {

        /*console.log(Math.abs(catX));
        console.log(sumHalfWidth);
        console.log(Math.abs(catY));
        console.log(sumHalfHeight);*/


        var overlapX = sumHalfWidth - Math.abs(catX);
        var overlapY = sumHalfHeight - Math.abs(catY);
        if (overlapX >= overlapY) { //colisão por cima ou por baixo
            if (catY > 0) { //por cima
                zezim.posY += overlapY;
            } else {
                zezim.posY -= overlapY;
            }
        } else { //colisão pela esquerda ou direita
            if (catX > 0) { //colisão pela esquerda
                zezim.posX += overlapX;
            } else {
                zezim.posX -= overlapX;
            }
        }
    }
}