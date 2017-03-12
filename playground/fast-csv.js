var fs = require('fs');
var csv = require('fast-csv');
var _ = require('underscore');

var stream = fs.createReadStream("file.csv");

var arr = [];
csv
	.fromStream(stream)
	.on("data", function(data){
		var line = data[0].split("\t");
		arr.push({date:line[0], amount:parseFloat(line[1]), billing_classification:line[2], customer_acct:line[3]});
		// console.log(arr);
	})
	.on("end", function(){
		// console.log(arr);
		var groups = _.groupBy(arr, 'customer_acct');
		console.log(groups);
	});