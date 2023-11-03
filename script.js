console.log("connected");

function openNav() {
    console.log("opened")
    document.querySelector(".mobile-menu").classList.add("active");
    document.querySelector("html").style.overflowY="hidden";
}

function closeNav() {
    console.log("closed");
    document.querySelector(".mobile-menu").classList.remove("active");
    document.querySelector("html").style.overflowY="scroll";
}

