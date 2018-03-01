// new Dialog box named 3DReshaper ...
var myDialog = SDialog.New( ' 3DReshaper - countour lines length and stations ' );

// display some text, here the title '3DReshaper Application' with the alignment center and a size of 20
myDialog.AddLine( ' 3DReshaper Application ', false, { 'align' : 'center', 'size' : 20 } );

// input asking a comment from the user
myDialog.AddLine( ' How many stations (12-36) (default is 36): ', true, { 'align' : 'right' } );

var myDefault = 36

// the Execute function display the dialog box, and launch a loop waiting when the dialog box is shutdown
var result = myDialog.Execute();

if ( result.ErrorCode == 0 ) // result == 0 means the user click on the "OK" button
{
	// Retrieve output values
	var values = result.InputTbl; // InputTbl contains all the content of the input box
	
	// to access to Comments use values[0] because it's the first input value
	var myNumber = parseFloat(values[0]); // use parseFloat to convert the string to a number
}

if (myNumber != values) // check written number - make default
{ 
var myNumber = myDefault
}

//FromClick returns an array, then you have to choose the .Multi cell of myLine
// SSetMultiline.FromClick ()
var myLine = SSetMultiline.FromClick ();
// var myLine = SMultiline.GetLength() 

print(values)
print(myNumber)
//print(PI())
//print(myLine.SMultiline.GetLength())