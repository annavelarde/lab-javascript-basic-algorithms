// ITERATION 1

// 1.1 Create a variable `hacker1`
// with the driver 's name.
// 1.2 Print `"The driver's name is XXXX"`.
//1.3 Create a variable `hacker2`
//with the navigator 's name.
//1.4 Print `"The navigator's name is YYYY"`.

let driver = "Pablo";
console.log(`The navigator's name is ${driver}`);

let navigator = "Chris";
console.log(`The navigator's name is ${navigator}`);


// ITERATION 2

// 2.1.Depending on which name[is longer](https: //developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
// <
//br >
// -`The driver has the longest name, it has XX characters.`
// or < br >
// -`It seems that the navigator has the longest name, it has XX characters.`
//or < br >
// -`It seems that the navigator hasWow, you both have equally long names, XX characters!`.

if (driver.length < navigator.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`);
} else if (driver.length > navigator.length) {
    console.log(`The driver has the longest name, it has ${driver.length} characters.`);
} else if (driver.length == navigator.length) {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!`);
}

// driver == Pablo
// driver.length == 5
// navigator == Chris+Anna
// navigator.length == 10

// 3 cases
// ANNA is older than Pablo
// Pablo is older than Anna
// Anna and Pablo are the same

let anna

let annaAge = 28;
let pabloAge = 25;

// ANNA older than Pablo
if (annaAge > pabloAge) {
    //console.log("Ana is older");
} else if (annaAge < pabloAge) {
    //console.log("Pablo is older");
} else if (annaAge == pabloAge) {
    //console.log("They are the same");
}


// Iteration 3: Loops

// console3.1 Print all the characters of the driver 's name, separated by a space and [in capitals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
i.e.
`"J O H N"`

let value = "John";
let chars = value.split('');
let newValue = "";
for (let i = 0; i < chars.length; i++) {
    newValue = newValue + chars[i].toUpperCase() + ' ';
}
console.log(newValue);

// 3.2 Print all the characters of the navigator 's name, in reverse order. 
i.e.
`"nhoJ"`

function reserved(valueToReserve) {
    let value = "John";
    let chars = reserved.length('');
    let reversed = "";
    for (let i = reserved.length - 1; i >= 0; i--) {
        reserved = reserved + chars[i] + " ";
    }
    return valueToReserve;

}
console.log(reserved["John"]);


//3.3 Depending on the[lexicographic order](https: //en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>

`The driver's name goes first.` < br >
    -`Yo, the navigator goes first definitely.` < br >
    -`What?! You both have the same name?`