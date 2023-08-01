const name = prompt("Enter a name!");
const body = document.querySelector("body");
const table = document.createElement("table");
const tableRow = document.createElement("tr");
const tdOne = document.createElement("td");
const tdTwo = document.createElement("td");

body.append(table);
table.append(tableRow);
tableRow.append(tdOne);
tableRow.append(tdTwo);

table.style.border = "2px solid black";
table.style.borderCollapse = "collapse";
tdOne.style.border = "2px solid black";
tdOne.style.border = "collapse";
tdOne.style.width = "200px";
tdTwo.style.border = "2px solid black";
tdTwo.style.width = "200px";

let array = [
    ["viktor", true, 5],
    ["igor", true, 3],
    ["andrej", false],
    ["marija", true, 2],
    ["irena", false],
    ["simona", true, 4],
];

function firstName(name){
    for (i=0; i < array.length; i++) {
        if(name === array[i][0]){
            tdOne.append(name)
            if(array[i][1]===true){
                let vote = "Vote!";
                tdTwo.append(vote);
                let grade = array[i][2];
                let tdThree = document.createElement("td");
                tableRow.append(tdThree);
                tdThree.style.width = "200px";
                tdThree.append(grade).style.display = "inline";
            }else {
                let didnotVote = "Did not Vote!";
                tdTwo.append(didnotVote);
            }
        }
    }
}

firstName(name);
