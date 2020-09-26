let name = document.querySelector("#exampleInputName");
let genre = document.querySelectorAll("#form-user-create [name=genre]:checked");
let birth = document.querySelector("#exampleInputBirth");
let country = document.querySelector("#exampleInputCountry");
let email = document.querySelector("#exampleInputEmail");
let password = document.querySelector("#exampleInputPassword");
let photo = document.querySelector("#exampleInputFile");
let admin = document.querySelector("#exampleInputAdmin");

let fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach(function(field, index){

    if (field.name == "gender"){
        if (field.checked){
            console.log("SIM", field);
        }
    } else {
        console.log("Não");
    }
    console.log(index);
});