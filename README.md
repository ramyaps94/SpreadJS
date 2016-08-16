What is SpreadJS?
=====================

The SpreadJS product family are JavaScript spreadsheets and grid components that developers use to create data views, numerical models, forms, dashboards, and reports for the web. Spread.Sheets displays and manages data much like Microsoft Excel. Popular features include a formula engine, sorting, filtering, input controls, sparklines, and Excel input/output. 


Initialise Spread
====================

Step 1 : First we need to refer the dependency files in the header section.
		
		1. gcspread.sheets.9.40.20161.0.css
		2. gcspread.sheets.all.9.40.20161.0.min.js
		3. http://code.jquery.com/jquery-1.8.2.min.js 

Step 2 : Spread component (SpreadJS Component) can be initialised using the following function:
		
		new GcSpread.Sheets.Spread(document.getElementById('ss')), {SheetCount:1}

		Now Spread is added to the div with id ='ss'

