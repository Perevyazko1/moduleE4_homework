const person = {
    city: "Moscow",
    name: "Andrey"
}
for (let key in Object.entries(person)){
    if (person.hasOwnProperty(key)){
        console.log(key)
    }
}
