
let t;
function next() {
    const lowerHeader = document.getElementById("my-lower-header");
    if (t) {
        clearInterval(t);
    }
    t = setInterval(() => {

        lowerHeader.scrollLeft += 10;

        console.log("done next method");
    }, 30);

}

function perv() {
    if (t) {
        clearInterval(t);
    }

    const lowerHeader = document.getElementById("my-lower-header");
    t = setInterval(() => {
        lowerHeader.scrollLeft -= 10;

        console.log("done next method");
    }, 30);
    console.log("done perv method");
}
function moveOff() {
    if (t) {
        clearInterval(t);
    }
}
