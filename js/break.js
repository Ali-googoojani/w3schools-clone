function collapseSearchBar() {
    const searchBar = document.getElementById("search-bar-id");
    if (window.innerWidth <= 1200) {

        searchBar.classList.add("hide-element");
    } else {
        searchBar.classList.remove("hide-element");
        searchBar.classList.remove("element-state");
    }
}

function collapseSearchBarClick() {
    const searchBar = document.getElementById("search-bar-id");

    searchBar.classList.remove("element-state");
}

function showSideBar() {
    const sideBar = document.getElementById("low-menu");


    if (sideBar.style.display == "block") {
        sideBar.style.display = "none";
    }
    else {
        sideBar.style.display = "block";
    }
}





