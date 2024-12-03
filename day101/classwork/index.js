// 1) გამოიყენეთ React, ReactDOM და Babel cdn ები და დააკავშირეთ თქვენს html ის ფაილს, შემდეგ შექმენით html ში ფესვი ელემენტი, ჯავასკრიპტის ფაილში jsx გამოყენებით შექმენით კომპონენტი/ნაწილი სადაც გამოიტანთ სათაურს, პარაგრაფებს და ღილაკებს, საბოლოოდ კი დარეენდერეთ გვერდზე ეს ობიექტები, კომენტარებიტ ახსენით რას აკეთე ს ყველა ის ბიბლიოთეკა რაც ჩამოვთვალეთ და ახსენით რა არის jsx

// Creating an Html content
const pAndBtn = (
    <div>
        <p>Hello world</p>
        <button>Click me</button>
    </div>
)

// Creating a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Logging the Html content to the console
console.log(pAndBtn);

// Rendering the Html content

root.render(pAndBtn);