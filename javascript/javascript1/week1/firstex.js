var yearOfBirth = 1997
var yearFuture = 2022
var age = yearFuture - yearOfBirth

console.log("you will be " + age + " years old in 2022.")


var dogYearOfBirth = 2021
var dogYearFuture = 2045
var dogYear = dogYearFuture - dogYearOfBirth

var shouldShowResultInDogYears =true;


if (shouldShowResultInDogYears) {
    dogYear *= 7 
    console.log("your dog will be ${dogYear} dog years in ${dogYearFuture}")
}

else {
    console.log("your dog will be ${dogYear} in ${dogYearFuture} in human years")
};

/*---------------------------------------------------------------------------------------------*/


var width = 8;
var depth = 10;
var hieght = 10;
var gardenSizeInM2 = 100;
var payingHousePrice = 2500000;


var volumeInMeters = width*depth*hieght;

var housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if(housePrice > payingHousePrice){
    console.log("paying a lot");
}
else if(housePrice < payingHousePrice){
    console.log("paying less");
}

/*---------------------------------------------------------------------------------------------*/
var first = ["Easy","Awesome","Corporate","Financial","Oracle", "nets","Internet","Vikings","Dansk","Indisk" ];
var second = ["Hard","Triocon","Webmaster","Developer","Leo", "Novo","Nordics","Nyt","Norwegien","Tysk"];



const randomNumber = Math.floor(Math.random() * 10);

var startupName = first[ randomNumber] +' '+ second [randomNumber];
var startupNameLength = startupName.length;

console.log("The startup: " + startupName+" contains " +startupNameLength+" characters");