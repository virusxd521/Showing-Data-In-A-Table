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


// function for creating tabel rows


// Looping through the the elements
departures.forEach((item, index) => {
    if(index === 0){
        // getting the data to push to the header
        for(let property in item){
            const th = document.createElement("th");
            let afterUpper = [...property].map((item, index) => index === 0 ? item.toLocaleUpperCase() : item);
            th.textContent = afterUpper.join("");
            rowHeader.appendChild(th);
        }
    } else {
        // need to push the data to all the rows as elements
        const tr = document.createElement("tr");
        for(let property in item){
            // creating a new row in the table
            const td = document.createElement("td");

            td.textContent = item[property];
            tr.appendChild(td);
            tableBody.appendChild(tr);
            console.log(item[property]);
        }
        
    }
    

})


// // Function for creating elements and append them to the an existing one
