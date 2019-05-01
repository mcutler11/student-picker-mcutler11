// Grab all buttons that are not marked as #pick-student.
const ECbtns = document.querySelectorAll("button:not(#pick-student)");

const inAnimations = [
  "bounceIn",
  "bounceInDown",
  "bounceInLeft",
  "bounceInRight",
  "bounceInUp",
  "fadeIn",
  "fadeInDown",
  "fadeInDownBig",
  "fadeInLeft",
  "fadeInLeftBig",
  "fadeInRight",
  "fadeInRightBig",
  "fadeInUp",
  "fadeInUpBig",
  "flipInX",
  "flipInY",
  "lightSpeedIn",
  "rotateIn",
  "rotateInDownLeft",
  "rotateInDownRight",
  "rotateInUpLeft",
  "rotateInUpRight",
  "slideInUp",
  "slideInDown",
  "slideInLeft",
  "slideInRight",
  "zoomIn",
  "zoomInDown",
  "zoomInLeft",
  "zoomInRight",
  "zoomInUp",
  "jackInTheBox",
  "rollIn"
];

// We need a place to store new instances of students created by our Student CONSTRUCTOR FXN.
const students = [];

let randomAnimation;
let chosen;

const p = document.querySelector("p");

// Function Constructor using the 'new' keyword.
function Student(fname, lname) {
  // These properties are assigned to a NEW instance of any student - when we use the 'new' keyword
  this.fname = fname;
  this.lname = lname;
  this.pts = 0;

  // NEXT:  Move this METHOD (fxn. that belongs to a specific Constructor) into a PROTOTYPE.
  // There is no need for each and every student to keep a duplicate of this method.
  this.updatePts = function(points) {
    this.pts += points;
    console.log(chosen);
  };
}

function getCountStr(n) {
  // Greater than 3 or less than 21?  Append -th
  // For other numbers, grab the last digit of the num passed
  // Use a switch to evaluate the last digit
  if (n > 3 && n < 21) return `${n}th`;
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}st`;
    default:
      return `${n}th`;
  }
}

const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Add student upon submit
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  const fname = document.querySelector("#fname").value;
  const lname = document.querySelector("#lname").value;

  // Create a NEW student using Fxn. Constructor and 'push' onto our Array.
  students.push(new Student(fname, lname));

  p.classList.remove("is-hidden");

  p.textContent = `Added the  ${getCountStr(
    students.length
  )} student: ${fname} ${fname}`;
});

document.querySelector("#pick-student").addEventListener("click", () => {
  chosen = students[getRandomIntInclusive(0, students.length - 1)];

  p.classList.remove(
    ...Array.from(p.classList).filter(c => inAnimations.includes(c))
  );

  randomAnimation = inAnimations[getRandomIntInclusive(0, students.length - 1)];

  p.textContent = `Our lucky student is: ${chosen.fname} ${chosen.lname}`;

  p.classList.remove("is-hidden");
  p.classList.add(randomAnimation);
});

ECbtns.forEach(btn =>
  btn.addEventListener("click", event => {
    const points = Number(event.target.textContent);
    chosen.updatePts(points);

    function getCountECPoints(n) {
      if (n > 3 && n < 21) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  console.log("Added the " & points & getCountECPoints(points) & "extra credit point!");

  )
});
