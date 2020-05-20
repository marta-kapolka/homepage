// INDEX - ADDING HTML CONTENT
/*
const troll = document.querySelector(".troll--js");

troll.innerHTML =
  "&emsp;Jestem JSowym trollem i tak tu sobie dopisuję głupoty!";

  */

// INDEX - GREETING VISITOR
/*
const greeting = document.querySelector(".about-me__text--js");

let visitor = {};

visitor.name = prompt("No cześć! Jeśli masz ochotę to podaj imię:");

if (visitor.name == "" || visitor.name == null) { // NO NAME GIVEN
  visitor.name = "Nieznajoma czy też Nieznajomy";
}

visitor.age = prompt("Możesz też podać swój wiek! :)");

if (isNaN(visitor.age)) {
  alert("Nie oszukuj! Wiek podaje się liczbą! ;)");
  visitor.age = "";
}

function greetVisitorName(visitor) { // GREETING WITH NO AGE
  greeting.innerHTML = `Witaj ${visitor.name}!`;
}

function greetVisitor(visitor) { // GREETING WITH AGE
  if (visitor.age == 32) { // SAME AGE
    greeting.innerHTML = `Witaj ${visitor.name}! Masz tyle lat ile ja!`;
  } else { // AGE DIFFERENCE
    const ageDifference = Math.abs(32 - visitor.age);

    let older;
    if (visitor.age > 32) {
      older = "więcej";
    } else {
      older = "mniej";
    }

    if (Math.abs(visitor.age - 32) == 1) { // ONE YEAR DIFFERENCE
      greeting.innerHTML = `Witaj ${visitor.name}! Masz rok ${older} niż ja!`;
    } else { // DIFFERENCE OTHER THAN ONE YEAR - ENDING
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

if (visitor.name != "" && visitor.age != "" && visitor.age != null ) {
  greetVisitor(visitor);
} else if (visitor.name != "") {
  greetVisitorName(visitor);
} */

// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger-button--js");

hamburger.addEventListener("click", () => {
  const mainNav = document.querySelector(".main-navigation--js");
  mainNav.classList.toggle("navigation--open");
  const internalNav = document.querySelector(".internal-navigation--js");
  internalNav.classList.toggle("navigation--open");
});

function navigationHide() {
  const mainNav = document.querySelector(".main-navigation--js");
  mainNav.classList.remove("navigation--open");
  const internalNav = document.querySelector(".internal-navigation--js");
  internalNav.classList.remove("navigation--open");
}

document.querySelectorAll(".internal-navigation__item--js").forEach ( item => {
  item.addEventListener('click', navigationHide);

  });

