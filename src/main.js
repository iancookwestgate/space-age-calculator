import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './scss/styles.scss';

export class processAge {
  constructor(age, lifeExpect, planet) {
    this.age = age,
    this.lifeExpect = lifeExpect,
    this.planet = planet
 }



 // thisAge() {
 //
 // }
}

$(document).ready(function() {
  $("button").click(function() {
    let userInput = ($("#input").val().split(",")).map(Number);

    // calculating age only
    let userStuff = new processAge(userInput[0], userInput[1], userInput[2]);
    console.log(userStuff);
    let martianAge = userStuff.age;
    $(".output").text(martianAge);

  })
});
