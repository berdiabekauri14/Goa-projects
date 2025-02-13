// 1) სტუდენტების სახელებისა და ქულების შენახვა Map-ში
// აღწერა: შექმენით ფუნქცია, რომელიც მიიღებს სტუდენტების სიას (სახელები და ქულები) და Map-ს დააბრუნებს, სადაც სტუდენტების სახელები იქნება გასაღები, ხოლო მათი ქულები მნიშვნელობები.
// დავალების ამოცანა:

const students = ["Berdia", "Nikoloz", "Qristine", "Saba"];

const score = [5, 5, 5, 4];

const map = () => {
    const obj = [];
    const arr = students.map((student, score) => {
        obj.push({
            student: score
        })
    })

    console.log(arr);
}

map();