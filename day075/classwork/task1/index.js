// 1) შექმენით ინეტრვალი, გადაცემულ ფუნციაში ყოველ ჯერზე შექმენით date ობიექტი, როცა ამჟამინდელი წუთი გაუტოლდება 35, უნდა გაითიშოს ინეტრვალი

const date = new Date();
const interval = setInterval(function() {
    if (date.getMinutes === 35) {
        clearInterval(interval);
    }
}, 1000)