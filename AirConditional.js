

class airconditioner {
    constructor() {
        this.isOn = false;
        this.temperature = 16;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }

    increaseTemperature() {
        if (this.isOn && this.temperature < 30) {
            this.temperature++;
        }
        else {
            return this.temperature;
        }
    }

    decreaseTemperature() {
        if (this.isOn && this.temperature > 16) {
            this.temperature--;
        }
        else {
            return this.temperature;
        }
    }
    
}

module.exports = airconditioner;