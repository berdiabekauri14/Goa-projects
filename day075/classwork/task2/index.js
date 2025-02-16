// 2) გამოიყენეთ კუთვნილებები რომელიც ვისწავლეთ, ამ კუთვნილებების დახმარებით მანიპულაცია მოახდინეთ სხვადასხვა ელემენტებზე აგრეთვე ახსენით არას ემსახურება ყველა კუთვნილება + გამოიყენეთ getElementsByTagname and getElementsByClassname  და ახსენით მათი დანიშნულება , რას აბრუნებს რა და რისგან განსხვავდება სხვა მეთოდებისგან

// parentElement
// children
// firstElementChild 
// lastElementChild 
// previousElementSibling 
// nextElementSibling

const classes = document.getElementsByClassName("className"); // წამოვიღებთ ელემენტებს html-იდან რომელსაც აქვს class: className
const tags = document.getElementsByTagName("p"); // წამოვიღებთ ყველა პარაგრაპფს html-იდან

classes.style.color = "green"; // გავსტილეთ ელემენტები რომელსაც აქვს class: className და მისი ფერი არის მწვანე
tags.style.fontSize = "30px"; // გავსტილეთ პარაგრაფები და მათი ზომა გახდა 30px