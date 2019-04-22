let currentAnimation;

const btns = document.querySelectorAll("button");

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

const p = document.querySelector("p");

function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.pts = 0;
}

// const studentCreator = (fname, lname) => {
//   const student = {
//     fname,
//     lname
//   };

//   return student;
// };

const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const classUpdater = (listOfClasses, remove) =>
  Array.from(listOfClasses).filter(cl => !cl.includes(remove));

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  const fname = document.querySelector("#fname").value;
  const lname = document.querySelector("#lname").value;

  students.push(new Student(fname, lname));
  console.info(students);
});

document.querySelector("button").addEventListener("click", () => {
  const chosen = students[getRandomIntInclusive(0, students.length - 1)];

  p.classList.remove(currentAnimation);

  currentAnimation =
    inAnimations[getRandomIntInclusive(0, students.length - 1)];

  p.textContent = `Our lucky student is: ${chosen.fname} ${chosen.lname}`;

  p.classList.remove("is-hidden");

  p.classList.add(currentAnimation);
});

btns.forEach(btn =>
  btn.addEventListener("click", function(){
    console.log(this);
  }))
