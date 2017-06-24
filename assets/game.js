// Walter = 8 120
// Gus = 25 180
// Jesse = 5 100
// Mike = 20 150

//create objects for each character

var walt = {
	hp: 120,
	attack: 8,
}

var gus = {
	hp: 180,
	attack: 25,
}

var jesse = {
	hp: 100,
	attack: 5,
}

var mike = {
	hp: 150,
	attack: 20,
}

var charSelected = false;

function displayHp() {

	$("#waltHp").html(walt.hp);
	$("#gusHp").html(gus.hp);
	$("#jesseHp").html(jesse.hp);
	$("#mikeHp").html(mike.hp);
}

displayHp();

//define what happens when user selects a player to use
$(".char").on("click", function() {
	if (this.id === "waltIcon") {
		if (charSelected === false) {
			$("#userChar").html("<div class='row'><img src='assets/images/walt.png'></div><div class='row'><p id='waltHp'></p><div>");
			$("#messageBox").html("<h3>Now select a character to fight!</h3");
			$("#waltIcon").hide("fast", function(){});
			displayHp();
		} else if (charSelected === true) {
			$("#compChar").html("<div class='row'><img src='assets/images/walt.png'></div><div class='row'><p id='waltHp'></p><div>");
			$("#messageBox").html("<h3>Hit Attack to fight!</h3>");
		}
	}

	if (this.id === "jesseIcon") {
		if (charSelected === false) {
			$("#userChar").html("<div class='row'><img src='assets/images/jesse.png'></div><div class='row'><p id='jesseHp'></p><div>");
			$("#messageBox").html("<h3>Now select a character to fight!</h3");
			$("#jesseIcon").hide("fast", function(){});
			displayHp();
		} else if (charSelected === true) {
			$("#compChar").html("<div class='row'><img src='assets/images/jesse.png'></div><div class='row'><p id='jesseHp'></p><div>");
			$("#messageBox").html("<h3>Hit Attack to fight!</h3>");
		}
	}

	if (this.id === "waltIcon") {
		if (charSelected === false) {
			$("#userChar").html("<div class='row'><img src='assets/images/gus.png'></div><div class='row'><p id='gusHp'></p><div>");
			$("#messageBox").html("<h3>Now select a character to fight!</h3");
			$("#gusIcon").hide("fast", function(){});
			displayHp();
		} else if (charSelected === true) {
			$("#compChar").html("<div class='row'><img src='assets/images/gus.png'></div><div class='row'><p id='gusHp'></p><div>");
			$("#messageBox").html("<h3>Hit Attack to fight!</h3>");
		}
	}

	if (this.id === "waltIcon") {
		if (charSelected === false) {
			$("#userChar").html("<div class='row'><img src='assets/images/mike.png'></div><div class='row'><p id='mikeHp'></p><div>");
			$("#messageBox").html("<h3>Now select a character to fight!</h3");
			$("#mikeIcon").hide("fast", function(){});
			displayHp();
		} else if (charSelected === true) {
			$("#compChar").html("<div class='row'><img src='assets/images/mike.png'></div><div class='row'><p id='mikeHp'></p><div>");
			$("#messageBox").html("<h3>Hit Attack to fight!</h3>");
		}
	}
});

//define what happens when user selects an opponent

//define what happens when attack is launched

//define what happens when user HP < 0

//define what happens when opponent HP < 0



