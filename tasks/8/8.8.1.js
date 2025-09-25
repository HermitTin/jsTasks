"use strict";

const input = document.getElementById("input881");
const output = document.getElementById("output881");

let countries = {
    "Ukraine" : ["Kyiv", "Lviv", "Kharkiv", "Odesa"],
    "USA" : ["Washington", "New York", "Boston", "Miami"],
    "Great Britan": ["London", "Leeds", "Manchester", "Edinburgh"],
    "France": ["Paris", "Marseille", "Lyon", "Toulouse"],
    "Germany": ["Berlin", "Hamburg", "Dresden", "Leipzig"],
}

for (let country in countries) {
    let option = document.createElement("option");
    option.textContent = country;
    option.value = country;
    input.appendChild(option);
}
addCities(input.children[0]);

function addCities(activeCountry) {
    output.innerHTML = "";
    for (let city of countries[activeCountry.value]) {
        let option = document.createElement("option");
        option.textContent = city;
        option.value = city;
        output.appendChild(option);
    }
    
}

input.addEventListener("change", () => {
    for (let option of input.children) {
        if (option.selected) {
            addCities(option);
        }
    }
})