// შექმენით for ციკლი რომლითაც გაიგებთ რიცხვებს 0-იდან 10-ის ჩათვლით, თქვენი დავალებაა მასივში დაამატოთ ობიექტი, ობიექტში უნდა გქონდეთ 2 კუთვნილება პირველი value (რიცხვი), მეორე type (აქ გაუწერთ ლუწია თუ კენტი)

const numsType = [];

for(let i = 0; i < 10; i++) {
    const numType = {
        value: i,
        type: ''
    }

    if(i % 2 === 0) {
        numType.type = 'Even';
    } else {
        numType.type = 'Odd';
    }

    numsType.push(numType);
}


console.log(numsType);