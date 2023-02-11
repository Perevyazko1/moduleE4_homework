const person = {
    city: "Moscow",
    name: "Andrey"
}


 function hasProperty (str,obj){
     const hasNameProp = str in obj;
     console.log(hasNameProp)
 }

hasProperty('city',person)



