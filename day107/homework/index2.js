// შემოგდით n და n ზომის მასივი. თქვენი ამოცანაა იპოვოთ მასივში ყველაზე ბოლოს გამეორებული ელემენტი და დაბეჭდოთ იგი. თუ  ასეთი ელემენტი არ არსებობს დაბეჭდეთ რომ მასივში არცერთი ელემენტი არ მეორდება
// მაგ : 5, 1 3 4 1 3 12 
// პასუხია 3 (მასივში გამიმეორდა 1-იანი და 3-იანი თუმცა რადგან 3 უფრო გვიან გამეორდა ეგაა საძებნი ელემენტიც)

let arr = [5, 1, 3, 4, 1, 3, 12];

let lastElement = arr[arr.length - 1];

let lastElementIndex = arr.lastIndexOf(lastElement);

if (lastElementIndex === arr.length - 1) {
    console.log(lastElement);
} else {
    console.log('No such element');
}