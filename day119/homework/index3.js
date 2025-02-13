// 3) დაწერეთ ფუნქცია, რომელიც მიიღებს სტუდენტების ქულების Map-ს, შექმნის მისი ასლს, თითოეული სტუდენტის ქულას გაზრდის 5 ქულით და ასლ Map-ს დააბრუნებს.

const originalScores = [5, 3, 4, 2];

const copy = [];

const scoreUpdate = () => {
    originalScores.forEach((score) => {
        score + 5
    })

    copy.push(originalScores);

    console.log(copy);
}

scoreUpdate();