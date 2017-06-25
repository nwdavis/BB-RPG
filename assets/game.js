// Walter = 8 120
// Gus = 25 180
// Jesse = 5 100
// Mike = 20 150

//create objects for each character

var walt = {
	hp: 130,
	attack: 10,
}

var gus = {
	hp: 180,
	attack: 18,
}

var jesse = {
	hp: 120,
	attack: 8,
}

var mike = {
	hp: 140,
	attack: 10,
}

var userCharSelected = false;
var compCharSelected = false;

var user = {
	hp: 0,
	attack: 0,
};

var comp = {
	hp: 0,
	attack: 0,
};


$("#waltHp").html(walt.hp);
$("#gusHp").html(gus.hp);
$("#jesseHp").html(jesse.hp);
$("#mikeHp").html(mike.hp);




//define what happens when user selects a player to use
$(".char").on("click", function() {
	if (this.id === "waltIcon") {
		if (userCharSelected === false) {
			user.hp = walt.hp;
			user.attack = walt.attack;
			uA = walt.attack;
			userCharSelected = true;
			$("#userChar").html("<div><img src='assets/images/walt.png'></div>");
			$("#userHpTally").html("<p>" + user.hp + "</p>");
			$("#messageBox").html("<h3>Now select a character to fight!</h3");
			$("#waltIcon").hide("fast", function(){});
		} else if (userCharSelected === true && compCharSelected === false) {
			comp.hp = walt.hp;
			comp.attack = walt.attack;
			compCharSelected = true;
			$("#compChar").html("<div><img src='assets/images/walt.png'></div>");
			$("#compHpTally").html("<p>" + comp.hp + "</p>");
			$("#waltIcon").hide("fast", function(){});
			$("#messageBox").html("<h3>Hit Attack to fight!</h3>");
		}
	}

	if (this.id === "jesseIcon") {
		if (userCharSelected === false) {
			user.hp = jesse.hp;
			user.attack = jesse.attack;
			uA = jesse.attack;
			userCharSelected = true;
			$("#userChar").html("<div><img src='assets/images/jesse.png'></div>");
			$("#userHpTally").html("<p>" + user.hp + "</p>");
			$("#messageBox").html("<h3>Now select a character to fight!</h3");
			$("#jesseIcon").hide("fast", function(){});		
			
		} else if (userCharSelected === true && compCharSelected === false) {
			comp.hp = jesse.hp;
			comp.attack = jesse.attack;
			compCharSelected = true;
			$("#compChar").html("<div><img src='assets/images/jesse.png'></div>");
			$("#compHpTally").html("<p>" + comp.hp + "</p>");
			$("#jesseIcon").hide("fast", function(){});
			$("#messageBox").html("<h3>Hit Attack to fight!</h3>");
			
		}
	}

	if (this.id === "gusIcon") {
		if (userCharSelected === false) {
			user.hp = gus.hp;
			user.attack = gus.attack;
			uA = gus.attack;
			userCharSelected = true;
			$("#userChar").html("<div><img src='assets/images/gus.png'></div>");
			$("#userHpTally").html("<p>" + user.hp + "</p>");
			$("#messageBox").html("<h3>Now select a character to fight!</h3");
			$("#gusIcon").hide("fast", function(){});
			
			
		} else if (userCharSelected === true && compCharSelected === false) {
			comp.hp = gus.hp;
			comp.attack = gus.attack;
			compCharSelected = true;
			$("#compChar").html("<div><img src='assets/images/gus.png'></div>");
			$("#compHpTally").html("<p>" + comp.hp + "</p>");
			$("#gusIcon").hide("fast", function(){});
			$("#messageBox").html("<h3>Hit Attack to fight!</h3>");			
		}
	}

	if (this.id === "mikeIcon") {
		if (userCharSelected === false) {
			user.hp = mike.hp;
			user.attack = mike.attack;
			uA = mike.attack;
			userCharSelected = true;
			$("#userChar").html("<div><img src='assets/images/mike.png'></div>");
			$("#userHpTally").html("<p>" + user.hp + "</p>");
			$("#messageBox").html("<h3>Now select a character to fight!</h3");
			$("#mikeIcon").hide("fast", function(){});			
			
		} else if (userCharSelected === true && compCharSelected === false) {
			comp.hp = mike.hp;
			comp.attack = mike.attack;
			compCharSelected = true;
			$("#compChar").html("<div><img src='assets/images/mike.png'></div>");
			$("#compHpTally").html("<p>" + comp.hp + "</p>");
			$("#mikeIcon").hide("fast", function(){});
			$("#messageBox").html("<h3>Hit Attack to fight!</h3>");
			
		}
	}
});

var uA = user.attack

//define what happens when attack is launched

$("button").on("click", function(){

	if (userCharSelected === true && compCharSelected === true){
		$("#messageBox").html("<h3>You attacked for " + user.attack + " damage.</h3><h3>You took " + comp.attack + " damage.</h3>");
		comp.hp -= user.attack;
		user.hp -= comp.attack;
		user.attack = user.attack + uA;
		console.log(user.hp)
		console.log(comp.hp)
		console.log(user.attack)
		console.log(comp.attack)

		if (user.hp <= 0) {
			$("#messageBox").html("<h3>You Lose!</h3>");
			$("#userChar").hide("fast", function(){});
			$("#compChar").hide("fast", function(){});
			$("#userHpTally").hide("fast", function(){});
			$("#compHpTally").hide("fast", function(){});
			$(".char").hide("fast", function(){});
			$("button").hide("fast", function(){});
			$("#versus").hide("fast", function(){});
			user.hp = 0;
			return
		} else if (comp.hp <= 0) {
			$("#messageBox").html("<h3>You win! Pick another opponent!</h3>");
			comp.hp = 0;
			compCharSelected = false;
		}


		

		$("#userHpTally").html("<p>" + user.hp + "</p>");
		$("#compHpTally").html("<p>" + comp.hp + "</p>");

		} else {
			return
		}

});



