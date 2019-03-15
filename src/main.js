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
 // marsAge() {
 //
 // }
}

// age / .24 = Mercury
// age / .62 = venus
// age / 1.88 = mars
// age / 11.86 = jupiter

$(document).ready(function() {
  $("button").click(function() {
    let userPlanet = ($("#input").val());
    // let martianAge = userStuff.age;
    $(".output").text(userPlanet);
  })
});
