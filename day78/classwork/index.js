// 1) შექმენით ანიმაცია სადაც ყუთი ჯერ დაიწყებს მარჯვნივ წასვლას, როცა ის კიდესთან მივა მარჯენა მხარეს დაიწყოს ბოლოში ცავსლა, როცა ბოლოში ჩავა წავიდეს მარცხნივ და როცა მარცხნივ გადავა წავიდეს ზემოთ, შემდეგ კი ეს ციკლი სამუდამოდ გააგრძელოს

const container = document.getElementById("box");


let positionX = 0;
let positionY = 0;
let direction = 1;

function animate() {
    positionX += direction;
    positionY += direction;

    if (positionX >= 200 - 50) {
        direction = -1;
    } else if (positionX <= 0) {
        direction = 1;
    }

    container.style.top = positionY + "px";
    container.style.bottom = positionY + "px";
    container.style.left = positionX + "px";
    container.style.right = positionX + "px";
}

setInterval(animate, 20);