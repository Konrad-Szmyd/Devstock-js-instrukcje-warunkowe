const people = [{
    firstName: 'Bartolomeo',
    lastName: 'Lozano'
},{
    firstName: 'Konrad',
    lastName: 'Szmyd'
},{
    firstName: 'Jan',
    lastName: 'Ka'
},{
    firstName: 'Karolina',
    lastName: 'Jezierska'
},]
//dodałem kilka kolorów
const colors = ["red", "green", "yellow", "blue", "pink", "orange","brown","white","black"];


//zad 1 
//W Polsce najkrótsze imię 3 znaki(Jan), Chiny 2 znaki (Li), USA np Si5i(liczba w imieniu) dlatego nie robiłem wykluczenia cyfr
function makeNick(name,lastName){
    const splittedName = name.split('')
    const threeFirst = [splittedName[0],splittedName[1],splittedName[2]].reverse().join('').toLocaleLowerCase()

    const splittedLastName = lastName.split('')
    const lastNameLength = splittedLastName.length
    const threeLast = [splittedLastName[lastNameLength-1],splittedLastName[lastNameLength-2],splittedLastName[lastNameLength-3]].join('').toLowerCase()

    const fullNick = threeFirst.concat(threeLast)
    const fullNickUpper = fullNick.charAt(0).toUpperCase() + fullNick.slice(1)
    return fullNickUpper

}

const addNick = (el) => {
    const obj = {
        firstName: el.firstName,
        lastName: el.lastName,
        nick: makeNick(el.firstName,el.lastName),
        introduceYourself: introduceYou,
        getFavouriteColor: getColor
    }
    return obj
}


//mapowanie 
const mappedPeople = people.map(addNick)
console.log(mappedPeople)


//zad2
function introduceYou(){
    console.log (`Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie ${this.nick}`)
}

//zad 2 a)
//wywyołanie przedstawienia dla konkretnego elementu
mappedPeople[0].introduceYourself()

//zad 2 b)
//wywołanie przedstawienia dla wszystkich
mappedPeople.forEach(element => {
    element.introduceYourself()
});

//zadanie 3

function getColor(number = 5){
    if(number < 1) {
        console.log(`podałeś za małą liczbę, liczba nie może być mniejsza niż 1 `)
        return false
    }
    if(number > 30) {
        console.log(`podałeś za dużą liczbę, liczba nie może być większa niż 30 `)
        return false
    }
    const sumLetter =( (this.firstName.length + this.lastName.length + this.nick.length) - number )
    if(sumLetter < 0){
        sumLetter = sumLetter * (-1)
    }
    const index = sumLetter % colors.length
     
    console.log(`Wyszukany kolor to ${colors[index]}`)

}
//pobranie koloru dla wybranego elementu
mappedPeople[0].getFavouriteColor(6)

//zadanie 4
function getColorFromOutside(object, number = 5)
{
    if(number < 1) {
        console.log(`podałeś za małą liczbę, liczba nie może być mniejsza niż 1 `)
        return false
    }
    if(number > 30) {
        console.log(`podałeś za dużą liczbę, liczba nie może być większa niż 30 `)
        return false
    }

    const sumLetter = ( (object.firstName.length + object.lastName.length + object.nick.length) - number)
    if(sumLetter < 0){
        sumLetter = sumLetter * (-1)
    }
    const index = sumLetter % colors.length
    console.log(`${object.firstName} wylosował ${colors[index]}`)
    
}
//wybranie koloru dla wszystkich
for (const person of mappedPeople) {
        getColorFromOutside(person)
}

//zadanie 5

//sprawdzam warunki
const checkChar = (el) => {
     
     if(isElite == true){
         return (el.firstName.charAt(el.firstName.length - 1) == 'a' || el.firstName.charAt(el.firstName.length - 1) == 'k') &&
         (el.lastName.length > 6) &&
         (el.nick.includes('a'))
     } else {
         return (el)
     }
}
    
//losowanie + warunki
function eliteNumb() {
    const randomNumber = Math.floor(Math.random() * 101)

    let counter = 0
    for(let i = 1; i <= randomNumber; i++){
        if(randomNumber % i == 0){
            counter++
        }
    }
    let divider = false
    if((randomNumber / 3 == 0) && (randomNumber / 5 == 0)) {
        divider = true }

     if(counter == 2 || divider == 'true')  {
         return true
     } else {
         return false
     }
}   
//usuwam klucze i zamieniam klucze z wartościami
function reverseKey(el) {
    delete el.introduceYourself
    delete el.getFavouriteColor

    return Object.assign({}, ...Object.entries(el).map(([a,b]) => ({ [b]: a }))) 
}

//redukuje do jedego elementu
const allInOne = (acc,el) => {
    
    for (const key in el) {
        acc = Object.assign(acc,el)
    }

    return acc
}

//wywołanie zadanie 5 pkt a-e, 
//w zależności od isElite zobaczymy w consoli różne wyniki - albo filter zadziała albo nie
const isElite = eliteNumb()
const res = mappedPeople.filter(checkChar).map(reverseKey).reduce(allInOne,[])
console.log(res)

//5f
//wybrałem regex do sprawdzenia warunku, uznałem to za najszybszy sposób 
const onlyS = []
const pattern = /([s-z])/g
for (const key in res) {
    if( (res[key] == 'nick') || (res[key] == 'lastName') ){
        // pattern.test(key) ? console.log(` ${key} zawiera litere s-z`) : console.log(` ${key} nie zawiera litere s-z`)
        if(pattern.test(key) == false){
            onlyS.push(key)
        } 
    }
    if( res[key] == 'firstName' ){
        if( pattern.test(key) == true){
            onlyS.push(key)
        }
    } 
}

console.log(onlyS)

//5g)
const onlySLowerCase = []
for(let i =0; i < onlyS.length; i++) {
    onlySLowerCase.push(onlyS[i].toLowerCase())
}

console.log(onlySLowerCase.sort())


//Zad 6 currying function

//multi(5)(6)
//a)

function multi(a) {
    return function (b) {
            return a * b
        }
    }


//v2 arrow f

const multi2 = (a) => {
    return (b) => {
     return a*b
    }
}
console.log(multi2(2)(3))

// b) Analogicznie napisz funkcję, która mnoży 4 liczby i możliwe jest wywołanie
//     - multi(4)(5)(6)(10)

const multi3 =(a) => {
    return (b)=>{
        return (c)=>{
            return (d)=>{
                return a*b*c*d
        }
    }
}
}
console.log(multi3(4)(5)(6)(10))

//zad 7 
//Rekurencja + logika która grupuje drugie i trzecia imiona

const nestedObject = {
      name: "Kamil",
      children: [
        {
          name: "Zosia",
        },
        {
          name: "Krysia",
          name2: "Barbara",
          children: [
            {
              name: "Basia",
              children: [
                {
                  name: "Monika",
                  name2: "Viola",
                  children: [
                    {
                      name: "Mateusz",
                    },
                    {
                      name: "Sebastian",
                      name2: "August",
                      name3: "Franciszek",
                      children: [
                        { name: "Alex" },
                        { name: "Stasio" },
                        {
                          name: "Paulina",
                          children: [{ name: "Kuba" }, { name: "Kacper" }],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };


const tab = []
let tempArray = []

function reku(obj) {
    for (const key in obj) {
        if(key == 'name'){
            tab.push(obj[key])
        } 
        if(key == 'name2'){
            let actLength = tab.length
            let val = tab[actLength - 1]
            val += ` ${obj[key]}` 
            tab[actLength - 1] = val
        } 
        if(key == 'name3'){
            let actLength = tab.length
            let val = tab[actLength - 1]
            val += ` ${obj[key]}` 
            tab[actLength - 1] = val
        } 

        else if( (typeof obj[key]) == 'object')  {
            reku(obj[key])
        }
        
    }

}

reku(nestedObject)
console.log(tab)