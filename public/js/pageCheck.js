let index = "";
let about = "";
let food = "";
let lineup = "";
let credits = "";
let page = window.location.pathname;

if (page === "/") {
  index = "active";
  console.log("index is active");
} else if (page === "/about") {
  about = "active";
  console.log("about is active");
} else if (page === "/food") {
  food = "active";
  console.log("food is active");
} else if (page === "/lineup") {
  lineup = "active";
  console.log("lineup is active");
} else if (page === "/credits") {
  credits = "active";
  console.log("credits is active");
} else {
  console.log("error");
}

export { index, about, food, lineup, credits };
