// Set-ების დავალებები
// ნაკრებების გაერთიანება
// დაწერე ფუნქცია, რომელიც მიიღებს ნაკრებების მასივს და დააბრუნებს მათ გაერთიანებას.
// მაგალითი:
// ნაკრებებისგაერთიანება([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]); 
// შედეგი: Set {1, 2, 3, 4}

const stickSets  = (set1, set2, set3) => {
    const result = [set1, set2, set3]
    for (let i = 0; i < result.length; i++) {
        console.log(object(result));
    }
}

stickSets(new Set([1, 2]), new Set([2, 3]), new Set([3, 4]));