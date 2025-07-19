
function changeMode() {

    //     --upper-header:white;
    // --code-background-Color:white;
    // --around-code-background-Color:#E7E9EB;
    // --text-color:black;
    const mode = document.getElementById("darkmode");

    if (!mode.classList.contains("dark")) {
        mode.classList.add("dark");
        const upperHeader = "#1d2a35";
        const codeBackgroundColor = "#15202b";
        const aroundCodeBackgroundColor = "#38444d";
        const textColor = "white";

        document.documentElement.style.setProperty('--upper-header', upperHeader);
        document.documentElement.style.setProperty('--code-background-Color', codeBackgroundColor);
        document.documentElement.style.setProperty('--around-code-background-Color', aroundCodeBackgroundColor);
        document.documentElement.style.setProperty('--text-color', textColor);
    }
    else {
        mode.classList.remove("dark");
        const upperHeader = "white";
        const codeBackgroundColor = "white";
        const aroundCodeBackgroundColor = "#E7E9EB";
        const textColor = "black";

        document.documentElement.style.setProperty('--upper-header', upperHeader);
        document.documentElement.style.setProperty('--code-background-Color', codeBackgroundColor);
        document.documentElement.style.setProperty('--around-code-background-Color', aroundCodeBackgroundColor);
        document.documentElement.style.setProperty('--text-color', textColor);
    }
}


function lightMode() {
    //     --upper-header:white;
    // --code-background-Color:white;
    // --around-code-background-Color:#E7E9EB;
    // --text-color:black;

}

