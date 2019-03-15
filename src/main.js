import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './scss/styles.scss';

export class processAge {
  constructor(age, planet) {
    this.age = age,
    this.planet = planet
 }
 // marsAge(age) {
 //   let martianAge = (age/1.88);
 //   return martianAge;
 // }
}



// age / .24 = Mercury
// age / .62 = venus
// age / 1.88 = mars
// age / 11.86 = jupiter

$(document).ready(function() {
  $("button").click(function() {
    let userAge = ($("#input").val());
    let userPlanet = ($("select").val());
    const userStuff = new processAge(userAge, userPlanet);
    console.log(userStuff);
    // determinePlanet(userStuff.planet);
    $(".output").text(userAge + " " + userPlanet);
  })
});
