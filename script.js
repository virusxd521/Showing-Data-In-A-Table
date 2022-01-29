// The table elements
const table = document.querySelector(".table");
const tableHeader = document.querySelector(".thead");
const tableBody = document.querySelector(".tbody");

// Need to insert header rows to this element
const rowHeader = document.querySelector(".header-row");

// The data
const departures = [
 {time: {hrs: 8, mins: 14}, train: 'Acela Express', no: 2153, to: 'Washington, DC', status: 'On Time', track: 2},
 {time: {hrs: 4, mins: 17}, train: 'New Haven Line', no: 1541, to: 'Grand Central Terminal', status: 'On Time', track: 14},
 {time: {hrs: 2, mins: 35}, train: 'New Haven Line', no: 1541, to: 'Grand Central Terminal', status: 'On Time', track: 14},
{time: {hrs: 4, mins: 40}, train: 'New Haven Line', no: 1541, to: 'Grand Central Terminal', status: 'On Time', track: 14},
{time: {hrs: 9, mins: 30}, train: 'New Haven Line', no: 1541, to: 'Grand Central Terminal', status: 'On Time', track: 14},
{time: {hrs: 9, mins: 10}, train: 'New Haven Line', no: 1541, to: 'Grand Central Terminal', status: 'On Time', track: 14},
{time: {hrs: 14, mins: 0}, train: 'New Haven Line', no: 1541, to: 'Grand Central Terminal', status: 'On Time', track: 14},
{time: {hrs: 6, mins: 55}, train: 'New Haven Line', no: 1541, to: 'Grand Central Terminal', status: 'On Time', track: 14},
{time: {hrs: 12, mins: 15}, train: 'New Haven Line', no: 1541, to: 'Grand Central Terminal', status: 'On Time', track: 14},
{time: {hrs: 7, mins: 27}, train: 'New Haven Line', no: 1541, to: 'Grand Central Terminal', status: 'On Time', track: 14},
];

// Class for adding class and appending child
// ------> The calss accepts only strings as the elements 
class AppendingThreeChilds {
    constructor(grandParent, parent, child){
        this.grandParent = grandParent;
        this.parent = parent;
        this.child = child;
    }
    everything(){
        this.grandParent.appendChild(this.parent);
        return this.parent.appendChild(this.child);
    }
}

// function fo checking the elements in rows
const checking_row_elements = (object, property) => {
    const td = document.createElement("td");
    const zain = typeof object[property] === "object" ? td.textContent = `${object[property].hrs}:${object[property].mins}` : td.textContent = object[property];
    td.classList.add("td");
    return td;
}

// function for creating tabel rows
const creatingRows = (object, property, tableRow) => {
    const td = checking_row_elements(object, property);
    const appending = new AppendingThreeChilds(tableBody, tableRow, td);
    appending.everything();
}

const creatingTableHeader = (property, object) => {
    const th = document.createElement("th");
    let afterUpper = [...property].map((item, index) => index === 0 ? item.toLocaleUpperCase() : item);
    th.textContent = afterUpper.join("");
    rowHeader.appendChild(th);
}

// Looping through the the elements
departures.forEach((item, index) => {
    if(index === 0){
        // getting the data to push to the header
        for(let property in item){
            // function that will create the header of the table
            creatingTableHeader(property, item);
        }
    } else {
        // need to push the data to all the rows as elements
        const tr = document.createElement("tr");
        for(let property in item){
            // function that will add all the data of the array to the tables
            creatingRows(item, property, tr);
        }   
    }
})

