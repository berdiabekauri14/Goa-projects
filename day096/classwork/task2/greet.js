// 2) შექმენით 2 ფაილი, პირველში შექმენით greet ფუნქცია და name ცვლადი, თქვნეი დავალებაა რომ ეს ფუნქცია და ცვლადი გადაიტანოთ მეორე index.js ფაილში, module-ის დახმარებით, გამოიყენეთ import/export

const greet = (name) => {
    console.log(`Hello ${name}`);
}

const name = "Berdia";

export {greet, name};