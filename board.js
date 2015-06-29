var totalRows = 6;
var cellsInRow = 7;
var min = 1;
var max = 10;


function check_solution(){

var ucVal1 = parseInt(document.getElementById("userCell1").value);
var ucVal2 = parseInt(document.getElementById("userCell2").value);
var ucVal3 = parseInt(document.getElementById("userCell3").value);
var ucVal4 = parseInt(document.getElementById("userCell4").value);
var ucVal5 = parseInt(document.getElementById("userCell5").value);
var ucVal6 = parseInt(document.getElementById("userCell6").value);
var ucVal7 = parseInt(document.getElementById("userCell7").value);
var ucVal8 = parseInt(document.getElementById("userCell8").value);
var ucVal9 = parseInt(document.getElementById("userCell9").value);

var userValues = [];
userValues.push(ucVal1);
userValues.push(ucVal2);
userValues.push(ucVal3);
userValues.push(ucVal4);
userValues.push(ucVal5);
userValues.push(ucVal6);
userValues.push(ucVal7);
userValues.push(ucVal8);
userValues.push(ucVal9);

var allValues = [1,2,3,4,5,6,7,8,9];

// check for distinct user values 
if (userValues.sort().toString() != allValues.toString()){
    alert('Please enter unique values from 1 to 9');
}
else
{

if ((ucVal1 + ((13*ucVal2)/ucVal3) + ucVal4 + 12*ucVal5 - 
    ucVal6 - 11 + ((ucVal7*ucVal8)/ucVal9) - 10) == 66){
    
    alert("Success!")
}
else{
    alert("Try again")
}

}

/* a + (13b/c) + d + 12e – f – 11 + (gh/i)– 10 = 66
console.log((ucVal1 + ((13*ucVal2)/ucVal3) + ucVal4 + 12*ucVal5 - 
    ucVal6 - 11 + ((ucVal7*ucVal8)/ucVal9) - 10));

one of 128 solutions 
a = 3, b=2, c = 1, d = 5,e = 4, f = 7, g = 9, h = 8, i = 6

*/

//check for empty cell



}









function drawTable() {
    // get the reference for the body
    var div1 = document.getElementById('board');

    // creates a <table> element
    var tbl = document.createElement("table");
    tbl.id = "table"    


    // creating rows
    for (var r = 0; r < totalRows; r++) {
        var row = document.createElement("tr");
     


     // create cells in row
         for (var c = 0; c < cellsInRow; c++) {
            // create user fields 
            if (     
                     (r == 0 && c == 0) ||
                     (r == 0 && c == 2) ||
                     (r == 0 && c == 4) ||
                     (r == 4 && c == 0) ||
                     (r == 4 && c == 2) ||
                     (r == 4 && c == 6) ||
                     (r == 5 && c == 1) ||
                     (r == 4 && c == 4) ||
                     (r == 5 && c == 5) 
                )
            {
                var cell = document.createElement("td");
                cell.className = "userCell";

                var dialog = document.createElement('div');
                var form = document.createElement('form');
                var input = document.createElement("input");
                input.type = "text";
                input.size = "1";
                input.maxLength="1";
                input.required = true;

                // id each user cell
                if      (r == 0 && c == 0) {input.id = "userCell1"; }   
                else if (r == 0 && c == 2) {input.id = "userCell5"; }
                else if (r == 0 && c == 4) {input.id = "userCell6"; }
                else if (r == 4 && c == 0) {input.id = "userCell2"; }
                else if (r == 4 && c == 2) {input.id = "userCell4"; }
                else if (r == 4 && c == 6) {input.id = "userCell9"; }
                else if (r == 5 && c == 1) {input.id = "userCell3"; }
                else if (r == 4 && c == 4) {input.id = "userCell7"; }
                else if (r == 5 && c == 5) {input.id = "userCell8"; }

                
                
                dialog.className = "input-form";
                form.className = "input-form";
                input.className = "input-input";

                cell.appendChild(dialog.appendChild(form.appendChild(input)));
                row.appendChild(cell);
                /*    
                input.addEventListener("onkeypress", function(event){
                    return isNumberKey(event);
                }, false);
                */
                input.onkeypress = isNumberKey;
                function isNumberKey(evt){
/*                        
                    var validationRegex = RegExp(/[1-9]+/, "g");
                    if (!validationRegex.match(evt.which))
                    {
                        return false;
                    }

                    return true;
*/

                    // enter only 1 to 9
                    var charCode = (evt.which) ? evt.which : event.keyCode;
                    if (charCode != 46 && charCode > 31 
                    && (charCode < 49 || charCode > 57)) 
                    
                     return false;

                   return true;

                }

                // code to create blank user cell    

                // var cellText = document.createTextNode("");
                // cell.appendChild(cellText);
                // row.appendChild(cell);


            }

            // operators 

            else if ((r == 1 && c == 0))
            {
                var cell = document.createElement("td");
                cell.className = "operatorCell";
                var cellText = document.createTextNode("+");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 3 && c == 0))
            {
                var cell = document.createElement("td");
                cell.className = "operatorCell";
                var cellText = document.createTextNode("x");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 5 && c == 0))
            {
                var cell = document.createElement("td");
                cell.className = "operatorCell";
                var cellText = document.createTextNode("/");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 5 && c == 2))
            {
                var cell = document.createElement("td");
                cell.className = "operatorCell";
                var cellText = document.createTextNode("+");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 3 && c == 2))
            {
                var cell = document.createElement("td");
                cell.className = "operatorCell";
                var cellText = document.createTextNode("+");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 1 && c == 2))
            {
                var cell = document.createElement("td");
                cell.className = "operatorCell";
                var cellText = document.createTextNode("x");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 0 && c == 3))
            {
                var cell = document.createElement("td");
                cell.className = "operatorCell";
                var cellText = document.createTextNode("-");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 1 && c == 4))
            {
                var cell = document.createElement("td");
                cell.className = "operatorCell";
                var cellText = document.createTextNode("-");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 3 && c == 4))
            {
                var cell = document.createElement("td");
                cell.className = "operatorCell";
                var cellText = document.createTextNode("+");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 5 && c == 4))
            {
                var cell = document.createElement("td");
                cell.className = "operatorCell";
                var cellText = document.createTextNode("x");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 5 && c == 6))
            {
                var cell = document.createElement("td");
                cell.className = "operatorCell";
                var cellText = document.createTextNode("/");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 3 && c == 6))
            {
                var cell = document.createElement("td");
                cell.className = "operatorCell";
                var cellText = document.createTextNode("-");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 1 && c == 6))
            {
                var cell = document.createElement("td");
                cell.className = "operatorCell";
                var cellText = document.createTextNode("=");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }

            // fixed values
            else if ((r == 0 && c == 6))
            {
                var cell = document.createElement("td");
                cell.className = "fixedCell";
                var cellText = document.createTextNode("66");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 2 && c == 0))
            {
                var cell = document.createElement("td");
                cell.className = "fixedCell";
                var cellText = document.createTextNode("13");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 2 && c == 2))
            {
                var cell = document.createElement("td");
                cell.className = "fixedCell";
                var cellText = document.createTextNode("12");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 2 && c == 4))
            {
                var cell = document.createElement("td");
                cell.className = "fixedCell";
                var cellText = document.createTextNode("11");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if ((r == 2 && c == 6))
            {
                var cell = document.createElement("td");
                cell.className = "fixedCell";
                var cellText = document.createTextNode("10");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }

            //empty cells

            else if (
                        (r == 0 && c == 1) || 
                        (r == 0 && c == 5) ||
                        (r == 1 && c == 1) ||
                        (r == 1 && c == 5) ||
                        (r == 2 && c == 1) ||
                        (r == 2 && c == 3) ||
                        (r == 2 && c == 5) ||
                        (r == 3 && c == 1) ||
                        (r == 3 && c == 3) ||
                        (r == 3 && c == 5) ||
                        (r == 4 && c == 1) ||
                        (r == 4 && c == 3) ||
                        (r == 4 && c == 5) ||
                        (r == 5 && c == 3) 

                    )
            {
                var cell = document.createElement("td");
                var cellText = document.createTextNode("");
                cell.className = "emptyCellTopBottom";
                cell.appendChild(cellText);
                row.appendChild(cell);

            }

            else if (r==1 && c == 3) 
            {
                var cell = document.createElement("td");
                var cellText = document.createTextNode("");
                cell.className = "emptyCellNoBottom";
                cell.appendChild(cellText);
                row.appendChild(cell);

            } 

            else if (r==4 && c == 3) 
            {
                var cell = document.createElement("td");
                var cellText = document.createTextNode("");
                cell.className = "emptyCellNoTop";
                cell.appendChild(cellText);
                row.appendChild(cell);

            } 
            

            else 
            {
            
            var cell = document.createElement("td");
            var cellText = document.createTextNode("");
            cell.appendChild(cellText);
            row.appendChild(cell);
            }
                     
    }         
        
tbl.appendChild(row); // add the row to the end of the table body
    }

 div1.appendChild(tbl); // appends <table> into <div1>
}




window.onload = drawTable; 
window.addEventListener("onkeypress", isNumberKey, false);

