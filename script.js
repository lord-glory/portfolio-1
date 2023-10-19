const tablinks = document.getElementsByClassName("tab-links")
const tabcontents = document.getElementsByClassName("tab-contents")
const sidemenu = document.getElementById("sidemenu")

const opentab = (e) => {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    
    e.target.classList.add("active-link")
    document.getElementById(e.target.attributes.ref.value).classList.add("active-tab")
};

for (tablink of tablinks) {
    tablink.addEventListener("click", opentab)
}

function openmenu() {
    sidemenu.style.right = "0"
}

function closemenu() {
    sidemenu.style.right = "-200px"
}
