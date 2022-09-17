/*
Question 1
Given the following array and implement the table dynamically
*/
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

// 1. Create a table in "myTable" div
let data = document.querySelector(".myTable");
let table = document.createElement("table");
data.appendChild(table);
table.className = "table_style";

// 2. Create tabble head row

let thr = document.createElement("tr");
table.appendChild(thr);

for (ele of tableInfo.tableHeader) {
  let th = document.createElement("th");
  thr.appendChild(th);
  th.className = "table_style";
  th.innerHTML = ele;
}

// 3. Add content to table
for (obj of tableInfo.tableContent) {
  // Create table row
  let tableRow = document.createElement("tr");
  table.appendChild(tableRow);

  for (key in obj) {
    //Create table data
    let tableData = document.createElement("td");
    tableRow.appendChild(tableData);
    tableData.className = "table_style";
    tableData.innerHTML = obj[key];
  }
}

/*
Question 2
Given the array and generate order list and unordered list dynamically as following:
*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

// 1. Create an ordered list
let orderedList = document.querySelector("#orderedList");
orderedList.className = "list_style";

for (ele of list) {
  let sublist = document.createElement("li");
  orderedList.appendChild(sublist);
  sublist.innerHTML = ele;
}
// 2. Create a unordered list
let unorderedList = document.querySelector("#unorderedList");
unorderedList.className = "list_style";
for (ele of list) {
  let sublist = document.createElement("li");
  unorderedList.appendChild(sublist);
  sublist.innerHTML = ele;
}
/*
Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
*/

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

// 1. Get access to the dropdown list
let dropdown = document.querySelector("#cities");
dropdown.className = "dropdown_style";

// 2. Add options to the dropdown list
for (obj of dropDownList) {
  let option = document.createElement("option");
  dropdown.appendChild(option);
  option.value = obj.value;
  option.text = obj.content;
}
