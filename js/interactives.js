let visible = false;
let darkMode = false;

let currentScroll = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;


document.addEventListener("scroll", () => {
    // Scroll
    currentScroll = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(currentScroll);

    if(currentScroll > 400){
        // Container
        document.querySelector("#introduction > .container").style.width = "100%";

        // Header
        document.querySelector("#introduction > .container > .header").style.top = "0rem";
        document.querySelector("#introduction > .container > .header").style.position = "fixed";
        document.querySelector("#introduction > .container > .header").style.background = "white";
        document.querySelector("#introduction > .container > .header").style.color = "black";

        // Header > Menu
        document.querySelector("#introduction > .container > .header > #home").style.color = "black";
        let menuBlock = document.querySelectorAll(".menu > a");
        for(let i = 0; i < menuBlock.length; i++){
            menuBlock[i].style.color = "black";
        }
        
        // Menu
        document.querySelector(".menu").style.marginRight = "-4rem";

        visible = true; 
    }else if(currentScroll >= 250 && currentScroll <= 400) {
        document.querySelector("#introduction > .container > .header").style.top = "-4rem";
    }else if(currentScroll > 0 && currentScroll < 250) { 

        // Header
        document.querySelector("#introduction > .container > .header").style.background = "";
        document.querySelector("#introduction > .container > .header").style.top = "0rem";
        document.querySelector("#introduction > .container > .header").style.position = "absolute";
        document.querySelector("#introduction > .container > .header").style.color = "white";

        // Menu
        document.querySelector("#introduction > .container > .header > #home").style.color = "white";
        let menuBlock = document.querySelectorAll(".menu > a");
        for(let i = 0; i < menuBlock.length; i++){
            menuBlock[i].style.color = "white";
        }


        // Menu 
        document.querySelector(".menu").style.marginRight = "-1rem";
    }   
})

// Slidebar
document.querySelector("#arrow").addEventListener("click", () => {
    if(currentScroll < 500){
        if(visible === false){
            // Container
            document.querySelector("#introduction > .container").style.width = "100%";

            // Arrow
            document.querySelector(".fa-angle-left").style.transform = "rotate(180deg)";
            visible = true;
        }else{
            // Container
            document.querySelector("#introduction > .container").style.width = "70%";

            // Arrow
            document.querySelector(".fa-angle-left").style.transform = "rotate(360deg)";
            visible = false;
        }
    }
})

// Dark mode
document.querySelector("#bw-button").addEventListener("click", () => {
    if(darkMode === false){
        // Background image
        document.querySelector("#introduction").style.backgroundImage = "url(C:/xampp/htdocs/develop/portfolio/imgs/background_dark.png)"

        // Slide bar toggle button
        document.querySelector("#arrow").style.background = "black";
        document.querySelector(".menu > #arrow > .fa").style.color = "white";

        // Slide bar
        document.querySelector(".slide-bar").style.background = "black";
        document.querySelector(".slide-bar").style.color = "white";

        // Projects
        document.querySelector("#projects").style.background = "black";
        document.querySelector("#projects").style.color = "white";

        // About 
        document.querySelector("#about").style.background = "gray";
        document.querySelector("#about").style.color = "black";

        // Contact
        document.querySelector("#contact").style.background = "black";
        document.querySelector("#contact").style.color = "white";
        let x = document.querySelectorAll("#contact > .container > .contact-box > a");
        for(let i = 0; i < x.length; i++){
            x[i].style.background = "gray";
        }

        darkMode = true;
    }else{
        // Background image
        document.querySelector("#introduction").style.backgroundImage = "url(C:/xampp/htdocs/develop/portfolio/imgs/background.jpg)"

        // Slide bar toggle button
        document.querySelector("#arrow").style.background = "white";
        document.querySelector(".menu > #arrow > .fa").style.color = "black";

        // Slide bar
        document.querySelector(".slide-bar").style.background = "white";
        document.querySelector(".slide-bar").style.color = "black";
        // Projects
        document.querySelector("#projects").style.background = "white";
        document.querySelector("#projects").style.color = "black";
        // About
        document.querySelector("#about").style.background = "rgb(240, 240, 240)";
        document.querySelector("#about").style.color = "black";

        // Contact
        document.querySelector("#contact").style.background = "white";
        document.querySelector("#contact").style.color = "black";
        let x = document.querySelectorAll("#contact > .container > .contact-box > a");
        for(let i = 0; i < x.length; i++){
            x[i].style.background = "white";
        }
        darkMode = false;
    }
})