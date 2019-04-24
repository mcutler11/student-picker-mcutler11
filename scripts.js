const btns = document.querySelectorAll("button:not(#pick-student)");

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

// const students = [
//   { fname: "Michael", lname: "Cutler" },
//   { fname: "Bernard", lname: "Matthews" },
//   { fname: "Amelie", lname: "Bouchard" },
//   { fname: "Edward", lname: "Russo" },
//   { fname: "Camille", lname: "Schneider" }
// ];

const students = [];

let randomAnimation;
let chosen;

const p = document.querySelector("p");

function Student(fname, lname) {
  // These properties are assigned to a NEW instance of any student - when we use the 'new' keyword
  this.fname = fname;
  this.lname = lname;
  this.pts = 0;
  this.updatePts = function(points) {
    this.pts += points;
    console.log(chosen);
  };
}

const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  const fname = document.querySelector("#fname").value;
  const lname = document.querySelector("#lname").value;

  students.push(new Student(fname, lname));
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

btns.forEach(btn =>
  btn.addEventListener("click", event => {
    const points = Number(event.target.textContent);
    chosen.updatePts(points);
  })
);
