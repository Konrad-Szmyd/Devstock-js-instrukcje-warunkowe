//metoda map
//a
const array = [1,2,3,4,5]
const mappedArray = array.map(el => el * 2)

console.log(array)
console.log(mappedArray)

//b
const names = ['Konrad', 'Mati','Ola']

function addHello(el){
    return `Hello ${el}`
}

const sayHello = names.map(addHello)

console.log(names)
console.log(sayHello)

//metoda filter
//a
const arr = [1,2,3,4,5,6,7,8,9]
const oddArray = arr.filter(el => (el % 2) != 0)

console.log(arr)
console.log(oddArray)

//b
const arrayMoreThenFive = arr.filter(el => el > 5)
console.log(arrayMoreThenFive)

//c
const arrayOfPersons = [
    {
        name:'Konrad',
        lastName: 'Szmyd',
        gender: 1
    },
    {
        name:'Mati',
        lastName: 'Gabriel',
        gender: 1
    },
    {
        name:'Ola',
        lastName: 'Jakas',
        gender: 0
    },
    {
        name:'Anna',
        lastName: 'Mucha',
        gender: 0
    },
    
]

const arrayOfWomen = arrayOfPersons.filter(el => el.gender == 0)
console.log(arrayOfWomen)

//foreach
//trochę nie rozumiem, przecież foreach nie zwraca nic , więc to zadanie to albo próba podpuszczenia mnie albo chodzi o to co poniżej
//albo nie rozumiem zadania
const arra = [1,2,3,4,5,6,7,8,9]
arra.forEach(element => {
    element -= 1 
});

//sort
//a
const str = ['d', 'a', 's', 'f'].sort() 
console.log(str)

//b
const arrayNum = [9, 2, 1, 6, 5, 4, 7, 8, 3]
console.log(arrayNum.sort())

//c
console.log(arrayNum.sort().reverse())

//filter + map + sort
//zmieniłem treść zadania z 'zwiekszyc o dwa' na 'razy dwa' żeby więcej liczb spełniło warunek
const anotherArray = [9, 2, 1, 6, 5, 4, 7, 8, 3]

const newArray = anotherArray.map(el => el * 2).filter(el => el > 10).sort()
console.log(anotherArray)
console.log(newArray)