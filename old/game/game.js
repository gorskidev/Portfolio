window.onload = function(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d"); //  we're creating the ctx variable to store the 2D rendering context — the actual tool we can use to paint on the Canvas.

    var menuWidth = 100;
    var menuHeight = 50;

    var ballRadius = 10;
    var x = canvas.width/2;
    var y = canvas.height-30;
    dx = 2;
    dy = -2;


    var paddleHeight = 10;
    var paddleWidth = 75;
    var paddleX = (canvas.width - paddleWidth)/2;

    var leftPressed = false;
    var rightPressed = false;


    var brickRowCount = 5;
    var brickColumnCount = 7;
    var brickWidth = 50;
    var brickHeight = 20;
    var brickPadding = 10;
    var brickOffsetTop = 30;
    var brickOffsetLeft = 30;

    var start = false;

    var score = 0;
    var lifes = 3;

    var bricks = [];
    for(var c = 0; c < brickColumnCount; c++){
    bricks[c] = [];
    for(var r = 0; r < brickRowCount; r++){
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
    }

    var maxScore = brickColumnCount * brickRowCount;

    document.addEventListener("click", mouseClickHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);
    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function mouseClickHandler(e){
    start = true;
    }

    function mouseMoveHandler(e){
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width){
        paddleX = relativeX - paddleWidth/2;
    }
    }

    function keyDownHandler(e){
    if(e.key == "Right" || e.key == "ArrowRight"){
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = true;
    }
    }

    function keyUpHandler(e){
    if(e.key == "Right" || e.key == "ArrowRight"){
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft"){
        leftPressed = false;
    }
    }

    function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                if (x > b.x && x < b.x + brickWidth + ballRadius && y > b.y && y < b.y + brickHeight + ballRadius) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                }
            }
        }
    }
    }


    function drawMenuStart(){
    ctx.font = "800 16px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText(" - CLICK ANYWHERE TO START - ", canvas.width/2, canvas.height/2);
    }

    function drawYouWin(){
        ctx.font = "800 24px Arial";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText(" - YOU WON! - ", canvas.width/2, canvas.height/2);
    }

    function drawYouLost(){
        ctx.font = "800 24px Arial";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText(" - YOU LOST! - ", canvas.width/2, canvas.height/2);
    }

    function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    }

    function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    }

    function drawBricks(){
    for(var c = 0; c < brickColumnCount; c++){
        for(var r = 0; r < brickRowCount; r++){
        if(bricks[c][r].status == 1){
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "white";
            ctx.fill();
            ctx.closePath();
        }
        }
    }
    }

    function drawScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Score: " + score, canvas.width/2, 20 );
    }

    function drawMaxScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Max Score: " + maxScore, 81, 20);
    }

    function drawLifes(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Lifes: " + lifes, 415, 20);
    }

    function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(start == false){
        drawMenuStart();
    }


    if(start){
        drawBricks();
        drawBall();
        drawPaddle();
        drawScore();
        drawLifes();
        drawMaxScore();
        collisionDetection();

        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if (y + dy < ballRadius) {
            dy = -dy;
        }
        else if (y + dy > canvas.height - ballRadius) {
            if (x > paddleX && x < paddleX + paddleWidth + ballRadius) {
                if (y = y - paddleHeight) {
                    dy = -dy;
                }
            }
            else {
                if(lifes > 1){
                lifes--;
                x = canvas.width/2;
                y = canvas.height-30;
                paddleX =  (canvas.width - paddleWidth)/2;
                }
                else{
                score = 0;
                lifes = 3;
                document.location.reload();
                clearInterval(interval); // Needed for Chrome to end game
                }
            }
        }

        if(score == maxScore){
            drawYouWin();
            setTimeout(function () {
                document.location.reload();
                clearInterval(interval); // Needed for Chrome to end game
            }, 5000);
        }


        if (rightPressed && paddleX < canvas.width - paddleWidth) {
            paddleX += 7;
        }
        else if (leftPressed && paddleX > 0) {
            paddleX -= 7;
        }

        x += dx;
        y += dy;
        }
    }

    var interval = setInterval(draw, 10);
}