import { processAge } from './../src/main.js';

describe('Space Age Calculations', function() {
  let inputStuff;
  beforeEach(function() {
    let userInput = [25, 70, "Mars"];
    inputStuff = new processAge(userInput[0], userInput[1], userInput[2]);
  });

  it("should equate the user's age", function(){
    expect(inputStuff.age).toEqual(25);
  });
  it("should reveal the user's life expectancy", function() {
    expect(inputStuff.lifeExpect).toEqual(70);
  });
  it('should reveal the planet the user chose', function() {
    expect(inputStuff.planet).toEqual("Mars");
  });
  it("should calculate the user's age in Mars years", function() {
    let marsAge = ((inputStuff.age)*1.88);
    expect(marsAge).toEqual(47);
  });
  it("should calculate how many years the user has left to live on Mars", function() {
    let marsAge = ((inputStuff.age)*1.88);
    let marsExpectancy = (inputStuff.lifeExpect);
    let marsRemainder = (marsExpectancy - marsAge);
    expect(marsRemainder).toEqual(23);
  });
});
