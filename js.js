var firstNum = 2;
var secondNum = 2;
var thirdNum = 3;

var firstString = "You";
var secondString = "You";
var thirdString = "Me";

var firstArr = [2,3,4,5];
var secondArr = [2,3,4,5];
var thirdArr = [4,3,5,1];



var firstObject = {
	name: "Dog",
	age: 3,
	happy: true
}
var secondObject = {
	name: "Dog",
	age: 3,
	happy: true
}
var thirdObject= {
	name: "Cat",
	age: 9,
	happy: true
}

var nullNum = null;

var forthObject = {
	name: "Kitty",
	age: 23,
	eyes: {
		left: true,
		right: false
	}
}
var fifthObject = {
	name: "Kitty",
	age: 23,
	eyes: {
		left: true,
		right: false
	}
}

var sixthObject = {
	name: "Kitty",
	age: 23,
	eyes: {
		left: true,
		right: false
	}
}
var seventhObject = {
	name: "Kitty",
	age: 23,
	eyes: {
		left: true,
		right: {
			size: "small",
			funny: false
		}
	}
}
var eightthObject = {
	name: "Kitty",
	age: 23,
	eyes: {
		left: true,
		right: {
			size: "small",
			funny: false
		}
	}
}


function deepEqual(value1,value2){
	if (typeof value1 !== typeof value2) {
		console.log("The values are not equal");
	}else{
		if (typeof value1 !== "object") {
			if (value1 === value2) {
					console.log("Not object. Equal");
			}else{
				console.log("Not object. Not equal");
			}
		}
		else{
			if (typeof value1 == null ) {
				console.log("Valeus are null");
			}
			else{
				if(value1.length !== value2.length){
					console.log("Objects. Not equal");
				}else{
					var keysArr1 = Object.keys(value1);
					var keysArr2 = Object.keys(value2);
					var on = 0;
					for (var i = 0; i < keysArr1.length; i++) {
						if (keysArr1[i]===keysArr2[i]) {
								on++;
							}
					}
					if(on !== keysArr1.length){
						console.log("Objects. Not equal");
					}else{
						var valuesArr1 = [];
						for(var key1 in value1){
							if(typeof value1[key1] !== "object"){
								valuesArr1.push(value1[key1]);
							}
						}
						var valuesArr2 = [];
						for(var key2 in value2){
							if(typeof value2[key2] !== "object"){
								valuesArr2.push(value2[key2]);
							}
						}
						var on2 = 0;
						for (var j = 0; j < valuesArr1.length; j++) {
								if (valuesArr1[j]===valuesArr2[j]) {
									on2++;
								}
						}
						if(on2 !== valuesArr1.length){
							console.log("Objects. Not equal");
						}else{
							for (var key1 in value1){
								if((typeof value1[key1] == "object") && (typeof value2[key2] == "object")) {
									var keyIsObject1 = key1;
									var keyIsObject2 = key2;
									value1 = value1[keyIsObject1];
									value2 = value2[keyIsObject2];
									deepEqual(value1,value2);
								}
								else{
									var keyIsObject1 = 0;
								}
							}
							if(keyIsObject1 == 0){
								console.log("Object.Equal");
							}	
						}
					}
				}
			}
		}
	}
}

/*deepEqual(firstNum, secondNum);
deepEqual(firstNum, thirdNum);

deepEqual(firstString, secondString);
deepEqual(firstString, thirdString);*/

//deepEqual(firstObject, secondObject);
//deepEqual(firstObject, thirdObject);
//deepEqual(thirdObject,forthObject);
//deepEqual(forthObject,fifthObject)
//deepEqual(fifthObject,sixthObject);	
deepEqual(seventhObject,eightthObject);









