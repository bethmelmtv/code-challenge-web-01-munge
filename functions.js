/*
For this first set of functions, assume the input array looks like this:

const petsArray = [
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
];


/*
OUTPUT: 
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },

]*/
//filter




export function getDogs(arr) {
    return arr.filter(pet => pet.type === 'dog');
}
    // export function getDogs(arr) {
    //     const newArr = arr.filter(i => {
    //         if(i.type === 'dog'){
    //             return i;
    //         }
    //     });
    //     return newArr;
//filter loops over arr and its going to find everything that equals to the left and push it to a new array
//take in an array, filters the array, gets a booger and looks for the
//.type of the booger in each object of the array 

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/


export function makeArrayOfNames(arr) {
    return arr.map(pet => pet.name);
}


/*
OUTPUT: 
['spot', 'rover']
*/

export function getNamesOfDogs(arr) {
    const filterArr = arr.filter(pet => {
        if(pet.type === 'dog') {
            return pet;
        }
    });
    const mapArr = filterArr.map(pet => pet.name);
    return mapArr;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/


export function makeReversedArrayOfTypes(arr) {
    const mapArr = arr.map(pet => pet.type);
    const reverseArr = mapArr.reverse();
    return reverseArr;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const mapArr = arr.map((pet => {
        return {
            nombre: pet.name,
            tipo: pet.type
        };
    }));
    return mapArr;
}

    //taking keys and 
//     const hello = arr.map(pet => pet.translate(arr.key));
//     return hello;
//     // const spArr = arr.map(pet => pet.lang
//     // return p=lang"sp" 
//    // return spanishArray = ('spArr').translate({lang: "sp", t: dict});


/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const newArr = arr.map((pet) => ({
        name: pet.name,
        isHungry: true,
        type: pet.type
    }));
    return newArr;
}

//     })
//    for (i of  arr) {
//     const hungry= {
//         isHungry: true
//         arr.push(hungry)
// }
//     return hungry;


/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    arr.forEach(item => {
        item.name = item.name.toUpperCase();
    });
    return arr;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    const accumulator = [];
    for(let item of arr)
        accumulator.push(item.name + item.type);
    return accumulator;
       
}

/*
findByName('jumpy', petsArray)

(hint: how do you get the first item out of an array?)

OUTPUT: 
{ name: 'jumpy', type: 'frog' }
*/

export function findByName(name, arr) {
    for(let item of arr)
        if(item.name === name) {
            return item;
        }
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    const newArr = [];

    arr.map(item =>item.name);
    for(let item of arr) {
        const arrayEl = [];
        push ();
        // array.push('name', item.name);
        // array.push('type', item.type);
    }
    newArr.push(arrayEl);
    return newArr;
    //dont understand mapping 
}


// const mapArr = arr.map(pet => pet.type);
////////////////////////////////////////////////////////

/*
For the next set of functions, assume the following input:

[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'truck', make: 'ford', model: 'bronco', age: 5 },
    { type: 'truck', make: 'chevy', model: 'silverado', age: 2 },
    { type: 'van', make: 'chevy', model: 'express', age: 1 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },
]
*/

/*

Output: 
[
    { type: 'car', make: 'ford', model: 'taurus', age: 2 },
    { type: 'car', make: 'chevy', model: 'malibu', age: 3 },
    { type: 'car', make: 'chevy', model: 'camero', age: 1 },    
];
*/

export function getCars(arr) {
    return [];
}

/*
Output:
 [
        { type: 'car', make: 'chevy', model: 'malibu' },
        { type: 'car', make: 'chevy', model: 'camero' },
  ] ;

*/

export function getChevyCars(arr) {
    return [];
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Stretch Goals!

/*
Output:
'taurusmalibubroncosilveradoexpresscamero'
 */

export function makeModelsStringWithReduce(arr) {
    return '';
}

/*
(add all ages)

Output: 14 
 */

export function getSumOfAges(arr) {
    return 0;
}

/*

Output: 
{
    car: 3,
    truck: 2,
    van: 1
}
 */

export function makeCountObject(arr) {
    return {};
}


/*

Output: 
(order doesn't matter--but the string must include all keys for the first object in the array)
'typemakemodelage'
 */


export function makeKeysString(arr) {
    return '';
}
