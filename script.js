var passwordDhouldHave = ""
var uppCharacters = 'ABCDEFG'
var lowCharacters = 'abcdefg'
var specialCharacters = '@#$%^&*'
 document.querySelector('#generate-password').addEventListener('click', function(){
	var wantUpper = confirm('Do you want upper characters?')
	if(wantUpper){
	   passwordDhouldHave += uppCharacters
	}
	var wantLower = confirm('Do you want lower characters?')
	if(wantLower){
	   passwordDhouldHave += lowCharacters
	}
	var wantSpecial = confirm('Do you want special characters?')
	if(wantSpecial){
	   passwordDhouldHave += specialCharacters
	}
	var passwordDhouldHaveArray = passwordDhouldHave.split('')
	var numberOfCharDesired = 10
	var password = ""
	for (let i = 0; i < numberOfCharDesired; i++) {
		var randomIndex = Math.floor(Math.random() * passwordDhouldHaveArray.length)
		password += passwordDhouldHaveArray[randomIndex]
	}
	// var randomIndex = Math.floor(Math.random() * passwordDhouldHaveArray.length)
	console.log(password);
 })
 // have button
 // get clicked
 // when clicked ask user for if they want uppp lower
 // generate
 // click event for HTML button
 // ask user with promps
 // generate
	// concatinated a big string of all options would work
	// pick from string randomly. Math.random()
	// 