//Zadanie 1
const name = 'Jan'
let age = 22
let isOpen = true
const stringBoolean = 'true'
const stringNumber = '100'

//Zadanie 2
const result = 10 % 4
console.log(result)

const ageTomasz = 33
const nameTomasz = 'Tomasz'
const sentence = `${nameTomasz} ma ${ageTomasz} lata`
console.log(sentence)

const firstName = 'jan'
const lastName = 'kowalski'

const fullName = firstName + ' ' + lastName
const fullNameV2 = `${firstName} ${lastName}`

console.log(fullName)
console.log(fullNameV2)

//zadanie 3
const number1 = 3
const number2 = 4
const wynik = number1 + number2
console.log(`Wynik -> ${wynik} = ${number1} + ${number2}`)

//zadanie 4
const arrayOfNumber = [1,2,3]
const arrayOfCar = ['Bmw','Mercedes','Volvo']
const arrayOfBoolen = [true,false,true]
const emptyArray =[]
const randomArray = [1,'Dwa',true,'Cztery',5]
console.log(randomArray[1]);
const myArray = [1,7,13]
console.log(myArray.length)

const empty = []
empty.push('js jest łatwy')
console.log(empty)

const arrayOfObject = [{firstName:'Konrad',lastName:'Szmyd',age:32},
                        {firstName:'Mateusz',lastName:'Gabriel',age:33},
                        {firstName:'Maria',lastName:'Dubis',age:34}]

console.log(`Imię drugiej osoby z tablicy to: ${arrayOfObject[1].firstName}`)

const someNumber = 2;
const arr = [someNumber]
console.log(arr)

//zadanie 5

const object = {}
const person = {
    name: 'Iza'
}

const personDetails = {
    name: 'Konrad',
    lastName: 'Szmyd',
    age: 32,
    drivingLicence: true
}
console.log(personDetails.age)
console.log(personDetails)

const carDetails = {
    name:'Volvo',
    color:'Silver',
    yearOfProduction: 2005,
    soldDate:[2005,2012,2021]
}

console.log(carDetails.soldDate)

//zadanie 6

/*
Typ wartościowy czyli np const zmienna = 3; => wskazuje na wartość pod słowem 'zmienna' czyli w tym przypadku 3
Typ złożony czyli referencja jest odnośnikiem do miejsca w pamięci np jak w przykładzie poniżej(array2 wskazuje na to samo mmiejsce w pamięci
    co array1 dlatego modyfikując jedną tablice automatycznie zmieniamy drugą)
*/

const array1 = [1]
console.log(array1)
const array2 = array1
array2.push('7')
console.log(array1)
console.log(array2)

const people = {
    firstName: 'Konrad',
    lastName: 'Szmyd',
    age: 18,
    drivingLicence: true,
    sobriety: true
}
//w sumie warunek people.drivingLicence && sobriety powinny wystarczyć bo skoro dostałeś prawko to masz 18 lat :D ale dla przećwiczenia dwie wersje
const condition2 = (people.drivingLicence && people.sobriety)
const condition = (people.age >= 18 && people.drivingLicence == true && people.sobriety == true)
condition2 ? console.log('Może jechać') : console.log('Nie może jechać')

const car = {
    model: 'mustang',
    productionYear: 2020,
    color: 'red'
  }

const {
    model,
    productionYear,
    color
} = car

const res = `Moje auto to ${model} i zostało wyprodukowane w roku ${productionYear}`
console.log(res)


const isAdult = true
if(isAdult) return 'Możesz kupić alkohol'
else  return 'Nie możesz kupić alkoholu, jesteś nieletni!'

isAdult? console.log('Możesz kupić alkohol') : console.log('Nie możesz kupić alkoholu, jesteś nieletni!')

//v3 - kiedyś wyczytałem że proste warunki lepiej formować w osobnych if'ach gdyż takie instrukcje wykonują się szybciej niż else i else if
const isAdult2 = true
if(isAdult2) console.log ('Możesz kupić alkohol')
if(!isAdult2)console.log('Nie możesz kupić alkoholu, jesteś nieletni!')
