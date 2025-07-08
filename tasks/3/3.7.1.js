"use strict";

// Дана строка со словами. Отсортируйте слова в алфавитном порядке.

let str = `Lörem ipsum dölor sit amet, cönsectetur ädïpiscing elit. Aenean möllïs ßuscipit neque, at träuriß dui. Cräs rhöncus, nullä ac ültrices dictüm, örnare ac libero. Suspendisse pötenti. Mäurïs vïtae fömes ut urna cürsus. Äliquam nisi törquent per fërmentum. Proin graviß nulla, cürabitur löbet ödio.`

str = str.trim().split(" ").sort((a, b) => {
    return (a.localeCompare(b));
}).join(" ");

console.log(str);