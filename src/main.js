import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './scss/styles.scss';



export class findAge {
  constructor(birthday){
    this.birthday = birthday;
  }
  findAge() {
    let today = new Date();
    let birthday = new Date (this.birthday);
    let age = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
    }
}

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
    const year = $("#year").val();
    const month = $("#month").val();
    const day = $("#day").val();
    const birthday = `${year}-${month}-${day}`;
    const yourBirthday = new findAge(birthday);
    const userAge = Math.round(yourBirthday.findAge());

    const userPlanet = ($("select").val());
    const userStuff = new processAge(userAge, userPlanet);
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

    const initialInput = userStuff.age;

    if (userStuff.age < 70) {
      let ageDiff = 70-userStuff.age;
      $(".output2").text("Wow, you would have " + ageDiff + " years left to live given a life expectancy of 70 years old!")
    }

    if (userStuff.age >= 70) {
      let ageDiff = userStuff.age-70;
      $(".output2").text("Impressive! You lived " + ageDiff + " years past the planet's life expectancy at 70!")
    }



    $(".output").text("You would be " + initialInput + " years old if you lived on " + userPlanet + "!");

  })
});
