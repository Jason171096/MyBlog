let toggleActive = false
const myToggleOne = document.getElementById("myToggleOne");
const myToggleTwo = document.getElementById("myToggleTwo");
const mySideNav = document.getElementById("mySideNav");
const myToggle = document.getElementById("myToggle");
const body = document.querySelector("body")

document.getElementById("myName").onclick = function () { gohome() };

function gohome() {
    window.location.href = "../index.html"
}

myToggle.onmouseenter = function () { mouseEnter() };
myToggle.onmouseleave = function () { mouseLeave() };

myToggle.onclick = function () { toggleMenu() }

function toggleMenu() {
    if (toggleActive == true) {
        closeNav()
    } else if (toggleActive == false) {
        openNav()
    }
}

function openNav() {
    body.style.overflow = "hidden"
    mySideNav.style.width = "100%"
    myToggleOne.style.width = "100%"
    myToggleOne.style.left = "0"
    myToggleTwo.style.top = "0"
    myToggleOne.style.transform = "rotate(-45deg)"
    myToggleOne.style.transition = "transform 1s"
    myToggleTwo.style.transform = "rotate(45deg)"
    myToggleTwo.style.transition = "transform 1s"
    toggleActive = true
}

function closeNav() {
    body.style.overflow = "auto"
    mySideNav.style.width = "0";
    myToggleOne.style.width = "75%"
    myToggleOne.style.left = "7px"
    myToggleTwo.style.top = "5px"
    myToggleOne.style.transform = "rotate(0deg)"
    myToggleOne.style.transition = "transform 1s"
    myToggleTwo.style.transform = "rotate(0deg)"
    myToggleTwo.style.transition = "transform 1s"
    toggleActive = false
}

function mouseEnter() {
    const white = getComputedStyle(document.documentElement).getPropertyValue("--white");
    myToggleOne.style.setProperty("background", white);
    myToggleTwo.style.setProperty("background", white);
    myToggleOne.style.boxShadow = `0 0 5px ${white}`
    myToggleTwo.style.boxShadow = `0 0 5px ${white}`
    myToggle.style.transition = ".1s"

}

function mouseLeave() {
    const so_white = getComputedStyle(document.documentElement).getPropertyValue("--so-white");
    myToggleOne.style.setProperty("background", so_white);
    myToggleTwo.style.setProperty("background", so_white);
    myToggleOne.style.boxShadow = `0 0 0`
    myToggleTwo.style.boxShadow = `0 0 0`
    myToggle.style.transition = ".1s"
}
