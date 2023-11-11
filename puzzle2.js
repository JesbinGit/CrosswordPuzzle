//Globals
var currentTextInput;
var puzzelArrayData;
//Loads the Crossword
function initializeScreen(){
	var puzzelTable = document.getElementById("puzzel");
	puzzelArrayData = preparePuzzelArray();
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var row = puzzelTable.insertRow(-1);
		var rowData = puzzelArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			var cell = row.insertCell(-1);
			if(rowData[j] != 0){
				var txtID = String('txt' + '_' + i + '_' + j);
				cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'"+ ')">';
			}else{
				cell.style.backgroundColor  = "#87C4FF";
				
			}
		}
	}
	addHint();
}
//Adds the hint numbers
function addHint(){
	document.getElementById("txt_0_4").placeholder = "1";
	document.getElementById("txt_2_6").placeholder = "2";
	document.getElementById("txt_3_1").placeholder = "3";
	document.getElementById("txt_3_9").placeholder = "4";
	document.getElementById("txt_6_2").placeholder = "5";
	document.getElementById("txt_9_0").placeholder = "6";
}
//Stores ID of the selected cell into currentTextInput
function textInputFocus(txtID123){
	currentTextInput = txtID123;
}
//Returns Array
function preparePuzzelArray(){
var items = [	[0, 0, 'e', 0, 0, 0, 0, 0, 'p', 0,0,0],
				['c', 'a', 'r', 'b', 'o','h' , 'y', 'd', 'r', 'a' ,'t','e'],
				[0, 0, 'u', 0, 0, 0, 0, 0, 'o', 0,0,0],
				[0, 0, 't', 0, 0, 0, 0, 0, 't', 0,0,'e'],
				[0, 0, 's', 0, 0, 0, 0, 0, 'e', 0, 0,'n'],
				[0, 0, 'i', 0, 0, 0, 0, 'f', 'i', 'b','r','e'],
				[0, 0, 'o', 0, 0, 0, 0, 0, 'n', 0,0,'r'],
				[0, 0, 'm', 0, 0, 0, 0, 0, 0, 0,0,'g'],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,'y'],
				
				
				
				//1. Carbohydrate - 12
				//2. Protein - 7
				//3. Fiber - 5
				//4. Mineral - 7 
				//5.  Energy - 6
				//6. Moisture - 8
				
			];
return items;
}
//Clear All Button
function clearAllClicked(){
	currentTextInput = '';
	var puzzelTable = document.getElementById("puzzel");
	puzzelTable.innerHTML = '';
    initializeScreen();
}
//Check button
// Check button
function checkClicked() {
  for (var i = 0; i < puzzelArrayData.length; i++) {
    var rowData = puzzelArrayData[i];
    for (var j = 0; j < rowData.length; j++) {
      if (rowData[j] !== 0) {
        var selectedInputTextElement = document.getElementById('txt' + '_' + i + '_' + j);
        var userInput = selectedInputTextElement.value.toLowerCase(); // Convert user input to lowercase
        var expectedValue = puzzelArrayData[i][j].toLowerCase(); // Convert expected value to lowercase

        if (userInput !== expectedValue) {
          selectedInputTextElement.style.backgroundColor = 'red';
        } else {
          selectedInputTextElement.style.backgroundColor = 'white';
        }
      }
    }
  }
}
//Clue Button
function clueClicked(){
	if (currentTextInput != null){
		var temp1 = currentTextInput;
		var token = temp1.split("_");
		var row = token[1];
		var column = token[2];
		document.getElementById(temp1).value = puzzelArrayData[row][column];
		//checkClicked();
	}
}

//Solve Button
//Solve Button
function solveClicked() {
    if (currentTextInput != null) {
        var puzzleSolved = true;

        // Iterate through the puzzle array and check correctness
        for (var i = 0; i < puzzelArrayData.length; i++) {
            for (var j = 0; j < puzzelArrayData[i].length; j++) {
                if (puzzelArrayData[i][j] !== 0) {
                    var cellValue = document.getElementById('txt' + '_' + i + '_' + j).value;
                    if (cellValue !== puzzelArrayData[i][j]) {
                        puzzleSolved = false;
                        break;
                    }
                }
            }
            if (!puzzleSolved) {
                break;
            }
        }

        // Redirect to another page if the puzzle is solved
        if (puzzleSolved) {
            window.location.href = 'finalpage.html'; // Replace 'puzzle2.html' with the actual page you want to redirect to
        } else {
            // If the puzzle is not completely solved, you can perform additional actions or leave it as is
            // For example, you can display a message to the user indicating that the puzzle is not solved.
            alert('The puzzle is not completely solved. Keep trying!');
        }
    }
}
