let visible = false;
let darkMode = false;

let currentScroll = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

// Contact box
const contactBoxA = document.querySelectorAll("#contact > .container > .contact-box > a");
// Header
const menuButtons = document.querySelectorAll(".menu > a");

if(window.innerWidth > 1024){
    setTimeout(() => {
        document.querySelector("#introduction > .container").style.width = "70%";
        visible = false;
    }, 1000)    

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
            
            if(darkMode == false){ // Dark mode OFF
                document.querySelector("#introduction > .container > .header").style.background = "white";
                document.querySelector("#introduction > .container > .header").style.color = "black";
                document.querySelector("#introduction > .container > .header > #home").style.color = "black";
                document.querySelector("#introduction > .container > .header").style.boxShadow = "0 0 15px rgb(0, 0, 0, 0.1)";
                for(let i = 0; i < menuButtons.length; i++){
                    menuButtons[i].style.color = "black";
                }
            }else{ // Dark mode ON
                document.querySelector("#introduction > .container > .header").style.background = "black";
                document.querySelector("#introduction > .container > .header").style.color = "white";
                document.querySelector("#introduction > .container > .header > #home").style.color = "white";
                document.querySelector("#introduction > .container > .header").style.boxShadow = "0 0 25px rgb(255, 255, 255, 0.2)";
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
            document.querySelector("#introduction > .container > .header").style.boxShadow = "0 0 15px rgb(0, 0, 0, 0)";
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
        if(currentScroll < 400){
            if(visible === false){
                // Container
                document.querySelector("#introduction > .container").style.width = "100%";

                // Arrow
                document.querySelector(".fa-angle-right").style.transform = "rotate(180deg)";
                visible = true;
            }else{
                // Container
                document.querySelector("#introduction > .container").style.width = "70%";

                // Arrow
                document.querySelector(".fa-angle-right").style.transform = "rotate(360deg)";
                visible = false;
            }
        }
    })

    // Menu animations
    let current = {
        projects : false,
        about : false,
        contact : false
    }

    document.querySelector(".menu > #nav-projects").addEventListener("click", () => {
        if(darkMode == true){
            document.querySelector(".menu > #nav-projects").style.color = "red";
            document.querySelector(".menu > #nav-about").style.color = "white";
            document.querySelector(".menu > #nav-contact").style.color = "white";
        }else{
            document.querySelector(".menu > #nav-projects").style.color = "red";
            document.querySelector(".menu > #nav-about").style.color = "black";
            document.querySelector(".menu > #nav-contact").style.color = "black";
        }
        current.projects = true;
        current.about = false;
        current.contact = false;
    });

    document.querySelector(".menu > #nav-about").addEventListener("click", () => {
        if(darkMode == true){
            document.querySelector(".menu > #nav-projects").style.color = "white";
            document.querySelector(".menu > #nav-about").style.color = "red";
            document.querySelector(".menu > #nav-contact").style.color = "white";
        }else{
            document.querySelector(".menu > #nav-projects").style.color = "black";
            document.querySelector(".menu > #nav-about").style.color = "red";
            document.querySelector(".menu > #nav-contact").style.color = "black";
        }
        current.projects = false;
        current.about = true;
        current.contact = false;
    });

    document.querySelector(".menu > #nav-contact").addEventListener("click", () => {
        if(darkMode == true){
            document.querySelector(".menu > #nav-projects").style.color = "white";
            document.querySelector(".menu > #nav-about").style.color = "white";
            document.querySelector(".menu > #nav-contact").style.color = "red";
        }else{
            document.querySelector(".menu > #nav-projects").style.color = "black";
            document.querySelector(".menu > #nav-about").style.color = "black";
            document.querySelector(".menu > #nav-contact").style.color = "red";
        }
        current.projects = false;
        current.about = false;
        current.contact = true;
    });
}
// Dark mode
document.querySelector("#bw-button").addEventListener("click", () => {
    if(darkMode === false){
        // Background image
        document.querySelector("#introduction").style.backgroundImage = "url(imgs/background_dark.png)"

        // Menu
        if(currentScroll > 400){
            document.querySelector("#introduction > .container > .header > #home").style.color = "white";
            document.querySelector("#introduction > .container > .header").style.background = "black";
            document.querySelector("#introduction > .container > .header").style.color = "white";
            for(let i = 0; i < menuButtons.length; i++){
                menuButtons[i].style.color = "white";
            }
        }

        document.querySelector("#bw-button").innerHTML = '<i class="fa fa-adjust"></i> light mode';

        // Slide bar toggle button
        document.querySelector("#arrow").style.background = "black";
        document.querySelector(".menu > #arrow > .fa").style.color = "white";

        // Slide bar
        document.querySelector(".slide-bar").style.background = "black";
        document.querySelector(".slide-bar").style.color = "white";

        // Projects
        document.querySelector("#projects").style.background = "#353535";
        document.querySelector("#projects").style.color = "white";

        // About 
        document.querySelector("#about").style.background = "#A1A1A1";
        document.querySelector("#about").style.color = "#F6F6F6";

        // Contact
        document.querySelector("#contact").style.background = "black";
        document.querySelector("#contact").style.color = "white";

        for(let i = 0; i < contactBoxA.length; i++){
            contactBoxA[i].style.background = "#DADADA";
            contactBoxA[i].style.color = "#3B3B3B";
        }

        darkMode = true;
    }else{
        // Background image
        document.querySelector("#introduction").style.backgroundImage = "url(imgs/background.jpg)"

        // Menu
        if(currentScroll > 400){
            document.querySelector("#introduction > .container > .header").style.background = "white";
            document.querySelector("#introduction > .container > .header").style.color = "black";
            document.querySelector("#introduction > .container > .header > #home").style.color = "black";

        }
        document.querySelector("#bw-button").innerHTML = '<i class="fa fa-adjust"></i> dark mode';

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

        for(let i = 0; i < contactBoxA.length; i++){
            contactBoxA[i].style.background = "white";
            contactBoxA[i].style.color = "black";
        }
        darkMode = false;
    }
})
