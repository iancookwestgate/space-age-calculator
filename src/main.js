import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './scss/styles.scss';

// Mercury = age/ .24
// Venus = age / .62
// Mars = age / 1.88
// Jupiter = age / 11.86


export class processAge {
  constructor(age, planet) {
    this.age = age,
    this.planet = planet
 }
 mercuryAge() {
   this.age = this.age/.24;
   return this.age;
 }
 venusAge() {
   this.age = this.age/.62;
   return this.age;
 }
 marsAge() {
   this.age = this.age/1.88;
   return this.age;
 }
 jupiterAge() {
   this.age = this.age/11.86;
   return this.age;
 }
}





$(document).ready(function() {
  $("button").click(function() {
    let userAge = ($("#input").val());
    let userPlanet = ($("select").val());
    let userStuff = new processAge(userAge, userPlanet);
    if (userPlanet==="Mercury"){
      userStuff.mercuryAge();
    } else if (userPlanet==="Venus"){
      userStuff.venusAge();
    } else if (userPlanet==="Mars"){
      userStuff.marsAge();
    } else if (userPlanet==="Jupiter"){
      userStuff.jupiterAge();
    } else {
      alert("You need to select a planet!");
    }

    let finishedInput = userStuff.age;
    console.log(finishedInput);
    // determinePlanet(userStuff.planet);
    $(".output").text("You would be " + finishedInput + " years old if you lived on " + userPlanet + "!");
  })
});

// userAge + " " + userPlanet
