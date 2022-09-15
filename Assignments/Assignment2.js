/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// Q 1-1 Double the quantity and price in each object.

//Solotion 1: Define a function within the map method
const doubleItems = itemsObject.map(function (items) {
  return { quantity: items.quantity * 2, price: items.price * 2 };
});

console.log(
  "Items with double quantities and price (solution 1 output): \n ",
  doubleItems
);

// Solotion 2: Define a function and using the map method within the function
function doubles(items) {
  const doubleItems = items.map((items) => ({
    quantity: items.quantity * 2,
    price: items.price * 2,
  }));
  return doubleItems;
}

console.log(
  "Items with double quantities and price (solution 2 output): \n ",
  doubles(itemsObject)
);

// Q 1-2 Filter out items that have quantity > 2 and price > 300.

let filterIterms = itemsObject.filter(
  (items) => items.quantity > 2 && items.price > 300
);
console.log(
  "Items with quantity larger than 2 and price greater than 300: \n ",
  filterIterms
);

// Q 1-3 Calculate the total value of the items.
let totalValue = itemsObject.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue.quantity * currentValue.price;
}, 0);
console.log("The totalValue of all the items is: " + totalValue);

/*
Question 2
Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
*/
// const expectedReturnString =
//   "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

// Solution: Use JavaScript’s string.replace() method with a regular expression to remove extra spaces.
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const newString = string.replace(/\s+/g, " ").trim().toLowerCase();
console.log(newString);

// /*
// Question 3
// Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
// */

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

// const expectedReturnArray = [
//   { uuid: 1, role: "manager", name: null },
//   { uuid: 2, role: "associate", name: "test" },
//   { uuid: 3, role: null, name: "test3" },
//   { uuid: 4, role: "engineer", name: null },
//   { uuid: 5, role: null, name: "test5" },
//   { uuid: 6, role: "pm", name: null },
// ];

// 1. Create a Map
const myMap = new Map();

// 2. Contact two original arrays, arr1.contact(arr2) === [...arr1, ...arr2]
const arr = [...first, ...second];
//console.log(arr)

// 3. for ... of, iterator array

for (obj of arr) {
  if (!myMap.has(obj.uuid)) {
    // add
    newObj = {};
    newObj.uuid = obj.uuid;
    obj.hasOwnProperty("role")
      ? (newObj.role = obj.role)
      : (newObj.role = null);
    obj.hasOwnProperty("name")
      ? (newObj.name = obj.name)
      : (newObj.name = null);
    myMap.set(obj.uuid, newObj);
  } else {
    // update
    newObj = {};
    newObj.uuid = obj.uuid;
    if (obj.hasOwnProperty("role")) {
      newObj.role = obj.role;
      newObj.name = myMap.get(obj.uuid).name;
    } else if (obj.hasOwnProperty("name")) {
      newObj.role = myMap.get(obj.uuid).role;
      newObj.name = obj.name;
    }
  }
}

//console.log(myMap);

// 4. Get new merged unique array
let newArr = [...myMap.values()];
//console.log(newArr);

//5. Sort the merged array according to uuid
function compare(property) {
  return function (obj1, obj2) {
    let value1 = obj1[property];
    let value2 = obj2[property];
    return value1 - value2; // Ascending
  };
}

const sortArr = newArr.sort(compare("uuid"));

console.log(sortArr);
