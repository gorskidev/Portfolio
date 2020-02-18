 $(document).ready(function(){
    $(".nav > .abt").click(function(){
    $(".abt").addClass("active");
    $(".webs").removeClass("active");
    $(".websproj").removeClass("active");
    $(".skls").removeClass("active");
    $(".care").removeClass("active");
    $(".oth").removeClass("active");

    $(".about").removeClass("invisible");
    $(".websites").addClass("invisible");
    $(".websites-projects").addClass("invisible");
    $(".skills").addClass("invisible");
    $(".career").addClass("invisible");
    $(".other").addClass("invisible");
});

// When Websites is being clicked.
$(".nav > .webs").click(function(){
    $(".abt").removeClass("active");
    $(".webs").addClass("active");
    $(".websproj").removeClass("active");
    $(".skls").removeClass("active");
    $(".care").removeClass("active");
    $(".oth").removeClass("active");

    $(".about").addClass("invisible");
    $(".websites").removeClass("invisible");
    $(".websites-projects").addClass("invisible");
    $(".skills").addClass("invisible");
    $(".career").addClass("invisible");
    $(".other").addClass("invisible");
});

// When Websites Projects is being clicked.
$(".nav > .websproj").click(function(){
    $(".abt").removeClass("active");
    $(".webs").removeClass("active");
    $(".websproj").addClass("active");
    $(".skls").removeClass("active");
    $(".care").removeClass("active");
    $(".oth").removeClass("active");

    $(".about").addClass("invisible");
    $(".websites").addClass("invisible");
    $(".websites-projects").removeClass("invisible");
    $(".skills").addClass("invisible");
    $(".career").addClass("invisible");
    $(".other").addClass("invisible");
});

// When Skills is being clicked.
$(".nav > .skls").click(function(){
    $(".abt").removeClass("active");
    $(".webs").removeClass("active");
    $(".websproj").removeClass("active");
    $(".skls").addClass("active");
    $(".care").removeClass("active");
    $(".oth").removeClass("active");

    $(".about").addClass("invisible");
    $(".websites").addClass("invisible");
    $(".websites-projects").addClass("invisible");
    $(".skills").removeClass("invisible");
    $(".career").addClass("invisible");
    $(".other").addClass("invisible");

    // Languages
    $("#html").css("width", "100%");
    $("#css").css("width", "100%");
    $("#javascript").css("width", "66%");
    $("#jquery").css("width", "66%");
    $("#php").css("width", "26%");
    $("#mysql").css("width", "26%");
    $("#sass").css("width", "100%");
    $("#reactjs").css("width", "10%");

    //Software
    $("#aps").css("width", "70%");
    $("#aai").css("width", "63%");
    $("#aid").css("width", "46%");
    $("#excel").css("width", "63%");
});

// When Career is being clicked.
$(".nav > .care").click(function(){
    $(".abt").removeClass("active");
    $(".webs").removeClass("active");
    $(".websproj").removeClass("active");
    $(".skls").removeClass("active");
    $(".care").addClass("active");
    $(".oth").removeClass("active");

    $(".about").addClass("invisible");
    $(".websites").addClass("invisible");
    $(".websites-projects").addClass("invisible");
    $(".skills").addClass("invisible");
    $(".career").removeClass("invisible");
    $(".other").addClass("invisible");

});

// When Other is being clicked.
$(".nav > .oth").click(function(){
    $(".abt").removeClass("active");
    $(".webs").removeClass("active");
    $(".websproj").removeClass("active");
    $(".skls").removeClass("active");
    $(".care").removeClass("active");
    $(".oth").addClass("active");

    $(".about").addClass("invisible");
    $(".websites").addClass("invisible");
    $(".websites-projects").addClass("invisible");
    $(".skills").addClass("invisible");
    $(".career").addClass("invisible");
    $(".other").removeClass("invisible");
});
});