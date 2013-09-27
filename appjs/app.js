var itemList = new Array(
	new Item("Star Wars", "Episode 1", "1999", "Two Jedi Knights escape a hostile blokade...", "$22.00", "starwars.png"),
	new Item("Megaman", "NT", "2003", "Join Mega Man EXE by...", "$10.00", "megaman.png")
);
//Se ejecuta antes de que la pagina con el id search se llame.
$(document).on('pagebeforeshow', "#search", function( event, ui ) {
	var len = itemList.length;
	var list = $("#items-list");
	list.empty();
	var item;
	for (var i=0; i < len; ++i){
		item = itemList[i];
		list.append("<li><a href=\"details.html\">" + 
			"<img src="+ item.picture +">"+
			"<center>" +
			"<p>" + item.name + item.model + "</br>"+  item.year + "</br>"+ item.description + "</p>" + "</center>" +
			"<p class=\"ui-li-aside\">" + item.price + "</p>" +
			"</a></li>" 
			);
			
	}
	list.listview("refresh");
});

//<img src="generic_background.png" alt="" />