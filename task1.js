const person = {
    city: "Moscow",
    name: "Andrey"
}


function getProp(obj){
    for (let prop in obj){
        if (obj.hasOwnProperty(prop)){
            console.log(prop, obj[prop])
        }
    }

}

getProp(person)