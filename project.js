function ElectricalAppliance(amp,volt) {
    this.amp = amp ,
    this.volt = volt ,
    this.instrumentStatus = function (state, instrument) {
        if (state) {
            console.log(`${instrument} included`)
    } else {
            console.log(`${instrument} switched off`)
        }

    }
}

function Tv(os){
    this.tv_os = os
}

function Lamp(height){
    this.lamp_height = height
}

Tv.prototype = new ElectricalAppliance()
Lamp.prototype = new ElectricalAppliance()



const tv = new Tv('android')
const lamp = new Lamp(120)


tv.instrumentStatus(true, 'tv')
tv.instrumentStatus(false, 'lamp')

console.log(tv)
console.log(lamp)



