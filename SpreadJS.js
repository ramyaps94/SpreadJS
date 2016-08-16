var spread;
$(document).ready(function() {
	spread = new GcSpread.Sheets.Spread(document.getElementById('ss'));
	var spreadNS = GcSpread.Sheets;
	spread.setSheetCount(2);

	spread.bind(spreadNS.Events.ActiveSheetChanged, function(e,args) {
            $("#activeSheetIndex").val(spread.getActiveSheetIndex());
        });

	$("#btnAddSheet").click(function() {
		spread.addSheet(spread.getSheetCount());
	});

	$("#btnRemoveSheet").click(function() {
		var activeIndex = spread.getActiveSheetIndex();
		if(activeIndex >= 0) {
		spread.removeSheet(activeIndex);
		}
	});

	$("#btnClearSheets").click(function() {
		spread.clearSheets();
	});

	$("#btnSetActiveSheetIndex").click(function() {
		var index = $("#activeSheetIndex").val();
		if(!isNaN(index)) {
			index = parseInt(index);

			if(0 <= index && index < spread.getSheetCount())
				spread.setActiveSheetIndex(index);
		}
	});

});
	