onload = function(){
    var window_height = $(window).height();
    var window_width = $(window).width();

    var scrollDown = 0;

    console.log(window_width);
    console.log(window_height);

    var scrollPos = 0;

    var howManyTimes = 0;


    function checkWhatAmIReading(){
        console.log("Change scrollPos to '1000px + 100px', current scrollPos = " + scrollPos);
    }

    addEventListener('scroll', function(){
    if ((document.body.getBoundingClientRect()).top > scrollPos){
        console.log("up"); 
    }

    else{
        howManyTimes++;
        console.log("down");
        checkWhatAmIReading();
        console.log("I did it " + howManyTimes + " times!");
    }
        scrollPos = (document.body.getBoundingClientRect()).top;
    });


};