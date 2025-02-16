const par = document.querySelector("#par");

const func1 = (func2) => {
    func2("blue");
}

func1((col) => {
    setTimeout(() => {
        par.style.color = col;
    }, 2000)
})