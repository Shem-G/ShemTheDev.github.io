function showShallow(){
    hideMid()
    hideDeep()
    document.getElementsByClassName("dot")[0].classList.add("dot-simple-shallow")
    

    document.getElementById("shallow-button").classList.remove("text-gray")
    console.log("Showing Shallow")
}

function showMid(){
    document.getElementsByClassName("dot")[0].classList.add("dot-simple-mid")
    hideShallow()
    hideDeep()

    document.getElementById("mid-button").classList.remove("text-gray")
    
    console.log("Showing Mid")
}

function showDeep(){
    document.getElementsByClassName("dot")[0].classList.add("dot-simple-deep")
    hideShallow()
    hideMid()

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
