function removeElementsOnMobile() {
    if (window.innerWidth < 768) {
        var aosCss = document.getElementById("aos-css");
        var aosJs = document.getElementById("aos-js");

        if (aosCss) {
            aosCss.parentNode.removeChild(aosCss);
        }

        if (aosJs) {
            aosJs.parentNode.removeChild(aosJs);
        }
    }
}

document.addEventListener("DOMContentLoaded", removeElementsOnMobile);