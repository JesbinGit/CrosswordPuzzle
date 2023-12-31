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
var items = [	[0, 0, 0, 0, 0, 0, 0, 0, 0, 'e',0,'t'],
				[0, 0, 0, 0, 0,0 ,0, 0, 0, 'z' ,0,'a'],
				[0, 0, 0, 0, 0, 0, 0, 0, 'r','i','c','e'],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 'a',0,'h'],
				[0, 0, 0, 's', 'o', 'r', 'g', 'h', 'u', 'm', 0,'w'],
				[0, 0, 0, 0, 0, 'a', 0, 0, 0, 0,0,0],
				[0, 0, 0, 0, 0, 'g', 0, 0, 0, 0,0,0],
                [0, 0, 0, 0, 0, 'i', 0, 0, 0, 0,0,0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0],
					
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
// Solve Button
// Solve Button
function solveClicked() {
	if (currentTextInput != null) {
	  var temp1 = currentTextInput;
	  var token = temp1.split("_");
	  var row = token[1];
	  var column = token[2];
  
	  // Convert both user input and expected value to lowercase
	  var userInput = document.getElementById(temp1).value.toLowerCase();
	  var expectedValue = puzzelArrayData[row][column].toLowerCase();
  
	  // Check if the user input matches the expected value
	  if (userInput === expectedValue) {
		// Check if the puzzle is completely solved
		var puzzleSolved = isPuzzleSolved();
  
		// Redirect to puzzle2.html if the puzzle is solved
		if (puzzleSolved) {
		  window.location.href = 'puzzle2.html';
		} else {
		  // Alert if the puzzle is not completely solved
		  alert('The puzzle is not completely solved. Keep trying!');
		}
	  }
	}
  }
  
  // Function to check if the puzzle is completely solved
  function isPuzzleSolved() {
	for (var i = 0; i < puzzelArrayData.length; i++) {
	  for (var j = 0; j < puzzelArrayData[i].length; j++) {
		if (puzzelArrayData[i][j] !== 0) {
		  var cellValue = document.getElementById('txt' + '_' + i + '_' + j).value.toLowerCase();
		  if (cellValue !== puzzelArrayData[i][j].toLowerCase()) {
			return false; // Puzzle is not completely solved
		  }
		}
	  }
	}
	return true; // Puzzle is completely solved
  }
  