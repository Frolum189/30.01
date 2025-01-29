var score = 0;

var answer1 = prompt("Солнце — это звезда? (да/нет)").toLowerCase().trim();
if (answer1 === "да") {
    score++;
}

var answer2 = prompt("Какой язык программирования используется для веб-разработки? (html/css/js)").toLowerCase().trim();
if (answer2 === "js") {
    score++;
}

var answer3 = prompt("Какой год считается годом выпуска первой версии JavaScript?").trim();
if (answer3 === "1995") {
    score++;
}

console.log(`Вы набрали ${score}`);