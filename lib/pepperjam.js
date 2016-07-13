var request = require('request')

Affiliate = function($details) {
	this.details = $details
}

Affiliate.prototype.Report = function($params, cb ) {
    	$params.filters.apiKey = this.details.apiKey
	$params.filters.format = 'json'
	request({
		method: 'GET',
		url: "https://api.pepperjamnetwork.com/"+this.details.apiVersion+"/"+$params.report,
		qs: $params.filters,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	},function(err,res,body) {
		if (err)
			return cb(err)
                jsonData = JSON.parse(body)    
		cb(null, jsonData.data)
	})
}
module.exports =  {
	Affiliate: function($details) {
		return new Affiliate($details)
	}
}

