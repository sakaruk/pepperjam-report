# Pepperjam report
Pepperjam Affiliate Network Reports.

	//Loading the modules
	var $pepperjamDetails = {
		apiVersion : '20120402',
		apiKey : 'b8f4768e2ac2ce07b11100b50463d70e2e008ab9e284de519b11b810ee081570'
	}
	var Pepperjam = require('./lib/pepperjam').Affiliate($pepperjamDetails)


	//Getting the report
	Pepperjam.Report({
		report : 'publisher/report/transaction-details',
		filters : {				
			startDate : '2016-01-01',
			endDate : '2016-07-13'
		}
	}, function(err,data) {
		console.log(err,data)
	})
	
# Filters
Check the parameters that can be passed through Report from https://classic.avantlink.com/affiliate/api_request_builder.php .  The parameters differ according to the module.
