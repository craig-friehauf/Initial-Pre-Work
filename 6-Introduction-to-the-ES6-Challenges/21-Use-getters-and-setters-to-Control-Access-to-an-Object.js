//Class definitions and getter and setter functions
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(tempature) {
      this._tempature = tempature;
    }
    get tempature() {
      return (this._tempature - 32) * 5. / 9.;
    }
    set tempature(temp) {
      this._tempature = temp * 9. / 5. + 32;
    }
  }

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
