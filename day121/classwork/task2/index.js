const text = document.querySelector("h1");

const changeColor = func => {
    func("red");
}

changeColor(color => {
    setTimeout(() => {
        text.style.color = color;
    }, 2000)
})