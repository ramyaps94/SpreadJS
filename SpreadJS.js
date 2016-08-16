var spread;
$(document).ready(function() {
	spread = new GcSpread.Sheets.Spread(document.getElementById('ss'));
	var spreadNS = GcSpread.Sheets;
	spread.setSheetCount(2);

	$("#btnAddSheet").click(function() {
		spread.addSheet(spread.getSheetCount());
	});

	$("#btnRemoveSheet").click(function() {
		spread.removeSheet(0);
	});

});
