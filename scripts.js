const students = [
  { fname: "Michael", lname: "Cutler" },
  { fname: "Bernard", lname: "Matthews" },
  { fname: "Amelie", lname: "Bouchard" },
  { fname: "Edward", lname: "Russo" },
  { fname: "Camille", lname: "Schneider" }
];

const studentCreator = (fname, lname) => {
  const student = {
    fname,
    lname
  };

  return student;
};

const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();

  const fname = document.querySelector("#fname").value;
  const lname = document.querySelector("#lname").value;

  students.push(studentCreator(fname, lname));
});

document.querySelector("button").addEventListener("click", () => {
  const chosen = students[getRandomIntInclusive(0, students.length - 1)];
  // We use the 'textContent' property as GETTER
  // const ptc = p.textContent;

  // Here, it has to be used as a SETTER
  document.querySelector("p").textContent = `And the lucky student is:
  ${chosen.fname} + ${chosen.lname}`;
});
