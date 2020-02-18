let visible = false;

window.addEventListener("click", () => {
    if(visible === false){
        document.querySelector("#introduction > .container").style.width = "100%";
        visible = true;
    }else{
        document.querySelector("#introduction > .container").style.width = "70%";
        visible = false;
    }
})