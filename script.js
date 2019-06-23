function showShallow(){
    hideAll()
    void document.getElementsByClassName("dot")[0].offsetWidth;
    document.getElementsByClassName("dot")[0].classList.add("dot-simple-shallow")
    document.getElementById("shallow-button").classList.remove("text-gray")
    
    console.log("Showing Shallow")
}

function showMid(){
    hideAll()
    void document.getElementsByClassName("dot")[0].offsetWidth;
    document.getElementsByClassName("dot")[0].classList.add("dot-simple-mid")
    document.getElementById("mid-button").classList.remove("text-gray")
    
    console.log("Showing Mid")
}

function showDeep(){
    hideAll()
    void document.getElementsByClassName("dot")[0].offsetWidth;
    document.getElementsByClassName("dot")[0].classList.add("dot-simple-deep")
    document.getElementById("deep-button").classList.remove("text-gray")

    console.log("Showing Deep")
}

function hideShallow(){
        document.getElementsByClassName("dot")[0].classList.remove("dot-simple-shallow")
        document.getElementById("shallow-button").classList.add("text-gray")
}

function hideMid(){
        document.getElementsByClassName("dot")[0].classList.remove("dot-simple-mid")
        document.getElementById("mid-button").classList.add("text-gray")
}

function hideDeep(){
        document.getElementsByClassName("dot")[0].classList.remove("dot-simple-deep")
        document.getElementById("deep-button").classList.add("text-gray")
}

function hideAll(){
    document.getElementsByClassName("dot")[0].classList.remove("dot-simple-shallow")
    document.getElementsByClassName("dot")[0].classList.remove("dot-simple-mid")
    document.getElementsByClassName("dot")[0].classList.remove("dot-simple-deep")
    document.getElementById("shallow-button").classList.add("text-gray")
    document.getElementById("mid-button").classList.add("text-gray")
    document.getElementById("deep-button").classList.add("text-gray")
}