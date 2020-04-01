let visible = false;
let darkMode = false;

let currentScroll = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

// Contact boxs
const contactBoxA = document.querySelectorAll("#contact > .container > .contact-box > a");
// Header
const menuButtons = document.querySelectorAll(".menu > a");

const innerWidthConditionals = {
    isBiggerThan1000: true,
    isBiggerThan1100: false,
    isBiggerThan1200: false,
    isBiggerThan1300: false,
}

if (window.innerWidth > 1024){
    setTimeout(() => {
        document.querySelector("#introduction > .container").style.width = "70%";
        document.querySelector(".fa-angle-right").style.transform = "rotate(-180deg)";
        visible = false;
        //document.querySelector("#projects-carousel").style.marginLeft = "5rem"
    }, 750)    

    // On scroll events
    document.addEventListener("scroll", () => {
        // Scroll
        currentScroll = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        console.log(currentScroll);

        if (currentScroll > 400){ 
            // Container
            document.querySelector("#introduction > .container").style.width = "100%";
            
            // Arrow
            document.querySelector(".fa-angle-right").style.transform = "rotate(-180deg)";

            // Header
            document.querySelector("#introduction > .container > .header").style.top = "0rem";
            document.querySelector("#introduction > .container > .header").style.position = "fixed";
            
            if(darkMode == false){ // Dark mode OFF
                document.querySelector("#introduction > .container > .header").style.zIndex = "9999";
                document.querySelector("#introduction > .container > .header").classList.add("shadow")
                document.querySelector("#introduction > .container > .header").style.background = "white";
                document.querySelector("#introduction > .container > .header").style.color = "black";
                document.querySelector("#introduction > .container > .header > #home").style.color = "black";
                for(let i = 0; i < menuButtons.length; i++){
                    menuButtons[i].style.color = "black";
                }
            }else{ // Dark mode ON
                document.querySelector("#introduction > .container > .header").style.background = "black";
                document.querySelector("#introduction > .container > .header").style.color = "white";
                document.querySelector("#introduction > .container > .header > #home").style.color = "white";
            }
            
            // Menu
            document.querySelector(".menu").style.marginRight = "-4rem";

            visible = true; 
        } else if (currentScroll >= 250 && currentScroll <= 400) {
            document.querySelector("#introduction > .container > .header").style.top = "-4rem";
        } else if (currentScroll > 0 && currentScroll < 250) { 
            
            // Header
            document.querySelector("#introduction > .container > .header").style.background = "";
            document.querySelector("#introduction > .container > .header").style.top = "0rem";
            document.querySelector("#introduction > .container > .header").style.position = "absolute";
            document.querySelector("#introduction > .container > .header").style.color = "white";
            document.querySelector("#introduction > .container > .header").classList.remove("shadow");
            
            // Menu
            document.querySelector("#introduction > .container > .header > #home").style.color = "white";
            let menuBlock = document.querySelectorAll(".menu > a");
            for(let i = 0; i < menuBlock.length; i++){
                menuBlock[i].style.color = "white";
            }

            // Menu 
            document.querySelector(".menu").style.marginRight = "-1rem";
        }   

        // #i-am-carousel, #hobbies
        // Media Queries 

        if(currentScroll > (document.querySelector("#about").offsetTop - 100) && innerWidthConditionals.isBiggerThan1000){
            setTimeout(() => {
                document.querySelector("#about > .container > .header > .subtitle > div > ul").style.marginTop = "-2.05rem"
                setTimeout(() => {
                    document.querySelector("#about > .container > .header > .subtitle > div > ul").style.marginTop = "-4.1rem"
                    setTimeout(() => {
                        document.querySelector("#about > .container > .header > .subtitle > div > ul").style.marginTop = "-6.15rem"
                    }, 2000)
                }, 2000)
                innerWidthConditionals.isBiggerThan1000 = false
            }, 500)
        }

        if (currentScroll > document.querySelector("#about").offsetTop - 50) {
            document.querySelector("#hobbies-header").classList.add("popup-animation")
        }

        if (window.innerWidth >= 1800 && innerWidthConditionals.isBiggerThan1000) {
            if (currentScroll > 0) {
                setTimeout(() => {
                    document.querySelector("#about > .container > .header > .subtitle > div > ul").style.marginTop = "-2.05rem"
                    setTimeout(() => {
                        document.querySelector("#about > .container > .header > .subtitle > div > ul").style.marginTop = "-4.1rem"
                        setTimeout(() => {
                            document.querySelector("#about > .container > .header > .subtitle > div > ul").style.marginTop = "-6.2rem"
                        }, 2000)
                    }, 2000)
                    innerWidthConditionals.isBiggerThan1000 = false
                }, 2000)
            }
            document.querySelector("#hobbies-header").classList.add("popup-animation")
       }
    })

    // Slidebar
    document.querySelector("#arrow").addEventListener("click", () => {
        if (currentScroll < 400){
            if (visible === false){
                // Container
                document.querySelector("#introduction > .container").style.width = "100%";

                // Arrow
                document.querySelector(".fa-angle-right").style.transform = "rotate(180deg)";
                visible = true;
            } else {
                // Container
                document.querySelector("#introduction > .container").style.width = "70%";

                // Arrow
                document.querySelector(".fa-angle-right").style.transform = "rotate(360deg)";
                visible = false;
            }
        }
    })
} else {
    document.addEventListener('scroll', () => {
        currentScroll = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        console.log(currentScroll)
        if (currentScroll > (document.querySelector("html > body > section:nth-of-type(2) > div:nth-of-type(1)").offsetTop)){
            document.querySelector("#bw-button").classList.add("fix-position-button")
        } else {
            document.querySelector("#bw-button").classList.remove("fix-position-button")
        }
    })
}
// Dark mode
document.querySelector("#bw-button").addEventListener("click", () => {
    if (darkMode === false){

        // Background image
        document.querySelector("#background").style.filter = " grayscale(100%) brightness(50%) contrast(100%)";
        document.querySelector("body").style.backgroundColor = "#353535";
        
        // Menu
        if (currentScroll > 400){
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
        document.querySelector("#projects").style.background = "#242424";
        document.querySelector("#projects").style.color = "white";

        // About 
        document.querySelector("#about").style.background = "#353535";
        document.querySelector("#about").style.color = "#F6F6F6";

        // Contact
        document.querySelector("#contact").style.background = "#242424";
        document.querySelector("#contact").style.color = "white";

        for (let i = 0; i < contactBoxA.length; i++) {
            contactBoxA[i].style.background = "#DADADA";
            contactBoxA[i].style.color = "#3B3B3B";
        }

        // Footer
        document.querySelector("footer").style.color = "white";

        darkMode = true;
    } else { 

        // Background image
        document.querySelector("#background").style.filter = "";
        document.querySelector("body").style.backgroundColor = "white";
        
        // Menu
        if (currentScroll > 400){
            document.querySelector("#introduction > .container > .header").style.background = "white";
            document.querySelector("#introduction > .container > .header").style.color = "black";
            document.querySelector("#introduction > .container > .header > #home").style.color = "black";
            for (let i = 0; i < menuButtons.length; i++) {
                menuButtons[i].style.color = "black";
            }
        }
        
        document.querySelector("#bw-button").innerHTML = '<i class="fa fa-adjust"></i> dark mode';

        // Slide bar toggle button
        document.querySelector("#arrow").style.background = "white";
        document.querySelector(".menu > #arrow > .fa").style.color = "black";

        // Slide bar
        document.querySelector(".slide-bar").style.background = "white";
        document.querySelector(".slide-bar").style.color = "black";
        // Projects
        document.querySelector("#projects").style.background = "whitesmoke";
        document.querySelector("#projects").style.color = "black";
        // About
        document.querySelector("#about").style.background = "rgb(240, 240, 240)";
        document.querySelector("#about").style.color = "black";

        // Contact
        document.querySelector("#contact").style.background = "whitesmoke";
        document.querySelector("#contact").style.color = "black";

        for (let i = 0; i < contactBoxA.length; i++) {
            contactBoxA[i].style.background = "white";
            contactBoxA[i].style.color = "black";
        }
 
        // Footer
        document.querySelector("footer").style.color = "black";
        darkMode = false;
    }
})
