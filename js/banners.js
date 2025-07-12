let bannerFlag = '';
let bannerBtn = '';
let currentFlag = '';
function Open(id, btn) {
    const banner = document.getElementById(`${id}`);
    if (!banner.classList.contains("show-banner")) {
        if (bannerFlag) {
            document.getElementById(`${bannerFlag}`).classList.remove("show-banner");
            document.getElementById(`${bannerBtn}`).style.backgroundColor = "white";
            document.getElementById(`${bannerBtn}`).style.color = "black";
        }
        banner.classList.add("show-banner");
        document.getElementById(`${btn}`).style.backgroundColor = "black";
        document.getElementById(`${btn}`).style.color = "white";
        currentFlag = id;
        bannerFlag = id;
        bannerBtn = btn;
        console.log("done");
    }
    else {
        banner.classList.remove("show-banner");
        document.getElementById(`${bannerBtn}`).style.backgroundColor = "white";
        document.getElementById(`${bannerBtn}`).style.color = "black";
    }
}

function Close(id) {
    const banner = document.getElementById(id);
    const leftItems=document.querySelectorAll(".left-item");
    banner.classList.remove("show-banner");
    console.log("done");
    leftItems.forEach(element => {
        element.style.backgroundColor="white";
        element.style.color="black";
        console.log(element);
    });
}


function showSearchBar(id){
    const searchBar=document.getElementById(id);
    searchBar.classList.toggle("element-state");
    
    if(searchBar.classList.contains("hide-element")){
    searchBar.classList.toggle("hide-element")
    }
}