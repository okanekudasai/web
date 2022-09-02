export function finding(s) {
    window.onload = function () {
        var temp = document.querySelectorAll(s);
        for (i of temp) {
            i.style.border = "10px dashed red";
        }
    };
}