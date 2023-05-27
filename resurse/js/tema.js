

window.addEventListener("load", function () {
    let tema = localStorage.getItem("tema");
    if (tema) {
        document.body.classList.add("dark");
        document.getElementById("checkbox").checked = true;
    }
    document.getElementById("checkbox").addEventListener("change", function () {
        if (this.checked) {
            document.body.classList.add("dark");
            localStorage.setItem("tema", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.removeItem("tema");
        }
    });
});