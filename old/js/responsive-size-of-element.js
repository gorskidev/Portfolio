window.onload = function() {

    // Let's get window's height.
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    // Check.

    var height;
    var width;
    // Defining CSS variables.
    var x = 30;
    var rem = "rem";
    var iphoneImage = $("#iphone-image"); 
    var desktopImage = $("#desktop-image");

    // Defining e.keyCode variables.
    var ctrlDown = false; 
    var ctrlKey = 17; // Ctrl key on keyboard 
    var cmdKey = 91; // CMD (Mac) on keyboard
    var minusKey = 189; // Minus key on keyboard 
    var plusKey = 171; // Plus key on keyboard
    var equalKey = 187; // Equal key on keyboard

    // jQuery attempt.
    function widthCheck(){
        var width = $(window).width();
        return width;
    }

    function heightCheck(){
        var height = $(window).height();
        return height;
    }

    $(document).keydown(function(e){
        if(e.keyCode == ctrlKey || e.keyCode == cmdKey) // If pressed key is Ctrl or CMD change ctrlDown to true.
            ctrlDown = true;
            console.log(ctrlDown);
    }).keyup(function(e){
        if(e.keyCode == ctrlKey || e.keyCode == cmdKey) // If ctrl or CMD is released, change ctrlDown to false.
            ctrlDown = false;
            console.log(ctrlDown);
    });

    $(document).keydown(function(e){    
        if(ctrlDown && e.keyCode == minusKey){ // "Ctrl" + "-"
            ctrlDown = false;
            console.log("Current width: "+widthCheck(width));
            console.log("Current height: "+heightCheck(height));
            if(widthCheck() > 1000 && widthCheck() < 1200){
                console.log(widthCheck(width));
                console.log(heightCheck(height));
                console.log("Width is higher than 1000 and height is higher than 760");
            }
            else if(widthCheck() > 1250 && widthCheck() < 1360){
                console.log(widthCheck(width));
                console.log(heightCheck(height));
                console.log("Width is higher than 1280 and height is higher than 800");
            }
            else if(widthCheck() > 1361 && widthCheck() < 1370){
                console.log(widthCheck(width));
                console.log(heightCheck(height));
                console.log("Width is higher than 1361 and lower than 1370");
            }
            else if(widthCheck() > 1380 && widthCheck() < 1450){
                console.log(widthCheck(width));
                console.log(heightCheck(height));
                console.log("Width is higher than 1380 and lower than 1450");
            }
            else if(widthCheck() > 1500 && widthCheck() < 1650){
                console.log(widthCheck(width));
                console.log(heightCheck(height));
                console.log("Width is higher than 1500 and lower than 1650");
            }
            else if(widthCheck() > 1660 && widthCheck() < 1700){
                console.log(widthCheck(width));
                console.log(heightCheck(height));
                console.log("Width is higher than 1660 and lower than 1700");
            }
            else if(widthCheck() > 1710 && widthCheck() < 1930){
                console.log(widthCheck(width));
                console.log(heightCheck(height));
                console.log("Width is higher than 1710 and lower than 1930");
            }
            else if(widthCheck() > 1940 && widthCheck() < 2600){
                console.log(widthCheck(width));
                console.log(heightCheck(height));
            }
        }
        else if(ctrlDown && e.keyCode == equalKey || ctrlDown && e.keyCode == plusKey){ // "Ctrl" + "+" / "="
            ctrlDown = false;
            console.log("Im getting bigger!");
            widthCheck();
        }
    });

    function elementsPosition(x){
        iphoneImage.css("bottom", x + rem );
        desktopImage.css("bottom", x + rem);
    }


    /*if(windowHeight < 800){ // Breakpoint above the 768px.
        this.console.log("Hey, im under the 800px!");
        var x = -2;
        elementsPosition(x);
    }
    else if(windowHeight >= 800 && windowHeight < 900){ // Breakpoint above the 800px.
        this.console.log("Hey im under the 900px!");
        var x = -3;
        elementsPosition(x);
    }
    else if(windowHeight >= 900 && windowHeight < 1060){
        this.console.log("Hey im under 1050px!");
        var x = -2;
        elementsPosition(x);
    }*/

};