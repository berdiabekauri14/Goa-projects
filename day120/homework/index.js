// ქვნენაკრების შემოწმება
// დაწერე ფუნქცია, რომელიც შეამოწმებს, არის თუ არა ერთი ნაკრები მეორის ქვნენაკრები.
// მაგალითი:
// არისქვნენაკრები(new Set([1, 2]), new Set([1, 2, 3])); 
// შედეგი: true 

const isQvenakrebi = (set1, set2) => {
    const set = new Set([set1, set2]);

    if (set === set1 && set2) {
        return true;
    } else {
        return false;
    }
}

console.log(isQvenakrebi(new Set([1, 2]), new Set([1, 2, 3])));