import { processAge } from './../src/main.js';
import { findAge } from './../src/main.js';

describe('Space Age Calculations', function() {
  let inputStuff;

  beforeEach(function() {
    let userInput = [33, "Mars"];
    inputStuff = new processAge(userInput[0], userInput[1]);
  });

  it("should calculate the user's age in Mercury years", function() {
    let mercuryAge = Math.round((inputStuff.age)/.24);
    expect(mercuryAge).toEqual(138);
  });
  it("should calculate the user's age in Venus years", function() {
    let venusAge = Math.round((inputStuff.age)/.62);
    expect(venusAge).toEqual(53);
  });
  it("should calculate the user's age in Mars years", function() {
    let marsAge = Math.round((inputStuff.age)/1.88);
    expect(marsAge).toEqual(18);
  });
  it("should calculate the user's age in Jupiter years", function() {
    let jupiterAge = Math.round((inputStuff.age)/11.86);
    expect(jupiterAge).toEqual(3);
  });
  it("should determine how many years a user has left to live on a planet", function() {
    let ageDiff = (70-(Math.round((inputStuff.age)/1.88)));
    expect(marsAge).toEqual(17.5531914893617);
  });
  // it("if user surpassed life expectancy, it should determine how many years they went beyond that total", function() {
  //   let marsAge = ((inputStuff.age)/1.88);
  //   expect(marsAge).toEqual(17.5531914893617);
  // });
});
