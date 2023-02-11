class Device {
    constructor(amp, volt){
        this.color = 'black',
        this.amp = amp ,
        this.volt = volt

    }

    instrumentStatus = function (state, instrument) {
            if (state) {
                console.log(`${instrument} included watt = ${this.amp * this.volt}`)
            } else {
                console.log(`${instrument} switched off`)
            }

        }
}


class Tv extends Device{
    constructor(os, amp, volt) {
        super(volt,amp),
        this.osTv = os
    }
}
const tv = new Tv('android',3,220)
console.log(tv)
tv.instrumentStatus(true, 'tv')


class Lamp extends Device{
    constructor(weight, amp, volt) {
        super(volt,amp),
            this.osTv = weight
    }
}
const lamp = new Lamp(120,1,220)
console.log(lamp)
lamp.instrumentStatus(true, 'lamp')