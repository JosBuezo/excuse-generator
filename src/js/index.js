/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.getElementById("excuse").innerHTML = generate();
};
let generate = function() {
  let who = ["my dog", "Jon Snow", "your mom", "Tom Brady"];
  let what = ["ate", "pet", "destroyed", "flew"];
  let when = [
    "before work",
    "during football practice",
    "when I finished",
    "after breakfast",
    "while I was sleeping"
  ];

  let firstPart = Math.floor(Math.random() * who.length);
  let secondPart = Math.floor(Math.random() * what.length);
  let thirdPart = Math.floor(Math.random() * when.length);

  return who[firstPart] + " " + what[secondPart] + " " + when[thirdPart];
};
