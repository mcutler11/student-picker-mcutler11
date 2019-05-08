// Grab all buttons that are not marked as #pick-student.
const ECbtns = document.querySelectorAll("button:not(#pick-student)");

// Grab all the buttons that are NOT marked as #pick-student.
// These go into an Array-like Object known as NodeList.
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
function Student(fname, lname, age, pts) {
  // These properties are assigned to a NEW instance of any student - when we use the 'new' keyword
  this.fname = fname;
  this.lname = lname;
  this.age = age;

  // Use the || LOGICAL OPERATOR to assign the value of the NAMED PARAMETER 'pts'.
  // If that is 'undefined', then '0' gets assigned.
  // This is known as SHORT CIRCUITING.
  this.pts = pts || 0;

  // NEXT:  Move this METHOD (fxn. that belongs to a specific Constructor) into a PROTOTYPE.
  // There is no need for each and every student to keep a duplicate of this method.
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

Student.prototype.updatePts = function(points) {
  this.pts += points;
};

Student.prototype.displayInfo = function() {
  return `${this.fname} ${this.lname}:  Aged ${this.age}.`;
};

const secretStudent = new Student("Cassie", "Desmond", 25, 0);

students.push(secretStudent);

secretStudent.displayInfo = function() {
  return `Pfft, I'm not giving you any info!`;
};

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
  )} student: ${fname} ${lname}`;
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
    const ec = Number(event.target.textContent);
    chosen.updatePts(ec);

    p.TextContent = `Added the  ${getCountStr(ec)} extra credit point!`;
  })
);
