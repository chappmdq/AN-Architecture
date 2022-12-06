const CloseForm = document.getElementById("NoForm")

CloseForm.addEventListener("click", () => {
    const form = document.getElementById("form")

    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
})

function myFunction(x) {
    x.classList.toggle("change");
}

function despliegueMenu() {
    let menuBox = document.getElementById("menuBox")
    let titles = document.getElementById("titles")
    let form = document.getElementById("form")

    menuBox.classList.toggle("open-menu")
    titles.classList.toggle("no-titles")
    form.classList.toggle("no-form")
}