function scrollUp() {
    let top = document.getElementById("header");
    top.scrollIntoView({ behavior: 'smooth' });
}

function scrollDown() {
    // let top = document.getElementById("subscribe-form");
    let top = document.getElementById("footer");
    top.scrollIntoView({ behavior: 'smooth' });
}

export {
    scrollUp,
    scrollDown
}