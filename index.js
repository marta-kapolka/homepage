const troll = document.querySelector(".troll--js");

troll.innerHTML =
  "&emsp;Jestem JSowym trollem i tak tu sobie dopisuję głupoty!";

let visitor = {};

visitor.name = prompt("No cześć! Jeśli masz ochotę to podaj imię:");
if (visitor.name == "") {
  visitor.name = "Nieznajoma czy też Nieznajomy";
}

visitor.age = prompt("Możesz też podać swój wiek! :)");

if (isNaN(visitor.age)) {
  alert("To nie liczba! Nie liczy się!");
  visitor.age = "";
}
const greeting = document.querySelector(".about-me__text--js");

function greetVisitorName(visitor) {
  greeting.innerHTML = `Witaj ${visitor.name}!`;
}

function greetVisitor(visitor) {
  if (visitor.age == 32) {
    greeting.innerHTML = `Witaj ${visitor.name}! Masz tyle lat ile ja!`;
  } else {
    const ageDifference = Math.abs(32 - visitor.age);

    let older;
    if (visitor.age > 32) {
      older = "więcej";
    } else {
      older = "mniej";
    }

    if (Math.abs(visitor.age - 32) == 1) {
      greeting.innerHTML = `Witaj ${visitor.name}! Masz rok ${older} niż ja!`;
    } else {
      function needEnd(ageDifference) {
        let lastDigit = ageDifference.toString(10).split("");
        console.log(lastDigit);
        console.log(lastDigit[lastDigit.length - 1]);
        if (
          lastDigit[lastDigit.length - 1] >= 2 &&
          lastDigit[lastDigit.length - 1] <= 4 &&
          lastDigit[lastDigit.length - 2] != 1
        ) {
          return "a";
        } else {
          return "";
        }
      }

      let end = needEnd(ageDifference);

      console.log(end);

      greeting.innerHTML = `Witaj ${visitor.name}! Masz ${ageDifference} lat${end} ${older} niż ja!`;
    }
  }
}

if (visitor.name != "" && visitor.age != "") {
  greetVisitor(visitor);
} else if (visitor.name != "") {
  greetVisitorName(visitor);
}
